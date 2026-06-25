"use client";

const lines = [
  "a cena gótica brasileira existe há décadas.",
  "mas nunca teve onde permanecer.",
  "cada noite encerrada. cada nome esquecido. cada registro perdido.",
  "a memória da cena se perde em silêncio.",
  "Skeletal Freak é o que sobra quando tudo o resto desaparece.",
];

export default function ManifestoSection() {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">

      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] tracking-[0.5em] text-arterial uppercase opacity-60">
        MANIFESTO — 001
      </div>

      <div className="max-w-2xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="divider-red" />
          <span className="text-[11px] tracking-[0.5em] uppercase text-bone-dim font-mono">
            MANIFESTO
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-lg md:text-2xl leading-snug text-bone"
              style={{
                fontFamily: "'Anton', sans-serif",
                opacity: i === 1 ? 0.7 : i === 3 ? 0.8 : 1,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-ash" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-arterial font-mono">
            DOCUMENTO NÃO OFICIAL — 001
          </span>
        </div>

      </div>
    </section>
  );
}