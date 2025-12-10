export function CheckmarkIcon() {
  return (
    <svg
      className="inline h-5 w-5"
      viewBox="0 0 22 22"
      fill="none"
      strokeLinecap="square"
    >
      <circle cx="11" cy="11" r="11" className="fill-sky-100" />
      <circle cx="11" cy="11" r="10.5" className="stroke-sky-200" />
      <path
        d="M8 11.5L10.5 14L14 8"
        className="stroke-sky-700"
        strokeWidth="2"
      />
    </svg>
  );
}
