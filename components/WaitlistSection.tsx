"use client";

import { useReveal } from "@/hooks/useReveal";

export default function WaitlistSection() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section
      id="waitlist"
      ref={ref}
      className={`relative py-32 md:py-48 px-6 border-t border-ash overflow-hidden reveal ${
        visible ? "visible" : ""
      }`}
    >
      {/* glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-96 h-96 opacity-[0.08]"
          style={{
            background:
              "radial-gradient(ellipse at center, #CC1B1B 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">

        {/* header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="divider-red" />
          <span className="text-[11px] tracking-[0.5em] uppercase text-bone-dim font-mono">
            PONTO DE ENTRADA
          </span>
          <span className="divider-red" />
        </div>

        {/* title */}
        <h2 className="text-4xl md:text-6xl mb-6 leading-none text-bone transition-all duration-700">
          A ENTRADA
          <br />
          NÃO ESTÁ
          <br />
          <span className="text-arterial">ABERTA PARA TODOS.</span>
        </h2>

        {/* subtitle */}
        <p
          className="text-bone-dim text-[13px] tracking-wider mb-12 leading-relaxed uppercase font-mono transition-all duration-700"
          style={{
            transitionDelay: visible ? "120ms" : "0ms",
          }}
        >
          isso não é uma inscrição. é aceitação de presença.
        </p>

        {/* CTA */}
        <a
          href="https://forms.gle/bb8Rui4nyVavyyu29"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-3 border border-arterial text-arterial uppercase tracking-[0.35em] text-sm hover:bg-arterial hover:text-black transition duration-300"
          style={{
            fontFamily: "'Space Mono', monospace",
            transitionDelay: visible ? "220ms" : "0ms",
          }}
        >
          ENTRAR NA LISTA
        </a>

        {/* footer */}
        <p
          className="text-[11px] tracking-widest text-bone-dim mt-8 uppercase font-mono transition-all duration-700"
          style={{
            transitionDelay: visible ? "200ms" : "0ms",
          }}
        >
          — acesso em formação —
        </p>

      </div>
    </section>
  );
}