<div align="center">

# ֎ XADON GitHub Studio Pro+

### **BUILD · INSPECT · SHIP**

**A cyber-grade, mobile-first GitHub workspace for developers who want more control between a ZIP file and a production repository.**

[![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![GitHub API](https://img.shields.io/badge/GitHub-API-181717?style=for-the-badge&logo=github)](https://docs.github.com/en/rest)
[![Mobile First](https://img.shields.io/badge/Mobile-First-8b5cf6?style=for-the-badge)](#-mobile-first)
[![Local First](https://img.shields.io/badge/Architecture-Local--First-06b6d4?style=for-the-badge)](#-security-model)

**Created by Musteqeem aka Future Scientist**

</div>

---

## 🌌 The idea

Shipping code from a phone should not feel like fighting a server terminal.

**XADON GitHub Studio Pro+** turns the browser into a compact developer command center:

`ZIP → INSPECT → SCAN → REVIEW → PUBLISH → EXPLORE → STAR`

No framework build pipeline is required. No database is required. The public project explorer works without authentication, while authenticated GitHub actions use a token supplied by the user in page memory.

> **Designed for developers, Acode users, mobile workflows, open-source maintainers and anyone who wants a beautiful GitHub publishing cockpit.**

---

## ⚡ What makes it different?

| Capability | What it does |
|---|---|
| 📦 ZIP Studio | Opens a project ZIP directly in the browser and builds a file queue |
| 🛡️ Preflight | Flags sensitive filenames and scans supported text files for common secret-like patterns |
| 🧹 Runtime filter | Can exclude `node_modules`, `.git`, sessions, databases, logs and backups |
| 🧪 Dry Run | Simulates the publishing workflow without modifying GitHub |
| 🚀 Publisher | Uses GitHub's Contents API and detects existing file SHAs before updates |
| 🌐 Project Explorer | Loads live repositories from `musteqeem` and lets developers search them |
| ⭐ Star Center | Stars repositories through GitHub when an authorized token is supplied, otherwise opens GitHub safely |
| 👤 Developer Profile | Displays live public GitHub profile information |
| 📤 Manifest Export | Exports the current publish queue and security findings as JSON |
| 🎨 Theme | Dark/light appearance with local preference storage |
| 📱 Mobile UI | Touch-friendly controls and responsive layouts |
| ▲ Vercel | Static deployment with no mandatory server runtime |

---

## 🔥 Featured ecosystem

### 🌌 XADON AI

The main XADON automation project.

**GitHub:** https://github.com/musteqeem/XADON_AI

### 🤖 BotNest

A featured developer project in the Musteqeem ecosystem.

**GitHub:** https://github.com/musteqeem/botnest

The Studio automatically pulls public repository metadata from the GitHub API, so stars, forks, languages and update dates stay current.

---

## 🖥️ Product tour

### 01 — Project Explorer

Discover recent public repositories from the configured developer account, search them instantly, open them on GitHub and use the Star Center.

### 02 — ZIP Import

Drop or choose a ZIP. JSZip parses the archive in the browser and builds a normalized file queue.

### 03 — Security Preflight

The scanner checks filename patterns such as `.env`, private keys, certificates, token/password-looking filenames and supported text content for common secret-like signatures.

The scanner is deliberately a **review aid**, not a replacement for enterprise secret-scanning products.

### 04 — Publish

Enter a repository and branch, validate access, review the queue and publish files through GitHub's Contents API.

Existing files are queried for their SHA so updates can be sent correctly.

### 05 — Audit the workflow

The Activity panel shows progress and per-file results. The manifest exporter gives you a portable JSON snapshot of the queue and findings.

---

## 🛡️ Security model

XADON GitHub Studio follows a **local-first** model.

### Browser-side by design

- ZIP contents are parsed in the browser.
- Security checks happen in the browser.
- Tokens are not stored in the project's source code.
- Tokens are kept in the page's memory and sent only with GitHub API requests initiated by the app.
- Runtime directories are excluded by default.

### Important production note

This architecture is excellent for a static developer utility, but a commercial multi-user SaaS should evolve toward:

`GitHub OAuth → server-side token exchange → encrypted session → scoped API actions`

Do **not** place a personal GitHub token in source code or commit one to Git.

---

## ⭐ GitHub starring

The Star Center supports two modes:

### Authenticated mode

Enter a GitHub token with the permissions required for starring. The app checks whether the repository is already starred and then uses GitHub's starring API.

### Public fallback

Without a token, the button opens the repository on GitHub so the user can star it through GitHub's own interface.

This avoids pretending that an unauthenticated browser can perform an account-level action it does not have permission to perform.

---

## 🧰 Tech stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **JSZip 3.10.1**
- **GitHub REST API**
- **Vercel static hosting**
- Browser `localStorage` for non-secret preferences

There is intentionally no frontend framework dependency.

---

## 📱 Mobile first

XADON GitHub Studio is designed around small screens:

- responsive cards
- touch-friendly controls
- native file picker
- compact navigation
- no horizontal desktop-only workflow
- Acode-friendly static architecture

It can be deployed to Vercel and opened from Android without requiring a local Node runtime.

---

## 🚀 Deploy on Vercel

### 1. Push the project

```bash
git add -A
git commit -m "Launch XADON GitHub Studio Pro+"
git push origin main
```

### 2. Import into Vercel

Import the repository in Vercel and deploy the project root.

No framework preset is required.

No build command is required.

### 3. Static hosting

The application is served from `index.html` and uses browser APIs plus GitHub's public/authenticated REST API.

---

## 💻 Local development

You can open `index.html` directly, or serve the directory:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

---

## ⌨️ Quick controls

| Shortcut | Action |
|---|---|
| `R` | Refresh GitHub project data |
| `T` | Toggle dark/light theme |

The UI also includes dedicated Quick Action buttons for Preflight, BotNest, XADON AI and README.

---

## 🧩 Project structure

```text
xadon-github-studio-pro/
├── index.html        # complete static application
├── README.md         # developer documentation
├── CHANGELOG.md      # release notes
├── package.json      # minimal project metadata
├── vercel.json       # security headers / Vercel config
└── .gitignore
```

---

## 🧠 SaaS roadmap

XADON GitHub Studio is intentionally shaped so it can grow into a serious developer SaaS.

### Phase I — Studio Core

- [x] ZIP import
- [x] File queue
- [x] Runtime exclusion
- [x] Security preflight
- [x] Dry run
- [x] GitHub publishing
- [x] Recent repository explorer
- [x] Star Center
- [x] Developer profile
- [x] Manifest export
- [x] Theme preferences

### Phase II — Cloud Identity

- [ ] GitHub OAuth
- [ ] Account dashboard
- [ ] Saved repositories
- [ ] Saved publishing profiles
- [ ] Secure server-side sessions

### Phase III — Team SaaS

- [ ] Team workspaces
- [ ] Organization support
- [ ] RBAC
- [ ] Audit logs
- [ ] Deployment history
- [ ] Usage analytics

### Phase IV — AI Developer Cloud

- [ ] AI code review
- [ ] Dependency health reports
- [ ] Advanced secret scanning
- [ ] Pull-request assistant
- [ ] Release-note generation
- [ ] Automatic project documentation

---

## 🤝 Contributing

1. Fork the project.
2. Create a feature branch.
3. Make your change.
4. Test it on desktop and Android.
5. Verify that GitHub API failures are handled gracefully.
6. Open a pull request with a clear explanation.

For security-sensitive changes, document the required GitHub permissions and threat model.

---

## 📜 License

Add the license that matches the distribution model you choose before publishing the project as an open-source package.

---

## 💜 Credits

<div align="center">

### ֎ XADON

**Created by Musteqeem aka Future Scientist**

**© 2026 Musteqeem. All rights reserved.**

*Build boldly. Inspect carefully. Ship cleanly.*

</div>
