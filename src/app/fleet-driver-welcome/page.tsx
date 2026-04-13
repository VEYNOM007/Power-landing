"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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

// ─── Download URL ─────────────────────────────────────────────
const PLAY_STORE_URL = "https://play.google.com/apps/internaltest/4701552360389906449";

function WelcomeContent() {
  const searchParams = useSearchParams();
  const company = searchParams.get("company") || "votre entreprise";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A1628] via-[#0f1f35] to-[#1a2d4a] text-white">
      <div className="container mx-auto px-4 py-12 max-w-2xl">

        {/* Logo */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8 text-center"
        >
          <Image
            src="/logo-power-dark.png"
            alt="Power Fleet"
            width={200}
            height={60}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Titre */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Bienvenue chez Power Fleet ! 🎉
          </h1>
          <p className="text-gray-300 text-lg mb-2">
            Votre compte chauffeur pour{" "}
            <span className="font-semibold text-white">{company}</span> est prêt.
          </p>
          <p className="text-gray-400">
            Téléchargez l&apos;application Power pour commander votre carburant.
          </p>
        </motion.div>

        {/* Bouton téléchargement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-12 text-center"
        >
          <Link
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#0A1628] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Télécharger sur Google Play
          </Link>
        </motion.div>

        {/* Étapes */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/10"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            📱 Comment vous connecter ?
          </h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Installez l&apos;application Power",
                desc: "Cliquez sur le bouton ci-dessus",
              },
              {
                step: 2,
                title: "Ouvrez l&apos;app et appuyez sur &quot;Connexion Chauffeur&quot;",
                desc: "Bouton en bas de l&apos;écran de connexion",
              },
              {
                step: 3,
                title: "Entrez votre email professionnel",
                desc: "Celui où vous avez reçu l&apos;invitation",
              },
              {
                step: 4,
                title: "Utilisez le mot de passe que vous venez de créer",
                desc: "Et c&apos;est parti ! 🚀",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={idx + 3}
                className="flex items-start gap-4"
              >
                <span className="bg-[#3E92CC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* iOS coming soon */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
          className="text-gray-500 text-sm mb-8 text-center"
        >
          📱 Version iOS bientôt disponible
        </motion.p>

        {/* Support */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={8}
          className="border-t border-white/10 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            Besoin d&apos;aide ? Contactez votre gestionnaire de flotte.
          </p>
        </motion.div>

      </div>
    </main>
  );
}

export default function FleetDriverWelcomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0A1628] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      }
    >
      <WelcomeContent />
    </Suspense>
  );
}
