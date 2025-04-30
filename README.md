
# 📘 BytesBlog - MERN Stack Blogging Platform

BytesBlog is a full-featured blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register, log in, create blog posts, update/delete their own blogs, and read posts by others. Authenticated routes and a responsive UI ensure a smooth experience for all users.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, Axios, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens), bcryptjs
- **File Uploads**: Cloudinary
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## 🔑 Features

- ✅ User Registration & Login (JWT-based Auth)
- 🔐 Protected Routes (Only logged-in users can create/edit/delete blogs)
- ✍️ Create, Read, Update, Delete (CRUD) blog posts
- 🖼️ Upload images using Cloudinary
- 💬 Like & comment on posts
- 🌐 Responsive UI with TailwindCSS
- 💾 MongoDB-based data storage
- 📦 RESTful API integration

---

## 📸 Screenshots

https://github.com/AJKakarot/BytesBlog/blob/main/photo_1_2025-05-01_01-52-29.jpg?raw=true
---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AJKakarot/BytesBlog.git
cd BytesBlog
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup the Frontend

Open a new terminal and run:

```bash
cd frontend
npm install
npm start
```

---

## 📁 Project Structure

```
BytesBlog/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── App.js
├── README.md
```

---

## 🧠 API Endpoints

### Auth

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive JWT token

### Blog

- `GET /api/blogs` – Get all blogs
- `POST /api/blogs` – Create a new blog (auth required)
- `PUT /api/blogs/:id` – Update a blog (auth required)
- `DELETE /api/blogs/:id` – Delete a blog (auth required)

---

## 🧪 Sample `.env` Files

### Backend `.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bytesblog
JWT_SECRET=supersecretjwtkey
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 📦 Deployment

- 🖥️ Live Demo: [https://bytesblog.onrender.com](https://bytesblog-api.onrender.com)

---

## 🧑‍💻 Author

**Ajeet Gupta**  
📍 Kanpur, Uttar Pradesh  
🎓 Dr. Ambedkar Institute of Technology for Handicapped  
📧 [https://zippy-raindrop-9b9455.netlify.app/]  
🧑‍💼 Project Lead | Tech Coordinator  

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Show Your Support

If you like this project:

- ⭐ Star this repo
- 🛠️ Fork it
- 🙋 Share it with friends

---
