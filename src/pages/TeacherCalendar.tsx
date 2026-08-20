import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  BookOpen,
  CheckCircle2,
  PlusCircle,
  FileText,
  UserCheck,
  Edit3
} from "lucide-react";

export default function CalendarAppointmentsPage() {
  // بيانات المواعيد والمجموعات
  const [appointmentsList, setAppointmentsList] = useState([
    {
      id: 1,
      gradeName: "الصف الأول الثانوي",
      groupName: "مجموعة أ - الأحد والثلاثاء (صباحي)",
      appointmentTime: "10:00 ص - 12:00 م",
      days: "الأحد والثلاثاء",
      teacher: "م. أحمد عبد الله (مدرس المادة الثابت)",
      notes: "يرجى الحضور قبل الموعد بـ 10 دقائق لإحضار الكتب",
      studentsCount: 15,
      status: "متبقي ساعتان"
    },
    {
      id: 2,
      gradeName: "الصف الأول الثانوي",
      groupName: "مجموعة ب - الإثنين والخميس (مسائي)",
      appointmentTime: "04:00 م - 06:00 م",
      days: "الإثنين والخميس",
      teacher: "م. أحمد عبد الله (مدرس المادة الثابت)",
      notes: "محاضرة تطبيقية عملية على لغة البرمجة",
      studentsCount: 15,
      status: "مفعل اليوم"
    },
    {
      id: 3,
      gradeName: "الصف الثاني الثانوي",
      groupName: "مجموعة المتميزين - السبت والأربعاء",
      appointmentTime: "02:00 م - 04:00 م",
      days: "السبت والأربعاء",
      teacher: "م. أحمد عبد الله (مدرس المادة الثابت)",
      notes: "مراجعة شاملة وتطبيقات على قواعد البيانات",
      studentsCount: 15,
      status: "متبقي ساعة"
    }
  ]);

  // حقول نموذج الإضافة أو التعديل
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newGradeName, setNewGradeName] = useState("الصف الأول الثانوي");
  const [newGroupName, setNewGroupName] = useState("");
  const [newAppointmentTime, setNewAppointmentTime] = useState("10:00 ص - 12:00 م");
  const [newDays, setNewDays] = useState("الأحد والثلاثاء");
  const [newNotes, setNewNotes] = useState("");

  // حفظ الموعد (سواء إضافة جديد أو تحديث القائم وترحيله للنموذج/القائمة)
  const handleSaveAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;

    if (editingId !== null) {
      // تحديث السجل الموجود
      setAppointmentsList(
        appointmentsList.map((item) =>
          item.id === editingId
            ? {
                ...item,
                gradeName: newGradeName,
                groupName: newGroupName,
                appointmentTime: newAppointmentTime,
                days: newDays,
                notes: newNotes || "لا توجد ملاحظات إضافية"
              }
            : item
        )
      );
      setEditingId(null);
    } else {
      // إضافة موعد جديد
      const newAppt = {
        id: Date.now(),
        gradeName: newGradeName,
        groupName: newGroupName,
        appointmentTime: newAppointmentTime,
        days: newDays,
        teacher: "م. أحمد عبد الله (مدرس المادة الثابت)",
        notes: newNotes || "لا توجد ملاحظات إضافية",
        studentsCount: 15,
        status: "مفعل جديد"
      };
      setAppointmentsList([newAppt, ...appointmentsList]);
    }

    // تفريغ الحقول بعد الحفظ
    setNewGroupName("");
    setNewNotes("");
  };

  // نقل بيانات السجل إلى نموذج الإضافة/التعديل بالأعلى فور الضغط على زر تعديل
  const handleEditClick = (item: any) => {
    setEditingId(item.id);
    setNewGradeName(item.gradeName);
    setNewGroupName(item.groupName);
    setNewAppointmentTime(item.appointmentTime);
    setNewDays(item.days);
    setNewNotes(item.notes);
    
    // التمرير بسلاسة للأعلى نحو النموذج
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8 pb-12 bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="px-3.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
            <CalendarIcon size={13} />
            إدارة المواعيد والتقويم الشاملة
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
            جدول مواعيد المجموعات الدراسية وإمكانية التعديل المباشر
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
            استعرض المواعيد الحالية، وعند الضغط على زر التعديل لأي سجل سيتم ترحيل بياناته فوراً للنموذج بالأعلى لتعديلها وحفظها بسلاسة.
          </p>
        </div>
      </div>

      {/* قسم النموذج (للإضافة أو التعديل المباشر عند الترحيل) */}
      <div className={`border-2 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 transition-all ${
        editingId !== null ? "bg-amber-50/50 border-amber-300" : "bg-slate-50 border-blue-100"
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-900">
            <PlusCircle size={22} className={editingId !== null ? "text-amber-600" : "text-blue-600"} />
            <h3 className="text-base font-black">
              {editingId !== null ? "تعديل بيانات السجل الحالي (تم الترحيل للنموذج)" : "إضافة موعد جديد للمجموعات"}
            </h3>
          </div>
          {editingId !== null && (
            <button
              onClick={() => {
                setEditingId(null);
                setNewGroupName("");
                setNewNotes("");
              }}
              className="text-xs font-bold text-rose-600 hover:underline"
            >
              إلغاء التعديل
            </button>
          )}
        </div>

        <form onSubmit={handleSaveAppointment} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* الصف الدراسي */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">الصف الدراسي:</label>
            <select
              value={newGradeName}
              onChange={(e) => setNewGradeName(e.target.value)}
              className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
            >
              <option value="الصف الأول الثانوي">الصف الأول الثانوي</option>
              <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
              <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
              <option value="الصف الرابع (مقررات تخصصية متقدمة)">الصف الرابع (مقررات تخصصية متقدمة)</option>
            </select>
          </div>

          {/* اسم المجموعة */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">اسم المجموعة:</label>
            <input
              type="text"
              placeholder="مثال: مجموعة الذكاء الاصطناعي (أ)"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              required
              className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* وقت المحاضرة */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">وقت المحاضرة:</label>
            <input
              type="text"
              placeholder="مثال: 10:00 ص - 12:00 م"
              value={newAppointmentTime}
              onChange={(e) => setNewAppointmentTime(e.target.value)}
              required
              className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* أيام الحصص */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">أيام الحصص:</label>
            <input
              type="text"
              placeholder="مثال: الأحد والثلاثاء"
              value={newDays}
              onChange={(e) => setNewDays(e.target.value)}
              required
              className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* الملاحظات */}
          <div className="space-y-1.5 lg:col-span-2">
            <label className="text-xs font-bold text-slate-700">ملاحظات:</label>
            <input
              type="text"
              placeholder="أدخل أي ملاحظات خاصة بالمحاضرة أو التجهيزات..."
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
              className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* زر الحفظ أو التعديل الفوري */}
          <div className="lg:col-span-3 flex justify-end pt-2">
            <button
              type="submit"
              className={`px-6 py-3 rounded-2xl text-xs font-black shadow-md transition-all flex items-center gap-2 text-white ${
                editingId !== null ? "bg-amber-600 hover:bg-amber-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              <PlusCircle size={16} />
              <span>{editingId !== null ? "حفظ التعديلات وترحيلها" : "إضافة الموعد فوراً"}</span>
            </button>
          </div>

        </form>
      </div>

      {/* شاشات المواعيد الحالية مع زر التعديل */}
      <div className="space-y-4">
        <h3 className="text-base font-black text-slate-900 px-1">
          السجلات والمواعيد الحالية ({appointmentsList.length} موعداً مسجلاً):
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointmentsList.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-slate-200 hover:border-blue-300 rounded-3xl p-6 shadow-xs space-y-4 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200 flex items-center gap-1">
                    <BookOpen size={12} /> {item.gradeName}
                  </span>
                  
                  {/* زر التعديل الذي يقوم بترحيل البيانات للنموذج بالأعلى */}
                  <button
                    onClick={() => handleEditClick(item)}
                    className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl text-xs font-bold border border-amber-200 flex items-center gap-1 transition-all"
                  >
                    <Edit3 size={12} /> تعديل السجل
                  </button>
                </div>

                <div>
                  <h4 className="text-sm font-black text-slate-900">{item.groupName}</h4>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <UserCheck size={13} className="text-blue-600" /> 
                    <span>المحاضر: <strong className="text-slate-700">{item.teacher}</strong></span>
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock size={14} className="text-blue-600" /> وقت المحاضرة:
                  </span>
                  <span className="font-bold text-slate-800">{item.appointmentTime}</span>
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <CalendarIcon size={14} className="text-indigo-600" /> الأيام:
                  </span>
                  <span className="font-bold text-slate-800">{item.days}</span>
                </div>

                <div className="flex items-start justify-between bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/60 gap-2">
                  <span className="flex items-center gap-1.5 text-amber-700 shrink-0 font-bold">
                    <FileText size={14} /> ملاحظات:
                  </span>
                  <span className="font-semibold text-slate-700 text-left">{item.notes}</span>
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Users size={14} className="text-teal-600" /> سعة المجموعة:
                  </span>
                  <span className="font-bold text-teal-700">{item.studentsCount} طالباً</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}