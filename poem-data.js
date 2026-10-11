/* Names, order and the two platform URLs come directly from the user message. */
function poemLecture(recording,title,youtube,facebook){
  if(sourceVideos[recording])throw new Error('Duplicate recording key');
  sourceVideos[recording]={youtube:youtube?[youtube]:[],facebook:facebook?[facebook]:[]};
  return messageLecture(recording,title);
}
courseCatalog.tuhfa={title:"شرح منظومة تحفة الأطفال",chapters:[{title:"",items:[
  poemLecture("tuhfa-01","شرح منظومة تحفة الأطفال: المقدمة","https://youtu.be/k3KU_iTfplE?si=LFjaZtEZix4TRAC_","https://www.facebook.com/share/v/19qD8s3v3g/?mibextid=wwXIfr"),
  poemLecture("tuhfa-02","شرح تحفة الأطفال: الاستعاذة والبسملة","https://youtu.be/RTiQqK92QFM?si=s-c13KJ1aFT3awrh","https://www.facebook.com/share/v/1BQjkzkdjY/?mibextid=wwXIfr"),
  poemLecture("tuhfa-03","شرح تحفة الأطفال: الاظهار الحلقي","https://www.youtube.com/live/dPPyWy8A5e4?si=RiXs2TVlhGAWAMJh","https://www.facebook.com/share/v/1QVv4sf7ij/?mibextid=wwXIfr"),
  poemLecture("tuhfa-04","شرح تحفة الأطفال: أحكام النون الساكنة. الادغام","https://www.youtube.com/live/jnUTEBd364M?si=nSf2DmunwV1XPvcN","https://www.facebook.com/share/v/1BAPXBAisR/?mibextid=wwXIfr"),
  poemLecture("tuhfa-05","شرح تحفة الأطفال: الاخفاء الحقيقي والاقلاب","https://www.youtube.com/live/LBMj-B_1rXI?si=tnDx1dqnBmdIHuIV","https://www.facebook.com/share/v/19oduEuKUC/?mibextid=wwXIfr"),
  poemLecture("tuhfa-06","شرح تحفة الأطفال اللامات الساكنة.","https://www.youtube.com/live/9emRB4agBkA?si=nrrHoyYfbMTXqWSl","https://www.facebook.com/share/v/17DfLTfmzo/?mibextid=wwXIfr"),
  poemLecture("tuhfa-07","شرح تحفة الأطفال: المتماثلان واقسامه.","https://youtu.be/35c412qJk4A?si=AUPu_ZYyYiF-rQQo","https://www.facebook.com/share/v/1FvzNuKiDt/?mibextid=wwXIfr"),
  poemLecture("tuhfa-08","شرح تحفة الأطفال: المتجانسان والمتقاربان","https://youtu.be/Ty4WLuCg8KU?si=v1dKf8IFSvhN7GcO","https://www.facebook.com/share/v/1JVt4rKNvH/?mibextid=wwXIfr"),
  poemLecture("tuhfa-09","شرح تحفة الأطفال : المتباعدان","https://youtu.be/eDIziAQF_UU?si=WUs08qpklQuxkktN","https://www.facebook.com/share/v/17gyE9wcV5/?mibextid=wwXIfr"),
  poemLecture("tuhfa-10","شرح تحفة الأطفال : المد الطبيعي.","https://youtu.be/AZaXA-EeCGI?si=4TUfDKtRlL7FZ2zG","https://www.facebook.com/share/v/16kQQ5Gzen/?mibextid=wwXIfr"),
  poemLecture("tuhfa-11","شرح تحفة الأطفال: المد الفرعي","https://youtu.be/JDqFJEi0_9I?si=CpJ8oUqDN-WhNbc_","https://www.facebook.com/share/v/1BmvaaESkD/?mibextid=wwXIfr"),
  poemLecture("tuhfa-12","شرح منظومة تحفة الأطفال : المد العارض للسكون","https://youtu.be/2CJMj6QvWyg?si=MdxeqCyK4oZTyuSg","https://www.facebook.com/share/v/1DiAgKeEy5/"),
  poemLecture("tuhfa-13","شرح تحفة الأطفال : المد اللازم","https://youtu.be/_m_o_NGpdrQ?si=cOYBZXJDBOVnUgp8","https://www.facebook.com/share/v/1Aj3vKVkGk/"),
  poemLecture("tuhfa-14","شرح منظومة تحفة الأطفال: مراتب المدود وخاتمة النظم.","https://youtu.be/JCd2dNPznI4?si=X7_J8xSRYfBBaAk4","https://www.facebook.com/share/v/1Coq6h5fjv/")
]}]};
courseCatalog.jazariyya={title:"شرح منظومة المقدمة الجزرية",chapters:[{title:"",items:[
  poemLecture("jazariyya-01","شرح منظومة المقدمة الجزرية: المقدمة ج1","https://youtu.be/nPLmsJ0QMvo?si=P3e0DhNeQfG4zkSa","https://www.facebook.com/share/v/1AE1tXfi6v/?mibextid=wwXIfr"),
  poemLecture("jazariyya-02","شرح منظومة المقدمة الجزرية: المقدمة ج2","https://youtu.be/-3ZiYRHjWzc?si=38oF6z29OpZzhH1v","https://www.facebook.com/share/v/1BjuFv4Mde/?mibextid=wwXIfr"),
  poemLecture("jazariyya-03","شرح منظومة المقدمة الجزرية: الحروف الأصلية والفرعية","https://youtu.be/pRe96cAK6jg?si=EoJsmIK1I01uTzS5","https://www.facebook.com/share/v/1DH2bL2fwU/?mibextid=wwXIfr"),
  poemLecture("jazariyya-04","شرح منظومة المقدمة الجزرية: مخارج الحروف","https://youtu.be/VVyvNtXMXPI?si=eUd2Dem0_GZ6l9g3","https://www.facebook.com/share/v/1JqXK9LDPJ/?mibextid=wwXIfr"),
  poemLecture("jazariyya-05","المقدمة الجزرية: الصفات التي لها ضد","https://youtu.be/XYIrhVWEfyE?si=7DEh9LGUb0lZ8xAm","https://www.facebook.com/share/v/1KVDDpcdeT/?mibextid=wwXIfr"),
  poemLecture("jazariyya-06","شرح المقدمة الجزرية: الصفات  التي لا ضد لها.","https://youtu.be/9pG_DMAhfhw?si=TwsQkEVliAxQmi2L","https://www.facebook.com/share/v/1AY6v6zw9B/?mibextid=wwXIfr"),
  poemLecture("jazariyya-07","المقدمة الجزرية باب التجويد","https://youtu.be/l2nVG_D34qs?si=coSckguYlLKwNWwD","https://www.facebook.com/share/v/1DUJZKKX8r/?mibextid=wwXIfr"),
  poemLecture("jazariyya-08","شرح الجزرية : التفخيم والترقيق","https://youtu.be/L3MUesg91pA?si=cViU0NgYW696C3uU","https://www.facebook.com/share/v/18BHhvfg3k/?mibextid=wwXIfr"),
  poemLecture("jazariyya-09","شرح الجزرية : باب في ذكر بعض التنبيهات","https://youtu.be/jSGmatP0EX4?si=tV9QEjtnDsO2q-Xo","https://www.facebook.com/share/v/1AgDzkaNRt/?mibextid=wwXIfr"),
  poemLecture("jazariyya-10","شرح الجزرية : باب اللامات الساكنة","https://youtu.be/EMgD6TYUb6k?si=0Xd4sqM5F2rF50e4","https://www.facebook.com/share/v/1aWevsWniE/?mibextid=wwXIfr"),
  poemLecture("jazariyya-11","شرح الجزرية: المثلان والمتجانسان والمتقاربان","https://youtu.be/7y4UhdEJmkY?si=loYenj_ftP1tSw58","https://www.facebook.com/share/v/1CHS2jWiUD/?mibextid=wwXIfr"),
  poemLecture("jazariyya-12","شرح الجزرية: باب الضاد والظاء","https://youtu.be/Rd1tJWEkAqo?si=O2rYo6z_tAEvwTve","https://www.facebook.com/share/v/1KRbor6QRg/?mibextid=wwXIfr"),
  poemLecture("jazariyya-13","شرح الجزرية: الميم الساكنة ومراتب الغنة","https://youtu.be/nesO8Q_bmOM?si=OBDeunpIorLVOu5z","https://www.facebook.com/share/v/18YWLTNDHM/?mibextid=wwXIfr"),
  poemLecture("jazariyya-14","شرح المقدمة الجزرية: الاظهار والادغام.","https://youtu.be/2Sg-pUfSqqM?si=-VZnb9R3HTYOGYCW","https://www.facebook.com/share/v/1AE85vjEEM/?mibextid=wwXIfr"),
  poemLecture("jazariyya-15","شرح المقدمة الجزرية: الاقلاب والاخفاء الحقيقي","https://youtu.be/vp7aIL8-_vg?si=nyy1QnHENnZa0VIz","https://www.facebook.com/share/v/1bZ6iH5Evd/?mibextid=wwXIfr"),
  poemLecture("jazariyya-16","شرح المقدمة الجزرية: المد بسبب الهمز","https://youtu.be/Mwz4RK8fkKw?si=KbHDdCe3PlIkt5Y4","https://www.facebook.com/share/v/1H2dpmgQqG/?mibextid=wwXIfr"),
  poemLecture("jazariyya-17","شرح الجزرية: المد بسبب السكون.","https://youtu.be/pDuIUKSJc-E?si=rpMyrQlpxwXcIXs5","https://www.facebook.com/share/v/1L2ijqbQrN/?mibextid=wwXIfr"),
  poemLecture("jazariyya-18","شرح الجزرية: مد الفرق ومراتب المدود","https://youtu.be/pFE6t14fI-g?si=vncqH21UCp9UP-In","https://www.facebook.com/share/v/1HF86YHj72/?mibextid=wwXIfr"),
  poemLecture("jazariyya-19","شرح الجزرية: السكت والقطع والوقف","https://youtu.be/IyWhXqeTn74?si=NYP91HhiK5BHM4m5","https://www.facebook.com/share/v/1D6gLyT89B/?mibextid=wwXIfr"),
  poemLecture("jazariyya-20","شرح الجزرية: أنواع الابتداء.","https://youtu.be/E1q7hCo7Hto?si=dm390VExTP-JG4RE","https://www.facebook.com/share/v/19Cxdi2kZj/?mibextid=wwXIfr"),
  poemLecture("jazariyya-21","شرح الجزرية: المقطوع والموصول ج١","https://youtu.be/4y6Mvjmfbwc?si=-kFm2NMX4SS0bqHt","https://www.facebook.com/share/v/1DiMc8zXTU/?mibextid=wwXIfr"),
  poemLecture("jazariyya-22","شرح المقدمة الجزرية المقطوع والموصول ج٢","https://youtu.be/djbK7pPGBzs?si=dayy4UtadF-00fE2","https://www.facebook.com/share/v/1Dp946UFok/?mibextid=wwXIfr"),
  poemLecture("jazariyya-23","شرح المقدمة الجزرية: المقطوع والموصول ج٣","https://youtu.be/ypH5Iibnfmc?si=DV2vY2qjqq2PNYK3","https://www.facebook.com/share/v/18yb39awa1/?mibextid=wwXIfr"),
  poemLecture("jazariyya-24","شرح الجزرية: باب التاءات","https://youtu.be/z3BuAwk4dzc?si=J0oGzp0PMRyL096r","https://www.facebook.com/share/v/193DDxz3CW/?mibextid=wwXIfr"),
  poemLecture("jazariyya-25","شرح الجزرية: باب همز الوصل","https://youtu.be/IHupVlh01_g","https://www.facebook.com/share/v/1Robbdw47q/")
]}]};
