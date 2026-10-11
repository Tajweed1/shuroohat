/* Book index: level/chapter placement. User message: exact lecture blocks and URLs. */
const sourceVideos = {
  basmala:{youtube:['https://www.youtube.com/live/WTYL9yr-eg0?si=iVbr6dtg1iltDSto']},
  hafsSanad:{facebook:['https://fb.watch/u0gqlYcilF/']},
  noonIntro:{facebook:['https://www.facebook.com/share/v/BzHjXgRsBj5PNdWJ/?mibextid=oFDknk']},
  izhar:{facebook:['https://www.facebook.com/share/v/PZgs8pXeAwSXgrYc/?mibextid=oFDknk']},
  idgham:{facebook:['https://www.facebook.com/share/v/qGGrigwd8VmyJnMe/?mibextid=oFDknk']},
  ikhfa:{facebook:['https://www.facebook.com/share/p/tzoCEYfnZhQJ9D1R/?mibextid=oFDknk']},
  ghunna:{youtube:['https://www.youtube.com/live/gap73cLjzX8?si=Uz5itNv4fmvzuqGu']},
  sila:{facebook:['https://www.facebook.com/share/v/NqzUB2JEVGvTPTiR/']},
  badal:{youtube:['https://www.youtube.com/live/sYnMQ8eyrL8?si=YJVcy7zPzDy-9_iQ']},
  lazim:{facebook:['https://www.facebook.com/share/v/ADi1aQGpiQqbVdWX/']},
  farq:{youtube:['https://youtu.be/eW-z_1CiJhA'],facebook:['https://www.facebook.com/share/v/247wTwoRB7eBasvw/']},
  maddRanks:{youtube:['https://youtu.be/7QlS22fl_pI'],facebook:['https://www.facebook.com/share/v/18zgMJ9Vnk/']},
  letters:{youtube:['https://youtu.be/CBKWxz6JlxE'],facebook:['https://www.facebook.com/share/v/14fqUG1atH/']},
  makharij:{youtube:['https://youtu.be/lUGYJbNJjxY'],facebook:['https://www.facebook.com/share/v/12D1MVQh8xD/']},
  sifatOpposite:{youtube:['https://www.youtube.com/live/J-WojjiKrVc?feature=shared'],facebook:['https://www.facebook.com/share/v/19VLBtGUNi/']},
  sifatSingle:{youtube:['https://youtu.be/ODmkiTtIgs0'],facebook:['https://www.facebook.com/share/v/1As5VPEicE/']},
  sifatPractice1:{youtube:['https://www.youtube.com/live/mLVyLKxImF4?si=WbJSXceQ2TSKYi4W'],facebook:['https://www.facebook.com/share/v/1GiyFEr8me/']},
  sifatPractice2:{youtube:['https://youtu.be/lrHa5TA_Ei0'],facebook:['https://www.facebook.com/share/v/15YJvhgjjL/']},
  tafkhimFamily:{youtube:['https://youtu.be/dXYqaJ-nTQM'],facebook:['https://www.facebook.com/share/v/1JtdrXCd7V/?mibextid=qi2Omg']},
  raa:{facebook:['https://www.facebook.com/share/v/1AqjSnsCE6/']},
  mithlan:{youtube:['https://youtu.be/8Us_fhaqqvc?si=sCvSZA5I35whf59c'],facebook:['https://www.facebook.com/share/v/1L8kHxVjxd/']},
  mutajanisan:{youtube:['https://youtu.be/wVmxgj3ApqE?si=gGtE-aD_-SsFa1l0'],facebook:['https://www.facebook.com/share/v/15AMa1yiWB/']},
  mutaqariban:{youtube:['https://youtu.be/B7NayqOVHyo?si=Xp3xd_3ZOaTrqNf8'],facebook:['https://www.facebook.com/share/v/1CQHbR1Jha/']},
  mutabaidan:{youtube:['https://youtu.be/HoeTOW20usY?si=tonO2ZFI_59mgnuo'],facebook:['https://www.facebook.com/share/v/17hvYzaFGM/','https://fb.watch/xC-RK44eVd/']},
  lamNoun:{youtube:['https://youtu.be/gcVb2XHp3jU?si=Z_7E_a9pi1rM4PY5'],facebook:['https://www.facebook.com/share/v/1DQULeTkjz/']},
  lamOthers:{youtube:['https://youtu.be/KHZp9sPzTXU?si=iCwrPGsxotSfDJ_Z'],facebook:['https://www.facebook.com/share/v/1FE2wuaxyp/']},
  hamza:{youtube:['https://youtu.be/8HAyZvMfCi8?si=tj7vj_aUmOxVKT55'],facebook:['https://www.facebook.com/share/v/1BBWLLNJUM/']},
  beginning2:{youtube:['https://www.youtube.com/live/lh79arhY5o8?si=I2WNmtYVubEvxIfp'],facebook:['https://www.facebook.com/share/v/154oFUenDp/']},
  waqf1:{youtube:['https://www.youtube.com/live/XxSwtRIAOT0?si=XjMhWDuXR8D1Qv15'],facebook:['https://www.facebook.com/share/v/1BXHqkHnuL/']},
  waqfTypes:{youtube:['https://www.youtube.com/live/TwAAYJTxDgY?si=xP4TbH6LIP-9eGA3'],facebook:['https://www.facebook.com/share/v/19CXXpMmvP/']},
  rawm:{youtube:['https://www.youtube.com/live/KhuISZjmYP0?si=TnoOwQ9ivbh5k-8c'],facebook:['https://www.facebook.com/share/v/15bPLQ1DTV/']},
  rawmPractice:{youtube:['https://youtu.be/KKJqAd0UzQo?si=7ppCA3WdQfMWj4Gh'],facebook:['https://www.facebook.com/share/v/158Bjv38cK/']},
  maqtu1:{youtube:['https://www.youtube.com/live/iBfPn_ofBiw?si=61lSjgq5ck3RKRKH'],facebook:['https://www.facebook.com/share/v/1CbRVbdsCQ/']},
  maqtu2:{youtube:['https://youtu.be/aydlw7YCYnw?si=WNLOczCQ1cVIXEc-'],facebook:['https://www.facebook.com/share/v/1FUVMxEETH/']},
  taa:{youtube:['https://youtu.be/VbtguZFkTe0?si=smdiuN9KgrpeRoQN'],facebook:['https://www.facebook.com/share/v/16MxLsvgT9/']},
  ithbat:{youtube:['https://youtu.be/4QS3tTSCO1Q?si=bDkeMlXDHvDl3B3s'],facebook:['https://www.facebook.com/share/v/16Upw1Y77P/']},
  ijazah:{youtube:['https://youtu.be/Pwa5iE2xgXU?si=SOOT0nG-h4Wul_sj'],facebook:['https://www.facebook.com/share/v/1Br9ZmbHuB/']},
  words1:{youtube:['https://youtu.be/o0V4YJDjZbc?si=7EB_QF5HNg0EivHG'],facebook:['https://www.facebook.com/share/v/1AJYhkqXgM/']},
  words2:{youtube:['https://youtu.be/zWfiAuz8ErI'],facebook:['https://www.facebook.com/share/v/16DKfcKLgf/']},
  words3:{youtube:['https://youtu.be/trDmM5bpkPg?si=jbHzT7Gel3Xso49K'],facebook:['https://www.facebook.com/share/v/1CYVpuPBUr/']},
  letterScales:{youtube:['https://youtu.be/_LwOsB59hEo?si=GwUAcRwuKCYrEdp8'],facebook:['https://www.facebook.com/share/v/16pP2peTgY/']},
  qiraatHistory1:{youtube:['https://youtu.be/8Zrm5BsuC6U?si=AwuenRTxBBVBB0rL'],facebook:['https://www.facebook.com/share/v/1AuAWQKmBD/']},
  qiraatHistory2:{youtube:['https://youtu.be/mH9jVSYCpJU?si=f9BKRMIco-CTivAG'],facebook:['https://www.facebook.com/share/v/19KVgXnad3/']},
  qiraatPractice1:{youtube:['https://youtu.be/r8WG6GQktbQ?si=OuOuy_IhUDUNNGS4'],facebook:['https://www.facebook.com/share/v/14DmYuW1KqX/']},
  qiraatPractice2:{youtube:['https://youtu.be/Q9XkMAzrOe4?si=8SSR5kNqPqKxFbqL'],facebook:['https://www.facebook.com/share/v/19NKVsbPJN/?mibextid=wwXIfr']},
  mushafHistory:{youtube:['https://youtu.be/xnDn7ai5Sxc?si=_rx9nd0JrhnAq3zL'],facebook:['https://www.facebook.com/share/v/1DZiycg6Dj/']}
};

