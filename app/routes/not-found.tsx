import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-theme">
      <h1 className="text-6xl font-bold text-theme-accent mb-4">404</h1>

      <h2 className="text-xl text-theme-subtle mb-3">
        Halaman tidak ditemukan
      </h2>

      <p className="text-theme-muted max-w-md mb-8">
        Sepertinya kamu tersesat di tempat yang salah. Halaman ini tidak tersedia
        atau sudah dipindahkan.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-subtle hover:bg-theme-hover text-theme-accent transition"
      >
        ← Kembali ke beranda
      </Link>
    </div>
  );
}
