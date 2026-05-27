export default function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="44" y="15" width="12" height="15" />
      <line x1="40" y1="20" x2="60" y2="20" strokeWidth={3} />
      <line x1="40" y1="26" x2="60" y2="26" strokeWidth={3} />
      <rect x="38" y="30" width="24" height="14" rx="2" />
      <line x1="46" y1="30" x2="46" y2="44" strokeWidth={2} />
      <line x1="54" y1="30" x2="54" y2="44" strokeWidth={2} />
      <rect x="34" y="44" width="32" height="6" rx="2" />
      <rect x="44" y="50" width="12" height="25" />
      <path d="M 44 75 L 42 85 H 58 L 56 75" />
      <path d="M 38 65 L 44 70 M 62 65 L 56 70" strokeWidth={3} />
    </svg>
  );
}
