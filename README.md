# Issue Tracker Backend

## Project Description

The Issue Tracker Backend is a robust and scalable REST API built with Node.js and Express.js, designed to manage issue tracking and workflow management. This backend application provides comprehensive functionality for creating, retrieving, updating, and managing issues with full user relationship mapping through MongoDB.

### Key Features

- **Issue Management**: Create, read, update, and manage issues with detailed metadata
- **User Association**: Track issue creation and assignment with complete user information
- **Data Persistence**: MongoDB integration for reliable data storage
- **RESTful API**: Clean and intuitive REST endpoints for seamless client integration
- **Security**: Password hashing with bcryptjs and JWT authentication support
- **Validation**: Input validation using Joi for data integrity
- **Development Tools**: Nodemon for hot-reloading during development

### Technology Stack

- **Runtime**: Node.js (ES6 Modules)
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs
- **Validation**: Joi
- **Development**: Nodemon

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local or Atlas cloud instance)
- **Git**

---

### Clone the Repository

#### For Linux/macOS:

```bash
# Clone the repository
git clone  https://github.com/moslemajra85/IssueTRacker.git

# Navigate to the project directory
cd IssueTRacker
```

#### For Windows (PowerShell):

```powershell
# Clone the repository
git clone  https://github.com/moslemajra85/IssueTRacker.git

# Navigate to the project directory
cd IssueTRacker
```

---

### Install Dependencies

#### For Linux/macOS:

```bash
# Install all required packages
npm install
```

#### For Windows (PowerShell):

```powershell
# Install all required packages
npm install
```

---

### Configure Environment Variables

Create a `.env` file in the root directory and configure the following:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/issuetracker
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/issuetracker

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (for authentication)
JWT_SECRET=your_jwt_secret_key_here
```

---

### Import Sample Data

The project includes a seeder script to populate the database with sample data.

#### For Linux/macOS:

```bash
# Import sample data
npm run data:import
```

#### For Windows (PowerShell):

```powershell
# Import sample data
npm run data:import
```

To destroy sample data:

```bash
npm run data:destroy
```

---

## Running the Application

### Development Mode (with Hot-Reload)

#### For Linux/macOS:

```bash
npm run dev
```

#### For Windows (PowerShell):

```powershell
npm run dev
```

The server will start on `http://localhost:5000` and automatically restart when you make changes to the code.

### Production Mode

#### For Linux/macOS:

```bash
npm start
```

#### For Windows (PowerShell):

```powershell
npm start
```

---

## API Endpoints

### Get All Issues

```
GET /api/issues
```

Returns all issues with populated user data (createdBy field).

### Get Issue by ID

```
GET /api/issues/:id
```

Returns a specific issue by its ID.

### Create Issue

```
POST /api/issues
```

Creates a new issue. Request body should include:

```json
{
  "title": "Issue Title",
  "description": "Issue Description",
  "status": "open",
  "createdBy": "user_id"
}
```

### Update Issue

```
PUT /api/issues/:id
```

Updates an existing issue by ID.

---

## Project Structure

```
IssueTRacker/
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   └── issueController.js # Issue business logic
├── models/
│   ├── issue.js           # Issue schema definition
│   └── user.js            # User schema definition
├── routes/
│   └── issueRoutes.js     # Issue API routes
├── middlewares/           # Express middleware (authentication, validation)
├── utils/                 # Utility functions
├── _data/
│   ├── issues.json        # Sample issues data
│   └── users.json         # Sample users data
├── server.js              # Express server entry point
├── seeder.js              # Database seeder script
├── package.json           # Project dependencies
└── README.md              # This file
```

---

## Available Scripts

```bash
# Start the production server
npm start

# Start development server with hot-reload
npm run dev

# Import sample data to MongoDB
npm run data:import

# Destroy sample data from MongoDB
npm run data:destroy
```

---

## Troubleshooting

### Port Already in Use

If port 5000 is already in use, modify the `PORT` variable in your `.env` file.

### MongoDB Connection Error

- Ensure MongoDB is running on your machine
- Verify the connection string in `.env` is correct
- For MongoDB Atlas, ensure your IP is whitelisted

### Module Not Found Error

Run `npm install` to ensure all dependencies are installed.

---

## Development Notes

- The application uses ES6 module syntax (`import`/`export`)
- Nodemon watches for file changes in development mode
- All API responses follow a consistent JSON format
- Error handling is centralized in the controllers

---

## License

ISC

---

## Contributing

For bug reports or feature requests, please open an issue in the repository.

---

**Happy Coding!** 🚀
