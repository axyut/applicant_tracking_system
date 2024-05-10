## client/applicant ui

### Before Submission (Management: external || in-house):

-   \*Company Name
-   Company Logo
-   \*Job Title
-   \*Job Description
-   \*Job Requirements (Skills, Experience, Education, Certifications, Licenses, Age, etc.)
-   \*Job Roles & Responsibilities
-   \*Job Location
-   \*Job Type (Intern, Full-Time, Part-Time, Contract)
-   \*Job Salary Range
-   \*Job Benefits
-   \*Expected Job Start Date
-   Expected Job End Date
-   Number of Openings
-   Expected Rounds (Resume Selection, Project Test, Technical Interview, HR Interview, etc.)
-   \*Job Application Deadline
-   \*Agreement & Privacy Policy(Terms & Conditions)

### During Submission (Management: external || in-house):

-   \*name
-   \*email
-   phone
-   \*resume
-   other documents (certificate, cover letter)
-   \*Current Job Status (Student, Employed, Unemployed)
-   \*Position Applied For (Intern, Full-Time, Part-Time)
-   \*Role Applied For (Job Title)
-   Expected Salary
-   \*Proficiency in Selected Position's Required Skills (Beginner, Intermediate, Expert)
-   Experience (1, 1-3, 3-5, 5+)
-   Availability (Start Date)
-   Available Hours (Full-Time, Part-Time)
-   Available Locations (Remote, On-Site)
-   Message to the Employer (Questions, Comments, Concerns)
-   How did you hear about us?
-   \*Captcha
-   \*Submit Application

## admin ui

### After submission (\*in-house only):

-   Token Provided (do not share)
-   Redirect /application/:id
-   Applicant Status (Submitted, In-Review, Rejected, Hired)
-   Application Round Status (Resume Selection, Project Test, Technical Interview, HR Interview, etc.)
-   Applied Date
-   Applicant Name, Email, Phone

### Management (Admin Panel):

-   Home:

    -   Todays Priority (based on User Role):
        -   Resume Selection, Project Test, Technical Interview, HR Interview, etc.
        -   Remaining Applications
        -   Daily (Online, Offline, Timezone, working hours/days):
        -   Current Project, Test, Team, Goal
        -   Todays Assigned Tasks
        -   Latest Update:
        -   Message to HR, PM (Chat)
        -   Attendance (Check-In, Check-Out)
    -   GoTo (based on User Role):
        -   New, In-Review, Rejected, Hired applicants

-   Profile

    -   Contribution (Total Numbers):
        -   HR (Alltime, Select Batch):
            -   Applications, Job Postings, Hires, Rejections
            -   Active, Inactive, Expired Job Postings
        -   PM (Alltime, Select Batch):
            -   Projects, Tests, Teams, Goals
        -   Employee (Alltime, Select Batch):
            -   Tasks (All, Completed, Assigned)
            -   Attendance, Level (Normie, Pro, Elite)
    -   Payment
        -   Total Salary, Bonus, Deductions
        -   Payment Status, Next Payment Date
    -   Appeals
        -   Request/History for Salary Increase, Leave, Bonus, Overtime
    -   Settings (HR || PM || Employee)
        -   View/Change Email, Password, Phone, Name, Profile-Picture
        -   View Employee Payment Status
        -   View/Change Payment Method/Plan, Bank Details
        -   View Payment History/Transactions/Invoices/Receipts
        -   Company
            -   View (Name, Logo, Address, Phone, Email, Website, Description, Social Media Links)
            -   View/Change Privacy Policy, Terms & Conditions, Agreement (Multiple uploads)

-   Applications Management \*HR (All time, Select Batch):

    -   Applications (All, New, In-Review, Rejected, Hired)
    -   Job Postings (All, Active, Inactive, Expired)
    -   Applications (Create, Edit, Delete, Assign)
    -   Job Postings (Create, Edit, Delete, Assign)

-   Project Management *HR *PM (All time, Select Batch):

    -   Project (Create, Edit, Delete, Assign)
    -   Team (Create, Edit, Delete, Assign)
    -   Goal (Create, Edit, Delete, Assign)

-   History | Timeline

    -   HR
        -   Data Analysis, Visualization
        -   of Applications (received, reviewed, rejected, hired)
        -   of Job Postings (Active, Inactive, Expired)
        -   **PM**
        -   **Employee**
    -   PM
        -   Data Analysis, Visualization
        -   of Projects, Tests, Teams, Goals (created, completed, in-progress)
        -   **Employee**
    -   Employee
        -   Data Analysis, Visualization
        -   of Attendance (checked-in, checked-out, leaves, overtime)
        -   of Rewards, Growth, Performance (level, salary, bonus, deductions)
        -   Tasks (All, Completed, Remaining) and time taken

