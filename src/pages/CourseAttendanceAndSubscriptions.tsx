import { useState } from "react";
import {
  Layers,
  Users,
  Search,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ArrowRight,
  BookOpen,
  FolderTree
} from "lucide-react";

export default function GradeGroupsAttendancePage() {
  // هيكل بيانات ضخم وموسع يضم 4 صفوف، وفي كل صف 3 مجموعات، وفي كل مجموعة 15 طالباً
  const [gradesData, setGradesData] = useState([
    {
      id: "grade-1",
      name: "الصف الأول الثانوي",
      description: "مناهج الفصل الدراسي الأول والثاني للأساسيات والبرمجة وهندسة الحاسب",
      groups: [
        {
          id: "g1-m1",
          name: "مجموعة أ - الأحد والثلاثاء (صباحي)",
          teacher: "م. أحمد عبد الله",
          students: [
            { id: 101, name: "يوسف إبراهيم مهران", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:10 ص", remainingDays: 4, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 102, name: "كريم مصطفى عبد اللطيف", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 103, name: "مريم خالد حسن", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:15 ص", remainingDays: 20, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 104, name: "زياد طارق محمد", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:05 ص", remainingDays: 15, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 105, name: "هبة سمير عبد الفتاح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:00 ص", remainingDays: 12, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 106, name: "باسل إسلام جمعة", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 107, name: "روان محمود الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:08 ص", remainingDays: 25, remainingHours: 14, subscriptionStatus: "ساري" },
            { id: 108, name: "أحمد سعيد بركات", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:12 ص", remainingDays: 8, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 109, name: "فاطمة عادل زاهر", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 110, name: "محمود رأفت النجار", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:02 ص", remainingDays: 14, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 111, name: "سارة جمال الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:04 ص", remainingDays: 19, remainingHours: 9, subscriptionStatus: "ساري" },
            { id: 112, name: "إبراهيم صبري الششتاوي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 113, name: "دينا حسام الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:01 ص", remainingDays: 22, remainingHours: 11, subscriptionStatus: "ساري" },
            { id: 114, name: "وليد توفيق حامد", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:11 ص", remainingDays: 5, remainingHours: 3, subscriptionStatus: "على وشك الانتهاء" },
            { id: 115, name: "رشا نبيل البهنساوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:07 ص", remainingDays: 28, remainingHours: 15, subscriptionStatus: "ساري" }
          ]
        },
        {
          id: "g1-m2",
          name: "مجموعة ب - الإثنين والخميس (مسائي)",
          teacher: "م. محمود عادل",
          students: [
            { id: 116, name: "تامر حامد مصطفى", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:00 م", remainingDays: 10, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 117, name: "جهاد عبد الحميد", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 118, name: "رامي محمد الديب", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:05 م", remainingDays: 15, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 119, name: "ندى صابر العدوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:02 م", remainingDays: 18, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 120, name: "خالد عز الدين", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 3, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 121, name: "آية طارق السعدني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:10 م", remainingDays: 21, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 122, name: "مصطفى كمال الحوفي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:03 م", remainingDays: 7, remainingHours: 2, subscriptionStatus: "ساري" },
            { id: 123, name: "سمر فوزي الملاح", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 124, name: "أسامة زكي العطار", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:06 م", remainingDays: 13, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 125, name: "هيام رشدي الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:08 م", remainingDays: 24, remainingHours: 12, subscriptionStatus: "ساري" },
            { id: 126, name: "عماد الدين فاروق", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 127, name: "مروة حسن البنا", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:01 م", remainingDays: 16, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 128, name: "شريف وجيه مرسي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:09 م", remainingDays: 9, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 129, name: "ياسمين صلاح الدين", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 130, name: "بلال عبد العزيز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:04 م", remainingDays: 30, remainingHours: 14, subscriptionStatus: "ساري" }
          ]
        },
        {
          id: "g1-m3",
          name: "مجموعة ج - السبت والأربعاء (مكثف)",
          teacher: "د. أسامة المنشاوي",
          students: [
            { id: 131, name: "محمود عادل زكي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:00 م", remainingDays: 11, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 132, name: "ريم طارق عبد الرازق", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:05 م", remainingDays: 4, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 133, name: "زياد هشام مهران", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 134, name: "داليا سامح الخولي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:02 م", remainingDays: 25, remainingHours: 11, subscriptionStatus: "ساري" },
            { id: 135, name: "وائل ناصر الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:07 م", remainingDays: 14, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 136, name: "نورهان إبراهيم", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 137, name: "باسم مرسي العشري", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:03 م", remainingDays: 19, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 138, name: "عبير مختار شاهين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:04 م", remainingDays: 8, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 139, name: "طارق لطفي السيسي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 140, name: "سحر فؤاد عبد الخالق", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:01 م", remainingDays: 22, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 141, name: "أيمن بهجت السبعاوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:08 م", remainingDays: 12, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 142, name: "هدير مصطفى كامل", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 143, name: "ماجد عبد الفتاح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:06 م", remainingDays: 27, remainingHours: 13, subscriptionStatus: "ساري" },
            { id: 144, name: "رانيا كمال الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:09 م", remainingDays: 6, remainingHours: 2, subscriptionStatus: "ساري" },
            { id: 145, name: "حسام الدين حسن", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" }
          ]
        }
      ]
    },
    {
      id: "grade-2",
      name: "الصف الثاني الثانوي",
      description: "المستوى المتوسط وتطبيقات قواعد البيانات وتطوير الواجهات الأمامية",
      groups: [
        {
          id: "g2-m1",
          name: "مجموعة المتميزين - السبت والأربعاء",
          teacher: "د. أسامة المنشاوي",
          students: [
            { id: 201, name: "محمود خالد عبد الله", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 202, name: "عمر خالد الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:02 م", remainingDays: 1, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 203, name: "ندى أحمد إبراهيم", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:00 م", remainingDays: 18, remainingHours: 9, subscriptionStatus: "ساري" },
            { id: 204, name: "عبد الرحمن حسن", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:08 م", remainingDays: 30, remainingHours: 18, subscriptionStatus: "ساري" },
            { id: 205, name: "أسماء محمود السيد", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:04 م", remainingDays: 12, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 206, name: "مصطفى رجب الزيات", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 3, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 207, name: "إسراء جمال عبد الناصر", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:05 م", remainingDays: 22, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 208, name: "حازم إيهاب توفيق", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:10 م", remainingDays: 15, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 209, name: "دعاء سمير عبد الوهاب", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 210, name: "سامح حسين الدمرداش", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:01 م", remainingDays: 14, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 211, name: "شيماء عثمان البهنساوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:03 م", remainingDays: 19, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 212, name: "كريم ممدوح الشريف", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 213, name: "مها سامي البرلسي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:06 م", remainingDays: 25, remainingHours: 11, subscriptionStatus: "ساري" },
            { id: 214, name: "نادر فكري الشربيني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:09 م", remainingDays: 7, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 215, name: "هبة الله محمد", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" }
          ]
        },
        {
          id: "g2-m2",
          name: "مجموعة الأبطال - الأحد والثلاثاء",
          teacher: "م. أحمد عبد الله",
          students: [
            { id: 216, name: "سلمى رامي عبد العزيز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:00 م", remainingDays: 11, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 217, name: "حمزة وائل عثمان", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 5, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 218, name: "آلاء مصطفى عابدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:02 م", remainingDays: 20, remainingHours: 9, subscriptionStatus: "ساري" },
            { id: 219, name: "باسم رأفت المنشاوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:04 م", remainingDays: 14, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 220, name: "حنان طه الباز", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 221, name: "خالد صبري المشنب", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:05 م", remainingDays: 16, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 222, name: "ريهام حامد عبد الصبور", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:08 م", remainingDays: 9, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 223, name: "زياد نبيل الهواري", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 224, name: "سارة عادل الشرقاوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:01 م", remainingDays: 24, remainingHours: 12, subscriptionStatus: "ساري" },
            { id: 225, name: "عاصم إبراهيم الدسوقي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:07 م", remainingDays: 13, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 226, name: "غادة محمد النحاس", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 227, name: "فادي جمال الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:03 م", remainingDays: 18, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 228, name: "لمياء توفيق البهنساوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:09 م", remainingDays: 22, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 229, name: "محمد حسام الدين", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 4, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 230, name: "نوران أحمد الشناوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 06:06 م", remainingDays: 29, remainingHours: 14, subscriptionStatus: "ساري" }
          ]
        },
        {
          id: "g2-m3",
          name: "مجموعة العباقرة - الإثنين والخميس",
          teacher: "م. محمود عادل",
          students: [
            { id: 231, name: "أحمد بهجت العطار", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:00 م", remainingDays: 15, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 232, name: "إيمان صابر الحفناوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:02 م", remainingDays: 8, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 233, name: "بيشوي ناصف جرجس", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 234, name: "جيهان محمود الكفراوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:05 م", remainingDays: 21, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 235, name: "حاتم طارق السعدني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:04 م", remainingDays: 11, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 236, name: "دعاء فوزي مرسي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 237, name: "سامح شريف البنا", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:01 م", remainingDays: 26, remainingHours: 12, subscriptionStatus: "ساري" },
            { id: 238, name: "صابرين عبد الله", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:07 م", remainingDays: 19, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 239, name: "ضياء الدين ممدوح", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 240, name: "عزة مصطفى كامل", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:03 م", remainingDays: 14, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 241, name: "فاروق حسني الباز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:08 م", remainingDays: 5, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 242, name: "كوثر إبراهيم زكي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 243, name: "مجدي صبري الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:06 م", remainingDays: 17, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 244, name: "هناء رجب الملاح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 08:09 م", remainingDays: 23, remainingHours: 11, subscriptionStatus: "ساري" },
            { id: 245, name: "وليد سعد الدمرداش", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" }
          ]
        }
      ]
    },
    {
      id: "grade-3",
      name: "الصف الثالث الثانوي",
      description: "البرمجة المتقدمة وتطبيقات الويب الشاملة والتجهيز للامتحانات النهائية",
      groups: [
        {
          id: "g3-m1",
          name: "مجموعة القمة - السبت والإثنين والخميس",
          teacher: "د. أسامة المنشاوي",
          students: [
            { id: 301, name: "أحمد محمد إبراهيم", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:00 ص", remainingDays: 14, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 302, name: "فاطمة علي محمود", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:05 ص", remainingDays: 2, remainingHours: 3, subscriptionStatus: "على وشك الانتهاء" },
            { id: 303, name: "سارة حسن طه", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 09:55 ص", remainingDays: 25, remainingHours: 12, subscriptionStatus: "ساري" },
            { id: 304, name: "ريم سعيد عبد الرازق", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 18, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 305, name: "نوران أحمد السيد", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 09:50 ص", remainingDays: 30, remainingHours: 20, subscriptionStatus: "ساري" },
            { id: 306, name: "منى سمير عبد العزيز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:01 ص", remainingDays: 10, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 307, name: "مصطفى مراد الشناوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 12:00 م", remainingDays: 3, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 308, name: "آية تامر حسن", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 309, name: "شروق أشرف فؤاد", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 12:05 م", remainingDays: 19, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 310, name: "إبراهيم ناصر الحناوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:02 ص", remainingDays: 12, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 311, name: "داليا رجب الشريف", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 312, name: "حسام صبري الملاح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:04 ص", remainingDays: 22, remainingHours: 9, subscriptionStatus: "ساري" },
            { id: 313, name: "نهى توفيق العطار", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:07 ص", remainingDays: 16, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 314, name: "تامر بهجت الدسوقي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 315, name: "سحر جمال الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 10:09 ص", remainingDays: 28, remainingHours: 15, subscriptionStatus: "ساري" }
          ]
        },
        {
          id: "g3-m2",
          name: "مجموعة التميز - الأحد والثلاثاء",
          teacher: "م. محمود عادل",
          students: [
            { id: 316, name: "أحمد زكي الباز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:00 م", remainingDays: 11, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 317, name: "إسراء صابر الشربيني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:03 م", remainingDays: 6, remainingHours: 2, subscriptionStatus: "ساري" },
            { id: 318, name: "باسم كامل الحفناوي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 319, name: "جميلة محمود الكفراوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:05 م", remainingDays: 20, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 320, name: "حازم طارق العشري", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:01 م", remainingDays: 13, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 321, name: "دعاء رجب الملاح", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 322, name: "سامي شريف البنا", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:06 م", remainingDays: 25, remainingHours: 11, subscriptionStatus: "ساري" },
            { id: 323, name: "صفاء عبد الله", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:08 م", remainingDays: 18, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 324, name: "طارق ممدوح", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 325, name: "عادل مصطفى كامل", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:02 م", remainingDays: 15, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 326, name: "فاتن حسني الباز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:09 م", remainingDays: 4, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 327, name: "كريمة إبراهيم زكي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 328, name: "ماهر صبري الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:04 م", remainingDays: 19, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 329, name: "هدى رجب الملاح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 02:10 م", remainingDays: 24, remainingHours: 12, subscriptionStatus: "ساري" },
            { id: 330, name: "وسام سعد الدمرداش", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" }
          ]
        },
        {
          id: "g3-m3",
          name: "مجموعة الرواد - السبت والأربعاء",
          teacher: "د. أسامة المنشاوي",
          students: [
            { id: 331, name: "أيمن سامي البرلسي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:00 م", remainingDays: 12, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 332, name: "إنجي طارق الشربيني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:03 م", remainingDays: 7, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 333, name: "باهر ناصف جرجس", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 334, name: "جاسر محمود الكفراوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:05 م", remainingDays: 21, remainingHours: 9, subscriptionStatus: "ساري" },
            { id: 335, name: "حليم طارق السعدني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:02 م", remainingDays: 14, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 336, name: "دينا فوزي مرسي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 3, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 337, name: "سعد شريف البنا", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:06 م", remainingDays: 27, remainingHours: 13, subscriptionStatus: "ساري" },
            { id: 338, name: "صابرين عبد الحميد", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:08 م", remainingDays: 16, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 339, name: "ضاحي ممدوح", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 340, name: "عفيفة مصطفى كامل", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:01 م", remainingDays: 18, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 341, name: "فوزي حسني الباز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:09 م", remainingDays: 5, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 342, name: "كاميليا إبراهيم زكي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 343, name: "مروان صبري الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:04 م", remainingDays: 22, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 344, name: "هايدي رجب الملاح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 04:10 م", remainingDays: 29, remainingHours: 14, subscriptionStatus: "ساري" },
            { id: 345, name: "ياسر سعد الدمرداش", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" }
          ]
        }
      ]
    },
    {
      id: "grade-4",
      name: "الصف الرابع (مقررات تخصصية متقدمة)",
      description: "مقررات الذكاء الاصطناعي وهندسة البرمجيات المتقدمة وقواعد البيانات الضخمة",
      groups: [
        {
          id: "g4-m1",
          name: "مجموعة الذكاء الاصطناعي - السبت والأربعاء",
          teacher: "د. أسامة المنشاوي",
          students: [
            { id: 401, name: "أمير سمير عبد الغني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:00 ص", remainingDays: 19, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 402, name: "برلنتي صابر العشري", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:02 ص", remainingDays: 4, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 403, name: "بيتر ناصف جرجس", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 404, name: "جابر محمود الكفراوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:05 ص", remainingDays: 25, remainingHours: 11, subscriptionStatus: "ساري" },
            { id: 405, name: "حكمت طارق السعدني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:04 ص", remainingDays: 14, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 406, name: "درية فوزي مرسي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 407, name: "سعيد شريف البنا", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:01 ص", remainingDays: 30, remainingHours: 15, subscriptionStatus: "ساري" },
            { id: 408, name: "صباح عبد الحميد", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:07 ص", remainingDays: 17, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 409, name: "ضياء الدين بهجت", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 410, name: "عطيات مصطفى كامل", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:03 ص", remainingDays: 12, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 411, name: "فهمي حسني الباز", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:08 ص", remainingDays: 6, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 412, name: "كريمة إبراهيم زكي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 413, name: "محسن صبري الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:06 ص", remainingDays: 23, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 414, name: "هيام رجب الملاح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 11:09 ص", remainingDays: 28, remainingHours: 14, subscriptionStatus: "ساري" },
            { id: 415, name: "يسري سعد الدمرداش", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" }
          ]
        },
        {
          id: "g4-m2",
          name: "مجموعة أمن المعلومات - الأحد والثلاثاء",
          teacher: "م. أحمد عبد الله",
          students: [
            { id: 416, name: "أسامة نبيل الهواري", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:00 م", remainingDays: 16, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 417, name: "إنجي عادل الشرقاوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:02 م", remainingDays: 9, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 418, name: "باسم إبراهيم الدسوقي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 419, name: "جيهان محمد النحاس", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:05 م", remainingDays: 21, remainingHours: 9, subscriptionStatus: "ساري" },
            { id: 420, name: "حلمي جمال الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:04 م", remainingDays: 13, remainingHours: 5, subscriptionStatus: "ساري" },
            { id: 421, name: "دعاء توفيق البهنساوي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 3, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 422, name: "سامح حسام الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:01 م", remainingDays: 26, remainingHours: 12, subscriptionStatus: "ساري" },
            { id: 423, name: "صابرين أحمد الشناوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:07 م", remainingDays: 18, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 424, name: "ضياء الدين بهجت", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 425, name: "عزة صابر الحفناوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:03 م", remainingDays: 15, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 426, name: "فاروق ناصف جرجس", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:08 م", remainingDays: 5, remainingHours: 2, subscriptionStatus: "على وشك الانتهاء" },
            { id: 427, name: "كوثر محمود الكفراوي", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 428, name: "مجدي طارق السعدني", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:06 م", remainingDays: 19, remainingHours: 8, subscriptionStatus: "ساري" },
            { id: 429, name: "هناء فوزي مرسي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 01:09 م", remainingDays: 24, remainingHours: 11, subscriptionStatus: "ساري" },
            { id: 430, name: "وليد شريف البنا", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" }
          ]
        },
        {
          id: "g4-m3",
          name: "مجموعة هندسة البرمجيات - الإثنين والخميس",
          teacher: "م. محمود عادل",
          students: [
            { id: 431, name: "أحمد صابر العدوي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:00 م", remainingDays: 17, remainingHours: 7, subscriptionStatus: "ساري" },
            { id: 432, name: "إيمان عز الدين", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:03 م", remainingDays: 8, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 433, name: "باهر طارق السعدني", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 434, name: "جيهان فوزي مرسي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:05 م", remainingDays: 22, remainingHours: 10, subscriptionStatus: "ساري" },
            { id: 435, name: "حاتم شريف البنا", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:02 م", remainingDays: 11, remainingHours: 4, subscriptionStatus: "ساري" },
            { id: 436, name: "دعاء عبد الله", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 2, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" },
            { id: 437, name: "سامح ممدوح", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:06 م", remainingDays: 29, remainingHours: 13, subscriptionStatus: "ساري" },
            { id: 438, name: "صابرين مصطفى كامل", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:08 م", remainingDays: 15, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 439, name: "ضياء حسني الباز", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 440, name: "عزة إبراهيم زكي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:01 م", remainingDays: 14, remainingHours: 6, subscriptionStatus: "ساري" },
            { id: 441, name: "فاروق صبري الشريف", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:09 م", remainingDays: 7, remainingHours: 3, subscriptionStatus: "ساري" },
            { id: 442, name: "كوثر رجب الملاح", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 0, remainingHours: 0, subscriptionStatus: "منتهي" },
            { id: 443, name: "مجدي سعد الدمرداش", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:04 م", remainingDays: 20, remainingHours: 9, subscriptionStatus: "ساري" },
            { id: 444, name: "هناء سامي البرلسي", attendanceStatus: "حاضر", attendanceTime: "2026/08/20 - 03:10 م", remainingDays: 26, remainingHours: 12, subscriptionStatus: "ساري" },
            { id: 445, name: "وليد طارق الشربيني", attendanceStatus: "غائب", attendanceTime: "-", remainingDays: 1, remainingHours: 1, subscriptionStatus: "على وشك الانتهاء" }
          ]
        }
      ]
    }
  ]);

  // حالات التنقل بين المستويات (الصفوف -> المجموعات -> الطلاب)
  const [selectedGrade, setSelectedGrade] = useState<any>(null);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // تبديل حالة الحضور والغياب للطالب داخل المجموعة
  const handleToggleAttendance = (studentId: number) => {
    setGradesData(prevGrades =>
      prevGrades.map(grade => {
        if (grade.id !== selectedGrade?.id) return grade;
        return {
          ...grade,
          groups: grade.groups.map(group => {
            if (group.id !== selectedGroup?.id) return group;
            return {
              ...group,
              students: group.students.map(st => {
                if (st.id === studentId) {
                  const newStatus = st.attendanceStatus === "حاضر" ? "غائب" : "حاضر";
                  const updatedStudent = {
                    ...st,
                    attendanceStatus: newStatus,
                    attendanceTime: newStatus === "حاضر" ? "2026/08/20 - 02:30 م" : "-"
                  };
                  setSelectedGroup((prev: any) => ({
                    ...prev,
                    students: prev.students.map((s: any) => s.id === studentId ? updatedStudent : s)
                  }));
                  return updatedStudent;
                }
                return st;
              })
            };
          })
        };
      })
    );
  };

  return (
    <div className="space-y-6 pb-12 bg-white text-slate-800 min-h-screen" dir="rtl">
      
      {/* رأس الصفحة */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-emerald-600 to-blue-700 rounded-3xl p-6 sm:p-8 shadow-xl text-white border border-teal-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="px-3.5 py-1 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 border border-white/30">
            <FolderTree size={13} />
            النظام الهرمي الموسع: 4 صفوف ⬅️ 12 مجموعة ⬅️ 180 طالباً
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
            إدارة الحضور والغياب والاشتراكات الشاملة للطلاب
          </h1>
          <p className="text-xs sm:text-sm text-teal-100 max-w-xl leading-relaxed">
            استعرض الصفوف الدراسية المتعددة، انتقل للمجموعات (15 طالباً في كل مجموعة)، وتابع الحضور والوقت المتبقي لانتهاء الاشتراكات بكفاءة كاملة.
          </p>
        </div>
      </div>

      {/* مسار التنقل (Breadcrumbs) */}
      <div className="flex items-center gap-2 bg-teal-50/60 p-4 rounded-2xl border border-teal-100 text-xs font-bold text-teal-900">
        <button 
          onClick={() => { setSelectedGrade(null); setSelectedGroup(null); }}
          className="hover:underline text-teal-700"
        >
          الصفوف الدراسية (4 صفوف)
        </button>
        {selectedGrade && (
          <>
            <ChevronLeft size={14} className="text-teal-400" />
            <button 
              onClick={() => setSelectedGroup(null)}
              className="hover:underline text-teal-700"
            >
              {selectedGrade.name}
            </button>
          </>
        )}
        {selectedGroup && (
          <>
            <ChevronLeft size={14} className="text-teal-400" />
            <span className="text-slate-600">{selectedGroup.name} (15 طالباً)</span>
          </>
        )}
      </div>

      {/* المستوى الأول: عرض الصفوف الدراسية (4 صفوف) */}
      {!selectedGrade && (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 px-1">اختر الصف الدراسي:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradesData.map((grade) => (
              <div
                key={grade.id}
                onClick={() => setSelectedGrade(grade)}
                className="bg-white hover:bg-teal-50/30 border-2 border-teal-100 hover:border-teal-400 rounded-3xl p-6 cursor-pointer transition-all shadow-xs space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <BookOpen size={24} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-200">
                      {grade.groups.length} مجموعات
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                      {grade.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{grade.description}</p>
                  </div>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal-600 border-t border-slate-100">
                  <span>استعراض المجموعات</span>
                  <ChevronLeft size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* المستوى الثاني: عرض المجموعات التابعة للصف المحدد */}
      {selectedGrade && !selectedGroup && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-base font-bold text-slate-900">
              مجموعات {selectedGrade.name}:
            </h3>
            <button
              onClick={() => setSelectedGrade(null)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
            >
              <ArrowRight size={14} />
              <span>العودة للصفوف</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedGrade.groups.map((group: any) => (
              <div
                key={group.id}
                onClick={() => setSelectedGroup(group)}
                className="bg-white hover:bg-teal-50/30 border-2 border-teal-100 hover:border-teal-400 rounded-3xl p-6 cursor-pointer transition-all shadow-xs space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <Layers size={22} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                      {group.students.length} طالباً
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                      {group.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">المحاضر: <span className="font-bold text-slate-700">{group.teacher}</span></p>
                  </div>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal-600 border-t border-slate-100">
                  <span>استعراض الـ 15 طالباً</span>
                  <ChevronLeft size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* المستوى الثالث: عرض الـ 15 طالباً، الحضور، الغياب، والوقت المتبقي للاشتراك */}
      {selectedGrade && selectedGroup && (
        <div className="bg-white border-2 border-teal-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-teal-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                طلاب {selectedGroup.name} (15 طالباً مسجلاً)
              </h3>
              <span className="text-xs text-slate-500">انقر لتغيير حالة الحضور أو لمتابعة وقت انتهاء اشتراكات الطلاب بدقة</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search size={16} className="absolute right-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="ابحث باسم الطالب..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 bg-teal-50/40 border border-teal-200 rounded-2xl text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-600"
                />
              </div>

              <button
                onClick={() => setSelectedGroup(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
              >
                <ArrowRight size={14} />
                <span>المجموعات</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedGroup.students
              .filter((st: any) => st.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((student: any) => (
                <div
                  key={student.id}
                  className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-2xs hover:border-teal-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center">
                          {student.id}
                        </span>
                        <h4 className="text-sm font-black text-slate-900">{student.name}</h4>
                      </div>
                    </div>

                    {/* زر تغيير الحضور والغياب */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-slate-500 font-semibold">حالة الحضور:</span>
                      <button
                        onClick={() => handleToggleAttendance(student.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs ${
                          student.attendanceStatus === "حاضر"
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "bg-rose-600 hover:bg-rose-700 text-white"
                        }`}
                      >
                        {student.attendanceStatus === "حاضر" ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                        <span>{student.attendanceStatus} (تغيير)</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 pt-3 border-t border-slate-200/60 text-xs">
                    
                    {/* وقت الحضور */}
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-400 font-semibold flex items-center gap-1">
                        <Calendar size={13} className="text-teal-600" /> وقت الحضور:
                      </span>
                      <span className="font-bold text-slate-700">{student.attendanceTime}</span>
                    </div>

                    {/* الوقت المتبقي للاشتراك */}
                    <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                      student.subscriptionStatus === "منتهي" 
                      ? "bg-rose-50 border-rose-200 text-rose-900" 
                      : student.subscriptionStatus === "على وشك الانتهاء" 
                      ? "bg-amber-50 border-amber-200 text-amber-900" 
                      : "bg-teal-50/70 border-teal-200 text-teal-900"
                    }`}>
                      <span className="font-semibold flex items-center gap-1 text-slate-600">
                        <Clock size={13} className="text-amber-600" /> المتبقي للاشتراك:
                      </span>
                      <div className="font-black text-xs">
                        {student.subscriptionStatus === "منتهي" ? (
                          <span className="text-rose-600">منتهي!</span>
                        ) : (
                          <span>{student.remainingDays} يوم و {student.remainingHours} س</span>
                        )}
                      </div>
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