import { useState } from "react";
import {
  Users,
  UserPlus,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Search,
  UserX,
  Layers,
  BookOpen,
  Video,
  FileText,
  HelpCircle
} from "lucide-react";

export default function TeacherGroupsPage() {
  const [groupName, setGroupName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("البرمجة بلغة جافاسكريبت المتقدمة");
  const [groupDescription, setGroupDescription] = useState("");
  const [studentsList, setStudentsList] = useState(""); 
  const [bannedStudents, setBannedStudents] = useState(""); 

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const myCoursesList = [
    "البرمجة بلغة جافاسكريبت المتقدمة",
    "اللغة الإنجليزية للمحادثة والأعمال",
    "الرياضيات المتقدمة والتفاضل والتكامل",
    "تصميم واجهات وتجربة المستخدم UI/UX",
    "تطوير تطبيقات الويب بـ React.js و Next.js",
    "أساسيات الأمن السيبراني والشبكات",
    "تحليل البيانات باستخدام Python و Pandas"
  ];

  // بيانات غنية وشاملة لكافة تفاصيل المحتوى والمجموعات
  const [groupsData, setGroupsData] = useState([
    {
      id: 1,
      name: "مجموعة النخبة البرمجية (Alpha)",
      courseName: "البرمجة بلغة جافاسكريبت المتقدمة",
      description: "مجموعة مخصصة لأعلى الطلاب تقييماً في اختبارات الـ Asynchronous JavaScript والـ Promises.",
      students: "أحمد محمد العتيبي، خالد السعيد، سارة يوسف، يوسف محمود، ريم عبد الله، زياد طارق",
      banned: "محمود حسن (غياب متكرر)، فهد القحطاني (مخالفة سياسات المنصة)",
      count: 6,
      date: "منذ يومين",
      contentType: "فيديو ومحاضرات متقدمة",
      accessLevel: "صلاحيات كاملة للملفات والاختبارات"
    },
    {
      id: 2,
      name: "ورشة تدريب الـ UI/UX العملية",
      courseName: "تصميم واجهات وتجربة المستخدم UI/UX",
      description: "مجموعة لإنشاء المشاريع التطبيقية وتصميم النماذج الأولية على برنامج Figma.",
      students: "نور الهدى، إبراهيم عادل، تسنيم محمد، مهند أحمد، روان خالد",
      banned: "لا يوجد",
      count: 5,
      date: "منذ 4 أيام",
      contentType: "ملفات تصميم ومستندات PDF",
      accessLevel: "وصول للمشاريع والواجبات فقط"
    },
    {
      id: 3,
      name: "مجموعة الدعم الأضافي للتفاضل والتكامل",
      courseName: "الرياضيات المتقدمة والتفاضل والتكامل",
      description: "مجموعة علاجية ودعم إضافي للطلاب المتعثرين في قواعد الاشتقاق والنهايات.",
      students: "عمر خالد، كريم وفيق، مريم ناصر، باسم صبحي، هند عبد العزيز",
      banned: "سامر سامي (عدم سداد الرسوم)",
      count: 5,
      date: "منذ أسبوع",
      contentType: "اختبارات قصيرة وملازم مراجعة",
      accessLevel: "وصول مقيد باختبارات الدعم"
    },
    {
      id: 4,
      name: "دبلومة الـ React & Next.js - المجموعة العامة",
      courseName: "تطوير تطبيقات الويب بـ React.js و Next.js",
      description: "المجموعة الأساسية لكافة طلاب الكورس لمتابعة الفيديوهات والمهام الأسبوعية.",
      students: "عبد الرحمن حسن، حسام الدين، منى الشاذلي، وليد فواز، باسل الخطيب، دينا سمير، غادة إبراهيم",
      banned: "علاء الدين (محظور مؤقتاً)",
      count: 7,
      date: "منذ أسبوعين",
      contentType: "محتوى شامل (فيديو، ملفات، واختبارات)",
      accessLevel: "وصول كامل وشامل لكل محتوى الكورس"
    },
    {
      id: 5,
      name: "المحادثة الحية وكسر الجمود",
      courseName: "اللغة الإنجليزية للمحادثة والأعمال",
      description: "مجموعة مخصصة لجلسات التحدث الصوتي والمرئي الأسبوعية وتطوير النطق.",
      students: "جهاد رامي، طارق وفيق، لمياء أحمد، شروق الماجد",
      banned: "لا يوجد",
      count: 4,
      date: "منذ 3 أسابيع",
      contentType: "فيديوهات تفاعلية وملفات صوتية",
      accessLevel: "وصول لجلسات المحادثة الحية"
    },
    {
      id: 6,
      name: "مجموعة باحثي الأمن السيبراني",
      courseName: "أساسيات الأمن السيبراني والشبكات",
      description: "مجموعة متقدمة لتطبيق اختبارات الاختراق الأخلاقي وتحليل الثغرات.",
      students: "مصطفى البنا، حمزة الديب، روان عادل، معاذ الحناوي",
      banned: "أيمن زكي (مخالفة قوانين المعمل الافتراضي)",
      count: 4,
      date: "منذ شهر",
      contentType: "ملفات تقنية ومستندات تشفير (PDF/ZIP)",
      accessLevel: "صلاحيات معمل الآمان المتقدمة"
    }
  ]);

  const handleSubmitGroup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!groupName || !selectedCourse) {
      alert("الرجاء إدخال اسم المجموعة واختار الكورس التابع لها.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      const parsedStudents = studentsList ? studentsList.split(",").filter(s => s.trim() !== "") : [];
      const studentsCount = parsedStudents.length > 0 ? parsedStudents.length : 3;

      if (editingId !== null) {
        setGroupsData(
          groupsData.map((item) =>
            item.id === editingId
              ? {
                  ...item,
                  name: groupName,
                  courseName: selectedCourse,
                  description: groupDescription,
                  students: studentsList || item.students,
                  banned: bannedStudents || "لا يوجد",
                  count: parsedStudents.length > 0 ? parsedStudents.length : item.count,
                }
              : item
          )
        );
        setSuccessMessage("تم تعديل بيانات المجموعة والمحتوى بنجاح!");
        setEditingId(null);
      } else {
        const newGroup = {
          id: Date.now(),
          name: groupName,
          courseName: selectedCourse,
          description: groupDescription || "مجموعة دراسية جديدة تابعة للمنصة",
          students: studentsList || "لم يتم تحديد طلاب بعد",
          banned: bannedStudents || "لا يوجد",
          count: studentsCount,
          date: "الآن",
          contentType: "محتوى شامل (فيديو، ملفات، واختبارات)",
          accessLevel: "وصول قياسي للمحتوى المخصص"
        };

        setGroupsData([newGroup, ...groupsData]);
        setSuccessMessage("تم إنشاء المجموعة وتوزيع الطلاب وتفعيل قيود الحظر والمحتوى بنجاح!");
      }

      setLoading(false);
      setGroupName("");
      setGroupDescription("");
      setStudentsList("");
      setBannedStudents("");

      setTimeout(() => setSuccessMessage(""), 4000);
    }, 600);
  };

  const handleStartEdit = (item: any) => {
    setEditingId(item.id);
    setGroupName(item.name);
    setSelectedCourse(item.courseName);
    setGroupDescription(item.description);
    setStudentsList(item.students === "لم يتم تحديد طلاب بعد" ? "" : item.students);
    setBannedStudents(item.banned === "لا يوجد" ? "" : item.banned);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteGroup = (id: number) => {
    if (!window.confirm("هل أنت متأكد من حذف هذه المجموعة وكافة صلاحيات محتواها؟")) return;
    setGroupsData(groupsData.filter((item) => item.id !== id));
  };

  const filteredGroups = groupsData.filter(g => 
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    g.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12 bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* 1. رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="px-3.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
            <Sparkles size={13} />
            إدارة المجموعات وتوجيه المحتوى والطلاب
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
            إدارة المجموعات والمحتوى التعليمي المرتبط
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
            تحكم كامل بالمجموعات الدراسية، توزيع الطلاب، إدارة قوائم الحظر والاستثناءات، ومتابعة نوعية المحتوى المرتبط بكل مجموعة بكل احترافية.
          </p>
        </div>
      </div>

      {/* 2. نموذج إنشاء / تعديل مجموعة */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <Users size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {editingId !== null ? "تعديل بيانات المجموعة الحالية" : "إنشاء مجموعة دراسية جديدة وتوجيه المحتوى"}
              </h3>
              <span className="text-xs text-slate-500">حدد اسم المجموعة، الكورس التابع، قوائم الطلاب، وحالات الحظر بدقة</span>
            </div>
          </div>
          {editingId !== null && (
            <button
              onClick={() => { setEditingId(null); setGroupName(""); setStudentsList(""); setBannedStudents(""); }}
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

        <form onSubmit={handleSubmitGroup} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* اسم المجموعة */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">اسم المجموعة الدراسية:</label>
              <input
                type="text"
                placeholder="مثال: مجموعة المتميزين (Alpha)..."
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full px-4 py-3 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* الكورس التابع */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">الكورس المرتبط بالمجموعة:</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-3 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
              >
                {myCoursesList.map((course, idx) => (
                  <option key={idx} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          {/* إضافة الطلاب */}
          <div className="space-y-2 bg-blue-50/40 p-4 rounded-2xl border border-blue-100">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <UserPlus size={16} className="text-blue-600" />
              أَسماء أو أكواد الطلاب المنضمين للمجموعة (مفصولة بفواصل):
            </label>
            <textarea
              rows={2}
              placeholder="مثال: أحمد محمد، خالد علي، سارة أحمد، ID-102"
              value={studentsList}
              onChange={(e) => setStudentsList(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 resize-none shadow-2xs"
            />
          </div>

          {/* حظر طلاب معينين من المجموعة */}
          <div className="space-y-2 bg-rose-50/40 p-4 rounded-2xl border border-rose-100">
            <label className="text-xs font-bold text-rose-700 flex items-center gap-1.5">
              <UserX size={16} className="text-rose-600" />
              الطلاب المحظورين أو الممنوعين من دخول هذه المجموعة أو محتواها (مفصولة بفواصل):
            </label>
            <input
              type="text"
              placeholder="مثال: محمود حسن، عمر وزي، ID-99..."
              value={bannedStudents}
              onChange={(e) => setBannedStudents(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-rose-200 rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 shadow-2xs"
            />
          </div>

          {/* وصف المجموعة */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">وصف أو ملاحظات تفصيلية حول محتوى المجموعة:</label>
            <textarea
              rows={2}
              placeholder="اكتب تفاصيل إضافية حول أهداف هذه المجموعة ونوع المحتوى المخصص لها..."
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              className="w-full px-4 py-3 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <UserPlus size={16} className="animate-spin" /> : <UserPlus size={16} />}
              <span>{loading ? "جاري الحفظ..." : editingId !== null ? "حفظ تعديلات المجموعة" : "إنشاء المجموعة وتوجيه المحتوى"}</span>
            </button>
          </div>

        </form>
      </div>

      {/* 3. قائمة وعرض المجموعات الحالية مع تفاصيل المحتوى */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">المجموعات الدراسية المسجلة وتفاصيل محتواها</h3>
              <span className="text-xs text-slate-500">إدارة ومتابعة المجموعات وقوائم الطلاب وحالة الحظر</span>
            </div>
          </div>

          {/* شريط البحث السريع */}
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="ابحث عن مجموعة، طالب، أو كورس..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 bg-blue-50/50 border border-blue-200 rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {filteredGroups.length === 0 ? (
          <div className="py-12 text-center space-y-2 bg-blue-50/40 border border-blue-100 rounded-2xl">
            <AlertCircle size={28} className="text-blue-500 mx-auto" />
            <p className="text-sm font-bold text-slate-700">لا توجد مجموعات مطابقة للبحث أو لم تقم بإنشاء مجموعات بعد.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                className="bg-blue-50/30 border border-blue-100 rounded-3xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-3 py-1 bg-white text-blue-700 rounded-full border border-blue-200 shadow-2xs">
                      الطلاب: {group.count} طلاب
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{group.date}</span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-blue-600 block mb-0.5">{group.courseName}</span>
                    <h4 className="text-sm font-black text-slate-900">{group.name}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">{group.description}</p>
                  </div>

                  {/* تفاصيل المحتوى المرتبط بالمجموعة */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="bg-white/90 p-2.5 rounded-2xl border border-blue-100 text-[10px] space-y-0.5">
                      <span className="text-slate-400 font-bold block">نوع المحتوى الموجه:</span>
                      <strong className="text-blue-700 flex items-center gap-1">
                        <BookOpen size={12} /> {group.contentType}
                      </strong>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-2xl border border-blue-100 text-[10px] space-y-0.5">
                      <span className="text-slate-400 font-bold block">صلاحيات الوصول:</span>
                      <strong className="text-slate-800">{group.accessLevel}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="bg-white/90 p-2.5 rounded-2xl border border-blue-100 text-[11px] text-slate-700">
                      <strong className="text-blue-600 block mb-0.5 text-[10px]">الطلاب المنضمون:</strong>
                      <span className="text-slate-800 font-medium leading-relaxed">{group.students}</span>
                    </div>

                    {group.banned !== "لا يوجد" && (
                      <div className="bg-rose-50/70 p-2.5 rounded-2xl border border-rose-200 text-[11px] text-rose-700">
                        <strong className="text-rose-600 block mb-0.5 text-[10px]">الطلاب المحظورون من المجموعة:</strong>
                        <span className="font-medium leading-relaxed">{group.banned}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-blue-100 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleStartEdit(group)}
                    className="px-3.5 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <Edit3 size={14} /> تعديل
                  </button>
                  <button
                    onClick={() => handleDeleteGroup(group.id)}
                    className="px-3.5 py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <Trash2 size={14} /> حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}