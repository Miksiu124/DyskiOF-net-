# 📦 Backend — Platforma Sprzedaży Treści

Ten backend to gotowe rozwiązanie do prowadzenia platformy z płatnym dostępem do treści (obrazy, wideo, pliki). System obsługuje użytkowników, kredyty, dostęp do folderów, czat, powiadomienia, CMS i więcej.

## 🔧 Wymagania
- Node.js >= 18
- MongoDB (lokalnie lub Atlas)
- (Opcjonalnie) Redis – do harmonogramu dostępów
- Plik `.env` (patrz poniżej)

## 📁 Struktura folderów
- `routes/` – endpointy API
- `controllers/` – logika obsługi zapytań
- `models/` – schematy Mongoose
- `middleware/` – JWT, autoryzacja
- `uploads/` – pliki i foldery z treściami
- `ftp-folder/` – obserwowany folder FTP
- `server.js` – punkt wejścia

## 🧪 Uruchomienie lokalne
```bash
npm install
npm run dev
```

## 🔐 .env (przykład)
Zobacz plik `.env.example`

## 🚀 Endpointy API (przykładowe)
- `POST /api/auth/register` — rejestracja
- `POST /api/auth/login` — logowanie
- `GET /api/users/me` — profil użytkownika
- `POST /api/admin/access/grant` — przydzielanie dostępu
- `GET /api/chat/inbox` — skrzynka odbiorcza
- `GET /api/cms` — treści CMS
- `GET /api/ftp/new` — nowe pliki z FTP
- `GET /api/notifications` — powiadomienia

## 👨‍💻 Admin Panel
Zarządzanie użytkownikami, dostępami, CMS, powiadomieniami i czatem.

## 📬 Kontakt
W razie pytań — napisz do autora projektu.
