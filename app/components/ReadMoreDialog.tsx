"use client";

import { useCallback, useEffect, useId, useState } from "react";

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
  const titleId = useId();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <button type="button" className="link" onClick={() => setIsOpen(true)}>
        {triggerLabel}
      </button>
      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="card w-full max-w-xl bg-white p-6">
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
        </div>
      ) : null}
    </>
  );
}


