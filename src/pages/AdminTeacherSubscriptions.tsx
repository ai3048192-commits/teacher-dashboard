import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Check,
  ArrowRight,
  CreditCard,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Clock,
  Zap,
  Award,
  Crown
} from "lucide-react";

export default function TeacherSubscriptionPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [step, setStep] = useState<"plans" | "checkout" | "success">("plans");
  const [successMessage, setSuccessMessage] = useState("");

  // بيانات الباقات (تصاعدية المميزات والأسعار تبدأ من فوق 500)
  const plans = [
    {
      id: 1,
      name: "الباقة الأساسية للبدء والانطلاق",
      price: "650",
      period: "شهرياً",
      description: "المثالية للمدرسين لبدء رفع الكورسات وإدارة الحصص الأولى.",
      features: [
        "إدارة وتصميم حتى 5 كورسات دراسية",
        "رفع حتى 50 درس فيديو بجودة عالية",
        "متابعة حضور وغياب حتى 200 طالب",
        "دعم فني عبر البريد الإلكتروني"
      ],
      badge: "بداية قوية",
      color: "border-slate-200 bg-white"
    },
    {
      id: 2,
      name: "الباقة المتقدمة (تشمل مميزات الأولى +)",
      price: "1,450",
      period: "كل 3 شهور (ربع سنوي)",
      description: "تشمل جميع مميزات الباقة الأساسية مضافاً إليها أدوات إضافية للتوسع.",
      features: [
        "✅ جميع مميزات الباقة الأساسية",
        "كورسات وفيديوهات بلا حدود (عدد غير محدود)",
        "إدارة مجموعات طلابية غير محدودة",
        "نظام تصحيح الواجبات والاختبارات الآلي",
        "تقارير أداء الطلاب الشاملة",
        "دعم فني أسرع"
      ],
      badge: "الأكثر طلباً ⭐",
      color: "border-indigo-500 bg-indigo-50/20 shadow-xl scale-105"
    },
    {
      id: 3,
      name: "الباقة الاحترافية الشاملة (Pro - تشمل كل شيء)",
      price: "3,200",
      period: "سنوياً (توفير مضاعف)",
      description: "الخيار الأضخم للأكاديميات وكبار المعلمين لامتلاك منصة تعليمية متكاملة.",
      features: [
        "✅ جميع مميزات الباقة الأولى والثانية",
        "تخزين سحابي ضخم ومساحة غير محدودة للدروس",
        "تخصيص كامل للهوية البصرية واسم المنصة الخاصة بك",
        "أولوية قصوى ودعم فني خاص على مدار الساعة (VIP)",
        "لوحة إحصائيات مالية وأرباح متقدمة جداً"
      ],
      badge: "الاحترافية المطلقة 👑",
      color: "border-emerald-500 bg-emerald-50/20 shadow-2xl"
    }
  ];

  const handleProceedToCheckout = (plan: any) => {
    setSelectedPlan(plan);
    setStep("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      alert("الرجاء اختيار طريقة دفع واحدة (فودافون كاش أو انستاباي).");
      return;
    }
    setStep("success");
    setSuccessMessage("تم استلام إيصال الدفع بنجاح! طلبك الآن قيد المراجعة الفورية من قِبل الأدمن، وسيتم تفعيل وفتح المنصة الكاملة لحسابك خلال ساعات قليلة.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8 bg-white text-slate-800 min-h-screen pb-16" dir="rtl">
      
      {/* رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 rounded-3xl p-6 sm:p-10 shadow-xl text-white border border-indigo-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-white/25 backdrop-blur-md text-white text-[11px] font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
              <Sparkles size={12} />
              باقات اشتراك المعلمين في المنصة
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
              اختر باقتك التعليمية وانطلق بنجاح
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 font-semibold">
              باقات متدرجة ومصممة خصيصاً لتناسب حجم تدريسك وأكاديميتك على المنصة.
            </p>
          </div>

          <Link
            to="/teacher-dashboard"
            className="px-5 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl text-xs font-black shadow-lg transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <ArrowRight size={16} />
            <span>العودة للوحة المعلم</span>
          </Link>
        </div>
      </div>

      {/* رسالة نجاح تقديم الطلب والمراجعة */}
      {successMessage && step === "success" && (
        <div className="p-8 bg-emerald-50 border-2 border-emerald-200 text-emerald-900 rounded-3xl space-y-4 text-center shadow-lg max-w-2xl mx-auto">
          <Clock size={56} className="mx-auto text-emerald-600 animate-pulse" />
          <h2 className="text-xl font-black text-slate-900">جاري مراجعة طلبك وتفعيل المنصة...</h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed max-w-lg mx-auto">
            {successMessage}
          </p>
          <div className="pt-4">
            <Link
              to="/teacher-dashboard"
              className="px-8 py-3.5 bg-emerald-600 text-white rounded-2xl text-xs font-black shadow-xl hover:bg-emerald-700 transition-all inline-block"
            >
              الذهاب إلى لوحة التحكم الرئيسية
            </Link>
          </div>
        </div>
      )}

      {/* الخطوة الأولى: عرض الباقات الثلاثة المتدرجة */}
      {step === "plans" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border-2 rounded-3xl p-6 flex flex-col justify-between transition-all hover:scale-[1.02] ${plan.color}`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-[10px] font-black rounded-full">
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-500 font-semibold">{plan.description}</p>

                <div className="py-3 border-y border-slate-100 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-indigo-900">{plan.price}</span>
                  <span className="text-xs text-slate-500 font-bold">ج.م / {plan.period}</span>
                </div>

                <ul className="space-y-2.5 text-xs font-semibold text-slate-700 pt-2">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleProceedToCheckout(plan)}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black shadow-lg transition-all"
                >
                  اختر الباقة وانتقل للدفع
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* الخطوة الثانية: الدفع عبر رقم ثابت (فودافون كاش أو انستاباي فقط) */}
      {step === "checkout" && selectedPlan && (
        <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-indigo-50">
            <div>
              <span className="text-xs font-bold text-indigo-600 block">إتمام الاشتراك الآمن</span>
              <h2 className="text-xl font-black text-slate-900">اختر طريقة الدفع (فودافون كاش أو انستا باي)</h2>
            </div>
            <button
              onClick={() => setStep("plans")}
              className="text-xs font-bold text-slate-500 hover:text-slate-900 underline"
            >
              تغيير الباقة
            </button>
          </div>

          {/* ملخص الباقة والمبلغ المطلوبة */}
          <div className="p-4 bg-indigo-50/60 border border-indigo-100 rounded-2xl flex items-center justify-between text-xs font-bold">
            <div>
              <span className="text-slate-500 block">الباقة المختارة:</span>
              <span className="text-indigo-950 text-sm font-black">{selectedPlan.name}</span>
            </div>
            <div className="text-left">
              <span className="text-slate-500 block">المبلغ الإجمالي للاستحقاق:</span>
              <span className="text-indigo-950 text-base font-black">{selectedPlan.price} ج.م</span>
            </div>
          </div>

          <form onSubmit={handleConfirmPayment} className="space-y-6">
            <div className="space-y-4">
              <label className="text-xs font-black text-slate-800 block">طرق الدفع الثابتة المتاحة:</label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* فودافون كاش */}
                <div
                  onClick={() => setSelectedPaymentMethod("vodafone")}
                  className={`cursor-pointer border-2 rounded-2xl p-5 transition-all flex flex-col justify-between ${
                    selectedPaymentMethod === "vodafone"
                      ? "border-indigo-600 bg-indigo-50/40 shadow-md"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-rose-600 text-white">
                        <Smartphone size={20} />
                      </div>
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPaymentMethod === "vodafone"}
                        onChange={() => setSelectedPaymentMethod("vodafone")}
                        className="accent-indigo-600 w-4 h-4"
                      />
                    </div>
                    <h4 className="text-xs font-black text-slate-900">فودافون كاش (Vodafone Cash)</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      قم بالتحويل على رقم المنصة المخصص: <span className="text-rose-600 font-black block text-sm mt-1">01026377928</span>
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    اطلب #9* تحويل المبلغ للرقم أعلاه.
                  </div>
                </div>

                {/* انستاباي */}
                <div
                  onClick={() => setSelectedPaymentMethod("instapay")}
                  className={`cursor-pointer border-2 rounded-2xl p-5 transition-all flex flex-col justify-between ${
                    selectedPaymentMethod === "instapay"
                      ? "border-indigo-600 bg-indigo-50/40 shadow-md"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-purple-600 text-white">
                        <CreditCard size={20} />
                      </div>
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPaymentMethod === "instapay"}
                        onChange={() => setSelectedPaymentMethod("instapay")}
                        className="accent-indigo-600 w-4 h-4"
                      />
                    </div>
                    <h4 className="text-xs font-black text-slate-900">انستا باي (InstaPay)</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      قم بالتحويل على الحساب أو رقم الهاتف الموحد للمنصة: <span className="text-purple-600 font-black block text-sm mt-1">01026377928</span>
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    حول للمحفظة أو العنوان المذكور مباشرة.
                  </div>
                </div>

              </div>
            </div>

            {/* رفع صورة الإيصال */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">رفع صورة إيصال التحويل (مطلوب للتأكيد):</label>
              <input
                type="file"
                accept="image/*,.pdf"
                required
                className="w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 border border-slate-200 rounded-2xl p-2 bg-slate-50 cursor-pointer"
              />
              <p className="text-[10px] text-slate-400">أرفق سكرين شوت لعملية التحويل الناجحة ليقوم الأدمن بالمراجعة والفتح الفوري.</p>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setStep("plans")}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-bold transition-all"
              >
                رجوع للباقات
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black shadow-lg transition-all"
              >
                تأكيد الدفع وإرسال الطلب للأدمن
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}