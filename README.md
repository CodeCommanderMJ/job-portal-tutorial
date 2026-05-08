# 💼 Hirrd – Full Stack Job Portal

A modern, full-stack job portal where **recruiters can post jobs** and **candidates can apply** — built with React, Supabase, and Clerk authentication.

---

## 🚀 Live Demo

🔗 [hirrd.vercel.app](https://hirrd.vercel.app)

---

## ✨ Features

- 🔐 **Authentication** — Secure sign-up/login with Clerk (supports Google OAuth)
- 👔 **Dual Roles** — Separate dashboards for Recruiters and Candidates
- 📝 **Job Posting** — Recruiters can create, manage, and delete job listings
- 🔍 **Job Search & Filter** — Filter jobs by location, company, and job type
- 📄 **Job Applications** — Candidates can apply with resume upload
- 💾 **Saved Jobs** — Bookmark jobs to revisit later
- 📊 **Application Tracking** — Recruiters can view and manage all applicants
- 📱 **Fully Responsive** — Mobile-first design using Tailwind CSS

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React JS, Vite |
| Styling | Tailwind CSS, Shadcn UI |
| Backend & DB | Supabase (PostgreSQL) |
| Auth | Clerk |
| Deployment | Vercel |

---

## 📁 Project Structure

```
job-portal/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-level pages
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   └── App.jsx
├── index.html
├── vite.config.js
└── tailwind.config.js
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> Get your Supabase credentials from [supabase.com](https://supabase.com) and Clerk key from [clerk.com](https://clerk.com)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key |
| `VITE_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key |

---

## 📸 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/be614cb2-9f13-4888-ab12-1ba3d51137e2" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cb041483-f390-4991-959f-12c1fdefed35" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/72a6bd7e-4cff-43ef-bd93-2906112fec7f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/efa19a62-a71e-4cca-9858-01dbf589f402" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9521808c-c82a-4566-a327-29888fee8c3f" />


---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Built By

**Misthi Jaiswal** — [LinkedIn](https://linkedin.com/in/misthi-jaiswal) · [GitHub](https://github.com/CodeCommanderMJ)
