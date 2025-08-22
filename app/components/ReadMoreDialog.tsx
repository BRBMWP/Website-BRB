"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ReadMoreDialogProps = {
  title: string;
  children: React.ReactNode;
  externalHref?: string;
  externalLabel?: string;
  triggerLabel?: string;
};

export default function ReadMoreDialog({
  title,
  children,
  externalHref,
  externalLabel = "Open link",
  triggerLabel = "Read more →",
}: ReadMoreDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (event.shiftKey) {
          if (active === first) {
            last.focus();
            event.preventDefault();
          }
        } else {
          if (active === last) {
            first.focus();
            event.preventDefault();
          }
        }
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    // Focus the dialog container on open
    setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <>
      <button type="button" className="link" onClick={() => setIsOpen(true)}>
        {triggerLabel}
      </button>
      {mounted && isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4 fade-in"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <div
                ref={dialogRef}
                tabIndex={-1}
                className="card w-full max-w-xl bg-white p-6 rounded-xl outline-none zoom-in"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 id={titleId} className="text-xl font-semibold navy">
                    {title}
                  </h3>
                  <button
                    type="button"
                    aria-label="Close dialog"
                    className="btn btn-outline h-8 px-3"
                    onClick={close}
                  >
                    Close
                  </button>
                </div>
                <div className="mt-4 text-sm leading-6 opacity-90">{children}</div>
                {externalHref ? (
                  <div className="mt-6">
                    <a
                      className="btn btn-primary"
                      href={externalHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {externalLabel}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}


