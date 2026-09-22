export default function MonogramLogo({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-label="A S wedding monogram">
      {/* Thin gold ring */}
      <circle cx="100" cy="100" r="76" stroke="#b99746" strokeWidth="2" />
      <circle cx="100" cy="100" r="76" stroke="#d4af37" strokeWidth="0.5" opacity="0.5" />

      {/* Intertwined AS — serif monogram */}
      <text
        x="78"
        y="128"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        fontSize="86"
        fill="#a87f1f"
        letterSpacing="-8"
      >
        A
      </text>
      <text
        x="118"
        y="126"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontStyle="italic"
        fontWeight="600"
        fontSize="78"
        fill="#b99746"
      >
        S
      </text>

      {/* Left floral sprig */}
      <g stroke="#9c8647" strokeWidth="1.6" strokeLinecap="round" fill="#fffaf4">
        {/* stems */}
        <path d="M28 96 C 34 84, 42 76, 52 70" fill="none" />
        {/* leaves */}
        <path d="M36 88 l-9 -2 8 -5 z" fill="#f3ede3" />
        <path d="M42 80 l-9 -4 9 -4 z" fill="#f3ede3" />
        <path d="M48 75 l-6 -7 8 -1 z" fill="#f3ede3" />
        {/* flower 1 */}
        <g transform="translate(30 78)">
          <ellipse cx="0" cy="-7" rx="5" ry="7" />
          <ellipse cx="6.5" cy="-2" rx="5" ry="7" transform="rotate(72 6.5 -2)" />
          <ellipse cx="4" cy="6" rx="5" ry="7" transform="rotate(144 4 6)" />
          <ellipse cx="-4" cy="6" rx="5" ry="7" transform="rotate(216 -4 6)" />
          <ellipse cx="-6.5" cy="-2" rx="5" ry="7" transform="rotate(288 -6.5 -2)" />
          <circle cx="0" cy="0" r="2.4" fill="#b99746" stroke="none" />
        </g>
        {/* flower 2 small */}
        <g transform="translate(44 66) scale(0.65)">
          <ellipse cx="0" cy="-7" rx="5" ry="7" />
          <ellipse cx="6.5" cy="-2" rx="5" ry="7" transform="rotate(72 6.5 -2)" />
          <ellipse cx="4" cy="6" rx="5" ry="7" transform="rotate(144 4 6)" />
          <ellipse cx="-4" cy="6" rx="5" ry="7" transform="rotate(216 -4 6)" />
          <ellipse cx="-6.5" cy="-2" rx="5" ry="7" transform="rotate(288 -6.5 -2)" />
          <circle cx="0" cy="0" r="2.4" fill="#b99746" stroke="none" />
        </g>
      </g>

      {/* Right-bottom floral sprig */}
      <g stroke="#9c8647" strokeWidth="1.6" strokeLinecap="round" fill="#fffaf4">
        <path d="M172 148 C 160 152, 148 154, 136 152" fill="none" />
        <path d="M162 150 l9 -3 -3 -8 z" fill="#f3ede3" />
        <path d="M152 152 l8 -5 -1 -8 z" fill="#f3ede3" />
        <g transform="translate(170 132)">
          <ellipse cx="0" cy="-7" rx="5" ry="7" />
          <ellipse cx="6.5" cy="-2" rx="5" ry="7" transform="rotate(72 6.5 -2)" />
          <ellipse cx="4" cy="6" rx="5" ry="7" transform="rotate(144 4 6)" />
          <ellipse cx="-4" cy="6" rx="5" ry="7" transform="rotate(216 -4 6)" />
          <ellipse cx="-6.5" cy="-2" rx="5" ry="7" transform="rotate(288 -6.5 -2)" />
          <circle cx="0" cy="0" r="2.4" fill="#b99746" stroke="none" />
        </g>
        <g transform="translate(150 150) scale(0.7)">
          <ellipse cx="0" cy="-7" rx="5" ry="7" />
          <ellipse cx="6.5" cy="-2" rx="5" ry="7" transform="rotate(72 6.5 -2)" />
          <ellipse cx="4" cy="6" rx="5" ry="7" transform="rotate(144 4 6)" />
          <ellipse cx="-4" cy="6" rx="5" ry="7" transform="rotate(216 -4 6)" />
          <ellipse cx="-6.5" cy="-2" rx="5" ry="7" transform="rotate(288 -6.5 -2)" />
          <circle cx="0" cy="0" r="2.4" fill="#b99746" stroke="none" />
        </g>
      </g>
    </svg>
  );
}
