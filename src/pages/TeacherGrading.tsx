import { useState } from "react";
import {
  Users,
  Search,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Award,
  ArrowRight,
  FileText
} from "lucide-react";

export default function StudentsSubmissionsPage() {
  // قائمة واسعة وغنية بالبيانات والأسئلة المقالية للطلاب
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "أحمد محمد إبراهيم",
      gradeLevel: "الصف الثالث الثانوي - الفصل الأول",
      totalScore: 90,
      status: "ناجح",
      submissionDate: "2026/08/20 - 10:30 ص",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "function MyComp() { return <div/>; }", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "صح", 
          correctAnswer: "صح", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "في الـ SSR يتم معالجة وعرض الصفحة بالكامل على الخادم وإرسال HTML جاهز للمتصفح مما يعزز السيو، بينما في الـ CSR يقوم المتصفح بتحميل جافاسكريبت وبناء واجهة المستخدم محلياً.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR مع التركيز على سرعة التفاعل.", 
          isCorrect: true, 
          score: 50,
          essayFeedback: "إجابة مقالية ممتازة وشاملة للفرق التقني بدقة."
        }
      ]
    },
    {
      id: 2,
      name: "فاطمة علي محمود",
      gradeLevel: "الصف الثالث الثانوي - الفصل الأول",
      totalScore: 65,
      status: "ناجح",
      submissionDate: "2026/08/20 - 11:15 ص",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "class MyComp extends React", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: false, 
          score: 0 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "صح", 
          correctAnswer: "صح", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "الـ SSR أسرع في التحميل الأولي لأن الخادم بيبعت الصفحة جاهزة، و الـ CSR العكس.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: true, 
          score: 45,
          essayFeedback: "إجابة مقالية مقبولة وتوضح الفكرة العامة بشكل صحيح."
        }
      ]
    },
    {
      id: 3,
      name: "محمود خالد عبد الله",
      gradeLevel: "الصف الثاني الثانوي - الفصل الثاني",
      totalScore: 40,
      status: "راسب",
      submissionDate: "2026/08/20 - 12:00 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "def createComponent()", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: false, 
          score: 0 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "خطأ", 
          correctAnswer: "صح", 
          isCorrect: false, 
          score: 0 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "لا أعرف الفرق بالتحديد بينهما.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: false, 
          score: 40,
          essayFeedback: "الإجابة المقالية غير دقيقة ولا تستوفي المعيار المطلوب."
        }
      ]
    },
    {
      id: 4,
      name: "سارة حسن طه",
      gradeLevel: "الصف الثالث الثانوي - الفصل الأول",
      totalScore: 100,
      status: "ناجح",
      submissionDate: "2026/08/20 - 01:05 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "function MyComp() { return <div/>; }", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "صح", 
          correctAnswer: "صح", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "SSR يعالج بالخادم (Server) ويرسل HTML جاهز للمتصفح، بينما CSR يعتمد على المتصفح (Client) في تحميل الجافاسكريبت وبناء العناصر.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: true, 
          score: 60,
          essayFeedback: "إجابة مقالية نموذجية ورائعة تدل على فهم عميق."
        }
      ]
    },
    {
      id: 5,
      name: "يوسف إبراهيم مهران",
      gradeLevel: "الصف الأول الثانوي - الفصل الأول",
      totalScore: 60,
      status: "ناجح",
      submissionDate: "2026/08/20 - 01:40 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "function MyComp() { return <div/>; }", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "خطأ", 
          correctAnswer: "صح", 
          isCorrect: false, 
          score: 0 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "واحدة تعتمد على السيرفر والأخرى على المتصفح.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: true, 
          score: 40,
          essayFeedback: "إجابة مقالية مختصرة ولكنها صحيحة جزئياً."
        }
      ]
    },
    {
      id: 6,
      name: "ريم سعيد عبد الرازق",
      gradeLevel: "الصف الثالث الثانوي - الفصل الأول",
      totalScore: 85,
      status: "ناجح",
      submissionDate: "2026/08/20 - 02:10 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "function MyComp() { return <div/>; }", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "صح", 
          correctAnswer: "صح", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "SSR ممتاز لمحركات البحث (SEO) لأن السيرفر بيبعت محتوى كامل، أما CSR فبيعتمد على رנדرة المتصفح.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: true, 
          score: 45,
          essayFeedback: "إجابة ممتازة وذكرت نقطة SEO المتقدمة."
        }
      ]
    },
    {
      id: 7,
      name: "عمر خالد الشريف",
      gradeLevel: "الصف الثاني الثانوي - الفصل الأول",
      totalScore: 50,
      status: "راسب",
      submissionDate: "2026/08/20 - 02:50 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "var comp = new Component()", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: false, 
          score: 0 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "صح", 
          correctAnswer: "صح", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "تقديم الصفحات للمستخدم.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: true, 
          score: 30,
          essayFeedback: "إجابة مقالية غير مفصلة وتفتقر للتوضيح الفني."
        }
      ]
    },
    {
      id: 8,
      name: "نوران أحمد السيد",
      gradeLevel: "الصف الثالث الثانوي - الفصل الأول",
      totalScore: 95,
      status: "ناجح",
      submissionDate: "2026/08/20 - 03:20 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "function MyComp() { return <div/>; }", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "صح", 
          correctAnswer: "صح", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "SSR يقوم بعمل Pre-rendering للصفحة في الخادم، بينما CSR يقوم بتحميل صفحة فارغة ثم بناء العناصر عبر الـ Client.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: true, 
          score: 55,
          essayFeedback: "إجابة مقالية احترافية ومفصلة للغاية."
        }
      ]
    },
    {
      id: 9,
      name: "كريم مصطفى عبد اللطيف",
      gradeLevel: "الصف الأول الثانوي - الفصل الثاني",
      totalScore: 40,
      status: "راسب",
      submissionDate: "2026/08/20 - 04:00 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "class MyComp extends React", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: false, 
          score: 0 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "خطأ", 
          correctAnswer: "صح", 
          isCorrect: false, 
          score: 0 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "لا أعلم.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: false, 
          score: 40,
          essayFeedback: "لم يتم تقديم إجابة مقالية صحيحة."
        }
      ]
    },
    {
      id: 10,
      name: "منى سمير عبد العزيز",
      gradeLevel: "الصف الثالث الثانوي - الفصل الأول",
      totalScore: 100,
      status: "ناجح",
      submissionDate: "2026/08/20 - 04:45 م",
      answers: [
        { 
          qId: 1, 
          questionText: "ما هي الطريقة الأصح لإنشاء مكون (Component) حديث في مكتبة React.js؟", 
          type: "MCQ", 
          studentAnswer: "function MyComp() { return <div/>; }", 
          correctAnswer: "function MyComp() { return <div/>; }", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 2, 
          questionText: "تُستخدم الـ Hooks في React لتنفيذ العمليات الجانبية (Side Effects) مثل جلب البيانات من الخادم.", 
          type: "TrueFalse", 
          studentAnswer: "صح", 
          correctAnswer: "صح", 
          isCorrect: true, 
          score: 20 
        },
        { 
          qId: 3, 
          questionText: "اشرح باختصار الفرق الأساسي بين (SSR) Server-Side Rendering و (CSR) Client-Side Rendering في تطبيقات الويب؟", 
          type: "Essay", 
          studentAnswer: "في الـ SSR السيرفر بيجهز الـ HTML بالكامل، وفي الـ CSR المتصفح هو اللي بينفذ الكود وبني واجهة الـ DOM.", 
          correctAnswer: "يتم عرض الصفحة على الخادم وإرسالها جاهزة في SSR، بينما يتم بناء واجهة المستخدم عبر المتصفح في CSR.", 
          isCorrect: true, 
          score: 60,
          essayFeedback: "إجابة مقالية دقيقة وممتازة تستحق الدرجة الكاملة."
        }
      ]
    }
  ]);

  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12 bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-emerald-600 to-blue-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-teal-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="px-3.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
            <Users size={13} />
            سجل إجابات الطلاب والأسئلة المقالية المفصلة
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
            تفاصيل إجابات الطلاب والمقارنة بالمفاتيح النموذجية
          </h1>
          <p className="text-xs sm:text-sm text-teal-100 max-w-xl leading-relaxed">
            استعرض إجابات الـ 10 طلاب بالتفصيل، بما في ذلك الإجابات المقالية ومقارنتها بالإجابات النموذجية الصحيحة مع العلامات المعتمدة.
          </p>
        </div>
      </div>

      {/* شاشة تفاصيل إجابات الطالب المحدد */}
      {selectedStudent ? (
        <div className="bg-white border-2 border-teal-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 animate-fade-in">
          <div className="flex items-center justify-between pb-4 border-b border-teal-100">
            <button
              onClick={() => setSelectedStudent(null)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
            >
              <ArrowRight size={16} />
              <span>العودة لقائمة الطلاب</span>
            </button>
            <div className="text-left">
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200">
                مجموع درجات الطالب: {selectedStudent.totalScore} / 100 ({selectedStudent.status})
              </span>
            </div>
          </div>

          <div className="bg-teal-50/50 p-4 rounded-2xl border border-teal-100 flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <h2 className="text-base font-black text-slate-900">الطالب: {selectedStudent.name}</h2>
              <p className="text-xs text-slate-600 mt-0.5">الصف: {selectedStudent.gradeLevel}</p>
            </div>
            <span className="text-xs text-slate-500 self-start sm:self-center">تاريخ تسليم الاختبار: {selectedStudent.submissionDate}</span>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileText size={18} className="text-teal-600" />
              إجابات الطالب مفصلة (مقارنة بالأسئلة والمقالي ومفاتيح الإجابات):
            </h3>
            
            {selectedStudent.answers.map((ans: any, idx: number) => (
              <div 
                key={idx} 
                className={`p-5 rounded-2xl border transition-all space-y-3 ${
                  ans.isCorrect ? "bg-emerald-50/40 border-emerald-200" : "bg-rose-50/40 border-rose-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 bg-white text-slate-700 rounded-lg border border-slate-200">
                    السؤال ({idx + 1}) [{ans.type === "Essay" ? "سؤال مقالي" : ans.type === "MCQ" ? "اختيار من متعدد" : "صح وخطأ"}] - الدرجة: {ans.score}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-xl flex items-center gap-1.5 ${
                    ans.isCorrect ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
                  }`}>
                    {ans.isCorrect ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    {ans.isCorrect ? "إجابة صحيحة (معلمة صح)" : "إجابة خاطئة"}
                  </span>
                </div>

                <h4 className="text-sm font-black text-slate-900">{ans.questionText}</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs space-y-1">
                    <span className="text-slate-500 font-bold block mb-1">إجابة الطالب النصية:</span>
                    <span className="font-bold text-slate-800 block leading-relaxed">{ans.studentAnswer}</span>
                  </div>

                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-xs space-y-1">
                    <span className="text-emerald-700 font-bold block mb-1">مفتاح الإجابة النموذجية الصحيحة:</span>
                    <span className="font-black text-emerald-950 block leading-relaxed">{ans.correctAnswer}</span>
                  </div>
                </div>

                {/* ملاحظات وتقييم المقالي */}
                {ans.type === "Essay" && ans.essayFeedback && (
                  <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 mt-2">
                    <span className="font-bold block mb-0.5">ملاحظات ومراجعة المقالي:</span>
                    <span>{ans.essayFeedback}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* قائمة الـ 10 طلاب */
        <div className="bg-white border-2 border-teal-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-teal-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200">
                <Users size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">قائمة الطلاب الذين قاموا بالاختبار (10 طلاب)</h3>
                <span className="text-xs text-slate-500">انقر على اسم الطالب لعرض إجاباته المقالية والنتائج المفصلة</span>
              </div>
            </div>

            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute right-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="ابحث باسم الطالب..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-teal-50/40 border border-teal-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="bg-slate-50 hover:bg-teal-50/40 border border-slate-200 hover:border-teal-300 rounded-2xl p-5 cursor-pointer transition-all shadow-2xs flex items-center justify-between group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center">
                      {student.id}
                    </span>
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                      {student.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pr-9">{student.gradeLevel}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg inline-block mb-1 ${
                      student.status === "ناجح" ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                    }`}>
                      {student.totalScore} درجة ({student.status})
                    </span>
                    <span className="text-[10px] text-slate-400 block">{student.submissionDate}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all border border-slate-200 group-hover:border-teal-600">
                    <ChevronLeft size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}