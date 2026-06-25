# ☕ Kofii Shop

> A cozy coffee shop web app with a public storefront and a private CMS built with the PERN stack as a hobby project.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

---

## 🖼️ Screenshots

| Home | Menu |
|------|------|
| <img width="580" src="https://github.com/user-attachments/assets/9ba43851-348e-4040-b599-93220fa72546" /> | <img width="580" src="https://github.com/user-attachments/assets/c2360843-4e0a-4958-a4c7-bff3ba6d3e8a" /> |

| CMS Login | Dashboard |
|-----------|-----------|
| <img width="580" src="https://github.com/user-attachments/assets/0b7ae5bf-5d1f-4249-a0ea-9261b2bcd738" /> | <img width="580" src="https://github.com/user-attachments/assets/6795ceb1-8df3-44a9-a699-7de9fc8e77b1" /> |

---

## ✨ Features

### 🏠 Public Storefront
- **Hero Landing Page** — Atmospheric design with a tagline and call-to-action button
- **Menu Page** — Full coffee menu with photos, descriptions, and prices in ₱
- Fully responsive with a consistent warm, café-toned aesthetic throughout

### 🔐 Admin CMS
- **Secure Login** — Admin-only access via JWT-protected authentication
- **Dashboard Overview** — At-a-glance stats for total, active, and inactive menu items
- **Add / Edit / Delete** — Full CRUD control over menu entries
- **Featured Badges** — Highlight select drinks on the public menu

---

## 🧱 Technical Highlights

- **TypeScript Backend** — Strongly typed Express server for safer, more maintainable API code
- **RESTful API** — Clean REST endpoints handling full CRUD for coffee menu items
- **PostgreSQL** — Relational database for persistent, structured menu data
- **JWT Authentication** — Protected admin routes with token-based auth and redirect guards
- **React Router** — Client-side routing separating public (`/`, `/menu`) from protected (`/admin`) pages
- **Zustand** — Lightweight global state management for auth sessions and menu data
- **Component Architecture** — Modular, reusable React components with clear separation of concerns
- **Tailwind CSS** — Utility-first styling with a custom warm palette, responsive across all screen sizes

---

## 📍 About

Kofii Shop simulates a real-world coffee shop platform, a customer-facing menu paired with an internal CMS. It was built to demonstrate practical full-stack skills including API design, relational data modeling, auth flows, and polished UI development.
