import { useEffect, useRef } from "react";

export default function Philosophy() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setTimeout(() => {
          requestAnimationFrame(() => {
            entry.target.style.transform = "scaleY(1)";
          });
        }, 120);

        observer.disconnect();
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        relative
        min-h-[100vh]
        bg-[#efefec]
        overflow-hidden
        pt-[13vh]
      "
    >
      {/* =========================
          SP 背景用（滲ませる）
      ========================= */}
      <div
        aria-hidden
        className="
          absolute inset-0
          max-md:block
          md:hidden
        "
      >
        <img
          src="/images/philosophy-bg2.png"
          alt=""
          className="
            w-full h-full object-cover
            opacity-[0.35]
            blur-[6px]
            saturate-[0.8]
            contrast-[0.85]
          "
          draggable={false}
        />
        {/* 読めるまで暗くしてOK */}
        <div className="absolute inset-0 bg-[#efefec]/65" />
      </div>

      {/* =========================
          PC 左壁（そのまま）
      ========================= */}
      <div
        className="
          absolute inset-y-0 left-0
          w-[38vw]
          overflow-hidden
          hidden md:block
        "
      >
        <img
          src="/images/philosophy-bg2.png"
          alt=""
          draggable={false}
          className="
            w-full h-full object-cover
            opacity-[0.85]
            saturate-[0.9]
            contrast-[0.9]
            blur-[0.6px]
          "
        />

        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#efefec]/20
            via-[#efefec]/05
            to-transparent
          "
        />

        <div
          aria-hidden
          className="
            absolute inset-0
            bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)]
            bg-[length:3px_3px]
            mix-blend-multiply
            opacity-[0.12]
          "
        />
      </div>

      {/* =========================
          軸＋文章
      ========================= */}
      <div className="relative min-h-[100vh] flex items-center">
        <div className="ml-[57.5vw] max-md:ml-[10vw] max-md:mr-[10vw]">

          {/* タイトル */}
          <p
            className="
              font-serif
              text-[0.75rem]
              tracking-[0.32em]
              text-[#6b5f52]
              mb-[6vh]
            "
          >
            PHILOSOPHY
          </p>

          {/* 本文 */}
          <div className="relative">

            {/* 建築的な基準線 */}
            <span
              ref={lineRef}
              aria-hidden
              className="
                absolute
                left-[-3.8vw]
                max-md:left-[-5vw]
                top-[0.2em]
                h-[92%]
                w-px
                bg-[#6b5f52]/30
                origin-top
                scale-y-[0.001]
                transition-transform
                duration-[2000ms]
                ease-[cubic-bezier(.05,.6,.2,1)]
              "
            />

            <p
              className="
                font-serif
                text-[clamp(1.35rem,4.5vw,2.0rem)]
                font-medium
                leading-[2.05]
                tracking-[0.04em]
                text-[#1f1f1f]
                max-w-[26ch]
                md:whitespace-nowrap
              "
            >
              建築は、<br />
              形をつくるためのものではない。<br /><br />
              そこに流れる時間や、<br />
              何気ない一日の積み重ねを、<br />
              受け止めるための器だと<br />
              私たちは考えています。
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
