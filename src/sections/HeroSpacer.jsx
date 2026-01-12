export default function HeroSpacer() {
  return (
    <section
      aria-hidden
      className="
        relative
        w-full
        h-[28vh]
        md:h-[28vh]
        bg-[#efefec]
      "
    >
      {/* ほぼ気づかれない空気の層 */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#2b2b2b]/[0.02]
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
}
