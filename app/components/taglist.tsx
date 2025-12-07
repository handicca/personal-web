export function TagList({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="px-2 py-0.5 text-xs rounded-md bg-white/10 text-gray-200 hover:bg-white/20 transition">
      {children}
    </span>
  );
}

