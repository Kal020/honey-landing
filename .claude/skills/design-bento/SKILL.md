---
name: design-bento
description: À utiliser À CHAQUE FOIS qu'on crée, designe, redesigne, styles ou refactore un écran, une page, un dashboard, un composant ou un layout (mobile, tablette, desktop), même si l'utilisateur ne dit pas « Bento ». Applique le style Bento « Honey v2 » : grille de tuiles bordées, icône en haut / libellé en bas, navigation responsive, recettes d'écrans (accueil, profil, détail, fiche, listes). Ne fixe ni couleurs ni polices : elles viennent du projet.
---

# Design Bento (Honey v2) — 3 formats

Source unique : le prototype **Honey Client v2** (style Bento). Rien de la charte V1 n'est repris. Ce skill décrit la **structure, la forme, l'espacement, les icônes et le responsive** ; il ne fixe **ni couleurs ni polices** : elles viennent du projet cible (§1).

## 0. Procédure obligatoire

1. Lire le thème du projet (variables CSS, Tailwind, thème…) pour les couleurs et polices. Ne jamais inventer de teintes ni importer de police.
2. Concevoir chaque écran pour **les 3 formats** : téléphone < 768, tablette 768–1023, ordinateur ≥ 1024.
3. Composer l'écran en **tuiles Bento** (§3) avec les tokens de forme/espacement (§2).
4. Passer la checklist (§9).
5. Si le projet a déjà des composants (Button, Card, Avatar, EmptyState…), les réutiliser plutôt que recréer.

## 1. Couleurs et polices : rôles attendus (valeurs = celles du projet)

