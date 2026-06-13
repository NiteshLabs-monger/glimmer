// Floating SVG butterflies that drift across a section.
export function Butterflies({ count = 6 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 137) % 100;
        const top = (i * 53) % 90;
        const delay = (i * 0.7) % 4;
        const size = 18 + ((i * 7) % 22);
        const dx = ((i % 2 === 0 ? 1 : -1) * (80 + (i * 20) % 200));
        const dy = -(150 + (i * 50) % 250);
        return (
          <svg
            key={i}
            viewBox="0 0 64 48"
            width={size}
            height={size * 0.75}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              animation: `drift ${10 + (i % 5)}s linear ${delay}s infinite`,
              ["--dx" as string]: `${dx}px`,
              ["--dy" as string]: `${dy}px`,
            } as React.CSSProperties}
          >
            <defs>
              <linearGradient id={`bf-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.07 200)" />
                <stop offset="100%" stopColor="oklch(0.42 0.09 240)" />
              </linearGradient>
            </defs>
            <path
              d="M32 24 C 20 6, 4 8, 4 22 C 4 34, 18 34, 32 24 Z M32 24 C 44 6, 60 8, 60 22 C 60 34, 46 34, 32 24 Z M32 24 C 22 34, 14 44, 18 46 C 24 46, 30 38, 32 30 Z M32 24 C 42 34, 50 44, 46 46 C 40 46, 34 38, 32 30 Z"
              fill={`url(#bf-${i})`}
              opacity={0.55}
            />
            <line x1="32" y1="22" x2="30" y2="6" stroke="oklch(0.3 0.06 245)" strokeWidth="0.6" />
            <line x1="32" y1="22" x2="34" y2="6" stroke="oklch(0.3 0.06 245)" strokeWidth="0.6" />
          </svg>
        );
      })}
    </div>
  );
}