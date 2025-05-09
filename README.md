# 🏀 Activity Booking App – Backend API

This is a simple REST API for a basic activity booking application built with Node.js, Express, and MongoDB. It allows users to register, login, view activities, and book them securely with JWT-based authentication.

---

## 🚀 Features

- User Registration & Login (JWT authentication)
- Public Activity Listing
- Private Activity Booking (requires token)
- View User's Booked Activities
- Input validation and password hashing
- Clean folder structure using MVC pattern

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **Validation:** express-validator
- **Password Hashing:** bcrypt
- **Testing:** Postman

---

## 🧰 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bhaveshjain2603/Activity-Booking-API.git
cd Activity-Booking-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm run dev
```

### 4. Seeding Sample Data (Optional but Recommended) : To populate the database with sample activities

```bash
node Activities.js
```

## API Endpoints

### 1. Auth

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login and get token |


### 2. Activities

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| GET    | `/api/activities` | List all available activities |


### 3. Bookings

| Method | Endpoint        | Description                           |
| ------ | --------------- | ------------------------------------- |
| POST   | `/api/bookings` | Book an activity *(auth required)*    |
| GET    | `/api/bookings` | Get all my bookings *(auth required)* |


## Postman Collection 

- A postman collection file is included for testing: `Activity_Booking_API.json`

- You can import it into Postman and test the endpoints directly.