import { useNavigation } from "react-router";
import { Outlet } from "react-router";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export default function MainLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={`max-w-3xl mx-auto min-h-screen py-8 flex flex-col relative ${
        isLoading ? "loading" : ""
      }`}
    >
      <Navbar />

      <div className="loading-overlay pointer-events-none">
        <div className="loading-spinner"></div>
      </div>

      <main className="mt-2.5 flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
