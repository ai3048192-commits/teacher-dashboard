import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Check,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Building2,
  X
} from "lucide-react";

export default function TeacherStudentSubscriptionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [successMessage, setSuccessMessage] = useState("");
  
  // حالة لعرض تفاصيل الطالب المحدد في نافذة منبثقة (Modal)
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<any>(null);

  // بيانات طلاب كثيرة ومتنوعة
  const [studentSubscriptions, setStudentSubscriptions] = useState([
    {
      id: 1,
      studentName: "يوسف أحمد إبراهيم",
      code: "STU-2026-901",
      grade: "الصف الثالث الثانوي",
      groupName: "مجموعة الفيزياء المتقدمة (أ)",
      contentName: "كورس الفيزياء الحديثة بالكامل",
      amountPaid: "450 ج.م",
      paymentMethod: "فودافون كاش",
      paymentNumber: "01012345678",
      receiptImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60",
      status: "pending",
      date: "2026-06-06"
    },
    {
      id: 2,
      studentName: "فاطمة محمد علي",
      code: "STU-2026-902",
      grade: "الصف الثاني الثانوي",
      groupName: "مجموعة الأساسيات (ب)",
      contentName: "مذكرة الفصل الأول + فيديوهات الشرح",
      amountPaid: "250 ج.م",
      paymentMethod: "انستاباي",
      paymentNumber: "fatima@instapay",
      receiptImage: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=600&auto=format&fit=crop&q=60",
      status: "active",
      date: "2026-06-05"
    },
    {
      id: 3,
      studentName: "عمر خالد محمود",
      code: "STU-2026-903",
      grade: "الصف الأول الثانوي",
      groupName: "مجموعة التفوق العامة",
      contentName: "اشتراك الشهر الحالي (مراجعة شاملة)",
      amountPaid: "300 ج.م",
      paymentMethod: "فودافون كاش",
      paymentNumber: "01098765432",
      receiptImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60",
      status: "pending",
      date: "2026-06-06"
    },
    {
      id: 4,
      studentName: "ريم حسام الدين",
      code: "STU-2026-904",
      grade: "الصف الثالث الثانوي",
      groupName: "مجموعة الأبطال (إلكتروني)",
      contentName: "الباب الثاني كيمياء تحليلية",
      amountPaid: "350 ج.م",
      paymentMethod: "انستاباي",
      paymentNumber: "reem.h@instapay",
      receiptImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60",
      status: "active",
      date: "2026-06-04"
    },
    {
      id: 5,
      studentName: "محمود سعد الجارحي",
      code: "STU-2026-905",
      grade: "الصف الثاني الثانوي",
      groupName: "مجموعة الرياضيات البحتة",
      contentName: "كورس التفاضل والتكامل كاملاً",
      amountPaid: "500 ج.م",
      paymentMethod: "فودافون كاش",
      paymentNumber: "01055544332",
      receiptImage: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=600&auto=format&fit=crop&q=60",
      status: "rejected",
      date: "2026-06-03"
    },
    {
      id: 6,
      studentName: "نوران أحمد السيد",
      code: "STU-2026-906",
      grade: "الصف الثالث الثانوي",
      groupName: "مجموعة الأحياء التخصصية",
      contentName: "الدعامة والتكاثر في الكائنات الحية",
      amountPaid: "400 ج.م",
      paymentMethod: "فودافون كاش",
      paymentNumber: "01011223344",
      receiptImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60",
      status: "pending",
      date: "2026-06-06"
    }
  ]);

  const handleApprove = (id: number) => {
    setStudentSubscriptions(
      studentSubscriptions.map((sub) =>
        sub.id === id ? { ...sub, status: "active" } : sub
      )
    );
    if (selectedStudentDetail && selectedStudentDetail.id === id) {
      setSelectedStudentDetail({ ...selectedStudentDetail, status: "active" });
    }
    setSuccessMessage("تم قبول اشتراك الطالب وتفعيل وصوله للمحتوى بنجاح! ✅");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleReject = (id: number) => {
    setStudentSubscriptions(
      studentSubscriptions.map((sub) =>
        sub.id === id ? { ...sub, status: "rejected" } : sub
      )
    );
    if (selectedStudentDetail && selectedStudentDetail.id === id) {
      setSelectedStudentDetail({ ...selectedStudentDetail, status: "rejected" });
    }
    setSuccessMessage("تم رفض إيصال الدفع وإرسال تنبيه للطالب. ⚠️");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const filteredStudents = studentSubscriptions.filter((sub) => {
    const matchesSearch =
      sub.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.groupName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || sub.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 bg-white text-slate-800 min-h-screen pb-16" dir="rtl">
      
      {/* رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 rounded-3xl p-6 sm:p-10 shadow-xl text-white border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-white/25 backdrop-blur-md text-white text-[11px] font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
              <Users size={12} />
              إدارة الاشتراكات المالية للطلاب
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
              متابعة اشتراكات وإيصالات دفع الطلاب
            </h1>
            <p className="text-xs sm:text-sm text-blue-200 font-semibold">
              اضغط على أي طالب لعرض كرت التفاصيل الكامل (المجموعة، الصف، الكود، المحتوى، وطريقة الدفع).
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

      {successMessage && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-200 text-emerald-900 rounded-2xl flex items-center gap-2 text-xs font-bold shadow-sm">
          <Check size={18} className="text-emerald-600" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-sm"><Users size={24} /></div>
          <div><p className="text-xs font-bold text-slate-500">إجمالي طلبات الطلاب</p><h3 className="text-lg font-black text-slate-800">{studentSubscriptions.length} طلبات</h3></div>
        </div>
        <div className="bg-emerald-50/50 border-2 border-emerald-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-sm"><CheckCircle2 size={24} /></div>
          <div><p className="text-xs font-bold text-slate-500">الاشتراكات المفعلة</p><h3 className="text-lg font-black text-slate-800">{studentSubscriptions.filter(s => s.status === 'active').length} طالب</h3></div>
        </div>
        <div className="bg-amber-50/50 border-2 border-amber-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="p-3 bg-amber-600 text-white rounded-2xl shadow-sm"><Clock size={24} /></div>
          <div><p className="text-xs font-bold text-slate-500">بانتظار المراجعة</p><h3 className="text-lg font-black text-slate-800">{studentSubscriptions.filter(s => s.status === 'pending').length} طلبات</h3></div>
        </div>
      </div>

      {/* البحث والفلترة */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="بحث باسم الطالب، الكود، أو المجموعة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter size={16} className="text-blue-600" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold focus:outline-none focus:border-blue-500 w-full md:w-auto"
          >
            <option value="all">كل حالات الاشتراكات</option>
            <option value="active">مفعل (تم القبول)</option>
            <option value="pending">معلق (بانتظار المراجعة)</option>
            <option value="rejected">مرفوض</option>
          </select>
        </div>
      </div>

      {/* جدول عرض الطلاب */}
      <div className="bg-white border-2 border-blue-100 rounded-3xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-blue-50/70 border-b border-blue-100 text-[11px] font-black text-slate-700">
                <th className="p-4 sm:px-6">الطالب والكود</th>
                <th className="p-4">الصف والمجموعة</th>
                <th className="p-4">المحتوى المدفوع له</th>
                <th className="p-4">المبلغ وطريقة الدفع</th>
                <th className="p-4">الحالة</th>
                <th className="p-4 sm:px-6 text-center">عرض تفاصيل الكرت والايصال</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50 text-xs font-semibold">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:px-6 space-y-0.5">
                      <div className="font-black text-slate-900">{sub.studentName}</div>
                      <div className="text-[11px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                        {sub.code}
                      </div>
                    </td>
                    <td className="p-4 space-y-0.5">
                      <div className="font-bold text-slate-800">{sub.grade}</div>
                      <div className="text-[11px] text-slate-500">{sub.groupName}</div>
                    </td>
                    <td className="p-4 font-bold text-indigo-900">
                      <div className="flex items-center gap-1.5">
                        <BookOpen size={14} className="text-blue-600 shrink-0" />
                        <span>{sub.contentName}</span>
                      </div>
                    </td>
                    <td className="p-4 space-y-0.5">
                      <div className="font-black text-slate-900">{sub.amountPaid}</div>
                      <div className="text-[11px] text-slate-500">{sub.paymentMethod}</div>
                    </td>
                    <td className="p-4">
                      {sub.status === "active" && (
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold border border-emerald-200 inline-block">
                          مفعل ✓
                        </span>
                      )}
                      {sub.status === "pending" && (
                        <span className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-[10px] font-bold border border-amber-200 inline-block">
                          بانتظار المراجعة ⌛
                        </span>
                      )}
                      {sub.status === "rejected" && (
                        <span className="px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full text-[10px] font-bold border border-rose-200 inline-block">
                          مرفوض ✕
                        </span>
                      )}
                    </td>
                    <td className="p-4 sm:px-6 text-center">
                      <button
                        onClick={() => setSelectedStudentDetail(sub)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black shadow-md transition-all inline-flex items-center gap-1.5"
                      >
                        <Eye size={15} />
                        <span>عرض كرت التفاصيل والإيصال</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-slate-400 font-bold">
                    لا توجد طلبات اشتراك مطابقة لبحثك.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* نافذة منبثقة (Modal) لعرض كرت تفاصيل الطالب بالكامل والإيصال */}
      {selectedStudentDetail && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 shadow-2xl relative my-8" dir="rtl">
            
            {/* رأس الـ Modal */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black rounded-md">
                  {selectedStudentDetail.code}
                </span>
                <h3 className="text-lg font-black text-slate-900">{selectedStudentDetail.studentName}</h3>
              </div>
              <button
                onClick={() => setSelectedStudentDetail(null)}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* تفاصيل الكرت الشاملة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <span className="text-slate-400 font-bold block">الصف الدراسي:</span>
                <span className="font-black text-slate-800 text-sm">{selectedStudentDetail.grade}</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <span className="text-slate-400 font-bold block">المجموعة الدراسية:</span>
                <span className="font-black text-slate-800 text-sm">{selectedStudentDetail.groupName}</span>
              </div>

              <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl space-y-1 sm:col-span-2">
                <span className="text-indigo-400 font-bold block">محتوى الكورس أو الحزمة المدفوع لها:</span>
                <span className="font-black text-indigo-950 text-sm flex items-center gap-2">
                  <BookOpen size={16} className="text-indigo-600" />
                  {selectedStudentDetail.contentName}
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <span className="text-slate-400 font-bold block">المبلغ المدفوع:</span>
                <span className="font-black text-emerald-700 text-base">{selectedStudentDetail.amountPaid}</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <span className="text-slate-400 font-bold block">طريقة ورقم الدفع:</span>
                <span className="font-black text-slate-800 flex items-center gap-1.5">
                  <Smartphone size={14} className="text-rose-600" />
                  {selectedStudentDetail.paymentMethod} ({selectedStudentDetail.paymentNumber})
                </span>
              </div>
            </div>

            {/* معاينة إيصال التحويل */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-800 block">إيصال التحويل المُرفق من الطالب:</label>
              <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-900 max-h-72 flex items-center justify-center p-2">
                <img
                  src={selectedStudentDetail.receiptImage}
                  alt="إيصال التحويل"
                  className="max-h-64 object-contain rounded-xl"
                />
              </div>
            </div>

            {/* أزرار الإجراءات داخل الـ Modal */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <div>
                {selectedStudentDetail.status === "active" ? (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 inline-block">
                    ✓ تم قبول هذا الطالب وتفعيل حسابه مسبقاً
                  </span>
                ) : selectedStudentDetail.status === "rejected" ? (
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200 inline-block">
                    ✕ تم رفض الإيصال سابقاً
                  </span>
                ) : (
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 inline-block">
                    ⌛ الطلب بانتظار اتخاذ قرار
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedStudentDetail(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  إغلاق
                </button>
                {selectedStudentDetail.status !== "active" && (
                  <button
                    type="button"
                    onClick={() => handleApprove(selectedStudentDetail.id)}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow-md transition-all"
                  >
                    قبول وتفعيل الفتح للوصول
                  </button>
                )}
                {selectedStudentDetail.status === "pending" && (
                  <button
                    type="button"
                    onClick={() => handleReject(selectedStudentDetail.id)}
                    className="px-5 py-2.5 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-xl text-xs font-bold transition-all"
                  >
                    رفض الإيصال
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}