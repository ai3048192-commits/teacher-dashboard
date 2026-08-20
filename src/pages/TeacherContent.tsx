import { useState } from "react";
import {
  UploadCloud,
  Video,
  FileText,
  HelpCircle,
  PlusCircle,
  CheckCircle2,
  Trash2,
  Edit3,
  BookOpen,
  Sparkles,
  Link as LinkIcon,
  Clock,
  AlertCircle,
  Users,
  FileVideo,
  Plus,
  HelpCircle as QuestionIcon,
  Ban,
  ShieldAlert
} from "lucide-react";

export default function TeacherContentPage() {
  const [contentType, setContentType] = useState("video");
  const [inputMode, setInputMode] = useState("select");
  const [selectedCourse, setSelectedCourse] = useState("البرمجة بلغة جافاسكريبت المتقدمة");
  const [manualCourseName, setManualCourseName] = useState("");
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoInputType, setVideoInputType] = useState("url");
  const [mediaUrl, setMediaUrl] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  // حالة الملفات الشاملة
  const [generalFile, setGeneralFile] = useState<File | null>(null);

  // إعدادات الاختبارات والواجبات المتقدمة
  const [quizDuration, setQuizDuration] = useState("30");
  const [maxAttempts, setMaxAttempts] = useState("1");
  const [questions, setQuestions] = useState([
    { id: 1, text: "", type: "mcq", options: ["", "", "", ""] }
  ]);

  // استهداف الجمهور ونظام الحظر والاستثناءات
  const [targetAudience, setTargetAudience] = useState("all"); // all, paid_only, custom_access
  const [restrictedStudents, setRestrictedStudents] = useState(""); // أسماء أو أكواد الطلاب المحظورين / المستثنين

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const myCoursesList = [
    "البرمجة بلغة جافاسكريبت المتقدمة",
    "اللغة الإنجليزية للمحادثة والأعمال",
    "الرياضيات المتقدمة والتفاضل والتكامل",
    "تصميم واجهات وتجربة المستخدم UI/UX",
    "تطوير تطبيقات الويب بـ React.js و Next.js"
  ];

  const [uploadedContents, setUploadedContents] = useState([
    {
      id: 1,
      courseName: "البرمجة بلغة جافاسكريبت المتقدمة",
      title: "محاضرة الـ Asynchronous JavaScript والـ Promises",
      type: "فيديو تعليمي",
      duration: "45 دقيقة",
      date: "اليوم - 10:30 صباحاً",
      target: "الجميع (المدفوع لهم والمستثنون)",
    },
    {
      id: 2,
      courseName: "الرياضيات المتقدمة والتفاضل والتكامل",
      title: "اختبار قصير رقم 3 (قواعد الاشتقاق)",
      type: "اختبار قصير",
      duration: "20 دقيقة - 2 محاولات خروج",
      date: "منذ 3 أيام",
      target: "الطلاب الحاصلين على عذار وأجل مالي",
    },
  ]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: Date.now(), text: "", type: "mcq", options: ["", "", "", ""] }]);
  };

  const handleRemoveQuestion = (id: number) => {
    if (questions.length === 1) {
      alert("يجب أن يحتوي الاختبار على سؤال واحد على الأقل.");
      return;
    }
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleQuestionChange = (id: number, text: string) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, text } : q));
  };

  const handleQuestionTypeChange = (id: number, type: string) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, type } : q));
  };

  const handleOptionChange = (qId: number, optIndex: number, value: string) => {
    setQuestions(questions.map(q => {
      if (q.id === qId) {
        const newOptions = [...q.options];
        newOptions[optIndex] = value;
        return { ...q, options: newOptions };
      }
      return q;
    }));
  };

  const handleSubmitContent = (e: React.FormEvent) => {
    e.preventDefault();
    const finalCourseName = inputMode === "select" ? selectedCourse : manualCourseName;

    if (!title || !finalCourseName) {
      alert("الرجاء التأكد من إدخال اسم الكورس وعنوان الدرس أو المحتوى.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      const typeText = contentType === "video" ? "فيديو تعليمي" : contentType === "file" ? "ملف ومستند" : "اختبار قصير";
      const durationText = contentType === "video" 
        ? (videoInputType === "upload" ? "فيديو مرفوع" : "رابط خارجي") 
        : contentType === "quiz" 
        ? `${quizDuration} دقيقة - ${maxAttempts} مسموح الخروج` 
        : (generalFile ? generalFile.name : "مستندات مرفقة");

      const targetText = targetAudience === "all" 
        ? "الجميع" 
        : targetAudience === "paid_only" 
        ? "المدفوع لهم فقط" 
        : `مخصص (محظور/مستثنى: ${restrictedStudents || "لا يوجد"})`;

      if (editingId !== null) {
        setUploadedContents(
          uploadedContents.map((item) =>
            item.id === editingId
              ? {
                  ...item,
                  courseName: finalCourseName,
                  title: title,
                  type: typeText,
                  duration: durationText,
                  target: targetText,
                }
              : item
          )
        );
        setSuccessMessage("تم تعديل وحفظ محتوى العنصر بنجاح!");
        setEditingId(null);
      } else {
        const newContent = {
          id: Date.now(),
          courseName: finalCourseName,
          title: title,
          type: typeText,
          duration: durationText,
          date: "الآن",
          target: targetText,
        };

        setUploadedContents([newContent, ...uploadedContents]);
        setSuccessMessage("تم إنشاء ونشر المحتوى بنجاح وتطبيق سياسات الوصول والحظر المحدد!");
      }

      setLoading(false);
      setTitle("");
      setDescription("");
      setMediaUrl("");
      setVideoFile(null);
      setGeneralFile(null);
      setRestrictedStudents("");

      setTimeout(() => setSuccessMessage(""), 4000);
    }, 600);
  };

  const handleStartEdit = (item: any) => {
    setEditingId(item.id);
    setTitle(item.title);
    setInputMode("manual");
    setManualCourseName(item.courseName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteContent = (id: number) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الدرس أو المحتوى؟")) return;
    setUploadedContents(uploadedContents.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-8 pb-12 bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* 1. رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="px-3.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
            <Sparkles size={13} />
            إدارة ورفع المحتوى والاختبارات الشاملة
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
            لوحة تحكم الأستاذ لإدارة الدروس والمحتوى
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
            ارفع أي نوع من المستندات، تحكم بصلاحيات الوصول وحظر الطلاب بكل مرونة، وأنشئ الاختبارات المخصصة بسهولة.
          </p>
        </div>
      </div>

      {/* 2. نموذج رفع / إنشاء المحتوى */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <UploadCloud size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {editingId !== null ? "تعديل محتوى العنصر الحالي" : "إضافة درس، مستند، أو اختبار جديد"}
              </h3>
              <span className="text-xs text-slate-500">اختر نوع المحتوى وقم بتخصيص خياراته أدناه</span>
            </div>
          </div>
          {editingId !== null && (
            <button
              onClick={() => { setEditingId(null); setTitle(""); setManualCourseName(""); }}
              className="px-3 py-1.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl border border-rose-200"
            >
              إلغاء التعديل
            </button>
          )}
        </div>

        {successMessage && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-xs font-bold flex items-center gap-2">
            <CheckCircle2 size={18} />
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmitContent} className="space-y-6">
          
          {/* اختيار نوع المحتوى */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">اختر نوع المحتوى:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setContentType("video")}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  contentType === "video" ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-blue-50/40 text-slate-700 border-blue-200 hover:bg-blue-50"
                }`}
              >
                <Video size={20} />
                <div className="text-right">
                  <strong className="block text-xs font-bold">فيديو / محاضرة</strong>
                  <span className={`text-[10px] ${contentType === "video" ? "text-blue-100" : "text-slate-500"}`}>رابط أو رفع ملف فيديو</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setContentType("file")}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  contentType === "file" ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-blue-50/40 text-slate-700 border-blue-200 hover:bg-blue-50"
                }`}
              >
                <FileText size={20} />
                <div className="text-right">
                  <strong className="block text-xs font-bold">ملف / مستند عام</strong>
                  <span className={`text-[10px] ${contentType === "file" ? "text-blue-100" : "text-slate-500"}`}>PDF, Word, Excel, ZIP...</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setContentType("quiz")}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  contentType === "quiz" ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-blue-50/40 text-slate-700 border-blue-200 hover:bg-blue-50"
                }`}
              >
                <HelpCircle size={20} />
                <div className="text-right">
                  <strong className="block text-xs font-bold">اختبار أو واجب</strong>
                  <span className={`text-[10px] ${contentType === "quiz" ? "text-blue-100" : "text-slate-500"}`}>أسئلة مقالية واختيارية</span>
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* اختيار الكورس أو كتابته يدوياً */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">اسم الكورس (اختيار أو كتابة يدوية):</label>
                <button
                  type="button"
                  onClick={() => setInputMode(inputMode === "select" ? "manual" : "select")}
                  className="text-[11px] font-bold text-blue-600 hover:underline"
                >
                  {inputMode === "select" ? "اكتب اسم الكورس بيدك ✍️" : "اختر من القائمة 📋"}
                </button>
              </div>

              {inputMode === "select" ? (
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                >
                  {myCoursesList.map((course, idx) => (
                    <option key={idx} value={course}>{course}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="اكتب اسم الكورس هنا..."
                  value={manualCourseName}
                  onChange={(e) => setManualCourseName(e.target.value)}
                  className="w-full px-4 py-3 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
              )}
            </div>

            {/* عنوان الدرس أو الاختبار */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">عنوان الدرس أو المحتوى:</label>
              <input
                type="text"
                placeholder={contentType === "quiz" ? "مثال: امتحان الشهر الأول في البرمجة..." : "مثال: المحاضرة الثانية: الدوال..."}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* محتوى خاص بالفيديو */}
          {contentType === "video" && (
            <div className="space-y-4 bg-gradient-to-b from-blue-50/60 to-white p-5 rounded-3xl border border-blue-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-100">
                <label className="text-xs font-black text-slate-800 flex items-center gap-2">
                  <Video size={16} className="text-blue-600" />
                  طريقة إرفاق الفيديو:
                </label>
                <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-blue-100 shadow-2xs text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setVideoInputType("url")}
                    className={`px-3 py-1.5 rounded-xl transition-all ${videoInputType === "url" ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    رابط فيديو (يوتيوب)
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoInputType("upload")}
                    className={`px-3 py-1.5 rounded-xl transition-all ${videoInputType === "upload" ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    رفع ملف فيديو مباشر
                  </button>
                </div>
              </div>

              {videoInputType === "url" ? (
                <div className="relative">
                  <LinkIcon size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500" />
                  <input
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                    className="w-full pr-12 pl-4 py-3.5 bg-white border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-2xs"
                  />
                </div>
              ) : (
                <div className="relative border-2 border-dashed border-blue-300 hover:border-blue-500 rounded-2xl p-6 text-center bg-white transition-all group cursor-pointer">
                  <input 
                    type="file" 
                    accept="video/*" 
                    onChange={(e) => e.target.files && setVideoFile(e.target.files[0])} 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  />
                  <div className="space-y-2 pointer-events-none">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border border-blue-100">
                      <FileVideo size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {videoFile ? videoFile.name : "اضغط هنا لاختيار ملف فيديو أو اسحبه وأفلته هنا"}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">MP4, WebM, MOV (حد أقصى 500 ميجابايت)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* محتوى خاص بالملفات والمستندات بجميع أنواعها */}
          {contentType === "file" && (
            <div className="space-y-3 bg-gradient-to-b from-blue-50/60 to-white p-5 rounded-3xl border border-blue-200 shadow-xs">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <FileText size={16} className="text-blue-600" />
                رفع أي نوع مستند (PDF, Word, Excel, PowerPoint, ZIP, TXT):
              </label>
              
              <div className="relative border-2 border-dashed border-blue-300 hover:border-blue-500 rounded-2xl p-6 text-center bg-white transition-all group cursor-pointer">
                <input 
                  type="file" 
                  onChange={(e) => e.target.files && setGeneralFile(e.target.files[0])} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                <div className="space-y-2 pointer-events-none">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border border-blue-100">
                    <UploadCloud size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      {generalFile ? generalFile.name : "اضغط لرفع الملف أو اسحب وأفلت أي مستند هنا"}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">يدعم كافة صيغ الملفات والمستندات والملفات المضغوطة (حتى 100 ميجابايت)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* محتوى الاختبارات والأسئلة وخصائص الوقت والخروج */}
          {contentType === "quiz" && (
            <div className="space-y-5 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <QuestionIcon size={16} className="text-blue-600" />
                  إعدادات وقت الاختبار وعدد مرات الخروج المسموح بها:
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">مدة الاختبار (بالدقائق):</label>
                  <div className="relative">
                    <Clock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500" />
                    <input
                      type="number"
                      min="1"
                      value={quizDuration}
                      onChange={(e) => setQuizDuration(e.target.value)}
                      className="w-full pr-10 pl-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                      placeholder="30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">عدد مرات الخروج المسموح بها للطالب:</label>
                  <input
                    type="number"
                    min="0"
                    value={maxAttempts}
                    onChange={(e) => setMaxAttempts(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                    placeholder="1"
                  />
                  <span className="text-[10px] text-rose-500 block">إذا تخطى الطالب هذا العدد، سيتم تسليم الاختبار تلقائياً!</span>
                </div>
              </div>

              {/* بناء الأسئلة يدوياً */}
              <div className="space-y-4 pt-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-slate-800">أسئلة الاختبار (مقالي أو اختيار من متعدد):</h5>
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-blue-700"
                  >
                    <Plus size={14} /> إضافة سؤال جديد
                  </button>
                </div>

                {questions.map((q, idx) => (
                  <div key={q.id} className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-blue-600">السؤال رقم {idx + 1}</span>
                      <div className="flex items-center gap-2">
                        <select
                          value={q.type}
                          onChange={(e) => handleQuestionTypeChange(q.id, e.target.value)}
                          className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-700"
                        >
                          <option value="mcq">اختيار من متعدد</option>
                          <option value="essay">سؤال مقالي</option>
                        </select>
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestion(q.id)}
                          className="p-1 text-rose-500 hover:bg-rose-50 rounded-lg"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="اكتب نص السؤال هنا..."
                      value={q.text}
                      onChange={(e) => handleQuestionChange(q.id, e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                    />

                    {q.type === "mcq" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, optIdx) => (
                          <input
                            key={optIdx}
                            type="text"
                            placeholder={`الخيار رقم ${optIdx + 1}`}
                            value={opt}
                            onChange={(e) => handleOptionChange(q.id, optIdx, e.target.value)}
                            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* تحديد صلاحيات وصول الطلاب وحظرهم أو استثنائهم */}
          <div className="space-y-3 bg-indigo-50/40 p-5 rounded-2xl border border-indigo-100">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Users size={16} className="text-blue-600" />
              تحديد الطلاب المستهدفين وسياسة الحظر / الاستثناء:
            </label>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${targetAudience === 'all' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-indigo-100'}`}>
                <input type="radio" name="audience" checked={targetAudience === 'all'} onChange={() => setTargetAudience('all')} className="accent-white" />
                <span className="text-xs font-bold">الجميع</span>
              </label>

              <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${targetAudience === 'paid_only' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-indigo-100'}`}>
                <input type="radio" name="audience" checked={targetAudience === 'paid_only'} onChange={() => setTargetAudience('paid_only')} className="accent-white" />
                <span className="text-xs font-bold">الذين دفعوا الرسوم فقط</span>
              </label>

              <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${targetAudience === 'custom_access' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-indigo-100'}`}>
                <input type="radio" name="audience" checked={targetAudience === 'custom_access'} onChange={() => setTargetAudience('custom_access')} className="accent-white" />
                <span className="text-xs font-bold">تخصيص استثناءات / حظر طلاب</span>
              </label>
            </div>

            {targetAudience === 'custom_access' && (
              <div className="space-y-1.5 pt-2 animate-fadeIn">
                <label className="text-[11px] font-bold text-rose-600 flex items-center gap-1">
                  <Ban size={13} />
                  اكتب أسماء أو أكواد الطلاب المراد حظرهم أو استثنائهم (مفصولة بفواصل):
                </label>
                <input
                  type="text"
                  placeholder="مثال: أحمد محمد، محمد علي، ID-1025..."
                  value={restrictedStudents}
                  onChange={(e) => setRestrictedStudents(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-rose-200 rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 shadow-2xs"
                />
                <span className="text-[10px] text-slate-500 block">سيتم حظر هؤلاء الطلاب من رؤية أو الوصول لهذا المحتوى المحدد.</span>
              </div>
            )}
          </div>

          {/* وصف تفصيلي */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">وصف أو تعليمات إضافية:</label>
            <textarea
              rows={2}
              placeholder="اكتب ملاحظات هامة للطلاب..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <PlusCircle size={16} className="animate-spin" /> : <PlusCircle size={16} />}
              <span>{loading ? "جاري النشر..." : editingId !== null ? "حفظ التعديلات" : "نشر المحتوى للطلاب الآن"}</span>
            </button>
          </div>

        </form>
      </div>

      {/* 3. سجل المحتويات والدروس المرفوعة */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">سجل المحتويات والدروس المرفوعة</h3>
              <span className="text-xs text-slate-500">متابعة الدروس والاختبارات المنشورة وتعديلها</span>
            </div>
          </div>
        </div>

        {uploadedContents.length === 0 ? (
          <div className="py-12 text-center space-y-2 bg-blue-50/40 border border-blue-100 rounded-2xl">
            <AlertCircle size={28} className="text-blue-500 mx-auto" />
            <p className="text-sm font-bold text-slate-700">لم تقم برفع أي محتوى حتى الآن.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {uploadedContents.map((item) => (
              <div
                key={item.id}
                className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-white text-blue-700 rounded-lg border border-blue-200">
                      {item.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                      <Clock size={11} className="text-blue-600" /> {item.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-blue-600 block mb-0.5">{item.courseName}</span>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-2">{item.title}</h4>
                  </div>

                  <div className="bg-white/80 p-2 rounded-xl border border-blue-100 text-[10px] text-slate-600 font-medium flex items-center gap-1">
                    <Users size={12} className="text-blue-600 shrink-0" />
                    <span>الجمهور: <strong className="text-slate-800">{item.target}</strong></span>
                  </div>
                </div>

                <div className="pt-3 border-t border-blue-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-medium">{item.duration}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all"
                      title="تعديل"
                    >
                      <Edit3 size={14} />
                    </button>
                    <button
                      onClick={() => handleDeleteContent(item.id)}
                      className="p-2 bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 rounded-xl transition-all"
                      title="حذف"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}