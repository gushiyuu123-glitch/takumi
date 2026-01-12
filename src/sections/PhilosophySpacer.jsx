export default function PhilosophySpacer() {
  return (
    <section
      aria-hidden
      className="
        relative
        w-full
        h-[26vh]
        md:h-[26vh]
        bg-[#efefec]
      "
    >
      {/* 下に流すだけの空気 */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-[#2b2b2b]/[0.035]
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
}
