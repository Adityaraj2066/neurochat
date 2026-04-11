# 🧠 NeuroChat – AI-Powered Chat Backend 🚀

A production-ready AI chatbot backend built with Spring Boot, featuring secure authentication, rate limiting, AI integration, and real-world payment systems.

---

## 🌐 Live Demo

🔗 https://neurochat-amxn.onrender.com/chat.html

---

## 📌 Introduction

NeuroChat is a **scalable backend system for AI-driven conversations**, designed to simulate real-world SaaS platforms like ChatGPT.

It combines:

* 🔐 Secure authentication
* 🤖 AI API integration
* ⚡ Rate limiting
* 💳 Monetization

---

## ✨ Features

* 🔐 JWT Authentication – Secure, stateless login
* 🤖 AI Chat Integration – Real-time responses via OpenRouter
* ⚡ Rate Limiting (Redis) – Prevent abuse
* 💳 Payment Integration – Razorpay
* 🧱 Clean Architecture – Layered backend design
* 🚀 CI/CD Pipeline – GitHub Actions + Docker

---

## 🛠️ Tech Stack

| Category   | Technology                     |
| ---------- | ------------------------------ |
| Backend    | Java 17, Spring Boot           |
| Security   | Spring Security, JWT           |
| Database   | MySQL, Hibernate (JPA)         |
| Caching    | Redis                          |
| AI         | OpenRouter API                 |
| Payments   | Razorpay                       |
| DevOps     | Docker, GitHub Actions, Render |
| Build Tool | Maven                          |

---

## 🖼️ Screenshots

### 💬 Chat UI

![Chat UI](docs/chat-ui.png)

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites

* Java 17+
* Maven
* MySQL
* Redis (optional)

---

### 📦 Clone Repository

```bash
git clone https://github.com/Adityaraj2066/neurochat.git
cd neurochat
```

---

### 🔧 Configure Environment

Update `application.properties`:

```properties
OPENROUTER_API_KEY=your_api_key
RAZORPAY_KEY=your_key
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_pass
```

---

### ▶️ Run Application

```bash
mvn clean install
mvn spring-boot:run
```

---

## 🧪 Usage

1. Open live demo or local frontend
2. Register/Login
3. Get JWT token
4. Send chat prompts
5. Receive AI responses
6. Upgrade via payment

---

## 🏗️ Project Structure

```bash
src/
├── controller/     # REST APIs
├── service/        # Business logic
├── repository/     # DB layer
├── entity/         # Models
├── config/         # Config
├── security/       # JWT & filters
└── resources/
    ├── static/    # Frontend
    ├── templates/
    └── application.properties

docs/
└── chat-ui.png
```

---

## ⚡ CI/CD Pipeline

GitHub Actions workflow:

Code Push → Build (Maven) → Docker → Deploy (Render)

✔ Automated builds
✔ Continuous deployment
✔ DevOps-ready

---

## 🚀 Future Improvements

* WebSocket real-time chat
* Monitoring (Prometheus + Grafana)
* Swagger API docs
* Redis caching for AI
* Unit & integration testing
* Microservices architecture

---

## 🤝 Contributing

Contributions are welcome!

1. Fork repo
2. Create branch
3. Commit changes
4. Push & open PR

---

## 📄 License

MIT License
