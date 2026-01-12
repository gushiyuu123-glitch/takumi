import { useEffect, useRef, useState } from "react";

const IMAGES = [
  { src: "/images/full1.png" },
  { src: "/images/full2.png" },
  { src: "/images/full3.png" },
];

const TEXTS = [
  "空間の奥行きが、静かに立ち上がります。",
  "視点が移動することで、構成が見えてきます。",
  "距離によって、空間の表情が変わります。",
];

export default function FullscreenGallery() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / scrollable, 0),
        0.999
      );

      // 展示配分：1枚目→導入、2枚目→主役、3枚目→余韻
      if (progress < 0.30) {
        setIndex(0);
      } else if (progress < 0.85) {
        setIndex(1);
      } else {
        setIndex(2);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-[#efefec]
        h-[200vh]
        md:h-[240vh]
        py-[12vh]
      "
    >
      {/* =========================
          STICKY（展示）
      ========================= */}
      <div className="sticky top-[10vh] md:top-[8vh]">
        <div
          className="
            relative
            mx-auto
            w-[97vw]
            max-w-[1360px]
            h-[76vh]
            md:h-[82vh]
            overflow-hidden
          "
        >
          {/* ===== IMAGES ===== */}
          {IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt=""
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-all
                duration-[1100ms]
                ease-out
              "
              style={{
                opacity: index === i ? 1 : 0,
                transform:
                  index === i
                    ? "scale(1.025)"
                    : "scale(1.07)",
              }}
              draggable={false}
            />
          ))}

          {/* ===== LUXURY LAYER ===== */}
          <div
            aria-hidden
            className="
              absolute inset-0
              bg-gradient-to-b
              from-[#efefec]/18
              via-transparent
              to-[#2b2b2b]/22
            "
          />
          <div
            aria-hidden
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#efefec]/24
              via-transparent
              to-[#efefec]/24
            "
          />
          <div
            aria-hidden
            className="
              absolute inset-0
              backdrop-blur-[0.8px]
              pointer-events-none
            "
          />

          {/* ===== TEXT ===== */}
          <div
            className="
              absolute
              bottom-[5vh]
              md:bottom-[4vh]
              left-[4vw]
              md:left-[3vw]
              pointer-events-none
            "
          >
            <div
              aria-hidden
              className="
                absolute
                -inset-x-[2vw]
                -inset-y-[1.4vh]
                bg-gradient-to-r
                from-[#efefec]/65
                via-[#efefec]/45
                to-transparent
                blur-[3px]
              "
            />
            <p
              className="
                relative
                font-serif
                text-[clamp(0.95rem,1.25vw,1.05rem)]
                leading-[1.9]
                tracking-[0.04em]
                md:whitespace-nowrap
                text-[#2b2b2b]/88
                max-w-[26rem]
              "
            >
              {TEXTS[index]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
