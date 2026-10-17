# 🌐 Personal Portfolio – Santhosh Kumar

This is my personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It highlights my work as a full-stack software engineer and solo game developer.

> Live at: [santhoshle.dev](https://santhoshle.dev)

---

## 🚀 Tech Stack

- **Frontend Framework:** Next.js + React
- **Styling:** Tailwind CSS
- **Animations:** CSS (Tailwind)
- **Icons:** React Icons
- **Deployment:** Vercel (Optimized for Next.js)
- **Domain:** GoDaddy DNS mapped to Vercel with automatic SSL

## 🛠 Local Development

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000 🚀

## 🧭 Pages

Each menu item is its own route: `/` (About), `/experience`, `/projects`, `/roadmap` and `/blog`. Menus come from `intro.menus` in `src/data/data.json` (`id`, `title`, `path`).

## ✍️ Writing Blog Posts

Posts are Markdown files in `src/content/blog/`. The file name is the URL: `my-post.md` → `/blog/my-post`.

```markdown
---
title: "Post title"
description: "One-line summary shown in the post list."
date: 2026-10-17
tags: ["iam", "keycloak"]
draft: false
---

Post body in Markdown.
```

| Field | Notes |
|---|---|
| `title`, `date` | Required. `date` is `YYYY-MM-DD`; posts are listed newest first. |
| `description` | Optional summary for the list and the page's meta description. |
| `tags` | Optional inline list. Clicking a tag filters the list (`/blog?q=<tag>`). |
| `draft` | `true` keeps the post off the site. |

Images go in `public/images/blog/` and are referenced as `![alt](/images/blog/file.png)`. Raw HTML in posts is not rendered.

## 🗺 Editing the Roadmap

Roadmap entries live in `src/data/roadmap.json`:

```json
{
  "title": "Project name",
  "year": 2026,
  "summary": "Short description",
  "author": "Solaras Light",
  "image": "/images/my-project.png",
  "status": "Inprogress",
  "repoUrl": "https://github.com/...",
  "demoUrl": "https://..."
}
```

| Field | Notes |
|---|---|
| `year` | Optional, e.g. `2026` (a range like `"2025-2026"` sorts by its first year). |
| `author` | Text containing "Solaras" uses the **Solaras Light** colours; anything else uses the **Santhosh Laguduwa** colours. |
| `status` | `Completed`, `Inprogress` (or `In Progress`), `Planned` |
| `image` | Optional. Put files in `public/images/`. Leave it out to use `public/placeholder.svg`. |
| `repoUrl`, `demoUrl` | Optional. Buttons only show when set. |

Entries are sorted by year (undated last), then status, then file order.

##🔗 Demo
Check the live project here:
👉 https://santhoshle.dev