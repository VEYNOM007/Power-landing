import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supprimer mon compte | Power",
  description:
    "Procédure de suppression de votre compte Power et de vos données personnelles. Conforme RGPD.",
  robots: { index: true, follow: true },
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">

        <header className="mb-12 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-medium text-orange-600">Gestion du compte</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Supprimer mon compte
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Deux méthodes sont disponibles pour supprimer votre compte Power et
            les données associées.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Méthode 1 — Depuis l'application (recommandée)
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            La suppression directement depuis l'application est instantanée et
            ne nécessite aucune validation manuelle de notre part.
          </p>

          <ol className="mt-6 space-y-4 text-slate-700">
            <li className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
                1
              </span>
              <span>Ouvrez l'application Power sur votre appareil</span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
                2
              </span>
              <span>Allez dans <strong>Profil</strong> → <strong>Paramètres</strong></span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
                3
              </span>
              <span>Choisissez <strong>Supprimer mon compte</strong></span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
                4
              </span>
              <span>Confirmez votre mot de passe et validez</span>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Méthode 2 — Par e-mail
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Si vous n'avez plus accès à l'application, vous pouvez nous
            contacter directement pour demander la suppression manuelle de
            votre compte.
          </p>

          <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-6">
            <p className="m-0 text-slate-800">
              Envoyez un e-mail à :
            </p>
            <p className="mt-2 text-lg font-semibold">
              <a
                href="mailto:support.power.app@gmail.com?subject=Demande%20de%20suppression%20de%20compte"
                className="text-orange-700 hover:underline"
              >
                support.power.app@gmail.com
              </a>
            </p>
            <p className="mt-4 text-sm text-slate-700">
              Objet suggéré : <em>&laquo; Demande de suppression de compte &raquo;</em>
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-slate-900">
              Informations à fournir dans votre e-mail :
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600">&bull;</span>
                <span>Votre adresse e-mail associée au compte</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600">&bull;</span>
                <span>Votre numéro de téléphone (si renseigné lors de l&apos;inscription)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600">&bull;</span>
                <span>Confirmation explicite de votre volonté de supprimer le compte</span>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-slate-700">
            Votre demande sera traitée sous <strong>30 jours maximum</strong>,
            conformément à l&apos;article 17 du RGPD (droit à l&apos;effacement).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Données supprimées
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Lors de la suppression de votre compte, les données suivantes sont
            définitivement effacées :
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li className="flex gap-3">
              <span className="text-green-600">&#10003;</span>
              <span>Profil utilisateur (nom, prénom, e-mail, téléphone, photo)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">&#10003;</span>
              <span>Adresses de livraison enregistrées</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">&#10003;</span>
              <span>Moyens de paiement enregistrés (via suppression côté Stripe)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">&#10003;</span>
              <span>Historique des notifications push</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">&#10003;</span>
              <span>Données de géolocalisation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">&#10003;</span>
              <span>Préférences de l'application</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Données conservées (obligations légales)
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Certaines données doivent être conservées même après la suppression
            de votre compte, en application d'obligations légales :
          </p>

          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Donnée conservée
                  </th>
                  <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Durée
                  </th>
                  <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Motif légal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-slate-100 p-3">
                    Factures et transactions
                  </td>
                  <td className="border-b border-slate-100 p-3">10 ans</td>
                  <td className="border-b border-slate-100 p-3">
                    Code de commerce (art. L123-22)
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-slate-100 p-3">
                    Logs de connexion
                  </td>
                  <td className="border-b border-slate-100 p-3">12 mois</td>
                  <td className="border-b border-slate-100 p-3">
                    Loi pour la confiance dans l&apos;économie numérique
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Données anonymisées
                  </td>
                  <td className="p-3">Illimitée</td>
                  <td className="p-3">
                    Statistiques agrégées (aucune identification possible)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 rounded-lg border border-red-200 bg-red-50 p-6">
          <h3 className="text-lg font-semibold text-red-900">
            &#9888;&#65039; Action irréversible
          </h3>
          <p className="mt-2 text-sm text-red-800">
            La suppression de votre compte est <strong>définitive</strong>.
            Une fois effectuée, il n&apos;est plus possible de récupérer vos
            commandes passées, vos adresses enregistrées ou vos préférences.
            Vous pourrez à tout moment créer un nouveau compte, mais les
            données précédentes ne seront pas restaurables.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            Une question ?
          </h2>
          <p className="mt-3 text-slate-700">
            Pour toute question sur la procédure de suppression ou sur vos
            droits RGPD, consultez notre{" "}
            <a href="/privacy" className="text-orange-600 hover:underline">
              politique de confidentialité
            </a>{" "}
            ou contactez-nous à{" "}
            <a
              href="mailto:support.power.app@gmail.com"
              className="text-orange-600 hover:underline"
            >
              support.power.app@gmail.com
            </a>
            .
          </p>
        </section>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500">
          <p>
            &copy; 2026 Power — Tous droits réservés.{" "}
            <a href="/" className="text-orange-600 hover:underline">
              Retour à l&apos;accueil
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
