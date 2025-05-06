# John Smith's Portfolio Website

This is a responsive, animated, and theme-aware personal portfolio website built for **John Smith**, a Senior Software Engineer and veteran game developer. It is developed using **React**, **Vite**, **TailwindCSS**, and **Framer Motion**. The project is containerized using **Docker** for easy deployment.

---

## 🌟 Features

- 🧠 About Me section
- 🎮 Projects with visuals and descriptions
- ⚙️ Skills & Tech Stack
- 💼 Experience & Resume (PDF Download)
- ✉️ Contact form (with validation)
- 🌗 Dark / Light theme toggle
- 📱 Responsive design with mobile hamburger menu
- 🧭 Sticky navigation with Framer Motion animation
- 🐳 Dockerized for deployment

---

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Containerization**: Docker + NGINX

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Docker (for containerization)

### Development

```bash
git clone https://github.com/ashish-panicker/johnsmith-portfolio.git
cd johnsmith-portfolio
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🐳 Docker Setup

### Build Docker Image

```bash
docker build -t johnsmith-portfolio .
```

### Run Docker Container

```bash
docker run -d -p 3000:80 johnsmith-portfolio
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
  components/       # Navbar, ThemeToggle, Sections...
  assets/           # Images, Resume PDF
  App.jsx           # Main app component
  main.jsx          # ReactDOM entry
public/             # Static files
Dockerfile          # Docker build config
vite.config.js      # Vite bundler config
```

---

## 📄 License

MIT License. Free to use and modify.

---

## 🙌 Acknowledgements

Thanks to open-source contributors of React, Vite, TailwindCSS, Framer Motion, and Lucide for making this project possible.

---
