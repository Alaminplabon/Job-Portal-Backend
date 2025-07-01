# 💼 Job Portal Backend

A simplified backend system for a job portal that supports user registration, authentication, job posting, job applications, and real-time notifications via Socket.io.

---

## 📌 Features

- ✅ User Registration -> OTP Verify -> Login (with bcrypt password hashing)
- ✅ Role-Based Access (Admin, Employer, Candidate)
- ✅ JWT Authentication with Refresh Tokens
- ✅ Job Posting (Create, Update, Delete, View)
- ✅ Job Application
- ✅ Real-time Notifications via Socket.io
- ✅ Admin Controls (View jobs, applications, and manage users)
- ✅ Postman API Documentation

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/Job-Portal-Backend.git
   cd Job-Portal-Backend

   Configure Environment Variables

Locate the env file provided in the repo or shared separately.

Create a file in the root directory called .env

Paste the content into the .env file 

Install Dependencies
**npm install**

Run the Development Server
**npm run dev**


📄 Sample .env File
env
Copy
Edit
NODE_ENV=development
PORT=8000
SOCKET_PORT=8001

# MongoDB URL
DATABASE_URL="your-mongodb-uri-here"

# JWT Secrets
JWT_ACCESS_SECRET="your-access-secret"
JWT_REFRESH_SECRET="your-refresh-secret"
JWT_ACCESS_EXPIRES_IN="30d"
JWT_REFRESH_EXPIRES_IN="365d"

# Nodemailer
NODEMAILER_HOST_EMAIL="your-email@gmail.com"
NODEMAILER_HOST_PASS="your-email-app-password"


![Screenshot from 2025-07-01 17-08-56](https://github.com/user-attachments/assets/2b92c5d3-f520-4e8f-8b2e-8aaff7c63cac)




# API Documentation
📁 Postman Collection: [Download Link!](https://drive.google.com/file/d/1lTy41R82g3QNBhJZ97Hj-JMOVBVWRSLt/view?usp=sharing)

[Screenshot from 2025-07-01 16-57-25](https://github.com/user-attachments/assets/789c1c10-ea38-454a-885f-a68866176861)
![Screenshot from 2025-07-01 16-57-43](https://github.com/user-attachments/assets/1cb9a3fc-b72b-4901-84b8-d37d0aefe4f8)


# Deployment (Free Hosting)
You can deploy this backend on free services like:

# Render
https://job-portal-backend-9k2z.onrender.com/



![Screenshot from 2025-07-01 17-07-48](https://github.com/user-attachments/assets/86577c3e-b616-401d-b4ed-e98a36d03719)

![Screenshot from 2025-07-01 17-04-27](https://github.com/user-attachments/assets/1fe8ce6a-4ed1-474d-b5fd-bb5da7a76c3b)


# Entity Relationship Summary
A User can have one Role (Admin, Employer, Candidate)

A User can post many Jobs (if Employer)

A User can apply to many Jobs (if Candidate)

A Job can have many Applications

A User can have many Notifications

# Author
Alamin Biswas Plabon
Email: alaminbiswasplabon98@gmail.com





