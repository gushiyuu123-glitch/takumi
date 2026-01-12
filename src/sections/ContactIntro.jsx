import { useEffect, useRef } from "react";

export default function ContactIntro() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        requestAnimationFrame(() => {
          if (lineRef.current) {
            lineRef.current.style.transform = "scaleY(1)";
          }
        });

        observer.disconnect();
      },
      { threshold: 0.6 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        bg-[#efefec]
        py-[24vh]
        md:py-[28vh]
        pb-[30vh]
        md:pb-[36vh]
      "
    >
      <div className="mx-auto max-w-[720px] px-6 text-center">

        {/* Philosophy からの“沈黙” */}
        <div className="h-[12vh] md:h-[18vh]" />

        {/* 決断文（短く・断定しない） */}
        <p
          className="
            font-serif
            text-[1.25rem]
            leading-[2.6]
            tracking-[0.06em]
            text-[#2b2b2b]/80
            mb-[10vh]

            max-md:max-w-[22rem]
            max-md:mx-auto
            max-md:text-balance
          "
        >
          空間について、
          個別にご相談を承ります。
        </p>

        {/* 鉛筆で引く縦線（合図） */}
<div
  className="
    relative
    mx-auto
    w-[1px]
    h-[36px]
    md:h-[24px]
    mb-[-4vh]
    md:mb-[-13vh]
    overflow-hidden
  "
>
  <span
    ref={lineRef}
    aria-hidden
    className="
      absolute
      inset-0
      bg-[#2b2b2b]/15
      md:bg-[#2b2b2b]/10
      origin-top
      scale-y-[0.001]
      transition-transform
      duration-[1800ms]
      md:duration-[1200ms]
      ease-[cubic-bezier(.05,.6,.2,1)]
    "
  />
</div>


        {/* 入口（UIにしない） */}
        <a
          href="/contact"
          className="
            inline-block
            font-sans
            text-[0.65rem]
            tracking-[0.32em]
            uppercase
            text-[#2b2b2b]/45
            hover:text-[#2b2b2b]/70
            transition-colors
            mt-[4vh]
          "
        >
          Contact
        </a>

      </div>
    </section>
  );
}
