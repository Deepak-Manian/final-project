# 🏥 MediCare+ — Hospital Appointment System
### Final Project | Database Front End Developer and Tester

---

## 📌 Project Overview
MediCare+ is a full-stack web-based Hospital Appointment Management System built using:
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** PHP
- **Database:** MySQL

It supports **3 user roles**: Patient, Doctor, and Admin — each with their own login and dashboard.

---

## 🗂️ Folder Structure
```
hospital/
├── index.html              ← Landing page
├── style.css               ← Shared stylesheet
├── db.php                  ← Database connection
├── sql/
│   └── hospital.sql        ← Database schema + sample data
├── patient/
│   ├── register.php        ← Patient registration
│   ├── login.php           ← Patient login
│   ├── dashboard.php       ← Patient dashboard
│   ├── book.php            ← Book an appointment
│   ├── appointments.php    ← View all appointments
│   ├── cancel.php          ← Cancel appointment
│   └── logout.php
├── doctor/
│   ├── login.php           ← Doctor login
│   ├── dashboard.php       ← Today's schedule + stats
│   ├── schedule.php        ← Full appointment schedule
│   └── logout.php
└── admin/
    ├── login.php           ← Admin login
    ├── dashboard.php       ← Overview + recent appointments
    ├── appointments.php    ← Approve / Reject appointments
    ├── doctors.php         ← Add / Remove doctors
    ├── patients.php        ← View all patients
    ├── action.php          ← Approve/Reject handler
    └── logout.php
```

---

## ⚙️ Setup Instructions

### Step 1 — Requirements
- XAMPP (or WAMP/LAMP) installed
- PHP 7.4+
- MySQL 5.7+

### Step 2 — Copy Project
Copy the `hospital/` folder into:
```
C:/xampp/htdocs/hospital/
```

### Step 3 — Create Database
1. Open your browser → go to `http://localhost/phpmyadmin`
2. Click **New** → create database named `hospital_db`
3. Click on `hospital_db` → go to **Import** tab
4. Choose file: `hospital/sql/hospital.sql` → click **Go**

### Step 4 — Configure Database (if needed)
Open `db.php` and update:
```php
define('DB_USER', 'root');   // your MySQL username
define('DB_PASS', '');       // your MySQL password (blank for XAMPP default)
```

### Step 5 — Run the Project
Open browser → go to:
```
http://localhost/hospital/
```

---

## 🔐 Default Login Credentials

### Admin
| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `password` |

### Sample Doctors (all use same password)
| Name | Email | Password |
|------|-------|----------|
| Dr. Arun Kumar | arun@hospital.com | `password` |
| Dr. Priya Sharma | priya@hospital.com | `password` |
| Dr. Ramesh Babu | ramesh@hospital.com | `password` |
| Dr. Meena Devi | meena@hospital.com | `password` |

### Patient
Register a new account at: `http://localhost/hospital/patient/register.php`

---

## ✨ Features

### Patient
- ✅ Register & Login
- ✅ Browse doctors by specialization
- ✅ Book appointment (date + time + reason)
- ✅ View all appointments with live status
- ✅ Cancel pending appointments

### Doctor
- ✅ Login securely
- ✅ View today's approved appointments
- ✅ View full schedule with status filter
- ✅ See patient details (name, phone, reason)

### Admin
- ✅ Login with username & password
- ✅ Dashboard with system-wide statistics
- ✅ Approve or Reject pending appointments
- ✅ Add new doctors to the system
- ✅ Remove doctors
- ✅ View all registered patients

---

## 🗄️ Database Tables

| Table | Description |
|-------|-------------|
| `admin` | Admin login credentials |
| `doctors` | Doctor profiles and login |
| `patients` | Patient profiles and login |
| `appointments` | All bookings with status |

### Relationships
- `appointments.patient_id` → `patients.id`
- `appointments.doctor_id` → `doctors.id`

---

## 🖥️ Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | CSS3 (custom, no frameworks) |
| Interactivity | Vanilla JavaScript |
| Backend | PHP (procedural) |
| Database | MySQL via MySQLi |
| Server | Apache (XAMPP) |

---

*Built as a Final Project for the IT-ITeS: Database Front End Developer and Tester course — Asgardia Foundation*
