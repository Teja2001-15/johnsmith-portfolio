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

## Local Deployment

### Steps

- Download [Nginx Server](https://nginx.org/en/download.html)
- Extract the zip file to `C:\`
- Build the react project `npm run build`
- Copy the `dist` folder into `nginx-<version>\html\portfolio` folder in the server
- Edit the `nginx-<version>\conf\nginx.conf` file

```
  http {
    # other configurations
    server {
      location / {
            root   html/portfolio/dist;
            index  index.html index.htm;
        }
    }
  }
```

- Start `nginx-<version>.exe`
- Browse to `http://localhost` and verify the app is deployed

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

## Cloud Deployment

### 🚀 AWS DevOps Toolchain Summary

A quick overview of key AWS tools used in a CI/CD pipeline:

| Tool | Purpose | Key Features |
| --- | --- | --- |
| **CodeCommit** | Fully managed Git-based source control | Secure and scalable, IAM integration, Git hooks |
| **CodeArtifact** | Managed artifact repository for software packages (npm, Maven, etc.) | Supports multiple formats, dependency sharing, and access control |
| **CodeBuild** | Builds, tests, and packages source code | On-demand scaling, Docker support, environment variables |
| **CodeDeploy** | Automates deployments to EC2, Lambda, and on-prem servers | Blue/green deployments, canary updates, lifecycle hooks |
| **CodePipeline** | Orchestrates the entire CI/CD workflow | Integrates with CodeCommit, CodeBuild, CodeDeploy, and third-party tools |

### 🔄 Typical Workflow

- **CodeCommit** stores your source code.
- **CodeBuild** compiles and builds artifacts.
- **CodeArtifact** (optional) manages shared packages and dependencies.
- **CodeDeploy** deploys your app to various targets.
- **CodePipeline** connects and automates the end-to-end workflow.

---

## 📁 Project Structure

```
src/
  components/       # Navbar, ThemeToggle, Sections...
  context/          # Theme Context
  data/             # Sample Data
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
