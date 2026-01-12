import { useEffect, useRef } from "react";

export default function ModelIntro() {
  const guideRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // 紙に触れる一呼吸
        setTimeout(() => {
          requestAnimationFrame(() => {
            entry.target.style.transform = "scaleY(1)";
          });
        }, 80);

        observer.disconnect();
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (guideRef.current) observer.observe(guideRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        bg-[#efefec]
        pt-[12vh]
        md:pt-[10vh]
        pb-[26vh]
        md:pb-[22vh]
      "
    >
      <div className="mx-auto max-w-[720px] px-6 text-center">

<p
  className="
    font-serif
    text-[1.05rem]
    md:text-[1.15rem]
    leading-[2.6]
    tracking-[0.06em]
    text-[#2b2b2b]/80

    max-md:max-w-[22rem]
    max-md:mx-auto
    max-md:text-balance
  "
>
  実際の空間を、体感するためのモデルルーム。
</p>


        {/* 英語：これから始まる合図 */}
        <p
          className="
            mt-14
            font-sans
            text-[0.6rem]
            tracking-[0.32em]
            uppercase
            text-[#2b2b2b]/40
          "
        >
          Experience the space through architecture
        </p>

        {/* 視線誘導（鉛筆で描く線／UIにしない） */}
        <div
          className="
            relative
            mt-[12vh]
            md:mt-[14vh]
            mx-auto
            w-[1px]
            h-[48px]
            overflow-hidden
          "
        >
          <span
            ref={guideRef}
            aria-hidden
            className="
              absolute
              inset-0
              bg-[#2b2b2b]/20
              origin-top
              scale-y-[0.001]
              transition-transform
              duration-[1600ms]
              ease-[cubic-bezier(.05,.6,.2,1)]
            "
          />
        </div>

      </div>
    </section>
  );
}
