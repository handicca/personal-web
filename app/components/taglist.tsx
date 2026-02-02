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
    <span className="px-2 py-0.5 text-xs rounded-md bg-theme-subtle text-theme-subtle hover:bg-theme-hover transition">
      {children}
    </span>
  );
}

