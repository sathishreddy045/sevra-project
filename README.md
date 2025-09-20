<div align="center">

# 🌾 Sevra - Rural Connect Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**A modern full-stack web application connecting rural communities with essential products and services**

[🚀 Live Demo](#-live-demo) • [📖 Documentation](#-features) • [🛠️ Installation](#-installation) • [📸 Screenshots](#-screenshots)

</div>

---

## 🌟 Overview

**Sevra** is a comprehensive MERN stack application designed to bridge the gap between rural communities and essential products/services. Built as a practical prototype, it demonstrates how modern web technologies can empower rural areas with digital access to agricultural supplies, services, and community resources.

### 🎯 Mission
To create a seamless digital platform that brings essential products and services directly to rural communities, fostering economic growth and improving quality of life.

---

## ✨ Key Features

### 🏠 **Modern Homepage & UI**
- 🎨 **Responsive Design** - Clean, modern interface optimized for all devices
- 🧭 **Hybrid Navigation** - Dedicated pages with smooth section scrolling
- 📱 **Mobile-First Approach** - Perfect experience on smartphones and tablets

### 🔐 **User Authentication & Dashboard**
- 🔑 **Secure Login/Signup** - JWT-based authentication with encrypted passwords
- 👤 **Personalized Dashboard** - Welcome users by name with complete booking history
- 🛡️ **Protected Routes** - Secure access to user-specific pages
- ✏️ **Profile Management** - Update personal information seamlessly

### 🛒 **E-Commerce & Booking System**
- 🛍️ **Smart Shopping Cart** - Add, modify, and manage products
- 📦 **Advanced Filtering** - Filter by category, sort by price, real-time search
- 💳 **Booking System** - Complete checkout process with order tracking
- 📊 **Order History** - Comprehensive view of all past bookings

### 🎛️ **Admin Panel**
- 👨‍💼 **Admin Dashboard** - Manage products, users, and orders
- 📈 **Analytics** - Revenue, orders, and user statistics
- 🔧 **CRUD Operations** - Full product and user management
- 🛡️ **Role-Based Access** - Secure admin-only features

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="50%">

### 🎨 Frontend
- **React.js 18.2.0** - Modern UI library
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Context API** - Global state management
- **Axios** - HTTP client
- **CSS3** - Custom responsive styling

</td>
<td align="center" width="50%">

### ⚙️ Backend
- **Node.js 18.0.0** - JavaScript runtime
- **Express.js 4.18.0** - Web framework
- **MongoDB 5.0** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

</td>
</tr>
</table>

---

## 🚀 Live Demo

> **Demo Credentials:**
> - **Email:** `test@example.com`
> - **Password:** `password123`
> 
> *Note: Register first through the Sign Up page*

---

## 📸 Screenshots

### 🖼️ Application Screenshots

<table>
<tr>
<td align="center">

**🏠 Homepage**
<img src="https://github.com/user-attachments/assets/9affcaee-35d2-4037-9359-0d4d47681b46" alt="Homepage" width="100%"/>

*Modern landing page with hero section and featured services*

</td>
<td align="center">

**🛠️ Services Page**
<img src="https://github.com/user-attachments/assets/882efd53-7882-48e2-a300-74254661dc2e" alt="Services" width="100%"/>

*Comprehensive services overview with detailed descriptions*

</td>
</tr>
<tr>
<td align="center">

**🛍️ Products Page**
<img src="https://github.com/user-attachments/assets/8df7270f-9d98-4bff-8adf-17e6cef3c73b" alt="Products" width="100%"/>

*Product catalog with advanced filtering and search*

</td>
<td align="center">

**📊 User Dashboard**
<img src="https://github.com/user-attachments/assets/67c1a197-11b4-4bf1-92a4-4e27448984ba" alt="Dashboard" width="100%"/>

*Personalized dashboard with booking history*

</td>
</tr>
<tr>
<td align="center" colspan="2">

**🛒 Shopping Cart**
<img src="https://github.com/user-attachments/assets/7c480dee-1679-4496-bbc2-441edefa5cc4" alt="Cart" width="100%"/>

*Interactive shopping cart with order summary*

</td>
</tr>
</table>

---

## 🛠️ Installation

### 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB Atlas** account (or local MongoDB instance)
- **Git** for cloning the repository

### 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sevra.git
   cd sevra
   ```

2. **Set up the Backend**
   ```bash
   cd sevra-backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `sevra-backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_long_and_random_secret_key
   NODE_ENV=development
   PORT=5001
   ```

4. **Start the Backend Server**
   ```bash
   npm run dev
   ```
   Backend will be running on `http://localhost:5001`

5. **Set up the Frontend**
   
   Open a new terminal:
   ```bash
   cd sevra-frontend
   npm install
   npm run dev
   ```
   Frontend will be running on `http://localhost:5173`

### 🔧 Detailed Setup Instructions

<details>
<summary><strong>Backend Configuration</strong></summary>

1. **Navigate to backend directory**
   ```bash
   cd sevra-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create `.env` file in `sevra-backend` root
   - Add your MongoDB connection string
   - Set a secure JWT secret
   - Configure port (default: 5001)

4. **Start development server**
   ```bash
   npm run dev
   ```

</details>

<details>
<summary><strong>Frontend Configuration</strong></summary>

1. **Navigate to frontend directory**
   ```bash
   cd sevra-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open `http://localhost:5173` in your browser
   - The app will automatically reload when you make changes

</details>

### 🌐 Access the Application

Once both servers are running:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5001
- **API Documentation:** http://localhost:5001/api

---

## 🎓 Key Learnings & Future Scope

### 🔍 **Key Learning**
A major part of the development process was debugging the communication between the frontend and backend, especially handling CORS issues and ensuring the data models matched between the client and server. This project provided valuable hands-on experience in full-stack development and API integration.

### 🚀 **Future Enhancements**

<details>
<summary><strong>Planned Features</strong></summary>

- 💳 **Payment Integration** - Implement Razorpay or Stripe for secure transactions
- 📱 **Mobile App** - React Native version for better mobile experience
- 🔔 **Real-time Notifications** - WebSocket integration for live updates
- 📊 **Advanced Analytics** - Detailed reporting and insights dashboard
- 🌍 **Multi-language Support** - Localization for different regions
- 🔍 **Search Enhancement** - Elasticsearch integration for better search
- 📧 **Email Notifications** - Automated order confirmations and updates
- 🗺️ **Location Services** - GPS integration for delivery tracking

</details>

<details>
<summary><strong>Technical Improvements</strong></summary>

- 🔄 **API Optimization** - Refactor static data to dynamic API endpoints
- 🧪 **Testing Suite** - Unit and integration tests
- 🐳 **Docker Deployment** - Containerization for easy deployment
- ☁️ **Cloud Integration** - AWS/Azure deployment
- 🔒 **Security Enhancements** - Rate limiting, input validation
- 📈 **Performance** - Caching, lazy loading, optimization

</details>

---

## 🧪 Testing the Application

### 🔑 **Demo Credentials**
```
Email:    test@example.com
Password: password123
```

> **Note:** You'll need to register this user through the "Sign Up" page first.

### 🎯 **Test Scenarios**
1. **User Registration & Login** - Create account and authenticate
2. **Product Browsing** - Explore products with filtering and search
3. **Shopping Cart** - Add/remove items and manage quantities
4. **Order Placement** - Complete checkout process
5. **Dashboard Access** - View order history and profile management
6. **Admin Features** - Access admin panel (if admin user)

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### 📝 **How to Contribute**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/sathishreddy045)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/sathishreddykattula)
- Email: sathishreddy045@gmail.com

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

[![GitHub stars](https://img.shields.io/github/stars/yourusername/sevra?style=social)](https://github.com/yourusername/sevra)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/sevra?style=social)](https://github.com/yourusername/sevra)
[![GitHub watchers](https://img.shields.io/github/watchers/yourusername/sevra?style=social)](https://github.com/yourusername/sevra)

**Made with ❤️ for rural communities**

</div>
