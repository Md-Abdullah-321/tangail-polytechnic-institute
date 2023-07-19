# Institute Management System Web App :computer:

This markdown file provides an overview of the Institute Management System Web App, its features, and technologies used.

Live Link: [Institute Management System Web App](https://nice-erin-pike-fez.cyclic.app/)

## Frontend :art:

The frontend of the web app is built using React and utilizes the Tailwind CSS framework for styling. The following are the main sections of the frontend:

1. **Home Page** :house:
   - Notice Board :pushpin: Displays important announcements and notices.
   - About Section :information_source: Provides a brief overview of the institute.
   - Result Section :chart_with_upwards_trend: Allows students to view their exam results.
   - Student Info Section :mortar_board: Displays information about students, such as their name, roll number, registration number, and last CGPA.
   - Teachers Info Section :woman_teacher: Contains information about the institute's teachers.
   - Routine Section :calendar: Displays the class schedule and routine.

2. **About Us Page** :clipboard:
   - Provides a detailed overview of the institute and its mission.

3. **Department Page** :school:
   - Contains descriptions of the seven Engineering Departments offered by the institute.

4. **Gallery Page** :camera:
   - Displays a collection of images showcasing various events and activities.

5. **Contact Us Page** :telephone_receiver:
   - Provides contact details and a form for users to get in touch with the institute.

6. **Sign In & Sign Up Pages** :busts_in_silhouette:
   - Enables students to create accounts and allows admins to log in to the dashboard.

7. **Profile Page (Student)** :man_student:
   - Displays detailed information about the student, including name, roll number, registration number, and last CGPA.
   - Provides access to other pages for result searching and downloading as PDF. :mag:

## Backend :gear:

The backend of the web app is built using Node.js and Express.js, along with MongoDB as the database and Mongoose as the ODM (Object Data Mapper). The backend handles the following functionalities:

1. **Student Authentication** :closed_lock_with_key:
   - Students can sign up and log in to their accounts.

2. **Admin Authentication** :key:
   - Admins can log in to access the dashboard with special privileges.

3. **Admin Dashboard** :bar_chart:
   - Allows admins to search for students.
   - Publishes exam results.
   - Creates new teachers and admins.

4. **Student Profile Management** :clipboard:
   - Allows students to view and update their profiles.
   - Facilitates result searching and downloading as PDF.

## Additional Features :sparkles:

1. **React Animation Library** :art:
   - The web app uses a React animation library to implement smooth and beautiful transitions between pages, enhancing the user experience.

## Technologies Used :computer:

- Frontend:
  - React (JavaScript library for building user interfaces) :atom_symbol:
  - Tailwind CSS (Utility-first CSS framework) :nail_care:
  - React Animation Library (for animations) :dizzy:

- Backend:
  - Node.js (JavaScript runtime environment) :green_circle:
  - Express.js (Web application framework for Node.js) :arrows_counterclockwise:
  - MongoDB (NoSQL database) :elephant:
  - Mongoose (ODM for MongoDB) :classical_building:

## Conclusion :memo:

The Institute Management System Web App provides a user-friendly interface for students to access important information, view their results, and manage their profiles. The admin dashboard enables efficient management of student data, result publication, and user roles. The combination of modern frontend and backend technologies ensures a robust and interactive experience for all users. :rocket:

Live Link: [Institute Management System Web App](https://nice-erin-pike-fez.cyclic.app/)
