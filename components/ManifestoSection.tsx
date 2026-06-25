"use client";

import { useReveal } from "@/hooks/useReveal";

const lines = [
  "a cena não desapareceu.",
  "ela foi abandonada.",
  "nomes foram perdidos no silêncio entre noites.",
  "arquivos que nunca foram guardados.",
  "Skeletal Freak é o que resta quando nada é preservado.",
];

export default function ManifestoSection() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section
      ref={ref}
      className={`relative py-32 md:py-40 px-6 overflow-hidden reveal ${
        visible ? "visible" : ""
      }`}
    >
      {/* side label */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] tracking-[0.5em] text-arterial uppercase opacity-60">
        MANIFESTO — 001
      </div>

      <div className="max-w-2xl mx-auto">

        {/* header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="divider-red" />
          <span className="text-[11px] tracking-[0.5em] uppercase text-bone-dim font-mono">
            MANIFESTO
          </span>
        </div>

        {/* lines */}
        <div className="flex flex-col gap-7">
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-lg md:text-2xl leading-snug text-bone transition-all duration-700"
              style={{
                fontFamily: "'Anton', sans-serif",
                opacity: i === 1 ? 0.75 : i === 3 ? 0.85 : 1,
                letterSpacing: "0.02em",
                transitionDelay: visible ? `${i * 120}ms` : "0ms",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* footer */}
        <div className="mt-16 flex items-center gap-4 transition-all duration-700 delay-300">
          <div className="flex-1 h-px bg-ash" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-arterial font-mono">
            DOCUMENTO NÃO OFICIAL — 001
          </span>
        </div>

      </div>
    </section>
  );
}