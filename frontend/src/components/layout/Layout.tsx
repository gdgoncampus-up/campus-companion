import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col">
            <Header variant="dark" />
            <main className="flex-1 pt-16">
                <Outlet />
            </main>
            <Footer variant="dark" />
        </div>
    );
}