export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-theme">
      <div className="flex flex-col items-center gap-3">
        <div className="loading-spinner"></div>
        <p className="text-theme-muted text-sm tracking-wide">Loading…</p>
      </div>
    </div>
  );
}
