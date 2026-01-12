export default function GalleryIntro() {
  return (
    <section
      className="
        bg-[#efefec]
        pt-[16vh]
        md:pt-[14vh]
        pb-[20vh]
        md:pb-[18vh]
      "
    >
      <div className="mx-auto max-w-[720px] px-6 text-center">
        
        {/* ===== MAIN TITLE ===== */}
        <h2
          className="
            font-serif
            text-[clamp(1.4rem,2.2vw,1.9rem)]
            leading-[1.8]
            tracking-[0.12em]
            text-[#2b2b2b]/90

            max-md:max-w-[18rem]
            max-md:mx-auto
            max-md:text-balance
          "
        >
          建築と、過ごし方
        </h2>

        {/* ===== SUB (EN) ===== */}
        <p
          className="
            mt-8
            font-sans
            text-[0.6rem]
            tracking-[0.32em]
            uppercase
            text-[#2b2b2b]/45
          "
        >
          Architecture & living
        </p>
      </div>
    </section>
  );
}
