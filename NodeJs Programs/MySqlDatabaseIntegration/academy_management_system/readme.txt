	ACADEMY MANAGEMENT SYSTEM 
	Design and implement an Academy Management System using:
		• Express
		• Sequelize ORM
		• MySQL/Mongo DB
		• EJS templates
		• Authentication
		• Role-Based Access Control (RBAC)
	
	 USER STORY 1 – Authentication System
	As an admin or instructor,
	I want to log in to the system,
	So that only authorized users can access protected routes.
	Requirements:
		• Create User model (username, password, role)
		• Implement login route
		• Use session-based authentication
		• Only logged-in users can access dashboard
	
	 USER STORY 2 – Role-Based Access Control
	As an admin,
	I want to manage instructors and courses.
	As an instructor,
	I should only view my courses.
	Requirements:
		• Roles: admin, instructor
		• Admin can:
			○ Create instructor
			○ Create course
			○ View all reports
		• Instructor can:
			○ View only assigned courses
	
	 USER STORY 3 – Relationship Management
	Implement:
		1. One-to-One → Student ↔ Profile
		2. One-to-Many → Instructor → Courses
		3. Many-to-Many → Student ↔ Courses
	
    USER STORY 4 – Transactions
	When:
		• Creating Student + Profile
		• Enrolling student into course
	System must:
		• Use Sequelize transaction
		• Rollback if failure
	
	 USER STORY 5 – Pagination
	When viewing:
		• Students
		• Courses
		• Enrollments
	System must:
		• Show 5 records per page
		• Support page query param
	Example:
	
	/students?page=2
	
	 USER STORY 6 – Reporting Queries
	Create reports:
		1. Total students per course
		2. Total revenue per instructor
		3. Most popular course
	These must use Sequelize aggregate queries.
	
	 USER STORY 7 – EJS Forms
	Create forms for:
		• Create Instructor
		• Create Student
		• Enroll Student
		• Login
