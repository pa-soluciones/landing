export default function CutIcon({ className }: { className?: string }) {
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
      <path d="M80,38 L74.5,42.8 L78.2,48.3 L71.4,50.9 L73,57.3 L65.7,57.4 L65,64 L58.1,61.6 L55.2,67.5 L49.6,63 L44.8,67.5 L41,61.3 L35,64 L33.6,56.9 L27,57.3 L28.1,50.1 L21.8,48.3 L25.3,41.9 L20,38 L25.5,33.2 L21.8,27.7 L28.6,25.1 L27,18.7 L34.3,18.6 L35,12 L41.9,14.4 L44.8,8.5 L50.4,13 L55.2,8.5 L59,14.7 L65,12 L66.4,19.1 L73,18.7 L71.9,25.9 L78.2,27.7 L74.7,34.1 Z" />
      <circle cx="50" cy="38" r="6" />
      <path d="M10 76 H44 M56 76 H90 M10 92 H90 M10 76 V92 M90 76 V92" />
      <path d="M47 76 V92 M53 76 V92" strokeWidth={2} />
    </svg>
  );
}
