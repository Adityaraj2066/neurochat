# NeuroChat — React Frontend Migration

This document describes the frontend migration from static HTML/JS to React + Vite while keeping the Spring Boot backend unchanged (except CORS for local development).

## Architecture

| Layer | Location |
|-------|----------|
| React app | `frontend/` |
| Spring Boot API | `backend/src/main/java/...` (unchanged business logic) |
| Legacy static UI | `backend/src/main/resources/static/*.html` (kept for reference) |

## Folder structure

```
frontend/
├── index.html
├── package.json
├── vite.config.js
├── .env.example
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/chat/
    ├── pages/          Login, Register, Chat, Payment, Upgrade
    ├── services/       api, auth, chat, payment
    ├── hooks/
    ├── context/        AuthContext
    ├── routes/
    ├── utils/
    └── styles/
```

## Prerequisites

- Java 17+
- Maven
- Node.js 18+
- PostgreSQL (env vars)
- Redis (for rate limiting)
- OpenRouter API key
- Razorpay test keys

## Environment

### Backend (`application.properties` / env)

```bash
OPENROUTER_API_KEY=...
DB_URL=jdbc:postgresql://...
DB_USER=...
DB_PASS=...
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
```

### Frontend (`frontend/.env`)

```bash
cp .env.example .env
# Optional in dev (Vite proxies /api to :8080):
VITE_API_BASE_URL=
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxx
```

`VITE_RAZORPAY_KEY_ID` must match the public key used in `PaymentController` / HTML.

## Run locally

**Terminal 1 — backend**

```bash
cd backend
./mvnw spring-boot:run
```

**Terminal 2 — React**

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

Vite proxies `/api/*` → `http://localhost:8080`.

## API integration (unchanged endpoints)

| Feature | Method | Endpoint |
|---------|--------|----------|
| Login | POST | `/api/auth/login` |
| Register | POST | `/api/auth/register` |
| Chat stream | GET | `/api/chat/stream?chatId=&message=` |
| History | GET | `/api/chat/history/{chatId}` |
| Titles | GET | `/api/chat/chat-titles` |
| Delete chat | DELETE | `/api/chat/delete/{chatId}` |
| Create order | POST | `/api/payment/create-order` |
| Verify payment | POST | `/api/payment/verify-payment` |

JWT is stored in `localStorage` key `token` and sent as `Authorization: Bearer <token>` (same as original).

Streaming uses `fetch` + `ReadableStream` (not Axios) to preserve byte-by-byte behavior.

## Route mapping

| Original | React route |
|----------|-------------|
| login.html | `/login` |
| register.html | `/register` |
| chat.html | `/chat` |
| payment.html | `/payment` |
| upgrade.html | `/upgrade` |

## Backend change (minimal)

- `WebCorsConfig.java` — allows `http://localhost:5173` for `/api/**`
- `SecurityConfig.java` — enables Spring CORS

No API contracts, entities, JWT, Redis, payment, or AI logic were modified.

## Production build

```bash
cd frontend
npm run build
```

Output: `frontend/dist/`. Serve via nginx/CDN or copy into Spring `static/` if you want a single JAR deployment.

## Validation checklist

- [ ] Guest chat + rate limit → register redirect
- [ ] User rate limit → upgrade redirect
- [ ] Login → token → chat history
- [ ] Stream typing cursor `▌`
- [ ] Razorpay upgrade on `/upgrade`
- [ ] Logout clears session and reloads chat UI