-   Settings ( HR || PM )

    -   Company
        -   General
            -   View/Change (Name, Logo, Address, Phone, Email, Website, Description, Social Media Links)
            -   View/Change Privacy Policy, Terms & Conditions, Agreement (Multiple uploads)
        -   Payment
            -   View Company Payment Status (Paid, Unpaid)
            -   View Company Bank Amount
            -   View/Change Company Payment Method/Plan
            -   View Company Payment History/Transactions/Invoices/Receipts
            -   View Next Due Date
            -   Change Next Payment Date
            -   Automatic Payment (On/Off)
    -   Batch Management
        -   View, Create, Edit, Delete Batch
        -   Select Current Batch
    -   Roles Management:
        -   HR || Leads (Top-Level Admin Permissions)
        -   PM (Admin Permissions)
        -   Employee (Employee Permissions)
    -   Permissions Management:
        -   Top-Level Admin Permissions:
            -   **Admin Permissions**
            -   **Employee Permissions**
            -   Hire, Reject Applications
            -   Delete Applications, Job Postings (All)
            -   Edit Company Payment Method, Plan, Status
            -   **All Permissions**
        -   Admin Permissions:
            -   **Employee Permissions**
            -   Change Application Status
            -   Edit/Delete Job Postings (\*Self-created)
            -   View/Edit Company Profile
            -   View Company Payment History, Method, Plan
        -   Employee Permissions
            -   View, Review Applications
            -   View/Create Job Postings
            -   View Employee Payment Status

`lekhdai jada company kai blue print banexa, for ats -> HR Role, for managers -> PM Role, for employees -> workflow stuffs`
if all implemented, then it will be a complete workflow management system for a company.

## api

`Client/Applicant UI Endpoints:`

1. **Job Submission:**
    - `POST /api/jobs/submit`: Submit a job application.
2. **Captcha Verification:**
    - `POST /api/captcha/verify`: Verify the captcha.

`Admin UI Endpoints:`

1. **View Applications:**
    - `GET /api/admin/applications`: Get all applications.
    - `GET /api/admin/applications/:id`: Get details of a specific application.
2. **Manage Applications:**

    - `PUT /api/admin/applications/:id/status`: Update application status (e.g., In-Review, Rejected, Hired).

3. **Manage Job Postings:**

    - `GET /api/admin/job-postings`: Get all job postings.
    - `POST /api/admin/job-postings`: Create a new job posting.
    - `PUT /api/admin/job-postings/:id`: Update an existing job posting.
    - `DELETE /api/admin/job-postings/:id`: Delete a job posting.

4. **Manage Profiles:**

    - `GET /api/admin/profiles/:id`: Get admin profile details.
    - `PUT /api/admin/profiles/:id`: Update admin profile.

5. **Manage Payments:**

    - `GET /api/admin/payments`: Get payment details.
    - `POST /api/admin/payments`: Make a payment.
    - `PUT /api/admin/payments/:id`: Update payment details.
    - `DELETE /api/admin/payments/:id`: Cancel a payment.

6. **Manage Projects:**

    - `GET /api/admin/projects`: Get all projects.
    - `POST /api/admin/projects`: Create a new project.
    - `PUT /api/admin/projects/:id`: Update an existing project.
    - `DELETE /api/admin/projects/:id`: Delete a project.

7. **Manage Teams:**

    - `GET /api/admin/teams`: Get all teams.
    - `POST /api/admin/teams`: Create a new team.
    - `PUT /api/admin/teams/:id`: Update an existing team.
    - `DELETE /api/admin/teams/:id`: Delete a team.

8. **Manage Goals:**

    - `GET /api/admin/goals`: Get all goals.
    - `POST /api/admin/goals`: Create a new goal.
    - `PUT /api/admin/goals/:id`: Update an existing goal.
    - `DELETE /api/admin/goals/:id`: Delete a goal.

9. **View History/Timeline:**

    - `GET /api/admin/history/applications`: Get application history.
    - `GET /api/admin/history/projects`: Get project history.
    - `GET /api/admin/history/employees`: Get employee history.

10. **Settings:**
    - `GET /api/admin/settings`: Get admin settings.
    - `PUT /api/admin/settings`: Update admin settings.

`Authentication Endpoints:`

1. **Authentication:**

    - `POST /api/auth/login`: Login.
    - `POST /api/auth/logout`: Logout.

2. **Registration:**
    - `POST /api/auth/register`: Register a new user.

`Batch Management Endpoints:`

1. **Manage Batches:**
    - `GET /api/admin/batches`: Get all batches.
    - `POST /api/admin/batches`: Create a new batch.
    - `PUT /api/admin/batches/:id`: Update an existing batch.
    - `DELETE /api/admin/batches/:id`: Delete a batch.
    - `PUT /api/admin/batches/:id/current`: Set a batch as the current batch.

`Permissions Management Endpoints:`

1. **Manage Roles:**

    - `GET /api/admin/roles`: Get all roles.
    - `POST /api/admin/roles`: Create a new role.
    - `PUT /api/admin/roles/:id`: Update an existing role.
    - `DELETE /api/admin/roles/:id`: Delete a role.

2. **Assign Permissions to Roles:**

    - `PUT /api/admin/roles/:roleId/permissions`: Assign permissions to a role.
    - `DELETE /api/admin/roles/:roleId/permissions/:permissionId`: Remove a permission from a role.

3. **Manage Permissions:**
    - `GET /api/admin/permissions`: Get all permissions.
    - `POST /api/admin/permissions`: Create a new permission.
    - `PUT /api/admin/permissions/:id`: Update an existing permission.
    - `DELETE /api/admin/permissions/:id`: Delete a permission.

` generated by chatgpt based on the above admin ui plan input`

## idea

### business idea?

    ability to post,check,remove opened job to different job portals when external promotion costs premium

    ability to review applications from different job portals if external promotion(costs premium) selected

    ability to review Resume, Cover Letter, Certificates, etc. with AI(costs premium) and provide a score, uniqueness, must-read, etc.

    before submission inhouse management costs premium
