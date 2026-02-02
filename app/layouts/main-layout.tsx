import { useNavigation } from "react-router";
import { Outlet } from "react-router";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export default function MainLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={`min-h-screen flex flex-col relative bg-theme ${
        isLoading ? "loading" : ""
      }`}
    >
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col flex-1">
        <Navbar />

        <div className="loading-overlay pointer-events-none">
          <div className="loading-spinner"></div>
        </div>

        <main className="mt-4 sm:mt-6 flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
