import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import TeacherCourse from "./pages/TeacherCourse";
import TeacherContent from "./pages/TeacherContent";
import TeacherGroups from "./pages/TeacherGroups";
import TeacherAssessments from "./pages/TeacherGrading";
import CourseAttendanceAndSubscriptions from "./pages/CourseAttendanceAndSubscriptions";
import TeacherCalendar from "./pages/TeacherCalendar";
import NotificationsAlerts from "./pages/NotificationsAlerts";
import Profile from "./pages/Profile";
import AdminTeacherSubscriptions from "./pages/AdminTeacherSubscriptions";
import TeacherStudentSubscriptions from "./pages/TeacherStudentSubscriptions";


import "./index.css";
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" dir="rtl">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col h-full overflow-hidden lg:pr-72 transition-all">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-[1600px] mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/teacher-courses" element={<TeacherCourse />} />
              <Route path="/teacher-content" element={<TeacherContent />} />
              <Route path="/teacher-groups" element={<TeacherGroups />} />
              <Route path="/teacher-grading" element={<TeacherAssessments />} />
              <Route
                path="/teacher-grades"
                element={<CourseAttendanceAndSubscriptions />}
              />
              <Route
                path="/teacher-subscriptions"
                element={<AdminTeacherSubscriptions />}
              />

              <Route path="/teacher-calendar" element={<TeacherCalendar />} />
  <Route
                path="/teacher-notifications"
                element={<NotificationsAlerts />}
              />
              <Route
                path="/teacher-student-subscriptions"
                element={<TeacherStudentSubscriptions />}
              />
              <Route path="/teacher-profile" element={<Profile />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
