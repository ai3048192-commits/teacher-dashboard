import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
  Users,
  Trash2,
  CheckCheck,
  PlusCircle,
  Edit3,
  ShieldAlert,
  UserCheck
} from "lucide-react";

export default function NotificationsAlertsPage() {
  // بيانات افتراضية للمجموعات والطلاب (15 طالباً لكل مجموعة)
  const [groupsWithStudents] = useState([
    {
      id: "g1",
      name: "مجموعة أ - الصف الأول الثانوي",
      students: [
        "أحمد محمد علي", "محمود إبراهيم", "يوسف خالد", "عمر عبد الله", "كريم حسن",
        "زياد أحمد", "مصطفى محمود", "علي رضا", "إبراهيم خالد", "سيف الدين",
        "حمزة أحمد", "مهند محمد", "بلال طارق", "أنس سعيد", "حسين علي"
      ]
    },
    {
      id: "g2",
      name: "مجموعة ب - الصف الثاني الثانوي",
      students: [
        "سارة أحمد", "فاطمة محمد", "مريم علي", "نوران خالد", "هنا إبراهيم",
        "جنا حسن", "ملك محمود", "ريم أحمد", "تسنيم خالد", "آية سعيد",
        "روان طارق", "خديجة عمر", "زينب حسن", "لجين محمد", "ملك إبراهيم"
      ]
    },
    {
      id: "g3",
      name: "مجموعة القمة - الصف الثالث الثانوي",
      students: [
        "عبد الرحمن أحمد", "محمد عادل", "محمود سعيد", "أحمد خالد", "إسلام حسن",
        "مصطفى رجب", "كريم عبد العزيز", "محمود الشريف", "علي حسن", "عمر فاروق",
        "بسام أحمد", "طارق محمد", "أيمن إبراهيم", "حسام الدين", "معاذ أحمد"
      ]
    }
  ]);

  // رسائل وتنبيهات الأدمن الواردة
  const [adminMessages, setAdminMessages] = useState([
    {
      id: 101,
      sender: "الإدارة المركزية (الأدمن)",
      title: "تحديث خطة الحصص الشهرية",
      message: "يرجى الالتزام بالمواعيد الجديدة المرفقة للنظام والتأكد من حضور جميع الطلاب المسجلين بالعدد الكامل (15 طالباً لكل مجموعة).",
      time: "منذ ساعة",
      read: false,
      priority: "هام جداً"
    },
    {
      id: 102,
      sender: "شؤون الطلاب (الأدمن)",
      title: "مراجعة كشوف الحضور والغياب",
      message: "تم رصد بعض الغياب في الفترات الأخيرة، يرجى تحديث تقارير المتابعة ورفعها عبر النظام بانتظام.",
      time: "أمس",
      read: true,
      priority: "متابعة عادية"
    }
  ]);

  // سجلات التنبيهات الخاصة بك (التي قمت بكتابتها)
  const [myNotifications, setMyNotifications] = useState([
    {
      id: 1,
      title: "تنبيه هام بخصوص اختبار البرمجة",
      customType: "تنبيه عاجل واختبار",
      message: "يرجى مراجعة الوحدات الأولى والثانية استعداداً للاختبار القصير.",
      targetGroup: "مجموعة أ - الصف الأول الثانوي",
      selectedStudents: ["أحمد محمد علي", "محمود إبراهيم", "يوسف خالد"],
      time: "اليوم - 10:00 ص"
    }
  ]);

  // حالات نموذج كتابة تنبيه جديد
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newCustomType, setNewCustomType] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(groupsWithStudents[0].name);
  const [activeTab, setActiveTab] = useState<"admin" | "my">("my"); // للتنقل بين تنبيهات الأدمن وتنبيهاتك

  // الطلاب التابعين للمجموعة المحددة حالياً
  const currentGroupObj = groupsWithStudents.find((g) => g.name === selectedGroup) || groupsWithStudents[0];
  const [selectedStudentsForAlert, setSelectedStudentsForAlert] = useState<string[]>([]);

  // تحديد أو إلغاء تحديد طالب
  const handleToggleStudent = (studentName: string) => {
    if (selectedStudentsForAlert.includes(studentName)) {
      setSelectedStudentsForAlert(selectedStudentsForAlert.filter((s) => s !== studentName));
    } else {
      setSelectedStudentsForAlert([...selectedStudentsForAlert, studentName]);
    }
  };

  // حفظ أو إضافة تنبيه جديد
  const handleSaveMyNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newMessage.trim()) return;

    if (editingId !== null) {
      // تعديل السجل الحالي
      setMyNotifications(
        myNotifications.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: newTitle,
                customType: newCustomType,
                message: newMessage,
                targetGroup: selectedGroup,
                selectedStudents: selectedStudentsForAlert.length > 0 ? selectedStudentsForAlert : ["كافة طلاب المجموعة"]
              }
            : item
        )
      );
      setEditingId(null);
    } else {
      // إضافة تنبيه جديد
      const newAlert = {
        id: Date.now(),
        title: newTitle,
        customType: newCustomType || "تنبيه عام",
        message: newMessage,
        targetGroup: selectedGroup,
        selectedStudents: selectedStudentsForAlert.length > 0 ? selectedStudentsForAlert : ["كافة طلاب المجموعة"],
        time: "الآن"
      };
      setMyNotifications([newAlert, ...myNotifications]);
    }

    // تفريغ الحقول
    setNewTitle("");
    setNewCustomType("");
    setNewMessage("");
    setSelectedStudentsForAlert([]);
  };

  // ترحيل بيانات التنبيه للنموذج للتعديل
  const handleEditMyNotification = (item: any) => {
    setEditingId(item.id);
    setNewTitle(item.title);
    setNewCustomType(item.customType);
    setNewMessage(item.message);
    setSelectedGroup(item.targetGroup);
    setSelectedStudentsForAlert(item.selectedStudents);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // تحديد رسالة الأدمن كمقروءة
  const handleMarkAdminAsRead = (id: number) => {
    setAdminMessages(
      adminMessages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
    );
  };

  const unreadAdminCount = adminMessages.filter((m) => !m.read).length;

  return (
    <div className="space-y-8 pb-12 bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="px-3.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
            <Bell size={13} />
            الإشعارات والرسائل الميدانية الشاملة
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
            إدارة التنبيهات، رسائل الأدمن، ومتابعة الطلاب
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
            قم بكتابة وتخصيص تنبيهاتك، تحديد المجموعات والطلاب بدقة، ومتابعة رسائل الإدارة أولاً بأول.
          </p>
        </div>
      </div>

      {/* شريط التنقل بين الأقسام (تنبيهات الأدمن vs سجلاتك) */}
      <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-2 rounded-3xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("my")}
            className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all ${
              activeTab === "my" ? "bg-blue-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            سجلاتي وتنبيهاتي الخاصة ({myNotifications.length})
          </button>
          
          <button
            onClick={() => setActiveTab("admin")}
            className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 ${
              activeTab === "admin" ? "bg-blue-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <span>التنبيهات والرسائل الواردة من الأدمن</span>
            {unreadAdminCount > 0 && (
              <span className="px-2 py-0.5 bg-rose-500 text-white rounded-full text-[10px] font-bold animate-pulse">
                {unreadAdminCount} غير مقروءة
              </span>
            )}
          </button>
        </div>
      </div>

      {/* قسم تنبيهات الأدمن الواردة (يظهر عند اختيار تبويب الأدمن) */}
      {activeTab === "admin" && (
        <div className="space-y-4">
          <h3 className="text-base font-black text-slate-900 px-1">
            رسائل وتنبيهات الأدمن الواردة ({adminMessages.length}):
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adminMessages.map((msg) => (
              <div
                key={msg.id}
                className={`border-2 rounded-3xl p-6 transition-all flex flex-col justify-between space-y-4 ${
                  !msg.read ? "bg-amber-50/50 border-amber-300 shadow-md" : "bg-white border-slate-200"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200 flex items-center gap-1">
                      <ShieldAlert size={12} /> {msg.sender}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-xl border border-rose-200">
                      {msg.priority}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-900">{msg.title}</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-white p-3 rounded-2xl border border-slate-200">
                      {msg.message}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className="text-slate-400 font-semibold">{msg.time}</span>
                  {!msg.read ? (
                    <button
                      onClick={() => handleMarkAdminAsRead(msg.id)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-xs"
                    >
                      <CheckCircle2 size={13} /> تحديد كمقروءة
                    </button>
                  ) : (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCheck size={14} /> مقروءة
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* قسم كتابة وتعديل التنبيهات الخاصة بك (يظهر عند اختيار تبويب سجلاتك) */}
      {activeTab === "my" && (
        <div className="space-y-8">
          
          {/* نموذج كتابة وإضافة أو تعديل التنبيه */}
          <div className={`border-2 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 transition-all ${
            editingId !== null ? "bg-amber-50/50 border-amber-300" : "bg-slate-50 border-blue-100"
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-900">
                <PlusCircle size={22} className={editingId !== null ? "text-amber-600" : "text-blue-600"} />
                <h3 className="text-base font-black">
                  {editingId !== null ? "تعديل التنبيه الخاص بك" : "كتابة تنبيه جديد وتوجيهه للطلاب"}
                </h3>
              </div>
              {editingId !== null && (
                <button
                  onClick={() => {
                    setEditingId(null);
                    setNewTitle("");
                    setNewCustomType("");
                    setNewMessage("");
                    setSelectedStudentsForAlert([]);
                  }}
                  className="text-xs font-bold text-rose-600 hover:underline"
                >
                  إلغاء التعديل
                </button>
              )}
            </div>

            <form onSubmit={handleSaveMyNotification} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* عنوان التنبيه */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">عنوان التنبيه:</label>
                  <input
                    type="text"
                    placeholder="مثال: تنبيه بخصوص موعد الاختبار"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* نوع التنبيه (كتابة حرة وليست اختيارات) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">نوع التنبيه (اكتبه بنفسك):</label>
                  <input
                    type="text"
                    placeholder="مثال: تنبيه عاجل، واجب منزلي، تنبيه إداري..."
                    value={newCustomType}
                    onChange={(e) => setNewCustomType(e.target.value)}
                    required
                    className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* اختيار المجموعة */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">اختر المجموعة الدراسية:</label>
                  <select
                    value={selectedGroup}
                    onChange={(e) => {
                      setSelectedGroup(e.target.value);
                      setSelectedStudentsForAlert([]); // إعادة ضبط الطلاب عند تغيير المجموعة
                    }}
                    className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  >
                    {groupsWithStudents.map((g) => (
                      <option key={g.id} value={g.name}>{g.name}</option>
                    ))}
                  </select>
                </div>

                {/* نص التنبيه */}
                <div className="space-y-1.5 lg:col-span-3">
                  <label className="text-xs font-bold text-slate-700">نص الرسالة أو التنبيه:</label>
                  <textarea
                    rows={3}
                    placeholder="اكتب تفاصيل التنبيه الموجه للطلاب هنا..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    required
                    className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>

              </div>

              {/* قسم عرض طلاب المجموعة المحددة لاختيار من تريد إرسال التنبيه إليهم */}
              <div className="space-y-3 bg-white p-5 rounded-3xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                    <Users size={15} className="text-blue-600" /> 
                    طلاب المجموعة المحددة ({selectedGroup}) - حدد الطلاب المستهدفين:
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    تم تحديد: {selectedStudentsForAlert.length} من {currentGroupObj.students.length} طالباً (إذا تركتها فارغة يُرسل للكل)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-2">
                  {currentGroupObj.students.map((student, idx) => {
                    const isSelected = selectedStudentsForAlert.includes(student);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => handleToggleStudent(student)}
                        className={`p-2.5 rounded-2xl text-xs font-bold transition-all border text-right flex items-center justify-between ${
                          isSelected 
                            ? "bg-blue-600 text-white border-blue-600 shadow-xs" 
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50/40"
                        }`}
                      >
                        <span className="truncate">{student}</span>
                        {isSelected && <UserCheck size={14} className="shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* زر الحفظ */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className={`px-8 py-3.5 rounded-2xl text-xs font-black shadow-md transition-all flex items-center gap-2 text-white ${
                    editingId !== null ? "bg-amber-600 hover:bg-amber-700" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <PlusCircle size={16} />
                  <span>{editingId !== null ? "حفظ وتحديث التنبيه" : "إرسال وحفظ التنبيه فوراً"}</span>
                </button>
              </div>

            </form>
          </div>

          {/* سجلات التنبيهات الخاصة بك */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-900 px-1">
              سجلات التنبيهات الخاصة بك ({myNotifications.length}):
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myNotifications.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border-2 border-slate-200 hover:border-blue-300 rounded-3xl p-6 shadow-xs space-y-4 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                        {item.customType}
                      </span>
                      
                      <button
                        onClick={() => handleEditMyNotification(item)}
                        className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl text-xs font-bold border border-amber-200 flex items-center gap-1 transition-all"
                      >
                        <Edit3 size={12} /> تعديل
                      </button>
                    </div>

                    <div>
                      <h4 className="text-sm font-black text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
                    <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500">المجموعة المستهدفة:</span>
                      <span className="font-bold text-slate-800">{item.targetGroup}</span>
                    </div>

                    <div className="space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block">الطلاب المستهدفون ({item.selectedStudents.length}):</span>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.selectedStudents.map((st, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 bg-white text-blue-700 border border-slate-200 rounded-lg text-[10px] font-bold">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>وقت الإرسال:</span>
                      <span className="font-bold">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}