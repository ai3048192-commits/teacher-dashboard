import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  PlusCircle,
  Search,
  Filter,
  Users,
  Clock,
  Calendar,
  Edit3,
  Trash2,
  Star,
  Tag,
  CheckCircle2,
  Sparkles,
  BookMarked,
  Layers,
  TrendingUp,
  FileText
} from "lucide-react";

export default function TeacherCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // بيانات كورسات شاملة ومكثفة تغطي كافة الأقسام والمدرسين
  const [courses, setCourses] = useState([
    {
      id: 1,
      courseName: "البرمجة بلغة جافاسكريبت المتقدمة والهيكلة الحديثة",
      category: "البرمجة وتطوير الويب",
      subCategory: "Front-End Development",
      studentsCount: 110,
      lessonsCount: 24,
      progress: 80,
      nextSession: "اليوم - 08:00 مساءً",
      status: "منشور ونشط",
      rating: 4.9,
      reviewsCount: 42,
      price: "مجاني / مدعوم",
      lastUpdated: "منذ 3 أيام",
      imageColor: "from-blue-700 to-indigo-700",
    },
    {
      id: 2,
      category: "اللغات الأجنبية",
      subCategory: "Business English",
      courseName: "اللغة الإنجليزية للمحادثة والأعمال الدولية الاحترافية",
      studentsCount: 140,
      lessonsCount: 18,
      progress: 60,
      nextSession: "غداً - 05:00 عصراً",
      status: "منشور ونشط",
      rating: 4.8,
      reviewsCount: 56,
      price: "$45",
      lastUpdated: "منذ أسبوع",
      imageColor: "from-sky-600 to-blue-700",
    },
    {
      id: 3,
      category: "العلوم والرياضيات",
      subCategory: "Calculus & Analysis",
      courseName: "الرياضيات المتقدمة والتفاضل والتكامل لطلاب الهندسة",
      studentsCount: 85,
      lessonsCount: 30,
      progress: 45,
      nextSession: "الخميس - 02:00 ظهراً",
      status: "قيد المراجعة",
      rating: 4.7,
      reviewsCount: 29,
      price: "$30",
      lastUpdated: "أمس",
      imageColor: "from-indigo-700 to-purple-700",
    },
    {
      id: 4,
      category: "التصميم والفنون الرقمية",
      subCategory: "UI/UX Design Systems",
      courseName: "تصميم واجهات وتجربة المستخدم المتقدمة باستخدام Figma",
      studentsCount: 95,
      lessonsCount: 15,
      progress: 30,
      nextSession: "السبت القادم",
      status: "حديث الإطلاق",
      rating: 5.0,
      reviewsCount: 18,
      price: "$60",
      lastUpdated: "منذ 4 أيام",
      imageColor: "from-blue-500 to-teal-600",
    },
    {
      id: 5,
      category: "البرمجة وتطوير الويب",
      subCategory: "React & Next.js",
      courseName: "تطوير تطبيقات الويب الحديثة بـ React.js و Next.js",
      studentsCount: 125,
      lessonsCount: 20,
      progress: 90,
      nextSession: "الأحد القادم",
      status: "منشور ونشط",
      rating: 4.9,
      reviewsCount: 64,
      price: "$50",
      lastUpdated: "منذ يومين",
      imageColor: "from-blue-800 to-cyan-600",
    },
    {
      id: 6,
      category: "التسويق الرقمي والأعمال",
      subCategory: "Digital Marketing",
      courseName: "استراتيجيات التسويق الرقمي وإدارة الحملات الإعلانية",
      studentsCount: 210,
      lessonsCount: 22,
      progress: 75,
      nextSession: "الإثنين القادم",
      status: "منشور ونشط",
      rating: 4.8,
      reviewsCount: 88,
      price: "$40",
      lastUpdated: "منذ أسبوعين",
      imageColor: "from-indigo-600 to-blue-600",
    },
    {
      id: 7,
      category: "اللغات الأجنبية",
      subCategory: "German Language",
      courseName: "اللغة الألمانية للمبتدئين من الصفر حتى مستوى B1",
      studentsCount: 75,
      lessonsCount: 25,
      progress: 50,
      nextSession: "الثلاثاء القادم",
      status: "منشور ونشط",
      rating: 4.9,
      reviewsCount: 31,
      price: "$35",
      lastUpdated: "منذ 5 أيام",
      imageColor: "from-blue-600 to-sky-500",
    },
  ]);

  const categories = [
    "الكل",
    "البرمجة وتطوير الويب",
    "اللغات الأجنبية",
    "العلوم والرياضيات",
    "التصميم والفنون الرقمية",
    "التسويق الرقمي والأعمال"
  ];

  const handleDeleteCourse = (id: number) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الكورس نهائياً من المنصة؟")) return;
    setCourses(courses.filter((course) => course.id !== id));
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "الكل" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8  bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* 1. رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r
       from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
              <Sparkles size={13} />
              إدارة الكورسات والمناهج الأكاديمية الشاملة
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
              إدارة كورسات الأقسام المختلفة
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
              تحكم كامل في كافة كورساتك بجميع التخصصات (برمجة، لغات، رياضيات، تصميم، وأعمال). تابع الأداء، التقييمات، وأعداد الطلاب بكل سهولة.
            </p>
          </div>

          <Link
            to="/teacher/content"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-md hover:scale-[1.02]"
          >
            <PlusCircle size={18} />
            <span>إضافة كورس جديد</span>
          </Link>
        </div>
      </div>

      {/* 2. شريط البحث والتصفية بالأقسام */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-5 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="relative w-full lg:w-96">
          <Search size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-blue-500" />
          <input
            type="text"
            placeholder="ابحث باسم الكورس أو التخصص الفرعي..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-11 pl-4 py-2.5 bg-blue-50/50 border border-blue-200 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
          <Filter size={16} className="text-blue-600 ml-1 hidden sm:block" />
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-blue-50/60 text-slate-600 border-blue-200 hover:bg-blue-100/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. شبكة عرض الكورسات مع تفاصيل مكثفة في الكارت */}
      {filteredCourses.length === 0 ? (
        <div className="py-16 text-center space-y-3 bg-blue-50/40 border-2 border-dashed border-blue-200 rounded-3xl">
          <BookMarked size={36} className="text-blue-500 mx-auto" />
          <h3 className="text-sm font-bold text-slate-800">لا توجد كورسات مطابقة لبحثك</h3>
          <p className="text-xs text-slate-500">جرب البحث بكلمات أخرى أو تغيير تصنيف القسم.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-2 border-blue-100 rounded-3xl overflow-hidden shadow-xs hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* ترويسة الكارت الملونة */}
              <div className={`p-5 bg-gradient-to-r ${course.imageColor} text-white relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-2.5 relative z-10">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-[10px] font-bold rounded-lg border border-white/25">
                    {course.category}
                  </span>
                  <span className="px-2.5 py-1 bg-black/25 backdrop-blur-md text-[10px] font-bold rounded-lg text-white">
                    {course.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-blue-100 mb-1 relative z-10 font-semibold">
                  <span className="flex items-center gap-1">
                    <Layers size={13} /> {course.subCategory}
                  </span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">{course.price}</span>
                </div>

                <h3 className="text-sm sm:text-base font-black line-clamp-2 relative z-10 leading-snug mt-1">
                  {course.courseName}
                </h3>
              </div>

              {/* تفاصيل البيانات الكاملة داخل الكارت */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  
                  {/* إحصائيات سريعة للطلاب والدروس والتقييم */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-700">
                    <div className="bg-blue-50/60 p-2 rounded-xl border border-blue-100 flex flex-col items-center justify-center">
                      <Users size={14} className="text-blue-600 mb-1" />
                      <span className="text-[11px]">{course.studentsCount} طالب</span>
                    </div>
                    <div className="bg-blue-50/60 p-2 rounded-xl border border-blue-100 flex flex-col items-center justify-center">
                      <BookOpen size={14} className="text-blue-600 mb-1" />
                      <span className="text-[11px]">{course.lessonsCount} درس</span>
                    </div>
                    <div className="bg-blue-50/60 p-2 rounded-xl border border-blue-100 flex flex-col items-center justify-center">
                      <div className="flex items-center gap-0.5 text-amber-500 mb-1">
                        <Star size={13} fill="currentColor" />
                        <span className="text-[11px] text-slate-800 font-black">{course.rating}</span>
                      </div>
                      <span className="text-[10px] text-slate-500">({course.reviewsCount} تقييم)</span>
                    </div>
                  </div>

                  {/* مواعيد المحاضرات وتاريخ التحديث */}
                  <div className="space-y-1.5 pt-1 text-[11px] text-slate-600">
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100 font-medium">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar size={13} className="text-blue-600" /> المحاضرة القادمة:
                      </span>
                      <strong className="text-slate-800">{course.nextSession}</strong>
                    </div>
                    <div className="flex items-center justify-between px-2 text-[10px] text-slate-400">
                      <span>آخر تحديث للمحتوى:</span>
                      <span>{course.lastUpdated}</span>
                    </div>
                  </div>

                  {/* شريط اكتمال المنهج */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-[11px] font-bold text-slate-700">
                      <span className="flex items-center gap-1">
                        <TrendingUp size={13} className="text-blue-600" /> نسبة اكتمال الدروس والمحتوى
                      </span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-blue-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* أزرار الإجراءات السريعة للكارت */}
                <div className="pt-3 border-t border-blue-100 flex items-center justify-between gap-2">
                  <Link
                    to="/teacher/content"
                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold text-center shadow-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <Edit3 size={14} />
                    <span>إدارة محتوى الكورس</span>
                  </Link>

                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="p-2.5 bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 rounded-xl transition-all"
                    title="حذف الكورس"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}