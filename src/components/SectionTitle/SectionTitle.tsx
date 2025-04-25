interface BorderedBadgeProps {
    badge:string;
    title: string;
}

export function SectionTitle({ badge,title }: BorderedBadgeProps) {
  return (
    <div className="w-fit m-auto px-3 py-[0.30rem] rounded-3xl border-2 border-[var(--secondary-text-color)] flex flex-row items-center">
      <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--three-text-color)] to-[var(--secondary-text-color)] text-[9px] font-medium mr-2 text-white">
        {badge}
      </span>
      <p className="text-sm text-[var(--text-color)] font-extrabold">{title}</p>
    </div>
  );
}