#  Appointment Booking HealthCare App

A full-stack web application to book doctor appointments efficiently with a clean UI and responsive design. Built with Node.js, Express, SQLite, React, and Tailwind CSS.

---

##  Features

- Book appointments with doctors
- Real-time validation to prevent past time bookings
- Search and filter doctors by name or specialization
- Mobile-responsive UI with Tailwind CSS
- Modal-based form to book appointments
- Health tips section
- Deployment-ready with Vercel

---

##  Tech Stack

### Backend:
- **Node.js**
- **Express.js**
- **SQLite** (for data storage)

### Frontend:
- **React.js**
- **JavaScript**
- **Tailwind CSS** (for responsiveness, modal, and styling)

---

##  Project Structure

 frontend
 src
└── 📁 Components
├── 📁 AppointmentForm
│ └── index.jsx
├── 📁 Data
│ └── index.jsx
├── 📁 DoctorCard
│ └── index.jsx
├── 📁 DoctorDetail
│ └── index.jsx
├── 📁 DoctorList
│ └── index.jsx
├── 📁 Header
│ └── index.jsx
└── 📁 AppointmentContext
└── App.jsx


---

##  Backend API

- `GET /doctors` – fetch all doctors
- `GET /doctors/:id` – get doctor by ID
- `POST /doctors` - Post doctor details using postman
- `POST /appointment` – create an appointment

SQLite Tables:
- **doctors**
- **appointments**

---

##  Frontend Overview

- Fetches and displays doctor data using `useEffect`
- Shows top searched specialists on homepage
- Doctors displayed via reusable `DoctorCard` components
- Search filter allows filtering doctors by name/specialization
- Book Appointment button opens modal with a form (name, email, time, date)
- Handles duplicate appointment timing
- Validates input; disables already booked slots
- Health tips section added
- Clean layout with proper footer

---

##  Improvements & Challenges

- Implemented DRY principle using reusable components
- Avoided prop drilling via Context API
- Implemented skeleton loaders instead of plain loaders
- Cleaned static data using components
- Faced challenge while designing loading experience

---

##  Run Locally

To run the **backend**:
```
cd backend
node index.js
To run the frontend:
cd frontend
cd my-app
npm run dev
 Deployment
The project is deployed on Vercel.

GitHub Repo: https://github.com/jakkulanissy10/Appointment-booking-healthcare

 Notes
Used new Date() to track real-time and prevent past appointment dates

Used React Router DOM for navigation between doctor list and appointment booking

 Future Enhancements
Add authentication system

Improve UI with more elegant design

Dark/Light mode

Notification or mail sender integration for confirmation

Acknowledgments
Inspired by Apollo 24x7 UI and real-world healthcare booking systems.
