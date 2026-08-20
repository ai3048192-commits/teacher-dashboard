import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  UploadCloud,
  Sparkles,
  Clock,
  Bell,
  Loader2,
  Trash2,
  RefreshCw,
  CheckCheck,
  GraduationCap,
  Award,
  ArrowRight,
  BookMarked,
  AlertCircle,
  Calendar,
  Users,
  PlusCircle
} from "lucide-react";

export default function TeacherHomePage() {
  // إحصائيات المدرس الشاملة لكل التخصصات
  const [stats] = useState([
    {
      title: "الكورسات النشطة",
      value: "6",
      change: "متعددة التخصصات",
      period: "متاحة للطلاب",
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
    },
    {
      title: "الطلاب المسجلين",
      value: "480",
      change: "طالب نشط",
      period: "عبر مختلف الأقسام",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-50 border-blue-200",
    },
    {
      title: "واجبات تنتظر التصحيح",
      value: "19",
      change: "تحتاج تقييم",
      period: "من مختلف الأقسام",
      icon: UploadCloud,
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-200",
    },
    {
      title: "متوسط أداء الطلاب",
      value: "91%",
      change: "مستوى ممتاز",
      period: "بناءً على الاختبارات",
      icon: Award,
      color: "text-blue-700",
      bg: "bg-blue-50 border-blue-200",
    },
  ]);

  // قائمة كورسات متنوعة تدل على مدرسين في كل الأقسام (برمجة، لغات، رياضيات، تصميم)
  const [courses] = useState([
    {
      id: 1,
      courseName: "البرمجة بلغة جافاسكريبت المتقدمة",
      category: "البرمجة وتطوير الويب",
      studentsCount: 110,
      progress: 80,
      nextSession: "اليوم - 08:00 مساءً",
      status: "نشط وقائم",
    },
    {
      id: 2,
      courseName: "اللغة الإنجليزية للمحادثة والأعمال",
      category: "اللغات الأجنبية",
      studentsCount: 140,
      progress: 60,
      nextSession: "غداً - 05:00 عصراً",
      status: "جارٍ رفع المحتوى",
    },
    {
      id: 3,
      courseName: "الرياضيات المتقدمة والتفاضل والتكامل",
      category: "العلوم والرياضيات",
      studentsCount: 85,
      progress: 45,
      nextSession: "الخميس - 02:00 ظهراً",
      status: "مراجعة دورية",
    },
    {
      id: 4,
      courseName: "تصميم واجهات وتجربة المستخدم UI/UX",
      category: "التصميم والفنون الرقمية",
      studentsCount: 95,
      progress: 30,
      nextSession: "السبت القادم",
      status: "حديث الإطلاق",
    },
  ]);

  // المهام العاجلة لتشمل أقسام مختلفة
  const [upcomingTasks] = useState([
    { id: 1, title: "تصحيح اختبار الجافاسكريبت (Async/Await)", course: "البرمجة وتطوير الويب", deadline: "متبقي 8 اختبارات", type: "تصحيح", urgent: true },
    { id: 2, title: "تقييم تسجيلات المحادثة الصوتية للطلاب", course: "اللغة الإنجليزية", deadline: "اليوم 10:00 مساءً", type: "تقييم لغات", urgent: true },
    { id: 3, title: "إعداد واجب التفاضل والتكامل شابتر 4", course: "العلوم والرياضيات", deadline: "غداً ظهراً", type: "إنشاء واجب", urgent: false },
    { id: 4, title: "رفع ملفات الشرح الإضافية لأنظمة الألوان", course: "التصميم الرقمي", deadline: "هذا الأسبوع", type: "رفع ملفات", urgent: false },
  ]);

  // سجل إشعارات متنوعة لكل التخصصات
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "تسليم واجب جديد في قسم اللغات",
      source: "قسم اللغة الإنجليزية",
      message: "قام 15 طالباً برفع ملفات الواجب الصوتي الخاص بالمحادثة.",
      created_at: "منذ نصف ساعة",
    },
    {
      id: 2,
      title: "استفسار رياضي من طالب",
      source: "قسم الرياضيات",
      message: "لدى الطالبة مريم سؤال بخصوص حل مساحة المنحنى في التكامل.",
      created_at: "منذ ساعتين",
    },
    {
      id: 3,
      title: "اكتمال معالجة فيديو الدرس",
      source: "قسم البرمجة",
      message: "تم رفع فيديو محاضرة React.js بنجاح وأصبح متاحاً للطلاب.",
      created_at: "أمس",
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchDashboardData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  };

  const handleDeleteNotification = (id: number) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الإشعار؟")) return;
    setDeletingId(id);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setDeletingId(null);
    }, 400);
  };

  return (
    <div className="space-y-8 pb-12 bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* 1. قسم الترحيب بالمدرس */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full flex items-center gap-1.5 border border-white/25">
                <Sparkles size={13} />
                بوابة المعلمين متعددة التخصصات - منصة zed
              </span>
              <span className="px-3 py-1 bg-blue-800/40 text-blue-100 text-xs rounded-full flex items-center gap-1 border border-blue-400/30">
                <GraduationCap size={14} /> الفصل الدراسي الثاني 2026
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-wide">
              أهلاً بك، أستاذ محمد 👋
            </h1>
            <p className="text-sm text-blue-100 max-w-2xl leading-relaxed">
              منصة متكاملة تدعم كافة الأقسام (برمجة، لغات، رياضيات، وتصميم). تابع كورساتك، صحح الواجبات، وراقب إنجاز طلابك بسهولة.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/teacher-content"
              className="flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm rounded-2xl transition-all shadow-md hover:scale-[1.02]"
            >
              <PlusCircle size={18} />
              <span>إضافة كورس أو درس جديد</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. بطاقات الإحصائيات الشاملة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white border-2 border-blue-100/80 rounded-2xl p-5 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group shadow-xs"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl border ${item.bg} ${item.color}`}>
                  <Icon size={22} />
                </div>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                  {item.change}
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-wider mb-1">{item.value}</h3>
              <p className="text-xs font-bold text-slate-700">{item.title}</p>
              <span className="text-[11px] text-blue-600/80 font-medium block mt-1">{item.period}</span>
            </div>
          );
        })}
      </div>

      {/* 3. المهام والكورسات المتنوعة */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* المهام العاجلة */}
        <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 shadow-xs lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-blue-100">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                <AlertCircle size={18} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">مهام التصحيح والمتابعة العاجلة</h3>
            </div>
            <span className="text-[10px] bg-blue-600 text-white font-bold px-2.5 py-0.5 rounded-full">عاجل</span>
          </div>

          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="p-3.5 bg-blue-50/40 border border-blue-100 rounded-2xl space-y-2 hover:border-blue-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${task.urgent ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                    {task.type}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                    <Clock size={12} className="text-blue-600" /> {task.deadline}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{task.title}</h4>
                  <p className="text-[11px] text-blue-700 font-medium mt-0.5">{task.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* إدارة الكورسات عبر كل الأقسام */}
        <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 shadow-xs lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-blue-100">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                <BookMarked size={18} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">إدارة كورسات الأقسام المختلفة</h3>
            </div>
            <Link to="/teacher/courses" className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1">
              <span>عرض كل الأقسام</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course) => (
              <div key={course.id} className="p-4 bg-blue-50/30 border border-blue-100 rounded-2xl flex flex-col justify-between gap-3 hover:border-blue-300 transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 flex items-center gap-1">
                      <Users size={12} className="text-blue-600" /> {course.studentsCount} طالب
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{course.courseName}</h4>
                    <span className="text-[11px] text-blue-600 font-medium block mt-0.5">الحالة: {course.status}</span>
                  </div>
                  
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-600">
                      <span>اكتمال محتوى القسم</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-blue-100/60 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 flex items-center gap-1 font-medium">
                    <Calendar size={12} className="text-blue-600" /> {course.nextSession}
                  </span>
                  <Link
                    to="/teacher/content"
                    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all"
                  >
                    <PlusCircle size={14} />
                    <span>إدارة القسم</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. الإشعارات والتنبيهات */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <Bell size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">سجل إشعارات الأقسام الأكاديمية</h3>
                <span className="text-[10px] bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-200 font-bold">
                  {notifications.length} إشعار نشط
                </span>
              </div>
              <span className="text-xs text-slate-500">متابعة تفاعلات الطلاب عبر مختلف التخصصات</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchDashboardData}
              disabled={refreshing}
              className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all disabled:opacity-50"
            >
              <RefreshCw size={14} className={refreshing ? "animate-spin text-blue-600" : ""} />
              <span>تحديث القائمة</span>
            </button>
          </div>
        </div>

        {notifications.length === 0 ? (
          <div className="py-12 text-center space-y-2 bg-blue-50/40 border border-blue-100 rounded-2xl">
            <CheckCheck size={28} className="text-blue-600 mx-auto" />
            <p className="text-sm font-bold text-slate-700">لا توجد إشعارات جديدة حالياً.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all space-y-3"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-blue-100">
                  <span className="text-[11px] font-bold text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-200">
                    {notif.source}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-medium">{notif.created_at}</span>
                    <button
                      onClick={() => handleDeleteNotification(notif.id)}
                      disabled={deletingId === notif.id}
                      className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg transition-all"
                    >
                      {deletingId === notif.id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{notif.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{notif.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}