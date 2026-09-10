export default function RegMark({ delay = 0 }) {
  return (
    <span
      className="reg-mark reg-draw"
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden="true"
    >
      <span className="reg-mark-circle" />
    </span>
  );
}
