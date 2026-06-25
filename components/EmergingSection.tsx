"use client";

import { useReveal } from "@/hooks/useReveal";

const signals = [
  {
    id: "01",
    title: "MEMÓRIA CONTINUA",
    body: "não termina quando acaba.",
  },
  {
    id: "02",
    title: "PRESENÇA REGISTRADA",
    body: "o que acontece não desaparece mais no silêncio.",
  },
  {
    id: "03",
    title: "ARQUIVO EM FORMAÇÃO",
    body: "não está pronto. está acontecendo.",
  },
  {
    id: "04",
    title: "CONEXÕES INVISÍVEIS",
    body: "tudo que estava espalhado começa a se reconhecer.",
  },
];

export default function EmergingSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`relative py-32 md:py-40 px-6 border-t border-ash overflow-hidden reveal ${
        visible ? "visible" : ""
      }`}
    >
      {/* glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(204,27,27,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">

        {/* header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="divider-red" />
          <span className="text-[11px] tracking-[0.5em] uppercase text-bone-dim font-mono">
            O QUE ESTÁ SURGINDO
          </span>
        </div>

        {/* title */}
        <h2 className="text-3xl md:text-5xl mb-20 leading-tight text-bone">
          um sistema em{" "}
          <span className="text-arterial">formação.</span>
        </h2>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ash">

          {signals.map((item, index) => (
            <div
              key={item.id}
              className="bg-void p-8 md:p-10 transition-all duration-700"
              style={{
                transitionDelay: visible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="flex items-start gap-6">

                <span className="text-[11px] text-arterial font-mono">
                  {item.id}
                </span>

                <div>
                  <h3 className="text-sm uppercase text-bone mb-3 font-mono tracking-widest">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-relaxed text-bone-dim font-mono">
                    {item.body}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* footer */}
        <p className="text-[11px] tracking-widest uppercase text-center mt-16 text-bone-dim font-mono">
          — ainda em formação —
        </p>

      </div>
    </section>
  );
}