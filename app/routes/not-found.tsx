import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>

      <h2 className="text-xl text-gray-300 mb-3">
        Halaman tidak ditemukan
      </h2>

      <p className="text-gray-400 max-w-md mb-8">
        Sepertinya kamu tersesat di tempat yang salah. Halaman ini tidak tersedia
        atau sudah dipindahkan.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
      >
        ← Kembali ke beranda
      </Link>
    </div>
  );
}
