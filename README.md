# Antykopedia.pl

Portal ekspercki o antykach w Polsce. Astro static site + Cloudflare Pages.

## 🚀 Quick start

```bash
cd antykopedia
npm install
npm run dev    # http://localhost:4321
npm run build  # buduje dist/
```

## 📁 Struktura

```
antykopedia/
├── src/
│   ├── pages/            # Astro routes
│   │   ├── index.astro
│   │   ├── wycen.astro
│   │   ├── slownik.astro
│   │   ├── oferty.astro
│   │   ├── kontakt.astro
│   │   ├── dziekujemy.astro
│   │   ├── polityka-prywatnosci.astro
│   │   ├── regulamin.astro
│   │   ├── kategorie/[slug].astro
│   │   ├── kategorie/index.astro
│   │   ├── blog/[slug].astro
│   │   └── blog/index.astro
│   ├── layouts/BaseLayout.astro
│   ├── components/LeadForm.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── kategorie/      # 5 pillarów (markdown)
│   │   └── blog/           # 6 blogów startowych
│   └── data/kategorie.js
└── public/
    ├── robots.txt
    └── llms.txt
```

## ⚙️ Konfiguracja

### 1. Lead form (Web3Forms)

W pliku `src/components/LeadForm.astro` zamień:
```
YOUR_WEB3FORMS_KEY_HERE
```
na swój klucz z https://web3forms.com/ (darmowy, 250 wysyłek/mies.).

Rejestracja: podaj email `kontakt@antykopedia.pl` → otrzymasz access key.

### 2. AdSense

W `src/layouts/BaseLayout.astro` już ustawione:
```
pub-1844680208723982
```
Jeśli zmieniasz na inny `ca-pub`, podmień.

### 3. Google Site Verification

W `BaseLayout.astro` dodaj do `<head>`:
```html
<meta name="google-site-verification" content="TWÓJ_KOD" />
```

## 🚢 Deploy na Cloudflare Pages

1. **Push na GitHub** (nowe repo `adsales-ux/antykopedia`):
```bash
cd antykopedia
git init
git add .
git commit -m "Antykopedia MVP launch"
git branch -M main
git remote add origin https://github.com/adsales-ux/antykopedia.git
git push -u origin main
```

2. **Cloudflare Pages** (dashboard.cloudflare.com):
   - Create project → Connect to Git → wybierz `adsales-ux/antykopedia`
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
   - Deploy

3. **Custom domain**:
   - Pages → Custom domains → Add → `antykopedia.pl`
   - Cloudflare poda rekordy CNAME → wprowadź w Hostido DNS

4. **Email kontakt@antykopedia.pl**:
   - Hostido DirectAdmin → E-Mail → E-Mail Accounts → Create
   - Login: `kontakt`, domena: `antykopedia.pl`, hasło ustaw

## 📝 Jak dodać nowy pillar (kategorię)

1. Dodaj wpis do `src/data/kategorie.js`:
```js
{ slug: 'biżuteria-antyczna', nazwa: 'Biżuteria antyczna', ... }
```

2. Utwórz `src/content/kategorie/bizuteria-antyczna.md` z frontmatter:
```yaml
---
title: "Biżuteria antyczna 2026 — ..."
description: "..."
pubDate: 2026-10-20
icon: "💍"
cena_low: 200
cena_high: 150000
---

## Treść pillara...
```

Pillar automatycznie dostępny pod `/kategorie/bizuteria-antyczna/`.

## 📝 Jak dodać nowy blog

Utwórz `src/content/blog/jak-xyz.md` z frontmatter:
```yaml
---
title: "Jak XYZ — poradnik"
description: "..."
pubDate: 2026-10-20
kategoria: "nazwa kategorii"
---

Treść...
```

Blog automatycznie dostępny pod `/blog/jak-xyz/` oraz w `/blog/`.

## 🎨 Design system

- **Granat** `#1a2847` — tła, nagłówki, kontrasty
- **Gold** `#c9a961` — akcenty, CTA, badges
- **Cream** `#f8f4ec` — tło strony, sekcje jasne
- **Fonts**: Playfair Display (nagłówki) + Inter (body)

## 📊 Monetyzacja

1. **Google AdSense** — `pub-1844680208723982` (ten sam co cennikibudowlane)
2. **Lead form** → emaile do `kontakt@antykopedia.pl` → ręczna wycena → prowizja od sprzedaży
3. **Marketplace** (faza 2, listopad 2026) → prowizja 3-5% od transakcji

## 🔗 Linki

- Portal: https://antykopedia.pl
- Email: kontakt@antykopedia.pl
- Operator: AdSales sp. z o.o. (NIP 8133818258)
