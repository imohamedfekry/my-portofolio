interface BorderedBadgeProps {
  badge: string;
  title: string;
  className?: string; 
}

export function SectionTitle({ badge, title, className }: BorderedBadgeProps) {
  return (
    <div
      className={`w-fit m-auto px-3 py-[0.30rem] rounded-3xl border-2 border-[var(--secondary-text-color)] flex flex-row items-center mb-3 ${className || ""}`}
    >
      <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--three-text-color)] to-[var(--secondary-text-color)] text-[9px] font-medium mr-2 text-white">
        {badge}
      </span>
      <div className="text-sm text-[var(--text-color)] font-extrabold">
        {title}
      </div>
    </div>
  );
}
