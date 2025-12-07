export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 text-sm tracking-wide">Loading…</p>
      </div>
    </div>
  );
}
