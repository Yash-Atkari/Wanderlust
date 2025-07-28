# Wanderlust – Airbnb Clone

Wanderlust is a full-stack web application inspired by Airbnb, designed to help users explore and book unique accommodations around the world. It supports features like user authentication, property listings, booking system, and review functionality.

## Deployed Link

[View Wanderlust](https://airbnb-clone-1-2et5.onrender.com/)

## Tech Stack

### Frontend
- HTML, CSS, JavaScript
- EJS (Embedded JavaScript Templates)
- Bootstrap for UI Styling

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose ODM

### Other Tools & Libraries
- Passport.js (Authentication)
- Cloudinary (Image Upload)
- Multer (File Handling)
- Method-Override
- Dotenv for Environment Variables

## Features

-  User Authentication (Register/Login/Logout)
-  Add, Edit, and Delete Property Listings
-  Location-based Listings
-  Upload Multiple Property Images
-  Leave Reviews and Ratings
-  Book Properties with Availability Dates
-  Dashboard for Managing Listings and Bookings

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```bash
DB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
SESSION_SECRET=your_session_secret
```
### 4. Run the App Locally
```bash
npm start
```
The backend will run on: `http://localhost:xxxx`
