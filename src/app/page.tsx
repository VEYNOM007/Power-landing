"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// ─── Animation variants ───────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// ─── Download URLs (remplacer par les vrais liens) ─────────────
const PLAY_STORE_URL = "#"; // URL Play Store interne
const TESTFLIGHT_URL = "#"; // URL TestFlight Apple

// ─── GA Event Tracker ─────────────────────────────────────────
function trackDownload(platform: "android" | "ios") {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "download_click", {
      event_category: "engagement",
      event_label: platform,
      value: platform === "android" ? 1 : 2,
    });
  }
}


function StepIcon({ number }: { number: number }) {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3E92CC] text-white font-bold text-lg shrink-0">
      {number}
    </div>
  );
}

// ─── HEADER ────────────────────────────────────────────────────
function Header() {
  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#E8E8E8]"
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="text-xl font-extrabold tracking-tight text-[#0A2463]">
          Power
        </span>
        <a
          href="mailto:support@power-app.fr"
          className="text-sm font-medium text-[#0A2463] hover:text-[#3E92CC] transition-colors duration-200"
        >
          Contact Support
        </a>
      </div>
    </motion.header>
  );
}

// ─── HERO SECTION ──────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 pt-20 pb-12">
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Logo Power — grand et centré */}
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="mb-10">
          <Image
            src="/logo_Power.jpg"
            alt="Power"
            width={480}
            height={480}
            className="mx-auto rounded-3xl"
            priority
          />
        </motion.div>

        {/* Badge Beta */}
        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible" className="mb-8">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35] text-white text-xs font-semibold tracking-wide">
            Programme de test exclusif — Bêta 1.0
          </span>
        </motion.div>

        {/* Titre */}
        <motion.h1
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[#0A2463]"
        >
          Prenez le contrôle.{" "}
          <br className="hidden sm:block" />
          Devenez membre fondateur de{" "}
          <span className="text-[#0A2463]">Power.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-[#0A2463] opacity-85 max-w-xl mx-auto mb-12 leading-[1.6]"
        >
          Accédez en avant-première à la version bêta et façonnez l&apos;outil
          qui va redéfinir la livraison de carburant avec nous.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Google Play */}
          <a
            href={PLAY_STORE_URL}
            onClick={() => trackDownload("android")}
            className="block w-[180px] sm:w-auto"
          >
            <Image
              src="/images-google-play.png"
              alt="Disponible sur Google Play"
              width={220}
              height={66}
              className="w-full sm:w-[220px] h-auto"
              priority
            />
          </a>

          {/* Apple Store */}
          <a
            href={TESTFLIGHT_URL}
            onClick={() => trackDownload("ios")}
            className="block w-[180px] sm:w-auto"
          >
            <Image
              src="/image-apple-store.png"
              alt="Disponible sur l'App Store"
              width={220}
              height={66}
              className="w-full sm:w-[220px] h-auto"
              priority
            />
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#0A2463]/20 mx-auto flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#0A2463]/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── COMMENT ÇA MARCHE ─────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      num: 1,
      title: "Cliquez sur le lien",
      description:
        "Choisissez votre plateforme (Android ou iOS) et cliquez sur le bouton de téléchargement.",
    },
    {
      num: 2,
      title: "Acceptez l'invitation",
      description:
        "Suivez les instructions du Play Store ou de TestFlight pour rejoindre le programme.",
    },
    {
      num: 3,
      title: "Testez & donnez votre avis",
      description:
        "Utilisez l'app librement et partagez vos retours pour nous aider à l'améliorer.",
    },
  ];

  return (
    <section className="py-24 px-5 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0A2463]">
            Comment ça <span className="text-[#FF6B35]">marche ?</span>
          </h2>
          <p className="text-[#0A2463] opacity-70 text-lg">
            Trois étapes simples pour rejoindre l&apos;aventure.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-light rounded-2xl p-6 sm:p-8 flex items-start gap-5 hover:shadow-md transition-shadow duration-200"
            >
              <StepIcon number={step.num} />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#0A2463]">{step.title}</h3>
                <p className="text-[#0A2463] opacity-70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-5 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#0A2463]">Power</span>
          <span className="text-sm text-[#0A2463] opacity-50">
            &mdash; Version Beta 1.0.0
          </span>
        </div>

        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-[#0A2463]/40 hover:text-[#0A2463] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" aria-label="Twitter" className="text-[#0A2463]/40 hover:text-[#0A2463] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-[#0A2463]/40 hover:text-[#0A2463] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-[#0A2463] opacity-40">
          &copy; {new Date().getFullYear()} Power. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      scriptProps={{ async: true, defer: true, appendTo: "head" }}
    >
      <main className="relative bg-white">
        <Header />
        <HeroSection />
        <HowItWorksSection />
        <Footer />
      </main>
    </GoogleReCaptchaProvider>
  );
}
