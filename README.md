# simple-ecommerce-store
# Simple E-commerce Store

A full-stack E-commerce web application built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

## Features

* Product Listings
* Product Details Page
* Shopping Cart
* User Registration & Login
* Order Processing
* MongoDB Database Integration
* Responsive Black Theme UI
* Frontend Deployment with Vercel
* Backend Deployment with Render/Railway

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

---

## Project Structure

```bash
simple-ecommerce-store/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   └── register.html
│
└── README.md
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/simple-ecommerce-store.git
```

### 2. Open Project

```bash
cd simple-ecommerce-store
```

---

## Backend Setup

### Go to Backend Folder

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mysecretkey
PORT=5000
```

### Start Backend Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

Open:

```bash
frontend/index.html
```

in browser.

---

## API Endpoints

### Products

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/products     |
| POST   | /api/products     |
| GET    | /api/products/:id |

### Users

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /api/users/register |
| POST   | /api/users/login    |

### Orders

| Method | Endpoint    |
| ------ | ----------- |
| POST   | /api/orders |

---

## Deployment

### Frontend

Deploy using Vercel.

### Backend

Deploy using Render or Railway.

### Database

MongoDB Atlas Cloud Database.

---

## Screenshots

* Home Page
* Product Page
* Shopping Cart
* Login/Register
* Order Success

---

## Future Improvements

* Payment Gateway Integration
* Admin Dashboard
* Product Search
* Wishlist
* Order History
* Responsive Mobile Design

---

## Author

Akanksha Revuri

---

## License

This project is for educational and internship purposes.
