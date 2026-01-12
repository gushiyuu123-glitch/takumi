export default function StudioPresenceWithImage() {
  return (
    <section className="relative bg-[#efefec] min-h-[100vh] flex items-center overflow-hidden">

      {/* =========================
          PC 右壁（そのまま）
      ========================= */}
      <div
        className="
          absolute inset-y-0 right-0
          w-[44.5vw]
          overflow-hidden
          hidden md:block
        "
      >
        <img
          src="/images/studio-exterior1.png"
          alt="Architectural studio exterior in Okinawa, Japan"
          draggable={false}
          className="
            w-full h-full object-cover
            object-[25%_center]
            opacity-[0.9]
            contrast-[1.03]
            saturate-[0.95]
            brightness-[0.96]
          "
        />

        <div className="absolute inset-0 bg-gradient-to-l from-black/18 via-black/6 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/6 to-transparent" />
        <div className="absolute inset-0 bg-[#efefec]/[0.04]" />
      </div>

      {/* =========================
          情報ブロック
      ========================= */}
      <div
        className="
          relative
          mr-[50vw]
          px-[21.4vw]
          max-w-[1000px]
          whitespace-nowrap

          max-md:mr-0
          max-md:px-[10vw]
          max-md:whitespace-normal
          max-md:text-center
        "
      >

        {/* ===== SP用：事務所写真（実在証明） ===== */}
        <div className="md:hidden mb-[8vh]">
          <div className="relative overflow-hidden">
            <img
              src="/images/studio-exterior1.png"
              alt="Architectural studio exterior"
              draggable={false}
              className="
                w-full
                aspect-[4/3]
                object-cover
                opacity-[0.9]
                contrast-[1.02]
                saturate-[0.95]
                brightness-[0.92]
              "
            />
            {/* 写真を“物”にするための影 */}
            <div className="absolute inset-0 shadow-[0_20px_40px_rgba(0,0,0,0.25)] pointer-events-none" />
          </div>
        </div>

        {/* 事務所名 */}
        <p className="font-serif text-[1.15rem] tracking-[0.14em] text-[#2b2b2b]/85 mb-[1.6vh]">
          匠 − Takumi −
        </p>

        {/* サブコピー */}
        <p className="font-sans text-[0.55rem] tracking-[0.38em] uppercase text-[#2b2b2b]/40 mb-[6vh]">
          Architecture / Living
        </p>

        {/* 所在（実在感を出す） */}
        <p className="font-serif text-[0.85rem] tracking-[0.08em] text-[#2b2b2b]/60 mb-[2vh]">
          Okinawa, Naha-shi ○○
        </p>

        {/* 連絡先（ダミーOK） */}
        <p className="font-serif text-[0.8rem] tracking-[0.06em] text-[#2b2b2b]/55 mb-[5vh]">
          Tel. 000-1234-5678<br />
          info@takumi-architecture.jp
        </p>

        {/* 区切り線 */}
        <div className="w-[56px] h-px bg-[#2b2b2b]/25 mb-[6vh] mx-auto md:mx-0" />

        {/* 業務内容 */}
        <p className="font-serif text-[0.8rem] leading-[2.4] tracking-[0.06em] text-[#2b2b2b]/55 mb-[8vh]">
          Architectural Design<br />
          Spatial Planning<br />
          Consultation by Appointment
        </p>

        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans text-[0.55rem] tracking-[0.34em] uppercase text-[#2b2b2b]/30 hover:text-[#2b2b2b]/50 transition-colors"
        >
          External Reference
        </a>
      </div>
    </section>
  );
}
