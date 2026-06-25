# 🧠 DebateIQ — Agentic AI Debate Platform

![DebateIQ Banner](./assets/banner.png)

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![LangGraph](https://img.shields.io/badge/LangGraph-Agentic_AI-purple)
![Groq](https://img.shields.io/badge/Groq-LLM-orange)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 🚀 Overview

**DebateIQ** is an Agentic AI-powered debate platform that simulates structured debates using multiple AI agents.

Instead of a simple chatbot, DebateIQ uses a **LangGraph multi-agent workflow** where different agents collaborate to generate arguments, counterarguments, rebuttals, judge feedback, scoring, analytics, and a final debate report.

---

## ✨ Key Features

* 🧠 Multi-agent debate workflow
* 🎙️ Moderator Agent for debate planning
* ✅ Pro Agent for supporting arguments
* ❌ Con Agent for opposing arguments
* 🔁 Rebuttal Agent for counter-response
* ⚖️ Judge Agent for evaluation
* 📊 Scoring Agent for analytics
* 📄 Interactive final debate report
* 🌗 Light/Dark theme support
* 🪟 Glassmorphism UI design
* ⚡ FastAPI backend
* 🎨 React frontend
* 🔗 Groq LLM integration

---

## 🧩 Agent Architecture

![Agent Flow](./assets/agent-flow.png)

```text
User Topic
   ↓
Moderator Agent
   ↓
Pro Agent + Con Agent
   ↓
Rebuttal Agent
   ↓
Judge Agent
   ↓
Scoring Agent
   ↓
Final Report
```

---

## 🏗️ Project Structure

![Architecture](./assets/architecture.png)

```text
DebateIQ/
│
├── agents/
│   ├── graph.py
│   ├── state.py
│   ├── llm.py
│   ├── nodes/
│   │   ├── moderator_node.py
│   │   ├── pro_node.py
│   │   ├── con_node.py
│   │   ├── rebuttal_node.py
│   │   ├── judge_node.py
│   │   ├── scoring_node.py
│   │   └── final_report_node.py
│   └── utils.py
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│
├── frontend/
│
├── database/
├── uploads/
├── requirements.txt
└── README.md
```

---

## 🛠️ Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| Frontend       | React + Tailwind CSS             |
| Backend        | FastAPI                          |
| Agent Workflow | LangGraph                        |
| LLM Provider   | Groq                             |
| Language       | Python                           |
| UI Design      | Glassmorphism + Light/Dark Theme |

---

## 📸 Screenshots

![App Screenshot](./assets/screenshot.png)

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/DebateIQ.git
cd DebateIQ
```

### 2. Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4. Add Environment Variables

Create `.env` file in the root folder:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 5. Run Backend

```bash
python -m uvicorn backend.app.main:app --reload
```

Backend will run on:

```text
http://127.0.0.1:8000
```

API Docs:

```text
http://127.0.0.1:8000/docs
```

---

## 🎨 Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 🌐 Deployment Guide

### Frontend

Deploy frontend on:

* Vercel
* Netlify

### Backend

Deploy FastAPI backend on:

* Render
* Railway
* Fly.io

### Environment Variable

On deployment platform, add:

```env
GROQ_API_KEY=your_groq_api_key_here
```

---

## 🔮 Future Improvements

* User authentication
* Debate history
* PDF report download
* Evidence search tool
* Citation generation
* Voice-based debate mode
* Leaderboard
* PostgreSQL database integration
* Docker deployment

---

## 👨‍💻 Author

**Wasay Ghauri**
Aspiring Data Analyst | AI & Agentic AI Learner

---

## ⭐ Support

If you like this project, consider giving it a star ⭐

---

## 💭 Final Thought

> DebateIQ is not just a chatbot — it is a multi-agent reasoning system designed to simulate structured debates using Agentic AI.
