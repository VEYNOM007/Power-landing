import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Power",
  description:
    "Politique de confidentialité de l'application Power — livraison de carburant à domicile. Données personnelles, RGPD, droits des utilisateurs.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-medium text-orange-600">Juridique</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Dernière mise à jour : 18 avril 2026
          </p>
        </header>

        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline">

          <section>
            <p className="text-lg">
              Power attache une importance particulière à la protection de vos données
              personnelles. La présente politique de confidentialité vous informe de la
              manière dont nous collectons, utilisons, partageons et protégeons vos
              données lorsque vous utilisez notre application mobile et notre site web.
            </p>
            <p>
              Cette politique est conforme au Règlement Général sur la Protection des
              Données (RGPD — Règlement UE 2016/679) et à la loi française{" "}
              <span className="whitespace-nowrap">Informatique et Libertés</span>{" "}
              modifiée.
            </p>
          </section>

          <section>
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement de vos données personnelles est :
            </p>
            <div className="my-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <p className="m-0">
                <strong>Moussa {"<Kouma>"}</strong>
                <br />
                Personne physique en cours d'immatriculation
                <br />
                [1 Rue du Métro Charonne ]
                <br />
                91300 Massy, France
                <br />
                <br />
                Contact : <a href="mailto:support.power.app@gmail.com">support.power.app@gmail.com</a>
              </p>
            </div>
            <p>
              Aucun Délégué à la Protection des Données (DPO) n'a été désigné, cette
              désignation n'étant pas obligatoire au regard de notre activité et de
              notre taille (article 37 du RGPD).
            </p>
          </section>

          <section>
            <h2>2. Données collectées</h2>
            <p>
              Nous collectons uniquement les données nécessaires au fonctionnement du
              service. Les catégories de données traitées sont les suivantes :
            </p>

            <h3>2.1 Données d'identification</h3>
            <ul>
              <li>Nom, prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Photo de profil (facultative)</li>
              <li>Mot de passe (stocké de manière chiffrée)</li>
            </ul>

            <h3>2.2 Données de localisation</h3>
            <ul>
              <li>
                Localisation précise (GPS) lors de la prise de commande ou du suivi en
                temps réel d'une livraison
              </li>
              <li>Adresse(s) de livraison que vous enregistrez dans l'application</li>
            </ul>
            <p>
              La localisation est collectée <strong>uniquement lorsque l'application
              est utilisée au premier plan</strong>. Aucune collecte en arrière-plan n'est
              effectuée.
            </p>

            <h3>2.3 Données de transaction et de paiement</h3>
            <ul>
              <li>Historique de vos commandes (types de carburant, quantités, dates, montants)</li>
              <li>
                Informations de paiement traitées exclusivement par notre prestataire
                Stripe Payments Europe (nous ne stockons jamais vos numéros de carte
                bancaire)
              </li>
              <li>Factures et documents de transaction</li>
            </ul>

            <h3>2.4 Données techniques</h3>
            <ul>
              <li>
                Identifiants de l'appareil (ID Firebase Installation, jeton de
                notification FCM)
              </li>
              <li>Type d'appareil, version du système d'exploitation</li>
              <li>
                Journaux d'erreurs et de performance (Firebase Crashlytics) pour
                corriger les bugs
              </li>
            </ul>

            <h3>2.5 Données spécifiques aux livreurs (DRIVER)</h3>
            <p>
              Si vous utilisez l'application en tant que livreur Power, nous collectons
              en outre :
            </p>
            <ul>
              <li>Photo du véhicule</li>
              <li>Photos de documents (permis, assurance, carte grise)</li>
              <li>Coordonnées bancaires pour le paiement des prestations</li>
              <li>Historique des livraisons effectuées</li>
              <li>Évaluations reçues des clients</li>
            </ul>

            <h3>2.6 Données spécifiques aux comptes professionnels (B2B Fleet)</h3>
            <p>
              Pour les flottes d'entreprise utilisant Power Fleet, nous collectons
              également :
            </p>
            <ul>
              <li>Nom de l'entreprise, SIRET, numéro de TVA intracommunautaire</li>
              <li>Adresse de facturation</li>
              <li>Identité et rôle des collaborateurs autorisés</li>
              <li>Véhicules de la flotte déclarés</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalités du traitement et bases légales</h2>
            <p>
              Chaque traitement de vos données repose sur une base légale précise
              conformément à l'article 6 du RGPD :
            </p>

            <div className="my-6 overflow-hidden rounded-lg border border-slate-200">
              <table className="m-0 w-full border-collapse text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                      Finalité
                    </th>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                      Base légale
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Création et gestion de votre compte
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Exécution du contrat
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Traitement des commandes et livraisons
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Exécution du contrat
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Paiement et facturation
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Exécution du contrat + obligation légale
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Géolocalisation pendant la livraison
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Consentement (révocable)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Notifications push (suivi de commande)
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Consentement (révocable)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Support client et réclamations
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Intérêt légitime
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Sécurité et prévention de la fraude
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Intérêt légitime
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      Conservation comptable et fiscale
                    </td>
                    <td className="p-3">Obligation légale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>4. Autorisations Android utilisées</h2>
            <p>
              L'application Power demande les autorisations suivantes sur votre appareil.
              Chacune est strictement liée à une fonctionnalité du service :
            </p>
            <ul>
              <li>
                <strong>Localisation précise (fine)</strong> — pour déterminer votre
                position lors d'une commande et permettre au livreur de vous rejoindre.
              </li>
              <li>
                <strong>Localisation approximative (coarse)</strong> — pour afficher les
                zones de livraison disponibles à proximité.
              </li>
              <li>
                <strong>Caméra</strong> — pour prendre en photo votre profil, un
                document officiel (livreurs), ou votre véhicule (livreurs). Aucune photo
                n'est prise sans votre action volontaire.
              </li>
              <li>
                <strong>Notifications</strong> — pour vous informer en temps réel du
                statut de vos commandes (acceptation, départ du livreur, arrivée, etc.).
              </li>
              <li>
                <strong>Internet</strong> — pour communiquer avec nos serveurs.
              </li>
            </ul>
            <p>
              Vous pouvez révoquer à tout moment ces autorisations depuis les paramètres
              de votre appareil.
            </p>
          </section>

          <section>
            <h2>5. Destinataires des données</h2>
            <p>
              Vos données personnelles sont traitées par Power et peuvent être
              communiquées aux sous-traitants suivants, chacun lié par un accord de
              traitement de données conforme au RGPD :
            </p>

            <div className="my-6 overflow-hidden rounded-lg border border-slate-200">
              <table className="m-0 w-full border-collapse text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                      Prestataire
                    </th>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                      Finalité
                    </th>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold text-slate-900">
                      Localisation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 p-3">Google Firebase</td>
                    <td className="border-b border-slate-100 p-3">
                      Authentification, base de données, notifications, analyse
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Union Européenne (Paris, Belgique)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">
                      Stripe Payments Europe
                    </td>
                    <td className="border-b border-slate-100 p-3">
                      Traitement des paiements
                    </td>
                    <td className="border-b border-slate-100 p-3">Irlande (UE)</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 p-3">Brevo (Sendinblue)</td>
                    <td className="border-b border-slate-100 p-3">
                      Envoi d'e-mails transactionnels
                    </td>
                    <td className="border-b border-slate-100 p-3">France</td>
                  </tr>
                  <tr>
                    <td className="p-3">Vercel Inc.</td>
                    <td className="p-3">Hébergement du site web</td>
                    <td className="p-3">Union Européenne</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Nous ne vendons, ne louons ni ne divulguons vos données à des tiers à des
              fins commerciales.
            </p>
          </section>

          <section>
            <h2>6. Transferts hors Union Européenne</h2>
            <p>
              Certains de nos sous-traitants (notamment Google, Stripe, Vercel)
              disposent d'entités mères aux États-Unis. Lorsque des transferts hors UE
              peuvent avoir lieu, ils sont encadrés par :
            </p>
            <ul>
              <li>
                Les <strong>Clauses Contractuelles Types</strong> (CCT / SCC) approuvées
                par la Commission Européenne
              </li>
              <li>
                Le <strong>Data Privacy Framework</strong> (DPF) lorsque les entités
                sont certifiées
              </li>
            </ul>
            <p>
              Par défaut, vos données sont hébergées sur des serveurs situés en Union
              Européenne (Firestore : région europe-west9 Paris ; Cloud Functions :
              région europe-west1 Belgique).
            </p>
          </section>

          <section>
            <h2>7. Durées de conservation</h2>
            <p>
              Vos données sont conservées pour une durée strictement nécessaire aux
              finalités du traitement :
            </p>
            <ul>
              <li>
                <strong>Compte utilisateur actif</strong> : tant que le compte existe
              </li>
              <li>
                <strong>Compte supprimé</strong> : suppression effective sous 30 jours,
                sauf obligations légales
              </li>
              <li>
                <strong>Données de facturation</strong> : 10 ans (obligation comptable,
                article L123-22 du Code de commerce)
              </li>
              <li>
                <strong>Logs techniques et connexion</strong> : 12 mois maximum
              </li>
              <li>
                <strong>Données de géolocalisation</strong> : supprimées à la fin de la
                livraison
              </li>
              <li>
                <strong>Prospects non clients</strong> : 3 ans après le dernier contact
              </li>
            </ul>
          </section>

          <section>
            <h2>8. Vos droits</h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
              des droits suivants sur vos données personnelles :
            </p>
            <ul>
              <li>
                <strong>Droit d'accès</strong> — obtenir une copie des données que nous
                détenons à votre sujet
              </li>
              <li>
                <strong>Droit de rectification</strong> — corriger des données inexactes
                ou incomplètes
              </li>
              <li>
                <strong>Droit à l'effacement</strong> (« droit à l'oubli ») — demander
                la suppression de vos données
              </li>
              <li>
                <strong>Droit à la limitation du traitement</strong>
              </li>
              <li>
                <strong>Droit d'opposition</strong> — vous opposer à un traitement fondé
                sur l'intérêt légitime
              </li>
              <li>
                <strong>Droit à la portabilité</strong> — récupérer vos données dans un
                format structuré et lisible
              </li>
              <li>
                <strong>Droit de retirer votre consentement</strong> — à tout moment,
                pour les traitements qui y sont soumis
              </li>
              <li>
                <strong>Droit de définir des directives post-mortem</strong> concernant
                vos données
              </li>
            </ul>

            <h3>Comment exercer vos droits ?</h3>
            <p>
              Vous pouvez exercer ces droits à tout moment :
            </p>
            <ul>
              <li>
                Directement depuis l'application (paramètres du compte) pour la
                modification ou la suppression
              </li>
              <li>
                Par e-mail à{" "}
                <a href="mailto:support.power.app@gmail.com">
                  support.power.app@gmail.com
                </a>{" "}
                en précisant l'objet de votre demande
              </li>
            </ul>
            <p>
              Nous répondrons à votre demande dans un délai maximal d'un mois{" "}
              à compter de sa réception. Une pièce d'identité pourra être demandée en
              cas de doute raisonnable sur votre identité.
            </p>

            <h3>Réclamation auprès de la CNIL</h3>
            <p>
              Si vous estimez que le traitement de vos données ne respecte pas la
              réglementation, vous avez le droit d'introduire une réclamation auprès
              de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <div className="my-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="m-0 text-sm">
                <strong>CNIL</strong>
                <br />
                3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
                <br />
                Téléphone : 01 53 73 22 22
                <br />
                Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
              </p>
            </div>
          </section>

          <section>
            <h2>9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre l'accès non autorisé, la
              perte, l'altération ou la destruction :
            </p>
            <ul>
              <li>Chiffrement TLS 1.3 pour toutes les communications</li>
              <li>
                Authentification Firebase avec App Check (protection Play Integrity
                côté Android)
              </li>
              <li>Stockage chiffré au repos sur les serveurs Google Cloud</li>
              <li>Contrôles d'accès stricts basés sur les rôles (Firestore Rules)</li>
              <li>Surveillance continue et journalisation des accès</li>
              <li>
                Paiements jamais stockés par nos soins — déléguation complète à Stripe
                (certifié PCI-DSS niveau 1)
              </li>
            </ul>
          </section>

          <section>
            <h2>10. Mineurs</h2>
            <p>
              Le service Power est <strong>exclusivement réservé aux personnes majeures
              (18 ans révolus)</strong>. La livraison de carburant étant soumise à des
              restrictions d'âge, nous ne collectons ni ne traitons sciemment les
              données de mineurs.
            </p>
            <p>
              Si vous constatez qu'un mineur a créé un compte sur notre plateforme,
              contactez-nous immédiatement à{" "}
              <a href="mailto:support.power.app@gmail.com">
                support.power.app@gmail.com
              </a>{" "}
              pour en demander la suppression.
            </p>
          </section>

          <section>
            <h2>11. Cookies et traceurs</h2>
            <p>
              Notre <strong>application mobile</strong> n'utilise pas de cookies ni de
              traceurs publicitaires. Seuls des identifiants techniques Firebase
              (strictement nécessaires au fonctionnement) sont utilisés.
            </p>
            <p>
              Notre <strong>site web</strong> utilise uniquement des cookies techniques
              nécessaires à son fonctionnement. Aucun traceur publicitaire ni cookie
              tiers n'est déposé.
            </p>
          </section>

          <section>
            <h2>12. Modifications de la politique</h2>
            <p>
              La présente politique de confidentialité peut être modifiée à tout moment
              pour refléter des évolutions légales, techniques ou opérationnelles. En
              cas de modification substantielle, nous vous en informerons par e-mail ou
              via une notification dans l'application, avant l'entrée en vigueur des
              nouvelles dispositions.
            </p>
            <p>
              La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>
              Pour toute question relative à la présente politique ou au traitement de
              vos données personnelles :
            </p>
            <div className="my-4 rounded-lg border border-orange-200 bg-orange-50 p-5">
              <p className="m-0">
                {" "}
                <a href="mailto:support.power.app@gmail.com">
                  support.power.app@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>

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
