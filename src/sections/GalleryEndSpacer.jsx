export default function GalleryEndSpacer() {
  return (
    <section
      aria-hidden
      className="
        relative
        w-full
        h-[26vh]
        md:h-[34vh]
        bg-[#efefec]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <p
        className="
          font-serif
          text-[0.95rem]
          tracking-[0.22em]
          text-[#2b2b2b]/70
          select-none

          opacity-0
          blur-[2px]

          animate-[fadeInStill_1.4s_ease-out_0.2s_forwards]
        "
      >
        静けさの、さらに奥へ。
      </p>

      {/* keyframes */}
      <style jsx>{`
        @keyframes fadeInStill {
          0% {
            opacity: 0;
            filter: blur(2px);
            letter-spacing: 0.32em;
          }
          100% {
            opacity: 1;
            filter: blur(0);
            letter-spacing: 0.22em;
          }
        }
      `}</style>
    </section>
  );
}
