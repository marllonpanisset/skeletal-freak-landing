"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "section";
}

export default function WaitlistForm({
  variant = "section",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("sinal inválido.");
      return;
    }

    setStatus("loading");

    // Simula UX de processamento (Netlify já vai enviar em background)
    setTimeout(() => {
      setStatus("success");
      setMessage("sinal recebido. você será convocado.");
      setEmail("");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3">
        <span className="divider-red mx-auto" />
        <p
          className="text-arterial text-sm tracking-widest uppercase mt-4"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {message}
        </p>
        <span className="divider-red mx-auto" />
      </div>
    );
  }

  return (
    <form
      name="waitlist"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-3"
      noValidate
    >
      {/* REQUIRED for Netlify detection */}
      <input type="hidden" name="form-name" value="waitlist" />

      <div className="relative">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="seu@email.com"
          aria-label="Endereço de email"
          className={`
            w-full bg-transparent border px-4 py-3
            text-bone placeholder-bone-dim text-sm
            outline-none transition-colors duration-200
            focus:border-arterial
            ${status === "error" ? "border-arterial" : "border-ash"}
          `}
          style={{
            fontFamily: "'Space Mono', monospace",
            letterSpacing: "0.05em",
          }}
          disabled={status === "loading"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={`
          w-full py-3 px-6 text-sm uppercase tracking-[0.3em]
          transition-all duration-200 font-bold
          border border-arterial
          ${
            status === "loading"
              ? "bg-transparent text-bone-dim cursor-wait"
              : "bg-arterial text-bone hover:bg-transparent hover:text-arterial"
          }
        `}
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        {status === "loading" ? "PROCESSANDO..." : "SOLICITAR ENTRADA"}
      </button>

      {status === "error" && (
        <p className="text-arterial text-xs tracking-wider text-center">
          {message}
        </p>
      )}

      {variant === "section" && (
        <p className="text-bone-dim text-[10px] tracking-widest text-center uppercase mt-1">
          não é newsletter. é acesso antecipado.
        </p>
      )}
    </form>
  );
}