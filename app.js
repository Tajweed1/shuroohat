const $ = (selector,root=document) => root.querySelector(selector);
const $$ = (selector,root=document) => Array.from(root.querySelectorAll(selector));
const arabicNumber = value => String(value).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
const normalizeArabic = value => value.normalize('NFKC').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[إأآٱ]/g,'ا').replace(/ى/g,'ي').trim().toLowerCase();
const icon = id => {
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.classList.add('icon');svg.setAttribute('aria-hidden','true');
  const use=document.createElementNS('http://www.w3.org/2000/svg','use');
  use.setAttribute('href',`#i-${id}`);svg.append(use);return svg;
};

function setLevel(number,open){
  const level=$(`[data-level="${number}"]`);
  if(!level)return;
  $('.level-toggle',level).setAttribute('aria-expanded',String(open));
  $('.level-panel',level).hidden=!open;
  level.classList.toggle('is-open',open);
}
$$('.level-toggle').forEach(button=>button.addEventListener('click',()=>{
  const number=button.closest('.level').dataset.level;
  const shouldOpen=button.getAttribute('aria-expanded')!=='true';
  $$('.level').forEach(level=>setLevel(level.dataset.level,false));
  setLevel(number,shouldOpen);
}));
$$('[data-open-course]').forEach(link=>link.addEventListener('click',()=>{
  $$('.level').forEach(level=>setLevel(level.dataset.level,false));
  setLevel(link.dataset.openCourse,true);
}));
$('#start-learning').addEventListener('click',()=>{
  $$('.level').forEach(level=>setLevel(level.dataset.level,false));setLevel('1',true);
});

