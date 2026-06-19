# Nasarawa Heartland Interactive v1

A complete Next.js App Router website that upgrades Nasarawa Heartland into an interactive public records, LGA desk, issue desk, and submission prototype.

## Run in Termux

```bash
mkdir -p ~/projects
cd ~/projects
unzip /sdcard/Download/nasarawa-heartland-interactive-v1.zip -d .
cd nasarawa-heartland-interactive-v1
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Nasarawa Heartland Interactive v1"
git branch -M main
gh repo create nasarawa-heartland-interactive-v1 --public --source=. --remote=origin --push
```

Then import the repo into Vercel as a Next.js project.