Utiliser uniquement des **rôles sémantiques**, jamais de hex en dur :
- Couleurs : `page` (fond d'écran), `surface` (fond de tuile), `surface-soft` (survol/sélection/inactif), `border` (filet), `ink` (texte principal), `ink-2` (secondaire), `ink-3` (inactif/placeholder), `primary` (action principale) + `on-primary`, `accent` (étoiles, points, détails), `dark-tile` + `on-dark` (tuile à fort enjeu), `status-confirmed|pending|cancelled`, `watermark` (grand symbole en filigrane).
- Polices : `font-display` (titres, boutons), `font-text` (corps, prix, horaires).
Si le projet ne définit pas ces rôles, les déclarer en variables CSS en reprenant les teintes existantes du projet, et le dire à l'utilisateur. Règles de couleur valables partout : blanc/neutre clair dominant, 2 fonds de tuile max par écran, aucun dégradé ni flou, contraste texte ≥ 4,5:1, un état (confirmé/en attente/annulé) est toujours doublé d'un mot.

## 2. Tokens de forme et d'espacement (à copier)

```css
:root{
/* Rayons v2 */
--radius-xs:2px;   /* barre de progression */
--radius-sm:8px;   /* items de nav, vignettes 64px, boutons compacts */
--radius-md:12px;  /* TUILES, cartes, onglets du bas */
--radius-pill:999px; /* recherche, chips, boutons ronds, avatars, pastilles */
--frame-radius-phone:28px; --frame-radius-wide:16px; /* cadre de prévisualisation */
--border-width:1px;
/* Espacement v2 */
--gap-grid:12px;   /* entre tuiles Bento */
--gap-list:10px;   /* entre lignes de liste */
--gap-stack:16px;  /* entre blocs verticaux d'un écran */
--gap-chip:8px;
--screen-pad-phone:8px 16px 20px; --screen-pad-tablet:8px 24px 28px; --screen-pad-desktop:20px 24px 28px;
--tile-pad:14px 16px;  /* petite tuile */
--tile-pad-lg:26px 22px 22px; /* hero téléphone */ 
--tile-pad-xl:32px 28px 28px; /* hero tablette/desktop */
/* Cibles et hauteurs */
--tap-min:44px; --btn-h:48px; --search-h:58px; --search-h-results:54px;
--tabbar-item-h:56px; --topbar-h:64px; --status-h:44px;
/* Layout */
--bp-phone:768px; --bp-desktop:1024px; --nav-w:248px;
--content-max:880px; --content-text-max:720px; --panel-detail-w:480px;
/* Mouvement */
--dur-state:120ms; --ease-state:linear;
}
*,*::before,*::after{box-sizing:border-box}
```
Focus : un anneau visible et net sur chaque contrôle (champ : `box-shadow:0 0 0 1.5px var(--ink)`), jamais un simple changement de teinte.

## 3. Le style Bento

Un écran = une **grille de tuiles** de tailles variées, gap 12 px. Chaque tuile est un bloc autonome, souvent cliquable.

**Tuile** : `border-radius:12px; border:1px solid var(--border); background:var(--surface); padding:14–28px; overflow:hidden`. Variantes (max 2 fonds par écran) :
- **surface bordée** (défaut) ;
- **tuile sombre** (`dark-tile`) pour LA tuile à fort enjeu : légende MAJUSCULES 12 px, montant 26 px, picto à gauche 28 px, chevron à droite 20 px ;
- **aplat de couleur** pour un salon sans photo : **initiale du nom** en police display 800, 96 px (160 px sur la fiche), centrée, couleur stable déduite du nom ;
- **sélection/survol** : fond `surface-soft` + anneau intérieur `inset 0 0 0 1.5px var(--ink)` si sélectionné.

**Contenu** : titre court (display 600–700, interlettrage −0.03em, 20–23 px), info secondaire (text 13–14 px, `ink-2`), pictogramme 20–28 px (`arrow-up-right` pour une tuile-lien, `caret-right` pour une ligne). Sur une tuile photo/aplat : pastille pilule en bas (`left/right/bottom:10px`, padding `10px 14px`, fond surface) avec nom + étoile + note.

**Grille Accueil (référence)** — `grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px` :
| Format | Hero | Salons | Catégories | RDV / Crédit |
|---|---|---|---|---|
| Téléphone | `span 4`, min 300 px, rangées `auto` | 1ʳᵉ `span 4` (min 210), suivantes `span 2` (min 180) | min 92 px | RDV `span 4` |
| Tablette/Desktop | `span 2` × `span 2` | 1ʳᵉ `span 2`, autres `span 1` | min 92 px | RDV `1 / span 2`, Crédit `3 / span 2` (sombre) |
Rangées tablette/desktop : `minmax(170px,1.4fr) minmax(170px,1.4fr) 96px 84px` ; hauteur mini 700 px tablette / 560 px desktop.

**Hero** : tuile bordée, titre display 600 (38 px téléphone, 46 tablette, 54 desktop, `line-height:.98`, `text-wrap:balance`), grand symbole de marque en filigrane (rôle `watermark`, coin bas-droit, qui déborde : `right:-48px; bottom:-56px`, 230–320 px), champ de recherche pilule 58 px (icône loupe 22 px à gauche, bouton rond 44 px à droite avec flèche).

**Ligne de liste** : grille 2 colonnes dès tablette (1 sur téléphone), gap 10 ; ligne `padding:10px 16px 10px 10px; radius 12; border 1px` ; vignette 64×64 radius 8 (aplat + initiale 28 px) ; titre 23 px display 600 ; sous-ligne 13 px `ink-2` « zone · ★ note · dès 12 500 FC » ; chevron 20 px ; survol `surface-soft`.

**Autres écrans** : fiche institut = photo/aplat (min 230 px téléphone, 320 tablette, 380 desktop) + carte d'infos, côte à côte en desktop (`1.5fr / 1fr`), empilées sinon ; onglets de section en pilule segmentée (padding 4, gap 6, items min 44 px, actif = fond `ink`, texte blanc) ; récap/paiement/suivi en 2 colonnes dès tablette ; semaine = 7 colonnes gap 6, créneaux = 3 colonnes gap 8 ; chips de catégorie min 44 px, `padding:0 18px`, pilule bordée ; barre de sélection collante en haut (`position:sticky`, fond sombre, radius 12, ombre portée douce) ; barre de progression des étapes = segments de 4 px de haut, radius 2, gap 6.

## 3b. Principe clé : « icône en haut, libellé en bas »

La signature visuelle des tuiles de contenu : une tuile haute (elle s'étire pour remplir la rangée) où le **pictogramme ou l'état est ancré en haut à gauche** et le **texte (titre + détail) ancré en bas à gauche**, avec de l'air entre les deux (`display:flex; flex-direction:column; justify-content:space-between`). L'espace vide est voulu : il donne le rythme Bento. Un contrôle (ex. interrupteur) se place en haut à droite. Ne jamais centrer ni tasser le contenu en haut.

## 3c. Recettes d'écrans (reproduire ces structures)

**Remplir la hauteur.** Sur tablette/desktop, la page est une colonne flex à `height:100%` (en-tête fixe + grille `flex:1 1 auto`) et les rangées de la grille sont en `1fr` : les tuiles **s'étirent jusqu'en bas de la fenêtre**, il ne reste pas de grand vide blanc sous la grille. Sur téléphone, la page défile et les tuiles gardent une hauteur mini (tuile info ≥ 140 px).

Chaque écran est livré en **un seul composant responsive** : mêmes tuiles, colonnes qui changent. En-tête de page : bouton retour rond 44 px (bordé) si écran de détail + H1 display 600 (34 téléphone / 44+ desktop) ; sur téléphone un sous-titre peut suivre le H1 et un avatar rond 36 px reste en haut à droite.

**Accueil** — voir grille §3. Tuile salon : aplat + initiale centrée + pastille pilule pleine largeur en bas (nom à gauche, ★ note à droite). Un des aplats peut être la tuile sombre ; la dernière tuile-catégorie peut être sombre pour « Tous les instituts ». Tuile RDV : picto calendrier 28 px à gauche, date en display 600 22 px + détail 13 px, chevron à droite.

**Profil** — desktop : 2 colonnes (`1fr 1.2fr`, gap 16). *Colonne gauche* = une grande tuile bordée pleine hauteur : avatar rond 88–120 px (aplat + initiale), nom en display 700 28–32 px, téléphone en secondaire, lien « Modifier mon nom » (icône crayon 20 px + texte `ink-2`), puis tout en bas un bouton **« Se déconnecter »** pleine largeur, contour 1.5 px `ink`, radius 8, 52 px. *Colonne droite* = tuile sombre crédit (légende MAJUSCULES, montant display 700 ~44 px, chevron), **bannière douce** (fond `surface-soft`, sans bordure, radius 12, picto cadeau 24 + texte 16/500), puis deux tuiles hautes côte à côte selon §3b : « Rendez-vous · 1 » (calendrier en haut) et « Notifications » (cloche en haut à gauche + interrupteur en haut à droite). Téléphone : tout empilé dans l'ordre profil → crédit → bannière → 2 tuiles côte à côte (hauteur ~140 px).

**Détail d'un rendez-vous** — retour + H1 « Rendez-vous ». Desktop : grille 2×2 (gap 12), puis lien de sortie. 1) Tuile date : légende d'état (icône `check-circle` 20 + mot en MAJUSCULES 12 px, couleur `status-*`) puis date **et heure** dans le même bloc en display 600, même taille (~54 px desktop, 36–40 px téléphone), « Dimanche 11 octobre » puis « 16:00 » sur la ligne suivante, ancré en bas. 2) Tuile salon : nom display 600 36 px + adresse secondaire, en bas deux boutons pilule bordés 52 px (« Itinéraire » `navigation-arrow`, « Appeler » `phone`) côte à côte. 3) Tuile prestataire : avatar rond 60 px en haut, en bas nom 20/700, « prestation · durée » secondaire, prix en 15/600 « 67 500 FC au salon ». 4) Tuile frais : icône d'état (`check-circle` couleur statut) en haut, en bas « Frais réglé » 20/700 + détail secondaire. Sous la grille : action destructive en **simple lien texte** `status-cancelled` 16/600 « Annuler ce rendez-vous », **sans soulignement**, aligné à gauche (pas de bouton plein). Téléphone : date → salon → deux tuiles côte à côte (3 et 4) → lien.

