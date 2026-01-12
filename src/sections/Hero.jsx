import { useEffect, useMemo, useRef, useState } from "react";

const HERO_IMAGES = [
  "/images/hero10.png",
  "/images/hero1.png",
  "/images/hero300.png",
  "/images/hero4.png",
];

export default function HeroDelayedRecognition() {
  const [step, setStep] = useState(0); // 0: blank / 1: text / 2: image
  const [imgIndex, setImgIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  const titleRef = useRef(null);
  const subRef = useRef(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const isSP =
    typeof window !== "undefined" && window.innerWidth < 768;

  /* =========================
     TIME CONTROL
  ========================== */
  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(2);
      return;
    }

    const timers = [];
    let rotateTimer = null;

    timers.push(setTimeout(() => setStep(1), 900));
    timers.push(setTimeout(() => setStep(2), 1800));

    const scheduleNext = () => {
      const delay = 6000 + Math.random() * 2000;

      rotateTimer = setTimeout(() => {
        setIsZooming(true);

        setTimeout(() => {
          setImgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 600);

        setTimeout(() => {
          setIsZooming(false);
        }, 1600);

        scheduleNext();
      }, delay);
    };

    timers.push(setTimeout(scheduleNext, 2000));

    return () => {
      timers.forEach(clearTimeout);
      if (rotateTimer) clearTimeout(rotateTimer);
    };
  }, [prefersReducedMotion]);

  /* =========================
     TITLE FADE (CSS only)
  ========================== */
  useEffect(() => {
    if (step >= 1) {
      titleRef.current?.classList.add("is-visible");
      subRef.current?.classList.add("is-visible");
    }
  }, [step]);

  return (
    <section
      className="
        relative
        min-h-[100svh]
        max-md:min-h-[110svh]
        bg-[#efefec]
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => {
          const isActive = step >= 2 && imgIndex === i;

          const transformValue = isActive
            ? isZooming
              ? prefersReducedMotion
                ? "scale(1.02)"
                : isSP
                ? "scale(1.035)"
                : "scale(1.06) translateY(-1.5%)"
              : "scale(1.02)"
            : "scale(1.1)";

          return (
            <div
              key={src}
              className="
                absolute inset-0
                will-change-[clip-path]
                [transition:clip-path_900ms_cubic-bezier(.2,.8,.2,1)]
              "
              style={{
                clipPath: isActive
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(100% 0% 0% 0%)",
              }}
              aria-hidden
            >
              <img
                src={src}
                alt=""
                className="
                  h-full w-full object-cover
                  opacity-[0.92]
                  grayscale-[0.08]
                  brightness-[0.92]
                  contrast-[0.98]
                  transition-transform
                  duration-[1800ms]
                  [transition-timing-function:cubic-bezier(.16,.84,.44,1)]
                "
                style={{ transform: transformValue }}
                draggable={false}
              />

              {/* AIR LAYERS */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#efefec]/18 via-transparent to-[#efefec]/22" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2b2b2b]/[0.10] to-[#2b2b2b]/[0.18]" />
              <div
                aria-hidden
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]
                  opacity-[0.35]
                  mix-blend-overlay
                  pointer-events-none
                "
              />
            </div>
          );
        })}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center">
        <div className="relative text-center">
          {/* AIR PANEL */}
          <div
            aria-hidden
            className="
              absolute inset-[-3.5rem]
              bg-gradient-to-b
              from-[#efefec]/22
              via-[#efefec]/10
              to-transparent
              max-md:from-[#efefec]/14
              max-md:via-[#efefec]/06
              backdrop-blur-[1.5px]
              max-md:backdrop-blur-[1px]
              pointer-events-none
            "
          />

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="
              hero-title
              relative
              font-serif
              text-[clamp(2.6rem,6vw,4.8rem)]
              max-md:text-[clamp(2.4rem,7vw,3.6rem)]
              tracking-[0.22em]
              max-md:tracking-[0.18em]
              leading-none
              text-[#2b2b2b]/90
              text-center
              select-none
              drop-shadow-[0_0_18px_rgba(239,239,236,0.35)]
            "
          >
            匠 – Takumi –
          </h1>

          {/* SUB */}
          <p
            ref={subRef}
            className="
              hero-sub
              mt-8
              max-md:mt-10
              font-sans
              text-[0.7rem]
              max-md:text-[0.65rem]
              tracking-[0.24em]
              uppercase
              text-[#2b2b2b]/65
              select-none
            "
          >
            Architecture, Living
          </p>
        </div>
      </div>
    </section>
  );
}
