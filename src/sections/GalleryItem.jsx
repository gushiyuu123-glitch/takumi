import { useEffect, useRef, useState } from "react";

export default function GalleryItem({ src, align = "center", label }) {
  const rootRef = useRef(null);
  const lineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!rootRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);

        if (lineRef.current) {
          setTimeout(() => {
            requestAnimationFrame(() => {
              lineRef.current.style.transform = "scaleX(1)";
            });
          }, 80);
        }

        observer.disconnect();
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  /* ------------------------
     レイアウト制御
  ------------------------ */
  const alignClass =
    align === "left"
      ? "mr-auto"
      : align === "right"
      ? "ml-auto"
      : "mx-auto";

  const frameSize =
    align === "center"
      ? "w-[82vw] max-w-[1100px]"
      : "w-[64vw] max-w-[880px] max-md:w-[86vw]";

  return (
    <div
      ref={rootRef}
      className={`relative ${alignClass} ${frameSize}`}
    >
      {/* フレーム（壁） */}
      <div className="bg-[#efefec] px-[3vw] py-[4vh] max-md:px-[4vw] max-md:py-[5vh]">

        {/* 写真：床から立ち上がる */}
        <div
          className="overflow-hidden"
          style={{
            clipPath: visible
              ? "inset(0% 0% 0% 0%)"
              : "inset(100% 0% 0% 0%)",
            transition: "clip-path 1200ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <img
            src={src}
            alt=""
            draggable={false}
            className="
              w-full
              object-cover
              opacity-[0.94]
              transition-transform
              duration-[1400ms]
            "
            style={{
              transform: visible
                ? "translateY(0) scale(1.01)"
                : "translateY(6vh) scale(1.04)",
            }}
          />
        </div>

        {/* 横線＋ラベル（語りすぎない） */}
        {label && (
          <div className="mt-6 max-md:mt-8">

            {/* 鉛筆で引く横線 */}
            <span
              ref={lineRef}
              aria-hidden
              className="
                block
                mb-[0.9em]
                h-px
                w-[56px]
                bg-[#2b2b2b]/25
                origin-left
                scale-x-[0.001]
                transition-transform
                duration-[1600ms]
                ease-[cubic-bezier(.05,.6,.2,1)]
              "
            />

            {/* テキスト：線に導かれて定着 */}
            <p
              className="
                max-w-[28ch]
                max-md:max-w-[32ch]
                font-serif
                text-[0.9rem]
                leading-[2]
                tracking-[0.04em]
                text-[#2b2b2b]/65
                transition-transform
                duration-[1200ms]
                ease-[cubic-bezier(.05,.6,.2,1)]
              "
              style={{
                transform: visible
                  ? "translateY(0)"
                  : "translateY(4px)",
              }}
            >
              {label}
            </p>

          </div>
        )}
      </div>
    </div>
  );
}
