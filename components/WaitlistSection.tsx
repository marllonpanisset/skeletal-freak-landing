"use client";

import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative py-32 md:py-48 px-6 border-t border-ash overflow-hidden">

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-96 h-96 opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse at center, #CC1B1B 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="divider-red" />
          <span className="text-[11px] tracking-[0.5em] uppercase text-bone-dim font-mono">
            ACESSO ANTECIPADO
          </span>
          <span className="divider-red" />
        </div>

        <h2 className="text-4xl md:text-6xl mb-6 leading-none text-bone">
          ENTRE ENQUANTO<br />
          AINDA ESTÁ<br />
          <span className="text-arterial">SE FORMANDO.</span>
        </h2>

        <p className="text-bone-dim text-[13px] tracking-wider mb-12 leading-relaxed uppercase font-mono">
          deixe seu sinal. você será o primeiro a saber.
        </p>

        <WaitlistForm variant="section" />

        <p className="text-[11px] tracking-widest text-bone-dim mt-8 uppercase font-mono">
          sem ruído. só sinais.
        </p>

      </div>
    </section>
  );
}