type SectionHeaderProps = {
  badge?: string;
  title: string;
  titleMobile?: string[];
  description?: string;
  size?: 'h1' | 'h2' | 'h3';
  align?: 'center' | 'left';
  as?: 'h1' | 'h2' | 'h3';
};

const sizeClass = {
  h1: 'text-[44px] leading-[52px] md:text-[72px] md:leading-[80px]',
  h2: 'text-[40px] leading-[48px] md:text-[56px] md:leading-[64px]',
  h3: 'text-[36px] leading-10 md:text-[48px] md:leading-[56px]',
};

export function SectionHeader({
  badge,
  title,
  titleMobile,
  description,
  size = 'h2',
  align = 'center',
  as,
}: SectionHeaderProps) {
  const Tag = as ?? (size === 'h1' ? 'h1' : size === 'h3' ? 'h3' : 'h2');
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`relative z-[3] ${alignCls}`}>
      {badge ? (
        <div className="mb-3 inline-flex items-center overflow-hidden rounded-[32px] px-[14px] py-1.5 shadow-[inset_0_-7px_11px_#a48fff1f] backdrop-blur-[6px] relative isolate after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:p-px after:content-[''] after:bg-[linear-gradient(90.01deg,rgba(229,156,255,.24)_0.01%,rgba(186,156,255,.24)_50.01%,rgba(156,178,255,.24)_100%)] after:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[mask-composite:exclude]">
          <span className="text-gradient-neon text-sm font-medium leading-5">
            {badge}
          </span>
        </div>
      ) : null}
      <Tag
        className={`font-display font-medium ${sizeClass[size]} ${alignCls}`}
      >
        {titleMobile?.length ? (
          <>
            <span className="hidden md:block">
              <span className="text-gradient block">{title}</span>
            </span>
            <span className="md:hidden">
              {titleMobile.map((line) => (
                <span key={line} className="text-gradient block">
                  {line}
                </span>
              ))}
            </span>
          </>
        ) : (
          <span className="text-gradient block">{title}</span>
        )}
      </Tag>
      {description ? (
        <p
          className={`mt-3 max-w-[455px] text-base leading-6 text-ink-soft ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
