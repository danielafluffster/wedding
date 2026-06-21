# Daniela & Jedediah — Wedding Website

A complete, responsive single-page wedding website built with **React 18 + Vite + Tailwind CSS**.

---

## Quick Start

```bash
npm install
npm run dev       # → http://localhost:5173
```

Open your browser to the printed URL. Any change you save hot-reloads instantly.

---

## How to Edit Content (no coding required)

**Almost everything lives in one file:**

```
src/config/wedding.js
```

Open it in any text editor and update the values — every line that needs your info is
marked with a comment `← CHANGE THIS`. The fields cover:

| Field group | What it controls |
|---|---|
| `partner1 / partner2` | Your names everywhere on the site |
| `date / dateISO` | The wedding date + countdown timer |
| `ceremony / reception` | Venue names, addresses, map links |
| `schedule` | Day-of timeline |
| `rsvp` | Formspree ID, RSVP deadline, meal choices |
| `hotels / airports / parking` | Travel & accommodations |
| `thingsToDo` | Local recommendations |
| `registry` | Registry links, honeyfund, charity |
| `bridesmaids / groomsmen` | Wedding party names, roles, bios, photos |
| `dressCode` | Attire instructions |
| `faqs` | FAQ accordion items |
| `gallery` | Photo paths |
| `hashtag / contactEmail` | Footer info |

---

## How to Add Your Own Photos

1. Put your photos in the **`/public/images/`** folder (create it if it doesn't exist).
2. In `src/config/wedding.js`, update the `gallery` array — replace `null` with a path:

```js
{ src: '/images/engagement.jpg', alt: 'Engagement photo in the park', ratio: '4/3' },
```

3. For wedding party headshots, set the `photo` field on each person:

```js
{ name: 'Sophia Martinez', role: 'Maid of Honor', bio: '...', photo: '/images/sophia.jpg' },
```

For the **hero section**, add a full-bleed photo by updating `Hero.jsx`:
- Replace the gradient `<div>` inside `{/* Background */}` with an `<img>` tag
  pointing to your photo, then keep the dark overlay `<div>` on top of it.

---

## Setting Up Guest Photo Capture (Cloudinary — free, ~5 minutes)

When guests tap the **"Open Camera & Take a Photo"** button, their phone's rear camera launches immediately — no gallery access, no app download. The photo uploads directly to your private Cloudinary account.

**Step-by-step:**

1. Create a free account at **[cloudinary.com](https://cloudinary.com)** (25 GB free storage).
2. On the dashboard home page, copy your **Cloud Name** (looks like `dfxyz1234`).
3. Go to **Settings → Upload → Upload presets** → click **Add upload preset**.
   - Set **Signing mode** to **Unsigned**.
   - Set the **Preset name** to `wedding_photos` (or anything you like).
   - Under **Folder**, type `wedding_photos`.
   - Save.
4. Open `src/config/wedding.js` and fill in:

```js
photoShare: {
  cloudName:    'dfxyz1234',      // ← your Cloud Name
  uploadPreset: 'wedding_photos', // ← your preset name
  folder:       'wedding_photos',
  ...
}
```

5. Done. All guest photos appear in **Cloudinary Media Library → wedding_photos folder**,
   where you can download, share, or export them.

> **How "camera only" works:** The button triggers an `<input capture="environment">` which tells mobile browsers to open the rear camera instead of the photo picker. Guests cannot browse their existing gallery through this button — only a freshly taken photo can be submitted. On desktop (where there's no camera) it falls back to a file picker, but your wedding guests will be on their phones.

---

## Setting Up RSVP (Formspree — free, 5 minutes)

1. Go to **[formspree.io](https://formspree.io)** and sign up for a free account.
2. Click **New Form**, name it "Wedding RSVP", and copy the **Form ID**
   (the 8-character code after `/f/` in the endpoint URL).
3. Open `src/config/wedding.js` and replace:

```js
formspreeId: 'YOUR_FORM_ID',   // ← paste your ID here
```

4. In the Formspree dashboard, set your **notification email** (where RSVPs land).
5. Done! Responses also collect in the Formspree dashboard for easy export to CSV.

---

## Deploying the Site

### Option A — Vercel (recommended, free, ~2 minutes)

1. Push the project to a GitHub repo.
2. Go to **[vercel.com](https://vercel.com)** → Import → select your repo.
3. Leave all build settings as-is (Vercel auto-detects Vite).
4. Click **Deploy**. You get a live URL instantly.
5. Every future `git push` auto-deploys.

### Option B — Netlify

1. Push to GitHub, then go to **[netlify.com](https://netlify.com)** → Add new site → Import from Git.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**.

### Option C — GitHub Pages

1. Install the deploy plugin:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. In `vite.config.js`, set `base` to your repo name:
   ```js
   base: '/your-repo-name/',
   ```
4. Run `npm run deploy`. The site goes live at
   `https://yourusername.github.io/your-repo-name/`.

---

## Custom Domain

For Vercel or Netlify, add your domain in the project settings under **Domains**.
Both services handle SSL automatically at no cost.

---

## Project Structure

```
Wedding/
├── index.html                  ← HTML shell (meta tags, font imports)
├── package.json
├── vite.config.js
├── tailwind.config.js          ← colour palette, fonts, animations
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── images/                 ← put your photos here
└── src/
    ├── index.css               ← base styles, animation classes
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← renders all sections in order
    ├── config/
    │   └── wedding.js          ← ✨ ALL YOUR CONTENT GOES HERE ✨
    ├── hooks/
    │   ├── useCountdown.js     ← countdown timer logic
    │   └── useScrollAnimation.js ← scroll-reveal animations
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── OurStory.jsx
        ├── EventDetails.jsx
        ├── Schedule.jsx
        ├── RSVP.jsx
        ├── Travel.jsx
        ├── ThingsToDo.jsx
        ├── Registry.jsx
        ├── WeddingParty.jsx
        ├── DressCode.jsx
        ├── FAQ.jsx
        ├── Gallery.jsx
        └── Footer.jsx
```

---

## Colour Palette Reference

| Name | Hex | Usage |
|---|---|---|
| `navy` | `#1B2B4B` | Dark sections, headings |
| `french-blue` | `#6B8CAE` | Accents, links |
| `dusty-blue` | `#8BA7C4` | Subtle highlights |
| `sky-blue` | `#C4D4E3` | Text on dark backgrounds |
| `ivory` | `#FAF7F2` | Main background |
| `cream` | `#F2EBE0` | Alternating section background |
| `gold` | `#C9A96E` | Decorative accents |

To change a colour, edit the `colors` block in `tailwind.config.js`.

---

## Fonts

- **Headings:** Cormorant Garamond (Google Fonts, loads in `index.html`)
- **Body:** Lato (Google Fonts, loads in `index.html`)

To swap fonts, update the `<link>` tag in `index.html` and the `fontFamily` block in `tailwind.config.js`.