**Fiche institut (téléphone)** — 1) bandeau aplat/photo radius 12, ~230 px, initiale 160 px, bouton retour rond blanc 44 px posé en haut à gauche. 2) Carte d'infos bordée : nom display 700 34 px ; ligne « ★ 5,0 (1 avis) · Gombe · dès 10 000 FC » (séparateurs `·` en `ink-3`) ; deux lignes d'info avec icône 20 px (`map-pin`, `clock`) en `ink-2` ; deux boutons pilule bordés (Itinéraire / Appeler). 3) Onglets segmentés pilule (actif = pilule `ink` + texte clair) : Prestations · Équipe · Horaires · Avis. 4) Accordéon par catégorie : ligne bordée radius 12 (nom 700 + « 3 prestations » secondaire + chevron). 5) Lignes de prestation bordées radius 12, 10 px d'écart : nom 500 + durée secondaire à gauche, prix 700 à droite + `plus-circle` 24 px en couleur atténuée (`check-circle` + fond `surface-soft` + anneau `ink` une fois choisie). Dès qu'une prestation est choisie, une barre sombre collante (nom, prix, bouton « Continuer ») apparaît en haut.

**Interrupteur** : 52×30, radius pilule ; actif = piste `ink` + pastille claire à droite ; inactif = piste `surface-soft` bordée + pastille claire à gauche ; toujours avec son libellé visible.

**Barre d'onglets mobile** : item actif = fond `surface-soft` radius 12, libellé en gras et icône `ink` ; inactifs en `ink-3`. Header mobile de l'accueil : logo à gauche, avatar rond 36 px à droite, rien d'autre.

## 4. Les trois formats

| | Téléphone `<768` | Tablette `768–1023` | Ordinateur `≥1024` |
|---|---|---|---|
| Prévisualisation | 390×844, rayon 28 | 820×1024, rayon 16 | 1280×800, rayon 16 |
| Navigation | barre d'onglets basse : 4 entrées, grille 4 col, gap 4, `padding:6px 8px 10px`, filet haut, item min 56 px radius 12, icône 24 + libellé 11 px | tiroir latéral **superposé** 248 px, voile sombre 40 %, bouton menu rond 44 px en en-tête | tiroir latéral **persistant** 248 px, filet droit |
| Marges | 8/16/20 | 8/24/28 | 20/24/28 |
| H1 de page | 34 px | 44 px | 44 px |
| Bas de page | barre d'onglets | — | — |

