# Sevra - Full-Stack Rural Connect Platform
**Sevra** is a full-stack web application I built as a practical prototype to explore how technology can help rural communities access essential products and services. The goal was to design and build a simple but functional MERN stack application from the ground up.

## Features Covered
The current prototype includes the following features:

### Homepage & UI
#### Attractive & Responsive Design: A clean, modern UI that works on both desktop and mobile devices.

#### Complete Homepage Sections: Includes a Hero section, Services, Products, Testimonials, News & Updates, and a Contact Us form.

#### Hybrid Navigation: Features dedicated pages for /services and /products, while also allowing users to jump to sections on the homepage.

#### User Authentication & Dashboard
Full Signup/Login Flow: Secure user registration and login with encrypted passwords.

#### JWT-based Authentication: User state is managed globally using React Context and JWT, with tokens stored in localStorage.

#### Protected Routes: The User Dashboard and Edit Profile pages are protected and can only be accessed by logged-in users.

#### Personalized Dashboard: Welcomes the user by name and displays a complete list of their past booking history.

#### Profile Editing: Logged-in users can update their name, email, and phone number.

#### Booking & Cart Functionality
#### Add to Cart: Users can add products to a shopping cart from the products page.

#### Cart Page: A dedicated page to view, modify quantities, or remove items from the cart.

#### Booking System: The checkout process saves the user's cart as a booking in the database, linked to their user ID.

### Extra Features
Advanced Product Filtering: Users can filter products by category, sort by price (low-to-high and high-to-low), and search by name in real-time.

### Tech Stack Used
#### Frontend
#### React.js (Vite): A modern JavaScript library for building user interfaces.

#### React Router: For handling client-side routing and navigation.

#### React Context API: For global state management (Authentication and Shopping Cart).

#### Axios: For making HTTP requests to the backend API.

#### Standard CSS: For custom, component-based styling and responsive design.

#### Backend
#### Node.js: A JavaScript runtime for building the server.

#### Express.js: A web application framework for Node.js, used to build the REST API.

#### MongoDB: A NoSQL database used to store user, product, and booking data.

#### Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

#### JSON Web Tokens (JWT): For securing user authentication and protecting routes.

#### bcryptjs: For hashing user passwords before storing them in the database.

## Project Showcase
Here are a few screenshots of the application in action.
## 1. HomePage
<img width="1920" height="972" alt="homepage" src="https://github.com/user-attachments/assets/9affcaee-35d2-4037-9359-0d4d47681b46" />

## 2. Services Page
<img width="1920" height="974" alt="services" src="https://github.com/user-attachments/assets/882efd53-7882-48e2-a300-74254661dc2e" />

## 3. Products Page
<img width="1920" height="973" alt="products" src="https://github.com/user-attachments/assets/8df7270f-9d98-4bff-8adf-17e6cef3c73b" />

## 4. Dashboard
<img width="1920" height="973" alt="dashboard" src="https://github.com/user-attachments/assets/67c1a197-11b4-4bf1-92a4-4e27448984ba" />

## 5. Cart Page
<img width="1920" height="976" alt="cart" src="https://github.com/user-attachments/assets/7c480dee-1679-4496-bbc2-441edefa5cc4" />

### How to Run the App Locally
To run this project on your local machine, you will need to run both the backend and frontend servers simultaneously.

### Prerequisites
Node.js installed on your machine.

MongoDB Atlas account for the database.

1. Backend Setup
### 1. Navigate to the backend directory
cd sevra-backend

### 2. Install dependencies
npm install

### 3. Create a .env file in the root of the /sevra-backend folder and add your environment variables:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_long_and_random_secret_key
NODE_ENV=development
PORT=5001

### 4. Start the backend server
npm run dev

The backend server will be running on http://localhost:5001.

## 2. Frontend Setup
### 1. Open a new terminal and navigate to the frontend directory
cd sevra-frontend

### 2. Install dependencies
npm install

### 3. Start the frontend development server
npm run dev

The frontend application will open in your browser, usually at http://localhost:5173.

### Key Learnings & Future Scope
This project was a great hands-on experience in building a full-stack application.

#### Key Learning: A major part of the development process was debugging the communication between the frontend and backend, especially handling CORS issues and ensuring the data models matched between the client and server.

#### Future Scope: If I were to continue developing this project, my next steps would be:

Implement a real payment gateway like Razorpay.

Add an admin panel to manage products, services, and view all user bookings.

Refactor the static product data on the frontend to be fetched from a /api/products endpoint.

### Demo Login Credentials
You can use the following credentials to test the login functionality and view the user dashboard.

Email: test@example.com

Password: password123

(Note: You'll need to first register this user through the "Sign Up" page for the demo login to work.)
