# 🌾 AgriLearn – Smart Agriculture Learning Platform

AgriLearn is a full-stack MERN-based Learning Management System (LMS) designed specifically for agriculture education. It enables farmers, instructors, and students to share knowledge, learn modern farming techniques, and track learning progress.

---

## 🚀 Features

### 🔐 Core Features

* Role-based Authentication (Admin, Instructor, Student)
* Course Creation & Management
* Module & Video-based Learning System
* Course Enrollment System
* Reviews & Ratings
* Progress Tracking

### 🌟 Advanced Features

* Bookmark Lessons
* Notifications System
* Discussion Forum (Future Scope)
* Cloud Media Storage (Cloudinary)

---

## 🏗️ System Architecture

```
Client (Browser / Mobile)
        │
Frontend (React / Next.js)
        │
REST API (Node.js + Express)
        │
Controllers (Business Logic)
        │
Models (Mongoose)
        │
Database (MongoDB)
        │
Media Storage (Cloudinary)
```

---

## 👥 User Roles & Permissions

| Role                      | Permissions                                            |
| ------------------------- | ------------------------------------------------------ |
| 👨‍🌾 Farmer / Instructor | Create Course, Upload Lessons & Videos, Manage Courses |
| 🎓 Student / Farmer       | Enroll Courses, Watch Lessons, Review & Comment        |
| 🛠️ Admin                 | Manage Users, Approve Courses, Moderate Reviews        |

---

## 🗄️ Database Structure

### 👤 Users Collection

```json
{
  "_id": "ObjectId",
  "name": "Rahim",
  "email": "rahim@gmail.com",
  "password": "hashedPassword",
  "role": "farmer",
  "profileImage": "imageURL",
  "bio": "Experienced rice farmer",
  "createdAt": "date"
}
```

### 📚 Courses Collection

```json
{
  "_id": "courseId123",
  "title": "Modern Rice Farming",
  "description": "Complete guide to rice farming",
  "instructorId": "userId456",
  "thumbnail": "imageURL",
  "category": "Rice",
  "level": "Beginner",
  "createdAt": "date"
}
```

### 📦 Modules Collection

```json
{
  "_id": "moduleId",
  "courseId": "courseId",
  "title": "Land Preparation",
  "order": 1
}
```

### 🎥 Videos Collection

```json
{
  "_id": "videoId1",
  "moduleId": "moduleId",
  "title": "Soil Testing",
  "videoUrl": "url",
  "duration": 300,
  "order": 1
}
```

### ⭐ Reviews Collection

```json
{
  "_id": "reviewId001",
  "courseId": "courseId123",
  "userId": "userId789",
  "rating": 5,
  "comment": "Very helpful course",
  "createdAt": "date"
}
```

### 📥 Enrollments Collection

```json
{
  "_id": "enrollId001",
  "userId": "userId789",
  "courseId": "courseId123",
  "enrolledAt": "date"
}
```

### 📊 Progress Collection

```json
{
  "_id": "progressId001",
  "userId": "userId789",
  "courseId": "courseId123",
  "moduleId": "moduleId123",
  "videoId": "video1",
  "completed": true
}
```

---

## 🔗 API Endpoints

### 🔐 Authentication

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

### 📚 Courses

```
POST   /api/courses
GET    /api/courses
GET    /api/courses/:id
PUT    /api/courses/:id
DELETE /api/courses/:id
```

### 🎬 Lessons

```
POST   /api/lessons
GET    /api/lessons/:courseId
PUT    /api/lessons/:id
DELETE /api/lessons/:id
```

### ⭐ Reviews

```
POST   /api/reviews
GET    /api/reviews/:courseId
```

---

## ⚛️ Frontend Structure

```
src/
│
├── app/
├── api/
├── features/
│   ├── auth/
│   ├── courses/
│   ├── lessons/
│
├── components/
├── layouts/
├── context/
├── firebase/
├── utils/
└── main.jsx
```

---

## 🖥️ Backend Structure (MVC)

```
server/
│
├── config/
├── models/
├── controllers/
├── routes/
├── middleware/
├── utils/
└── server.js
```

---

## 🔄 Database Relationships

* User → creates → Course
* Course → has → Modules → Videos
* User → enrolls → Course
* User → reviews → Course
* User → tracks → Progress

### Relations

* Course → Modules → One-to-Many
* Module → Videos → One-to-Many
* User → Enrollment → Many-to-Many
* User → Progress → Tracking System

---

## 🧠 Architecture Highlights

* ✅ MVC Backend Structure
* ✅ REST API Design
* ✅ Scalable Database Design
* ✅ Clean Separation of Concerns
* ✅ Cloudinary Integration
* ✅ Modular Frontend Structure

---

## 💼 Portfolio Value

This project demonstrates:

* ✔️ Strong System Design
* ✔️ Database Normalization
* ✔️ Full-stack MERN Development
* ✔️ Real-world LMS Architecture

---

## 📌 Future Improvements

* 🔔 Real-time Notifications
* 💬 Discussion Forum
* 📱 Mobile App
* 📈 Analytics Dashboard

---

## 🛠️ Tech Stack

* **Frontend:** React, Next.js, TailwindCSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Cloud:** Cloudinary
* **Auth:** JWT / Firebase

---
