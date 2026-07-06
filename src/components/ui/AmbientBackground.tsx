export default function AmbientBackground() {
  return (
    <div className="ambient-background pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black" aria-hidden="true">
      <div className="ambient-ray ambient-ray-a" />
      <div className="ambient-ray ambient-ray-b" />
      <div className="ambient-star-field" />
    </div>
  );
}
