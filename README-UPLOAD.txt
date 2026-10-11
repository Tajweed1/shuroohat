طريقة تحديث الموقع على GitHub Pages

الرابط الرسمي: https://tajweed1.github.io/shuroohat/

1. فك ضغط هذه الحزمة.
2. افتح https://github.com/Tajweed1/shuroohat
3. اضغط Add file ثم Upload files.
4. ارفع محتويات الحزمة بما فيها مجلد assets كاملًا. يجب أن يكون index.html في جذر المستودع.
5. اضغط Commit changes. الملفات ذات الأسماء المطابقة تستبدل النسخة السابقة.
6. انتظر اكتمال GitHub Pages من تبويب Actions، ثم افتح الموقع وحدّث الصفحة.

الإضافات الجاهزة:
- عنوان ووصف لمحركات البحث والرابط الأساسي canonical.
- صورة مشاركة الرابط في assets/social-preview.jpg ووسوم Open Graph وTwitter.
- الدروس الـ96 مكتوبة داخل HTML مع بقاء البحث والقوائم والتقسيم كما هي.
- خريطة الموقع: https://tajweed1.github.io/shuroohat/sitemap.xml
- بيانات منظمة لتعريف الموقع والشيخ.
- غلافا تحفة الأطفال والجزرية بصيغة WebP وبالأبعاد الأصلية.

ربط Google Analytics:
- معرّف القياس G-GNNDTTNJ9T مضاف في site-config.js.
- ملفات الربط جاهزة. يبدأ إرسال البيانات عند نشر هذه الحزمة على الموقع.
- لا تضف مقتطف Google tag آخر؛ الحزمة تتضمن الربط بالفعل.
- بعد اكتمال نشر GitHub Pages، افتح الموقع ثم راجع تقرير الوقت الفعلي في Google Analytics.
- يمكنك أيضًا الضغط على Test installation في نافذة إعداد Google tag للتحقق من التثبيت.
- الأحداث المضافة هي open_course وclick_lesson وopen_book_pdf.
- ضغط رابط الفيديو لا يعني مشاهدة الفيديو كاملًا في يوتيوب أو فيسبوك.

إضافة الموقع إلى Google:
- افتح https://search.google.com/search-console/
- أضف URL prefix بالقيمة https://tajweed1.github.io/shuroohat/
- تحقّق من الملكية بإحدى الطرق التي يقترحها Google.
- من Sitemaps أرسل sitemap.xml. هذه الإضافات تسهّل الفهرسة ولا تضمن ترتيبًا محددًا.
- robots.txt، إن احتجته لاحقًا، يوضع في جذر النطاق tajweed1.github.io؛ وضعه داخل shuroohat لا يجعله ملف robots المعتمد للنطاق.

صورة المشاركة:
- المسار: assets/social-preview.jpg
- أُنشئت باستخدام أداة الصور المدمجة، انطلاقًا من صورة الشيخ وألوان الموقع.
- موجز التصميم: صورة أفقية كحلية وذهبية، بصورة الشيخ دون الإطار النجمي، وعنوان شروحات التجويد، واسم الشيخ، وأسماء الكتب الأربعة.

هذه الحزمة لا تغيّر الموقع المنشور إلا عندما ترفعها إلى المستودع.

نص طلب تصميم صورة المشاركة (للمرجع):
Use case: compositing / ads-marketing. Create a polished Arabic website social-sharing banner for the tajweed lectures of Sheikh Tawfeeq Damrah. Input image is the exact portrait reference: preserve the Sheikh's face, beard, clothing and identity faithfully. Compose the portrait with a clean rounded or softly arched frame, REMOVE the ornamental star-shaped frame and its stars from the reference. Use a wide landscape composition, approximately 1200x630 (ratio 1.905:1), with all important content comfortably inset. Website palette: deep navy teal #102e3c, warm restrained gold #c7aa70, ivory text. Flat elegant editorial graphic, subtle geometric background texture, no ornate star symbols, no watermark, no book covers, no invented logos. The portrait occupies roughly the left third, crisp large Arabic typography on the right with generous breathing room. Render EXACT text, no additions: Main heading «شروحات التجويد». Second line «الشيخ الدكتور توفيق ضمرة». Small supporting line «منهاج الدارسين • تحفة الأطفال». Small next line «المقدمة الجزرية • السلسبيل الشافي». All text must be accurate Arabic, beautifully typeset, readable even at thumbnail size. Match a dignified educational website. This is a single finished website-sharing banner, no browser UI and no mockup surroundings.
