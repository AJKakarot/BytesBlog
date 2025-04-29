📝 Blog App (MERN)

A full-stack MERN (MongoDB, Express.js, React, Node.js) blog application where users can create, read, update, and delete blog posts with authentication and image upload features.

🚀 Features
 • ✅ User authentication (Signup, Login, Logout)
 • ✅ Create, edit, and delete blog posts
 • ✅ Upload images using Cloudinary
 • ✅ Secure authentication with JWT
 • ✅ Responsive UI with React & TailwindCSS
 • ✅ Like & comment on posts

⸻

🛠 Tech Stack
 • Frontend: React, React Router, Axios, TailwindCSS
 • Backend: Node.js, Express.js
 • Database: MongoDB (via Mongoose)
 • Authentication: JSON Web Tokens (JWT)
 • File Uploads: Cloudinary
 • Other Dependencies: bcryptjs, cors, dotenv, express-fileupload, validator

 frontend/
├── public/                  # Static public assets (index.html, icons, etc.)
├── src/
│   ├── assets/              # Logos, images, fonts
│   ├── components/          # Shared UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Loading.jsx
│
│   ├── context/             # Global state using Context API
│   │   └── AuthProvider.jsx
│
│   ├── dashboard/           # Authenticated user dashboard pages
│   │   ├── CreateBlog.jsx
│   │   ├── MyBlogs.jsx
│   │   ├── MyProfile.jsx
│   │   ├── UpdateBlog.jsx
│   │   └── Sidebar.jsx
│
│   ├── pages/               # Main public views / routes
│   │   ├── About.jsx
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   ├── Creators.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Detail.jsx        # Blog detail page
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── NotFound.jsx
│
│   ├── Home/                # (Optional) Home page sections
│   │   ├── Creator.jsx
│   │   ├── Devotional.jsx
│   │   ├── Hero.jsx
│   │   └── Trending.jsx
│
│   ├── App.jsx              # Main component with Routes
│   ├── main.jsx             # React entry point
│
├── tailwind.config.js
├── vite.config.js
└── index.css



frontend/
├── public/                  # Static public assets (index.html, icons, etc.)
├── src/
│   ├── assets/              # Logos, images, fonts
│   ├── components/          # Shared UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Loading.jsx
│
│   ├── context/             # Global state using Context API
│   │   └── AuthProvider.jsx
│
│   ├── dashboard/           # Authenticated user dashboard pages
│   │   ├── CreateBlog.jsx
│   │   ├── MyBlogs.jsx
│   │   ├── MyProfile.jsx
│   │   ├── UpdateBlog.jsx
│   │   └── Sidebar.jsx
│
│   ├── pages/               # Main public views / routes
│   │   ├── About.jsx
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   ├── Creators.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Detail.jsx        # Blog detail page
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── NotFound.jsx
│
│   ├── Home/                # (Optional) Home page sections
│   │   ├── Creator.jsx
│   │   ├── Devotional.jsx
│   │   ├── Hero.jsx
│   │   └── Trending.jsx
│
│   ├── App.jsx              # Main component with Routes
│   ├── main.jsx             # React entry point
│
├── tailwind.config.js
├── vite.config.js
└── index.css




backend/
├── controller/                     # Handles business logic
│   ├── blog.controller.js          # Blog-related logic (create, read, update, delete)
│   └── user.controller.js          # User-related logic (register, login, profile)
│
├── jwt/                            # JWT utilities
│   └── AuthToken.js                # Functions to sign/verify JWT tokens
│
├── middleware/                     # Custom Express middlewares
│   └── authUser.js                 # Protect routes by validating JWT
│
├── models/                         # Mongoose schemas
│   ├── blog.model.js               # Blog schema
│   └── user.model.js               # User schema
│
├── routes/                         # API route definitions
│   ├── blog.route.js               # Blog routes (GET, POST, PUT, DELETE)
│   └── user.route.js               # User routes (register, login)
│
├── .env                            # Environment variables (MONGO_URI, JWT_SECRET, etc.)
├── .gitignore                      # Git ignore file
├── index.js                        # Server entry point (Express app)
├── package.json                    # Backend dependencies
├── package-lock.json


🚀 Deployment
 • Frontend: Vercel, Netlify
 • Backend: Render, Railway
 • Database: MongoDB Atlas



 📜 License

This project is open-source and available under the MIT License.