Ce qui change : navigation, nombre de colonnes, marges, taille des titres. Ce qui ne change pas : rayons, filets, cibles 44 px, hauteur des champs, échelle des textes courants. Contenu plafonné à 880 px, texte suivi à 720 px.
Tiroir : logo en haut + bouton réduire/étendre 44 px, items `min-height:48px; padding:0 14px; radius 8; gap 14`, icône 24 + libellé 15 px, actif = fond `surface-soft` + texte `ink` 700, inactif `ink-2` 600 ; avatar + nom en bas. Réduit : icônes seules centrées avec `title`.
Entrées Client : Accueil · Recherche · Rendez-vous · Crédit (tiroir seulement) · Profil.

## 5. Typographie (tailles v2, polices = rôles du projet)

| Rôle | Police | Taille | Graisse | Interlettrage |
|---|---|---|---|---|
| Hero / H1 écran | display | 38 → 54 (hero), 34/44 (H1) | 600 | −0.015 à −0.03em, `lh` ≈ 1 |
| Titre de tuile / ligne | display | 20–26 | 600 | −0.03em |
| Titre de page secondaire | display | 24/26 | 700 | −0.03em |
| Bouton | display | 15–17 | 700 | −0.02em |
| Initiale d'aplat | display | 28 / 96 / 160 | 800 | −0.045em |
| Corps | text | 16/24 | 400–500 | 0 |
| Secondaire | text | 13–14/18–20 | 500 | 0 |
| Légende | text | 12/16 MAJUSCULES | 600–700 | +0.06em |
| Libellé d'onglet bas | text | 11 | 600–700 | 0 |

Prix/horaires en police `text`. Monnaie : **franc congolais d'abord**, espace insécable fine avant « FC » (`12 500 FC`) ; « dès 25 000 FC » pour un prix de départ.

## 6. Icônes (v2)

**Phosphor Light** (`ph-light ph-…`) ; `ph-fill` uniquement pour l'étoile de note et les glyphes de barre d'état. Tailles : 24 px navigation/actions, 20 px dans lignes/tuiles/champs, 22 px loupe et flèches de recherche, 28 px picto de tuile-info, 36 px état vide. Toute icône cliquable est centrée dans une cible 44×44 (bouton rond bordé ou transparent). Une icône n'est jamais seule : libellé visible ou `aria-label`. Aucun emoji, aucun autre jeu d'icônes.

## 7. Composants

Si le projet fournit un design system Honey (composants `Button`, `Avatar`, `Logo`, `Mark`, `EmptyState`, `Dialog`, `Toast`, `TextField`…), l'importer et respecter les props déclarées ; ne pas les recréer. Boutons v2 : pilules ou radius 8, min 44–48 px, texte display 700 ; primaire = rôle `primary`, secondaire = bordé. États (repos, survol, pressé, focus, désactivé, chargement) sans changement de hauteur.

## 8. Voix et contenu (français de Kinshasa)

- Tutoiement avec la cliente (« Prends soin de toi. »), vouvoiement avec les pros/admin ; jamais les deux dans un écran.
- Vocabulaire local : institut, coiffeuse, prestation, créneau, tresses, tissage, Mobile Money, quartiers (Gombe, Limete, Ngaliema, Masina).
- Un message dit ce qui s'est passé et l'action suivante. Pas de « une erreur est survenue », pas d'« oups », pas de code d'erreur, nombres exacts (« 3 actions en attente »).
- Erreur de champ = quoi corriger, jamais en modale. Écran vide = cas précis + une action seulement si utile (« Aucun institut pour « tissage » à Limete »).
- Concepts : **frais de réservation** payé en ligne ; prestation réglée à l'institut ; frais non abouti → **Crédit Honey**.

## 9. Checklist avant de rendre

- [ ] 3 formats traités, grille Bento et navigation corrects pour chacun.
- [ ] Aucune couleur/police en dur : uniquement les rôles du projet.
- [ ] Tuiles : radius 12, filet 1 px, gap 12 ; pilules en 999 ; vignettes en 8.
- [ ] 2 fonds de tuile max, pas de dégradé/flou/emoji.
- [ ] Cibles ≥ 44 px ; marges selon le format.
- [ ] Un seul jeu d'icônes (Phosphor Light), tailles 20/24, libellés présents.
- [ ] Textes : bonne voix, français local, montants en FC.
- [ ] États vide, erreur, chargement conçus ; hauteurs stables ; focus visible.
- [ ] Tuiles de contenu en « icône en haut / texte en bas » ; action destructive en lien texte ; un composant responsive unique par écran.
- [ ] Rien de la charte V1 (pas de Material Symbols, pas de bouton marron imposé).
