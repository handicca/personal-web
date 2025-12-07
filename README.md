# Personal Web – Portfolio & Dev Blog

Ini adalah proyek website personal yang dibangun menggunakan **React Router Framework v7**, **React 19**, dan **TailwindCSS 4**.  
Website ini berfungsi sebagai **portfolio**, **blog teknis**, dan tempat eksperimen teknologi front-end modern.

> ⚠️ Project saat ini berada di tahap **70%**.  
> Desain belum sepenuhnya **responsif**, dan beberapa komponen masih dalam tahap penyesuaian.

---

## ✨ Fitur Utama

### 🔹 React Router Framework v7
Proyek ini menggunakan pendekatan **framework mode** React Router:
- File-based routing (`routes/*.tsx`)
- `clientLoader` untuk memuat data di browser
- Pending UI untuk animasi loading saat navigasi halaman
- Komponen `MainLayout` sebagai layout global

### 🔹 Blog dengan Markdown Rendering
Blog post ditulis menggunakan **Markdown (.md)** dan di-render lewat:
- `react-markdown`
- `remark-gfm` (GitHub-flavored Markdown)
- `rehype-highlight` + `highlight.js` untuk syntax highlighting
- `front-matter` untuk metadata YAML (title, date, tags)

---

## 🧪 Status Proyek

| Status | Keterangan |
|-------|------------|
| 🟨 70% selesai | Struktur, routing, blog, loader, styling dasar sudah berfungsi |
| ⚠️ Belum responsif | Halaman belum dioptimalkan untuk mobile/tablet |
| 🛠️ WIP | Penyesuaian layout, design polish, komponen tambahan |

---

## 🚧 Teknologi yang Digunakan

### **Dependencies**
- `react` 19
- `react-router` 7 (framework mode)
- `react-markdown`
- `remark-gfm`
- `rehype-highlight`
- `highlight.js`
- `front-matter`
- `react-icons`

### **Dev Tools**
- `vite` 7
- `@react-router/dev`
- `tailwindcss` 4
- `@tailwindcss/typography`
- `typescript`
- `vite-tsconfig-paths`

---

## ▶️ Menjalankan Proyek Secara Lokal

Pastikan sudah menginstal Node.js versi terbaru (disarankan **Node 18+**).

### 1. Clone repository
```sh
git clone https://github.com/handicca/personal-web.git
cd personal-web
```
