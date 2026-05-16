# 🧠 NeuroChat – AI-Powered Full Stack Chat Application 🚀

A production-ready AI-powered full-stack SaaS chat application built using React, Spring Boot, JWT authentication, Redis rate limiting, AI APIs, and Razorpay integration.

---

# 🌐 Live Demo

🔗 https://neurochat-amxn.onrender.com

---

# 📌 Introduction

NeuroChat is a scalable AI-powered chat platform inspired by modern conversational AI products like ChatGPT.

The application provides:

* Secure authentication
* Real-time AI chat responses
* Redis-based rate limiting
* Payment integration
* Modern React frontend
* Spring Boot backend architecture

Built with production-style architecture and real-world backend engineering concepts.

---

# ✨ Features

## 🔐 Authentication & Security

* JWT-based authentication
* Stateless session management
* Spring Security integration
* Protected routes
* Secure password hashing using BCrypt

---

## 🤖 AI Chat System

* AI-powered conversations
* OpenRouter API integration
* Streaming AI responses
* Persistent chat history
* Multi-chat support using chatId

---

## ⚡ Rate Limiting

* Redis-based request limiting
* Abuse prevention
* User vs PRO usage control

---

## 💳 Payment System

* Razorpay integration
* PRO membership upgrade flow
* Premium access architecture

---

## 🧱 Full Stack Architecture

* React frontend
* Spring Boot backend
* REST APIs
* PostgreSQL/MySQL database support
* Redis caching/rate limiting

---

## 🚀 DevOps & Deployment

* Docker support
* GitHub Actions CI/CD
* Render deployment
* Production-ready project structure

---

# 🛠️ Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Frontend       | React, Vite, Axios, React Router    |
| Backend        | Java 17, Spring Boot                |
| Security       | Spring Security, JWT                |
| Database       | PostgreSQL / MySQL, Hibernate (JPA) |
| Caching        | Redis                               |
| AI Integration | OpenRouter API                      |
| Payments       | Razorpay                            |
| DevOps         | Docker, GitHub Actions, Render      |
| Build Tools    | Maven, npm                          |

---

# 🖼️ Screenshots

## 💬 Chat UI

![Chat UI](docs/chat-ui.png)

---

# 🏗️ Project Architecture

```text
frontend/
 ├── React + Vite frontend
 ├── Components
 ├── Pages
 ├── Services
 ├── Hooks
 └── API communication

backend/
 ├── Spring Boot backend
 ├── Controllers
 ├── Services
 ├── Repositories
 ├── JWT Security
 ├── Redis Rate Limiting
 └── AI Integration
```

---

# ⚙️ Installation & Setup

# 🔧 Prerequisites

* Java 17+
* Maven
* Node.js
* npm
* PostgreSQL/MySQL
* Redis (optional)

---

# 📦 Clone Repository

```bash
git clone https://github.com/Adityaraj2066/neurochat.git
cd neurochat
```

---

# 🔧 Backend Setup

Go to backend folder:

```bash
cd backend
```

Update:

```properties
src/main/resources/application.properties
```

Example:

```properties
OPENROUTER_API_KEY=your_api_key

RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret

DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
```

Run backend:

```bash
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

# ⚛️ Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🧪 Usage

1. Register/Login
2. Receive JWT token
3. Start AI conversations
4. Chat responses stream in real time
5. Chat history stored in database
6. Upgrade account using Razorpay

---

# 📂 Backend Structure

```text
backend/src/main/java/com/adityaraj/neurochat/

├── config/        # Security & filters
├── controller/    # REST APIs
├── service/       # Business logic
├── repository/    # Database layer
├── entity/        # Database entities
└── resources/
```

---

# 📂 Frontend Structure

```text
frontend/src/

├── components/    # Reusable UI components
├── pages/         # Application pages
├── services/      # API communication
├── hooks/         # Custom hooks
├── context/       # Authentication state
├── routes/        # React Router
├── styles/        # CSS files
└── utils/         # Helper functions
```

---

# 🔐 Security Features

* JWT authentication
* BCrypt password hashing
* Stateless backend architecture
* Protected API routes
* Redis request throttling
* Secure authorization headers

---

# ⚡ API Flow

```text
React Frontend
      ↓
Spring Boot REST APIs
      ↓
JWT Authentication
      ↓
Redis Rate Limiting
      ↓
OpenRouter AI APIs
      ↓
Database Persistence
```

---

# ⚡ CI/CD Pipeline

GitHub Actions Workflow:

```text
Code Push
   ↓
Frontend Build
   ↓
Backend Build
   ↓
Docker Build
   ↓
Deploy to Render
```

---

# 🚀 Future Improvements

* WebSocket real-time chat
* AI conversation memory
* Swagger/OpenAPI docs
* Monitoring & logging
* Unit & integration testing
* Kubernetes deployment
* Microservices architecture
* Admin dashboard

---

# 🤝 Contributing

Contributions are welcome.

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push changes
5. Open pull request

---

# 📄 License

MIT License
