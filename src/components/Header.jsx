import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleJump = (id) => {
    setOpen(false);

    // メニューが閉じてからジャンプ（体感ズレ防止）
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
    });
  };

  return (
    <>
      {/* =====================
          HEADER
      ===================== */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex items-center justify-between px-[6vw] py-[3vh]">

          {/* 左：匠（存在） */}
          <div className="pointer-events-auto">
            <span
              className="
                font-serif
                text-[0.9rem]
                tracking-[0.18em]
                text-[#2b2b2b]/85
                select-none
              "
            >
              匠
            </span>
          </div>

          {/* 右：入口 / 戻る */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className="
              pointer-events-auto
              font-sans
              text-[0.6rem]
              tracking-[0.32em]
              uppercase
              text-[#2b2b2b]/40
              hover:text-[#2b2b2b]/65
              transition-colors
            "
          >
            {open ? "戻る" : "入口"}
          </button>

        </div>
      </header>

      {/* =====================
          NAV PANEL
      ===================== */}
      <nav
        className={`
          fixed inset-0 z-40
          bg-[#efefec]
          transition-transform duration-[900ms]
          ease-[cubic-bezier(.2,.8,.2,1)]
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="h-full flex flex-col justify-center items-end px-[10vw]">
         <ul className="space-y-[6vh] text-right">

  <li>
    <button
      onClick={() => handleJump("works")}
      className="
        font-serif
        text-[2rem]
        tracking-[0.06em]
        text-[#2b2b2b]/85
        hover:text-[#2b2b2b]
        transition-colors
      "
    >
      これまでの仕事
    </button>
  </li>

  {/* 区切り（呼吸） */}
  <li aria-hidden>
    <span
      className="
        block
        ml-auto
        w-[28px]
        h-px
        bg-[#2b2b2b]/[0.08]
      "
    />
  </li>

  <li>
    <button
      onClick={() => handleJump("contact")}
      className="
        font-serif
        text-[2rem]
        tracking-[0.06em]
        text-[#2b2b2b]/85
        hover:text-[#2b2b2b]
        transition-colors
      "
    >
      ご相談
    </button>
  </li>

  {/* 区切り（呼吸） */}
  <li aria-hidden>
    <span
      className="
        block
        ml-auto
        w-[28px]
        h-px
        bg-[#2b2b2b]/[0.08]
      "
    />
  </li>

  <li>
    <button
      onClick={() => handleJump("studio")}
      className="
        font-serif
        text-[2rem]
        tracking-[0.06em]
        text-[#2b2b2b]/85
        hover:text-[#2b2b2b]
        transition-colors
      "
    >
      事務所について
    </button>
  </li>

</ul>

        </div>
      </nav>
    </>
  );
}
