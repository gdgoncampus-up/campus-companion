import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Layout from "../components/layout/Layout";              // Public site
import DashboardLayout from "../components/layout/DashboardLayout";  // Dashboard with sidebar
import AdminLayout from "../components/layout/AdminLayout";     // Admin panel

// Public Pages
import HomePage from "../pages/Home";
// import PublicEvents from "../pages/PublicEvents";
// import PublicGroups from "../pages/PublicGroups";
// import PublicAITools from "../pages/PublicAITools";

// Dashboard Pages (Logged-in users)
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";
import StudyGroups from "../pages/StudyGroups";
import GeminiTools from "../pages/GeminiTools";
import Settings from "../pages/Settings";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
// import AdminEvents from "../pages/admin/Events";
import AdminSettings from "../pages/admin/Settings";

export function AppRouter() {
    return (
        <Routes>
            {/* ============================================ */}
            {/* PUBLIC ROUTES (Marketing Site) */}
            {/* Layout: Header + Footer, No Sidebar */}
            {/* ============================================ */}
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/groups" element={<StudyGroups />} />
                <Route path="/ai" element={<GeminiTools />} />
            </Route>

            {/* ============================================ */}
            {/* DASHBOARD ROUTES (Logged-in Users) */}
            {/* Layout: Sidebar + TopBar */}
            {/* ============================================ */}
            {/*<Route element={<DashboardLayout />}>*/}
            {/*    <Route path="/dashboard" element={<Dashboard />} />*/}
            {/*    <Route path="/events" element={<Events />} />*/}
            {/*    <Route path="/groups" element={<StudyGroups />} />*/}
            {/*    <Route path="/ai" element={<GeminiTools />} />*/}
            {/*    <Route path="/settings" element={<Settings />} />*/}
            {/*</Route>*/}

            {/* ============================================ */}
            {/* ADMIN ROUTES */}
            {/* Layout: Admin Sidebar + Header */}
            {/* ============================================ */}
            {/*<Route path="/admin" element={<AdminLayout />}>*/}
            {/*    <Route index element={<AdminDashboard />} />*/}
            {/*    /!*<Route path="events" element={<AdminEvents />} />*!/*/}
            {/*    <Route path="settings" element={<AdminSettings />} />*/}
            {/*</Route>*/}

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}