"use client";

import WaitlistForm from "./WaitlistForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

      <div className="scan-line" />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, #CC1B1B 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="relative w-[340px] h-[340px] md:w-[520px] md:h-[520px]">
          <svg
            className="w-full h-full opacity-[0.06] animate-flicker"
            viewBox="0 0 520 520"
          >
            <circle cx="260" cy="260" r="255" stroke="#CC1B1B" strokeWidth="2" />
            <line x1="260" y1="0" x2="260" y2="520" stroke="#CC1B1B" />
            <line x1="0" y1="260" x2="520" y2="260" stroke="#CC1B1B" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        <p className="text-arterial text-[11px] tracking-[0.5em] uppercase mb-12 font-mono">
          SISTEMA EM INICIALIZAÇÃO — 2025
        </p>

        <h1
          className="glitch-text animate-flicker"
          data-text="A CENA NÃO ESQUECE."
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            lineHeight: "0.9",
            color: "#E8E0D0",
          }}
        >
          A CENA<br />
          <span className="text-arterial">NÃO</span><br />
          ESQUECE.
        </h1>

        <p className="text-bone-dim text-[14px] md:text-base mt-10 mb-12 max-w-sm leading-relaxed font-mono">
          o que foi vivido não pode continuar desaparecendo.
        </p>

        <div className="w-full max-w-sm">
          <WaitlistForm variant="hero" />
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-arterial animate-pulse" />
        <span className="text-[10px] tracking-[0.4em] text-bone-dim uppercase">
          scroll
        </span>
      </div>

    </section>
  );
}