function messageLecture(recording,text){
  const links=recording?sourceVideos[recording]:{};
  if(!links)throw new Error(`Unknown recording: ${recording}`);
  return {title:text,page:null,recording,description:'',youtube:links.youtube||[],facebook:links.facebook||[]};
}

/* Each block contains all message topics covered by one recording, followed by its platform links. */
const courseCatalog = {
  "1":{title:"المستوى الأول",chapters:[
    {title:"الباب الأول: مدخل إلى علم التجويد",items:[
      messageLecture("basmala","اول درس تم تسجيله : البسملة")
    ]},
    {title:"الباب الثاني: أحكام النون الساكنة والتنوين",items:[
      messageLecture("noonIntro","أولًا: التعريف بالنون الساكنة والتنوين"),
      messageLecture("izhar","ثانيًا: أحكام النون الساكنة والتنوين\nالإظهار الحلقي"),
      messageLecture("idgham","الإدغام"),
      messageLecture("ikhfa","الإقلاب\nالإخفاء الحقيقي")
    ]},
    {title:"الباب الثالث: أحكام الميم الساكنة، والنون والميم المشددتين والغنة",items:[
      messageLecture("ghunna","أولًا: أحكام الميم الساكنة\nالإخفاء الشفوي\nالإدغام الشفوي\nالإظهار الشفوي\n\nثانيًا: النون والميم المشددتان\nثالثًا: الغنة ومراتبها")
    ]},
  ]},
  "2":{title:"المستوى الثاني",chapters:[
    {title:"الباب الأول: المد أحكامه وأنواعه",items:[
      messageLecture("sila","أولًا:\n- المد الأصلي (الطبيعي)\n- المدود الملحقة بالمد الأصلي\n1- مد التمكين\n2- مد العوض\n3- هاء الكناية - مد الصلة"),
      messageLecture("badal","ثانيًا: المد الفرعي\nأ – بسبب الهمز\n1- المد الواجب المتصل\n2- المد الجائز المنفصل\n3- مد البدل"),
      messageLecture("lazim","ب- المد الفرعي بسبب السكون\n1- المد العارض للسكون\n2- مد اللين\n3- المد الفرعي بسبب السكون الأصلي\nأولًا: المد اللازم الكلمي\nثانيًا: المد اللازم الحرفي"),
      messageLecture("farq","ج- مد الفرق"),
      messageLecture("maddRanks","- مراتب المدود")
    ]},
    {title:"الباب الثاني: الحروف وأقسامها ومخارجها وألقابها",items:[
      messageLecture("letters","الحروف وأقسامها (الحروف الاصلية والفرعية )"),
      messageLecture("makharij","مذاهب العلماء في عدد مخارج الحروف\nمخارج الحروف\nالمخرج الأول: الجوف\nالمخرج الثاني: الحلق\nالمخرج الثالث: اللسان\nالمخرج الرابع: الشفتان\nالمخرج الخامس: الخيشوم\nألقاب الحروف")
    ]},
    {title:"الباب الثالث: صفات الحروف",items:[
      messageLecture("sifatOpposite","صفات الحروف\nصفات الحروف اللازمة ذوات الأضداد"),
      messageLecture("sifatSingle","صفات الحروف التي لا ضد لها"),
      messageLecture("sifatPractice1","الحروف الهجائية تطبيقات على المخارج والصفات ج 1"),
      messageLecture("sifatPractice2","الحروف الهجائية تطبيقات على المخارج والصفات ج 2")
    ]},
    {title:"الباب الرابع: التفخيم والترقيق",items:[
      messageLecture("tafkhimFamily","أقسام الحروف بحسب تفخيمها وترقيقها\nالأحرف المفخمة دائما\nمراتب التفخيم\nأحرف ترقق أحيانا وتفخم أحيانا أخرىٰ\nالألف المدية ، اللام من اسم الجلالة، الغنة"),
      messageLecture("raa","أحكام الراء تفخيما وترقيقا")
    ]},
  ]},
  "3":{title:"المستوى الثالث",chapters:[
    {title:"الباب الأول: الإظهار والإدغام بين الحروف",items:[
      messageLecture("mithlan","علاقة الحروف ببعضها\nالمتماثلان"),
      messageLecture("mutajanisan","المتجانسان"),
      messageLecture("mutaqariban","المتقاربان"),
      messageLecture("mutabaidan","المتباعدان")
    ]},
    {title:"الباب الثاني: اللامات الساكنة",items:[
      messageLecture("lamNoun","اللام الاسمية\nأحكام اللام الساكنة : اللام الاسمية."),
      messageLecture("lamOthers","أحكام اللام الساكنة: اللام الفعلية والحرفية ولام الأمر")
    ]},
    {title:"الباب الثالث: البدء بالكلمة",items:[
      messageLecture("hamza","همزة القطع وهمزة الوصل"),
      messageLecture("beginning2","إذا اجتمعت همزة الاستفهام مع همزة الوصل في كلمة (فعل) 205\nكلمة الأيكة 206\nالاسم 207\nالتقاء الساكنين\nالابتداء بالكلمة: الجزء الثاني")
    ]},
    {title:"الباب الرابع: الوقف والابتداء",items:[
      messageLecture("waqf1","الوقف والابتداء\nالسكت\nالقطع\nأنواع الوقف\nالوقف الاضطراري\nالوقف الاختباري\nالوقف الانتظاري\nالوقف الاختياري\nالوقف والابتداء: الجزء الأول."),
      messageLecture("waqfTypes","أنواع الوقف الاختياري\nالابتداء وأنواعه\nالوقف الاختياري وأنواعه."),
      messageLecture("rawm","كيفية الوقف على الكلمة\nالروم والإشمام\nالفرق بين الروم والإشمام\nأوجه الوقف على الكلمة\nالحالات التي لا يدخلها روم أو إشمام\nالروم والاشمام"),
      messageLecture("rawmPractice","تطبيقات على الروم والاشمام")
    ]},
  ]},
  "ijazah":{title:"متطلّب الإجازة",chapters:[
    {title:"الباب الأول: تعريف الإجازة وأنواعها",items:[
      messageLecture("ijazah","تعريف الاجازة. ثم انفرادات رواية حفص."),
      messageLecture("hafsSanad","مراتب التلاوة\nاسناد رواية حفص"),
      messageLecture("words1","كلمات تنبه عليها لجنة دور القران ج 1"),
      messageLecture("words2","كلمات تنبه عليها لجنة دور القران ج 2"),
      messageLecture("words3","كلمات تنبه عليها لجنة دور القران الكريم ج 3"),
      messageLecture("letterScales","موازين الحروف"),
      messageLecture("qiraatHistory1","نشأة القراءات ج 1"),
      messageLecture("qiraatHistory2","نشأة القراءات ج 2"),
      messageLecture("qiraatPractice1","تطبيقات على القراءات ج 1"),
      messageLecture("qiraatPractice2","تطبيقات على القراءات ج 2"),
      messageLecture("mushafHistory","تاريخ كتابة المصحف الشريف")
    ]},
    {title:"الباب الثاني: المقطوع والموصول",items:[
      messageLecture("maqtu1","المقطوع والموصول من المقدمة الجزرية\nالمقطوع والموصول ج 1"),
      messageLecture("maqtu2","القطع والوصل من غير المقدمة الجزرية\nالمقطوع والموصول ج 2")
    ]},
    {title:"الباب الثالث: هاء التأنيث وتاء التأنيث",items:[
      messageLecture("taa","هاء التأنيث وتاء التأنيث\nما اتفق القراء علىٰ قراءته بالإفراد\nما اختلف القراء علىٰ قراءته بين الإفراد والجمع\nتاء التانيث وهاء التانيث")
    ]},
    {title:"الباب الرابع: الإثبات والحذف",items:[
      messageLecture("ithbat","الإثبات والحذف\nالألف\nالواو المدية\nالياء المدية\nالحذف والاثبات")
    ]},
  ]},
};
