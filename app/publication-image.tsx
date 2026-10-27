"use client";

import { useEffect, useId, useRef } from "react";

export function PublicationImage({ src, alt }: { src: string; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const captionId = useId();
  const previousOverflow = useRef("");

  function restoreScroll() {
    document.body.style.overflow = previousOverflow.current;
  }

  useEffect(() => {
    const element = dialog.current;
    return () => {
      if (element?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="publication-image-trigger media-frame"
        aria-label={`Enlarge image: ${alt}`}
        aria-haspopup="dialog"
        onClick={() => {
          if (!dialog.current) return;
          previousOverflow.current = document.body.style.overflow;
          dialog.current.showModal();
          document.body.style.overflow = "hidden";
        }}
      >
        <img src={src} alt={alt} />
      </button>
      <dialog
        ref={dialog}
        className="image-lightbox"
        aria-labelledby={captionId}
        onClose={restoreScroll}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="lightbox-content">
          <div className="lightbox-toolbar">
            <p id={captionId}>{alt}</p>
            <button type="button" className="lightbox-close" aria-label="Close image" onClick={() => dialog.current?.close()} autoFocus>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <img className="lightbox-image" src={src} alt={alt} />
          <a className="lightbox-original" href={src} target="_blank" rel="noreferrer">Open original image ↗</a>
        </div>
      </dialog>
    </>
  );
}
