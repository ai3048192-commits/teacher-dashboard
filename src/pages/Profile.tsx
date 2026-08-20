import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Settings,
  Shield,
  Bell,
  Edit3,
  Camera,
  Save,
  Check,
  Trash2,
  Upload,
  MessageSquare,
  FileText,
  XCircle,
  AlertTriangle,
  KeyRound,
  ShieldCheck,
  Building,
  Briefcase,
  MapPin,
  Phone,
  Eye
} from "lucide-react";

export default function TeacherProfilePage() {
  // حالة بيانات المدرس الشخصية والمهنية
  const [teacherInfo, setTeacherInfo] = useState({
    name: "أحمد محمود الفخراني",
    email: "ahmed.elfakharany@zed-platform.com",
    role: "مدرس خبير - مادة علوم الحاسب وتطوير الويب",
    phone: "+20 1012345678",
    country: "جمهورية مصر العربية",
    city: "القاهرة",
    address: "شارع الهرم، الجيزة",
    joinDate: "سبتمبر 2022",
    bio: "مدرس وخبير تقني بخبرة تزيد عن 8 سنوات في تدريس البرمجة وتطوير الويب لطلاب المراحل الثانوية والجامعية. شغوف بتمكين الجيل القادم من المهارات الرقمية.",
    facebook: "facebook.com/ahmed.teacher.tech",
    instagram: "instagram.com/ahmed_tech_edu",
    schools: "مدرسة النخبة الثانوية للبنين، أكاديمية المستقبل الدولية",
    experienceYears: "8 سنوات",
  });

  // حالة صورة البروفايل الشخصية
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // حالات رفع صورة البطاقة الشخصية (الوجه والظهر)
  const [idFrontImage, setIdFrontImage] = useState<string | null>(null);
  const [idBackImage, setIdBackImage] = useState<string | null>(null);
  const idFrontInputRef = useRef<HTMLInputElement>(null);
  const idBackInputRef = useRef<HTMLInputElement>(null);

  // حالة عرض الصورة الكبيرة (Modal معاينة الهوية)
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // حالة وضع التعديل ورسائل النجاح
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // حالات نافذة تغيير كلمة المرور اليدوية
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // قائمة الدورات والطلاب المسجلين مع المدرس
  const [teacherCourses, setTeacherCourses] = useState([
    {
      id: 1,
      name: "دبلوم تطوير الويب المتقدم Full-Stack",
      studentsCount: 142,
      status: "نشط حالياً",
      category: "برمجة",
    },
    {
      id: 2,
      name: "أساسيات البرمجة بلغة بايثون للشباب",
      studentsCount: 98,
      status: "نشط حالياً",
      category: "برمجة",
    },
    {
      id: 3,
      name: "مقدمة في قواعد البيانات والذكاء الاصطناعي",
      studentsCount: 75,
      status: "مكتمل",
      category: "ذكاء اصطناعي",
    },
  ]);

  // معالجة تغيير الصورة الشخصية
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setSuccessMessage("تم تحديث صورة الملف الشخصي للمدرس بنجاح! 📸");
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  };

  // رفع صورة وجه البطاقة
  const handleIdFrontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIdFrontImage(URL.createObjectURL(file));
      setSuccessMessage("تم رفع صورة (وجه البطاقة الشخصية) بنجاح 🪪");
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  };

  // رفع صورة ظهر البطاقة
  const handleIdBackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIdBackImage(URL.createObjectURL(file));
      setSuccessMessage("تم رفع صورة (ظهر البطاقة الشخصية) بنجاح 🪪");
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  };

  // حفظ التعديلات الشخصية للمدرس
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSuccessMessage("تم حفظ وتحديث كافة البيانات المهنية والشخصية للمدرس بنجاح! ✨");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  // تغيير كلمة المرور يدوياً مع الشروط والتحقق
  const handlePasswordChangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    if (newPassword.length < 8) {
      setPasswordError("يجب ألا تقل كلمة المرور الجديدة عن 8 أحرف.");
      return;
    }
    if (!/[A-Z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
      setPasswordError("يجب أن تحتوي كلمة المرور على حرف كبير (A-Z) ورقم واحد (0-9) على الأقل.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("كلمة المرور الجديدة وتأكيدها غير متطابقين.");
      return;
    }

    setIsPasswordModalOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setSuccessMessage("تم تغيير كلمة المرور الخاصة بحساب المدرس بنجاح تام! 🔒✨");
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="space-y-8 bg-white text-slate-800 min-h-screen pb-16" dir="rtl">
      
      {/* 1. رأس الصفحة والغلاف الخاص بالمدرس */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 rounded-3xl p-6 sm:p-10 shadow-xl text-white border border-indigo-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-right">
            
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-600 to-blue-400 p-1 shadow-xl overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Teacher Profile" className="w-full h-full object-cover rounded-[22px]" />
                ) : (
                  <div className="w-full h-full bg-slate-800 rounded-[22px] flex items-center justify-center text-3xl font-black text-white">
                    👨‍🏫
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 left-0 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all"
                title="تغيير الصورة الشخصية"
              >
                <Camera size={14} />
              </button>
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-white/25 backdrop-blur-md text-white text-[11px] font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
                <Sparkles size={12} />
                حساب مدرس معتمد ورئيسي - منصة zed
              </span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
                {teacherInfo.name}
              </h1>
              <p className="text-xs sm:text-sm text-indigo-200 font-semibold">
                {teacherInfo.role} | خبرة {teacherInfo.experienceYears} | منضم منذ {teacherInfo.joinDate}
              </p>
            </div>
          </div>

          <Link
            to="/dashboard"
            className="px-5 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl text-xs font-black shadow-lg transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <ArrowRight size={16} />
            <span>لوحة تحكم المدرس</span>
          </Link>
        </div>
      </div>

      {/* رسالة النجاح والتنبيه */}
      {successMessage && (
        <div className="p-4 bg-indigo-50 border-2 border-indigo-200 text-indigo-900 rounded-2xl flex items-center gap-2 text-xs font-bold shadow-sm">
          <Check size={18} className="text-indigo-600" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* إحصائيات المدرس السريعة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-indigo-50/50 border-2 border-indigo-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-sm"><BookOpen size={24} /></div>
          <div><p className="text-xs font-bold text-slate-500">الدورات التي تدرسها</p><h3 className="text-lg font-black text-slate-800">{teacherCourses.length} دورات نشطة</h3></div>
        </div>
        <div className="bg-blue-50/50 border-2 border-blue-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-sm"><User size={24} /></div>
          <div><p className="text-xs font-bold text-slate-500">إجمالي الطلاب المسجلين</p><h3 className="text-lg font-black text-slate-800">315 طالباً</h3></div>
        </div>
        <div className="bg-emerald-50/50 border-2 border-emerald-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-sm"><Award size={24} /></div>
          <div><p className="text-xs font-bold text-slate-500">التقييم العام للمدرس</p><h3 className="text-lg font-black text-slate-800">4.9 / 5.0 (ممتاز)</h3></div>
        </div>
        <div className="bg-purple-50/50 border-2 border-purple-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="p-3 bg-purple-600 text-white rounded-2xl shadow-sm"><ShieldCheck size={24} /></div>
          <div><p className="text-xs font-bold text-slate-500">حالة الهوية الرسمية</p><h3 className="text-lg font-black text-emerald-600">موثقة ومقبولة ✓</h3></div>
        </div>
      </div>

      {/* قسم تعديل بيانات المدرس الشخصية والمهنية */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* نموذج البيانات الأساسية والمهنية */}
        <div className="lg:col-span-2 bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-indigo-50">
            <div className="flex items-center gap-2.5">
              <Briefcase size={20} className="text-indigo-600" />
              <h2 className="text-base font-black text-slate-800">الملف المهني ومعلومات المدرس الشخصية</h2>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Edit3 size={14} />
              <span>{isEditing ? "إلغاء التعديل" : "تعديل بياناتي"}</span>
            </button>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">اسم المدرس الثلاثي/الرباعي</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={teacherInfo.name}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500 disabled:opacity-75"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">البريد الإلكتروني الرسمي</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={teacherInfo.email}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500 disabled:opacity-75"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">رقم الهاتف الأساسي</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={teacherInfo.phone}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500 disabled:opacity-75"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">العنوان بالتفصيل (المحافظة/المدينة)</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={teacherInfo.address}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, address: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500 disabled:opacity-75"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">أسماء المدارس / المؤسسات التي تعمل بها</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={teacherInfo.schools}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, schools: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500 disabled:opacity-75"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">رابط صفحة فيسبوك أو لينكدإن</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={teacherInfo.facebook}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, facebook: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500 disabled:opacity-75"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">نبذة تعريفية عن المدرس (السيرة الذاتية المختصرة)</label>
              <textarea
                disabled={!isEditing}
                rows={3}
                value={teacherInfo.bio}
                onChange={(e) => setTeacherInfo({ ...teacherInfo, bio: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500 disabled:opacity-75 resize-none"
              />
            </div>

            {isEditing && (
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Save size={16} />
                <span>حفظ التعديلات الجديدة</span>
              </button>
            )}
          </form>
        </div>

        {/* إعدادات الأمان الجانبية وتغيير كلمة المرور */}
        <div className="space-y-6">
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
              <Shield size={18} className="text-indigo-600" /> حماية حساب المدرس
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              تغيير كلمة المرور بشكل دوري يحمي حسابك ودوراتك ويسهل إدارتك الآمنة.
            </p>
            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className="w-full py-3 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <KeyRound size={15} />
              <span>تغيير كلمة المرور يدوياً</span>
            </button>
          </div>

          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
              <Bell size={18} className="text-indigo-600" /> إشعارات المدرس
            </h3>
            <div className="space-y-3 text-xs font-semibold text-slate-600">
              <label className="flex items-center justify-between cursor-pointer">
                <span>تنبيهات تسجيل الطلاب الجدد</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span>رسائل واستفسارات الطلاب</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600 rounded" />
              </label>
            </div>
          </div>
        </div>

      </div>

      {/* 🪪 قسم رفع صورة الهوية / البطاقة الشخصية (الوجه والظهر) */}
      <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-indigo-50">
          <div className="flex items-center gap-2.5">
            <FileText size={22} className="text-indigo-600" />
            <div>
              <h3 className="text-base font-black text-slate-800">صورة البطاقة الشخصية / الهوية الرسمية (وجه وظهر)</h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">مطلوبة لتوثيق الحساب رسمياً كمعلم معتمد على المنصة.</p>
            </div>
          </div>
          <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-xl border border-emerald-200">
            🔒 بيانات مشفرة وآمنة تماماً
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* وجه البطاقة */}
          <div className="border-2 border-dashed border-indigo-200 rounded-3xl p-5 bg-indigo-50/30 flex flex-col items-center justify-center text-center space-y-4 hover:border-indigo-400 transition-all">
            <div className="w-full h-44 bg-white rounded-2xl border border-indigo-100 overflow-hidden flex items-center justify-center relative shadow-xs">
              {idFrontImage ? (
                <>
                  <img src={idFrontImage} alt="ID Front" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button onClick={() => setPreviewImage(idFrontImage)} className="p-2.5 bg-white text-slate-900 rounded-xl shadow-md font-bold" title="معاينة المكبرة">
                      <Eye size={16} />
                    </button>
                    <button onClick={() => setIdFrontImage(null)} className="p-2.5 bg-red-600 text-white rounded-xl shadow-md font-bold" title="حذف الصورة">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-2 p-4">
                  <Upload size={32} className="mx-auto text-indigo-400" />
                  <p className="text-xs font-black text-slate-700">صورة البطاقة الشخصية (الوجه الأمامي)</p>
                  <p className="text-[10px] text-slate-400">PNG, JPG حتى 10MB</p>
                </div>
              )}
            </div>

            <input
              type="file"
              ref={idFrontInputRef}
              onChange={handleIdFrontChange}
              accept="image/*"
              className="hidden"
            />
            
            <button
              onClick={() => idFrontInputRef.current?.click()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <Upload size={14} />
              <span>{idFrontImage ? "تغيير وجه البطاقة" : "رفع وجه البطاقة"}</span>
            </button>
          </div>

          {/* ظهر البطاقة */}
          <div className="border-2 border-dashed border-indigo-200 rounded-3xl p-5 bg-indigo-50/30 flex flex-col items-center justify-center text-center space-y-4 hover:border-indigo-400 transition-all">
            <div className="w-full h-44 bg-white rounded-2xl border border-indigo-100 overflow-hidden flex items-center justify-center relative shadow-xs">
              {idBackImage ? (
                <>
                  <img src={idBackImage} alt="ID Back" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button onClick={() => setPreviewImage(idBackImage)} className="p-2.5 bg-white text-slate-900 rounded-xl shadow-md font-bold" title="معاينة المكبرة">
                      <Eye size={16} />
                    </button>
                    <button onClick={() => setIdBackImage(null)} className="p-2.5 bg-red-600 text-white rounded-xl shadow-md font-bold" title="حذف الصورة">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-2 p-4">
                  <Upload size={32} className="mx-auto text-indigo-400" />
                  <p className="text-xs font-black text-slate-700">صورة البطاقة الشخصية (الوجه الخلفي)</p>
                  <p className="text-[10px] text-slate-400">PNG, JPG حتى 10MB</p>
                </div>
              )}
            </div>

            <input
              type="file"
              ref={idBackInputRef}
              onChange={handleIdBackChange}
              accept="image/*"
              className="hidden"
            />
            
            <button
              onClick={() => idBackInputRef.current?.click()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <Upload size={14} />
              <span>{idBackImage ? "تغيير ظهر البطاقة" : "رفع ظهر البطاقة"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* قسم دورات المدرس الحالية */}


      {/* نافذة تغيير كلمة المرور */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-indigo-200 overflow-hidden p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck size={20} className="text-indigo-600" /> تغيير كلمة المرور يدوياً
              </h3>
              <button onClick={() => setIsPasswordModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <XCircle size={20} />
              </button>
            </div>

            {passwordError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold flex items-center gap-2">
                <AlertTriangle size={16} className="shrink-0" />
                <span>{passwordError}</span>
              </div>
            )}

            <form onSubmit={handlePasswordChangeSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">كلمة المرور الحالية</label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">كلمة المرور الجديدة</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="8 أحرف، حرف كبير، ورقم واحد على الأقل"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">تأكيد كلمة المرور الجديدة</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="أعد إدخال كلمة المرور الجديدة"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 text-[11px] text-indigo-900 font-semibold space-y-1">
                <span>📌 متطلبات الأمان لكلمة مرور المدرس:</span>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                  <li>ألا تقل عن 8 أحرف.</li>
                  <li>تحتوي على حرف كبير واحد على الأقل (A-Z).</li>
                  <li>تحتوي على رقم واحد على الأقل (0-9).</li>
                </ul>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black transition-all shadow-md"
                >
                  حفظ كلمة المرور الجديدة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* نافذة معاينة صورة البطاقة مكبرة */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl p-4 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 px-2">
              <h4 className="text-xs font-black text-slate-800">معاينة صورة الهوية الشخصية</h4>
              <button onClick={() => setPreviewImage(null)} className="text-slate-500 hover:text-slate-900">
                <XCircle size={22} />
              </button>
            </div>
            <div className="w-full h-96 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center">
              <img src={previewImage} alt="ID Preview" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      )}
{/* 💾 زر الحفظ الشامل في نهاية الصفحة */}
      <div className="pt-6 border-t border-indigo-100 flex items-center justify-end gap-4">
        <Link
          to="/"
          className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-bold transition-all"
        >
          إلغاء والعودة للوحة التحكم
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSuccessMessage("تم حفظ كافة التعديلات والإعدادات بنجاح تام على المنصة! 🎉");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => setSuccessMessage(""), 5000);
          }}
          className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black shadow-xl transition-all flex items-center gap-2"
        >
          <Save size={18} />
          <span>حفظ جميع التغييرات النهائية</span>
        </button>
      </div>
    </div>
  );
}