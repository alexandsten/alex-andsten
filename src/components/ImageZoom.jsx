import { useState } from "react";

function ImageZoom({ src }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        style={{ cursor: "pointer", width: "50%" }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={src} style={{ maxWidth: "90%", maxHeight: "90%" }} />
        </div>
      )}
    </>
  );
}

export default ImageZoom;
