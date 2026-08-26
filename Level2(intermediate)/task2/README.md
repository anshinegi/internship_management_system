# Level 2 - Task 2
## Authentication and Authorization System

### Objective

Develop an authentication and authorization system using Node.js, Express.js, MongoDB, bcrypt, JWT, and HTTP-only cookies.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- Cookie Parser
- dotenv
- Git and GitHub

### Features Implemented

#### User Registration

- Users can create an account using name, email, and password.
- Duplicate email addresses are checked before registration.
- Passwords are hashed using bcrypt before being stored in MongoDB.
- Users can have either `user` or `admin` roles.

#### User Login

- Users can log in using their email and password.
- Passwords are verified using bcrypt.
- A JWT is generated after successful authentication.
- The JWT is stored in an HTTP-only cookie.

#### Authentication Middleware

- Protected routes require a valid JWT.
- The JWT is verified before allowing access.
- Unauthorized users receive an authentication error.

#### Protected Profile Route

Endpoint:

`GET /api/auth/profile`

Only authenticated users can access this route.

#### Role-Based Authorization

An authorization middleware was implemented to restrict routes based on user roles.

Admin-only endpoint:

`GET /api/auth/admin`

Only users with the `admin` role can access this endpoint.

### Testing Performed

The following functionality was tested successfully:

- User registration
- Password hashing using bcrypt
- User login
- JWT generation
- HTTP-only authentication cookie
- Protected profile route
- Rejection of unauthenticated requests
- Rejection of normal users from admin-only routes
- Successful access to admin-only routes by admin users

### Test Results

#### Normal User

A normal user was successfully prevented from accessing the admin route.

Result:

`Access denied. You do not have permission to access this resource.`

#### Admin User

An admin user successfully accessed the admin-only route.

Result:

`Welcome Admin! You have access to this protected resource.`

### Status

Completed