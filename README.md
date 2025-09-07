# Wanderlust – A Travel Booking Platform

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

## Screenshots

<img width="1919" height="915" alt="image" src="https://github.com/user-attachments/assets/e4c5d6ad-c64c-4953-b0d3-abfe24ef71d9" />

<img width="1899" height="909" alt="image" src="https://github.com/user-attachments/assets/38eb6482-9036-4f3d-9ee0-4ac56324a762" />

<img width="1901" height="913" alt="image" src="https://github.com/user-attachments/assets/12e42914-a1fb-4b2e-a1c3-133519d61bfc" />

<img width="1903" height="912" alt="image" src="https://github.com/user-attachments/assets/f3cd0e0d-4c0b-400a-828f-2e5bb4d658a4" />

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

## License

This project is open-source and available under the [MIT License](LICENSE).
