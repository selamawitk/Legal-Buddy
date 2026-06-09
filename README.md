# Legal Buddy – AI Legal Assistant for Ethiopia

AI platform for generating contracts, searching laws, and analyzing legal documents under the Ethiopian legal framework in Amharic and English.

---

## 1. Core Features

* **AI Contract Generator:** Questionnaire-driven generation for Rental, Employment, Sales, NDA, and Service agreements with PDF export.
* **Legal Search Engine (RAG):** Natural language search across the Constitution, Civil/Commercial Codes, and Labor/Tax Proclamations with exact citations.
* **Risk & Compliance Analyzer:** Uploads contracts, detects liabilities or missing clauses, tracks deadlines, and sends automated alerts.
* **Dual-Embedding Strategy:** Pairs Amharic text with English context to ensure high-accuracy vector search matching across both languages.

---

## 2. User Roles

* **User:** Accesses personal dashboard, generates/edits contracts, searches laws, runs contract risk analysis, and manages subscriptions.
* **Admin:** System control, user management, vector database/proclamation updates, master template editing, and API/token monitoring.

---

## 3. Database Architecture (PostgreSQL + pgvector)

* **Users:** Credentials, roles (User, Admin), subscription tier, and status.
* **Contracts & Templates:** User documents, status states (Draft to Expired), version logs, and admin questionnaire schemas.
* **Legal Chunks:** Parsed law text blocks, hierarchy weights (Constitution to Directives), citation metadata, and `pgvector` embeddings.
* **Tasks & Actions:** Compliance deadlines, digital signature logs, real-time user notifications, and high-security audit tracking records.

---

## 4. Technical Stack

* **Frontend:** Next.js (App Router), TypeScript, TailwindCSS, shadcn/ui.
* **Backend:** NestJS Framework.
* **Database / Vector:** PostgreSQL + `pgvector`.
* **AI Engine:** LangChain, Google Gemini API & OpenAI API.
* **Queues & Storage:** Redis + BullMQ (background alerts/webhooks), AWS S3.
* **Payments & Email:** Chapa, SantimPay, Resend / SendGrid.

---

## 5. Main System Flows

* **RAG Search:** Query → Vector Generation → Cosine Distance Search → Legal Hierarchy Filter → LLM Context Processing → Legal Safety Layer Verification → Streamed Response with Citations.
* **Webhook Payments:** Gateway Event → Cryptographic Signature Check → BullMQ Async Worker Assignment → Atomic Subscription Upgrade → Audit Logging → In-App/Email Notification.