function showMissingLink(lesson,platform){
  const label=platform==='youtube'?'يوتيوب':'فيسبوك';
  $('#link-dialog-platform').textContent=`المشاهدة على ${label}`;
  $('#link-dialog-lesson').textContent=lesson.title;
  $('#link-dialog-message').textContent=`رابط هذا الدرس على ${label} غير متوفر حاليًا.`;
  $('#link-dialog-icon use').setAttribute('href',`#i-${platform}`);
  $('#link-dialog').showModal();
}
function isApprovedPlatformUrl(value,platform){
  if(!value)return false;
  try{
    const url=new URL(value);
    if(url.protocol!=='https:')return false;
    const host=url.hostname.toLowerCase();
    const allowed=platform==='youtube'?['youtube.com','youtu.be']:['facebook.com','fb.watch'];
    return allowed.some(domain=>host===domain||host.endsWith(`.${domain}`));
  }catch{return false;}
}
function getPlatformUrls(lesson,platform){
  return [...new Set((lesson[platform]||[]).filter(url=>isApprovedPlatformUrl(url,platform)))];
}
function showRecordings(lesson,platform,urls){
  const label=platform==='youtube'?'يوتيوب':'فيسبوك';
  $('#recordings-dialog-platform').textContent=`التسجيلات على ${label}`;
  $('#recordings-dialog-lesson').textContent=lesson.title;
  const list=$('#recording-options');list.replaceChildren();
  urls.forEach((url,index)=>{
    const link=document.createElement('a');
    link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.className='recording-option';
    link.append(icon(platform),document.createTextNode(`التسجيل ${arabicNumber(index+1)}`),icon('external'));list.append(link);
  });
  $('#recordings-dialog').showModal();
}
function platformButton(lesson,platform){
  const urls=getPlatformUrls(lesson,platform);
  const button=document.createElement(urls.length===1?'a':'button');
  button.className=`platform-button ${platform}${urls.length?'':' unavailable'}`;
  const label=platform==='youtube'?'يوتيوب':'فيسبوك';
  button.setAttribute('aria-label',`${label}: ${lesson.title}${urls.length===1?'، يفتح في نافذة جديدة':urls.length>1?'، اختر التسجيل':'، غير متوفر'}`);
  if(urls.length===1){button.href=urls[0];button.target='_blank';button.rel='noopener noreferrer';}
  else{
    button.type='button';button.title=urls.length>1?'اختر التسجيل':'غير متوفر';
    button.addEventListener('click',()=>urls.length>1?showRecordings(lesson,platform,urls):showMissingLink(lesson,platform));
  }
  button.append(icon(platform),document.createTextNode(label));
  if(urls.length>1){const count=document.createElement('span');count.className='recording-count';count.textContent=arabicNumber(urls.length);button.append(count);}
  return button;
}
function filterCatalog(group,query){
  const normalized=normalizeArabic(query);let number=0;
  return group.chapters.map(chapter=>({title:chapter.title,
    items:chapter.items.map(lesson=>({...lesson,number:++number})).filter(lesson=>
      normalizeArabic(`${chapter.title} ${lesson.title} ${lesson.description}`).includes(normalized)
    )
  })).filter(chapter=>chapter.items.length);
}
function lessonRow(lesson){
  const item=document.createElement('article');item.className='lesson lecture';
  const number=document.createElement('span');number.className='lesson-index';number.textContent=arabicNumber(String(lesson.number).padStart(2,'0'));
  const content=document.createElement('div');content.className='lesson-content';
  const heading=document.createElement('div');heading.className='lesson-title-line';
  const title=document.createElement('h6');title.textContent=lesson.title;heading.append(title);
  if(lesson.page!==null){
    const page=document.createElement('span');page.className='lesson-page';page.textContent=`ص ${arabicNumber(lesson.page)}`;
    page.setAttribute('aria-label',`الصفحة ${arabicNumber(lesson.page)}`);heading.append(page);
  }
  content.append(heading);
  if(lesson.description){const description=document.createElement('p');description.className='lesson-description';description.textContent=lesson.description;content.append(description);}
  const actions=document.createElement('div');actions.className='lesson-actions';actions.append(platformButton(lesson,'youtube'),platformButton(lesson,'facebook'));
  item.append(number,content,actions);return item;
}
function renderLessons(groupId){
  const group=courseCatalog[groupId];const query=$(`#lesson-search-${groupId}`).value;
  const chapters=filterCatalog(group,query);const list=$(`#lessons-list-${groupId}`);list.replaceChildren();
  for(const chapter of chapters){
    const section=document.createElement('section');section.className='catalog-chapter';
    if(chapter.title){const heading=document.createElement('h5');heading.className='chapter-title';heading.textContent=chapter.title;section.append(heading);}
    for(const lesson of chapter.items)section.append(lessonRow(lesson));
    list.append(section);
  }
  const found=chapters.reduce((sum,chapter)=>sum+chapter.items.length,0);
  const total=group.chapters.reduce((sum,chapter)=>sum+chapter.items.length,0);
  $(`#lesson-count-${groupId}`).textContent=normalizeArabic(query)?`${arabicNumber(found)} من ${arabicNumber(total)}`:`${arabicNumber(total)} ${total>=3&&total<=10?'محاضرات':'محاضرة'}`;
  $(`#search-empty-${groupId}`).hidden=found>0;
}
$$('[data-lesson-search]').forEach(input=>input.addEventListener('input',()=>renderLessons(input.dataset.lessonSearch)));
$$('[data-clear-search]').forEach(button=>button.addEventListener('click',()=>{
  const groupId=button.dataset.clearSearch;const input=$(`#lesson-search-${groupId}`);input.value='';renderLessons(groupId);input.focus();
}));
$$('[data-open-book]').forEach(button=>button.addEventListener('click',()=>$('#book-dialog').showModal()));
$$('[data-close-dialog]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
$$('dialog').forEach(dialog=>{
  dialog.addEventListener('click',event=>{
    const rect=dialog.getBoundingClientRect();
    if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();
  });
});
const menuButton=$('.mobile-menu-button');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','فتح قائمة التنقل');$('#mobile-nav').hidden=true;}
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'إغلاق قائمة التنقل':'فتح قائمة التنقل');$('#mobile-nav').hidden=!open;
});
$$('#mobile-nav a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>720)closeMenu();});
Object.keys(courseCatalog).forEach(renderLessons);
