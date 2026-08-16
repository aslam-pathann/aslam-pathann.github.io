/**
 * Fixed, page-wide atmospheric backdrop: a handful of very low-opacity
 * blurred color blobs (emerald / violet / cyan), a faint grid, and a
 * touch of film-grain noise. Rendered once in App and sits behind every
 * section (-z-10) so individual sections don't need to repeat it.
 */
export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div
        className="atmosphere-blob animate-drift-slow"
        style={{
          top: "-12%",
          left: "-8%",
          width: "46vw",
          height: "46vw",
          background: "#7C3AED",
          animationDelay: "0s",
        }}
      />
      <div
        className="atmosphere-blob animate-drift-slow"
        style={{
          top: "4%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          background: "#22D3EE",
          animationDelay: "4s",
        }}
      />
      <div
        className="atmosphere-blob animate-drift-slow"
        style={{
          bottom: "-14%",
          left: "18%",
          width: "50vw",
          height: "50vw",
          background: "#10B981",
          animationDelay: "8s",
        }}
      />
      <div className="atmosphere-noise" />
    </div>
  );
}
