"use client";

import { useReveal } from "@/hooks/useReveal";

export default function HeroSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 reveal ${
        visible ? "visible" : ""
      }`}
    >
      <div className="scan-line" />

      {/* background glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="w-[700px] h-[700px] opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, #CC1B1B 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* LOGO (delay implícito via CSS + reveal geral) */}
      <div className="relative z-10 flex items-center justify-center mb-14 transition-all duration-700">
        <img
          src="/skeletal-freak-logo.png"
          alt="Skeletal Freak"
          className="w-[240px] md:w-[340px] object-contain opacity-90 animate-flicker"
        />
      </div>

      {/* MANIFESTO */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">

        <h1
          className="glitch-text transition-all duration-700"
          data-text="A CENA NÃO ESQUECE."
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            lineHeight: "0.95",
            color: "#E8E0D0",
          }}
        >
          A CENA<br />
          <span className="text-arterial">NÃO</span><br />
          ESQUECE.
        </h1>

        <p className="text-bone-dim text-[14px] md:text-base mt-10 mb-12 max-w-sm leading-relaxed font-mono transition-all duration-700 delay-100">
          o que foi vivido não pode continuar desaparecendo.
        </p>

        {/* CTA ÚNICO */}
        <a
          href="https://forms.gle/bb8Rui4nyVavyyu29"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-3 border border-arterial text-arterial uppercase tracking-[0.35em] text-sm hover:bg-arterial hover:text-black transition duration-300 delay-200"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          ENTRAR NA LISTA
        </a>

      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 transition-all duration-700 delay-300">
        <div className="w-px h-12 bg-arterial animate-pulse" />
        <span className="text-[10px] tracking-[0.4em] text-bone-dim uppercase">
          scroll
        </span>
      </div>

    </section>
  );
}