# 🐛 Issue Tracker - Complete Project Plan

> **This document explains everything about our Issue Tracker app in a super simple way!**
> **Even a 10-year-old can understand and start building!**

---

## 📚 Table of Contents

1. [What is This App?](#-what-is-this-app)
2. [Current Project Structure](#-current-project-structure)
3. [Complete Current Code](#-complete-current-code)
   - [Package.json (Dependencies)](#packagejson-dependencies)
   - [Server.js (Main Engine)](#serverjs-main-engine)
   - [Database Connection](#database-connection-configdbjs)
   - [Models (Blueprints)](#models-blueprints)
   - [Controllers (The Brain)](#controllers-the-brain)
   - [Routes (The Roads)](#routes-the-roads)
   - [Middleware (Security Guards)](#middleware-security-guards)
   - [Validation (Data Checking)](#validation-data-checking)
   - [Seeder (Sample Data)](#seeder-sample-data)
4. [Pseudocode Explanations](#-pseudocode-explanations)
5. [How the Backend Works](#-how-the-backend-works)
6. [How the Frontend Works](#-how-the-frontend-works)
7. [Database Models Explained](#-database-models-explained)
8. [API Endpoints (Routes)](#-api-endpoints-routes)
9. [🧪 Postman Testing Guide](#-postman-testing-guide)
   - [Setting Up Postman](#setting-up-postman)
   - [Environment Variables](#environment-variables)
   - [Testing Authentication](#testing-authentication)
   - [Testing Issues API](#testing-issues-api)
   - [Testing Teams API](#testing-teams-api)
   - [Complete Request Collection](#complete-request-collection)
10. [How Things Connect (Sequence Diagrams)](#-how-things-connect-sequence-diagrams)
11. [What We Have vs What We Need](#-what-we-have-vs-what-we-need)
12. [Future Features to Build](#-future-features-to-build)
    - [Phase 1: Core Features](#phase-1-core-features-do-first)
    - [Phase 1.6: Admin Middleware (RBAC)](#16-add-admin-middleware-role-based-access-control)
    - [Phase 2: Frontend Pages](#phase-2-frontend-pages)
    - [Phase 3: Nice-to-Have Features](#phase-3-nice-to-have-features)
13. [Step-by-Step Implementation Guide](#-step-by-step-implementation-guide)

---

## 🤔 What is This App?

Think of this app like a **to-do list for bugs and problems** in software!

**Imagine you're building a LEGO castle and you find problems:**

- 🧱 "The door doesn't fit!"
- 🏰 "The tower is crooked!"
- 👑 "We need a flag on top!"

This app helps you:

1. **Write down** each problem (issue)
2. **Assign** someone to fix it
3. **Track** if it's fixed or not
4. **Work together** as a team

---

## 📁 Current Project Structure

```
IssueTRacker/                    👈 Main folder (our LEGO box)
│
├── 📦 package.json              👈 List of tools we need
├── 🚀 server.js                 👈 Starts our app (the engine)
├── 🌱 seeder.js                 👈 Adds sample data
│
├── 📂 config/                   👈 Settings folder
│   └── db.js                    👈 Connects to database
│
├── 📂 models/                   👈 Blueprints for our data
│   ├── user.js                  👈 What a USER looks like
│   ├── issue.js                 👈 What an ISSUE looks like
│   └── team.js                  👈 What a TEAM looks like
│
├── 📂 controllers/              👈 The BRAIN - does the work
│   ├── authController.js        👈 Handles login/register
│   ├── issueController.js       👈 Handles issues
│   └── teamController.js        👈 Handles teams
│
├── 📂 routes/                   👈 The ROADS - where to go
│   ├── authRoutes.js            👈 Login/register roads
│   ├── issueRoutes.js           👈 Issue roads
│   └── teamRoutes.js            👈 Team roads
│
├── 📂 middlewares/              👈 Security guards
│   └── auth.js                  👈 Checks if you're allowed
│
├── 📂 utils/                    👈 Helper tools
│   └── validate.js              👈 Checks if data is correct
│
├── 📂 _data/                    👈 Sample data
│   ├── issues.json              👈 Sample issues
│   ├── users.json               👈 Sample users
│   └── teams.json               👈 Sample teams
│
└── 📂 frontend/                 👈 What users SEE
    ├── package.json             👈 Frontend tools
    └── src/
        ├── App.jsx              👈 Main page
        ├── main.jsx             👈 Starts React
        └── components/          👈 Reusable pieces
            ├── Hero.jsx         👈 Welcome section
            ├── Features.jsx     👈 Features section
            ├── Navigation.jsx   👈 Menu bar
            ├── HowItWorks.jsx   👈 Explains how it works
            ├── CTA.jsx          👈 Call to action
            └── Footer.jsx       👈 Bottom of page
```

---

## 💻 Complete Current Code

> **This section contains ALL the actual code currently in your project!**
> **Read through each file to understand what's already built.**

---

### package.json (Dependencies)

**What is it?** A list of all the tools (packages) our app needs to work.

```json
{
  "name": "issuetracker",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "data:import": "node seeder.js -i",
    "data:destroy": "node seeder.js -d"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "colors": "^1.4.0",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^8.21.1",
    "nodemon": "^3.1.11"
  }
}
```

**What Each Package Does (for a 10-year-old):**

| Package        | What It Does                                                       |
| -------------- | ------------------------------------------------------------------ |
| `bcryptjs`     | 🔒 Scrambles passwords so hackers can't read them                  |
| `colors`       | 🎨 Makes terminal messages colorful (green = good, red = bad)      |
| `dotenv`       | 📝 Reads secret settings from a `.env` file                        |
| `express`      | 🚀 The main web server framework (like the engine of a car)        |
| `joi`          | ✅ Checks if data is correct (like checking homework for mistakes) |
| `jsonwebtoken` | 🎫 Creates VIP passes (tokens) for logged-in users                 |
| `mongoose`     | 🗄️ Talks to MongoDB database (stores our data)                     |
| `nodemon`      | 🔄 Auto-restarts server when you change code                       |

---

### server.js (Main Engine)

**What is it?** The starting point of our app - like turning the key to start a car!

```javascript
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import issueRoutes from "./routes/issueRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/issues", issueRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/teams", teamRoutes);

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

**Pseudocode (Simple Steps):**

```
1. LOAD secret settings from .env file
2. CREATE a new Express server called "app"
3. TELL app to understand JSON data
4. SET UP ROADS:
   - /api/issues → goes to issue routes
   - /api/auth → goes to authentication routes
   - /api/teams → goes to team routes
5. CONNECT to MongoDB database
6. START listening on port 3000
7. PRINT "Server is running" message
```

---

### Database Connection (config/db.js)

**What is it?** Connects our app to MongoDB (where we store data).

```javascript
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully Connected to MONGODB...".bgBlue.white.bold);
  } catch (error) {
    connectDB("We could not connect to MONGODB".bgRed.white.bold);
  }
};

export default connectDB;
```

**Pseudocode:**

```
FUNCTION connectDB:
   TRY:
      CONNECT to MongoDB using the secret MONGO_URI
      PRINT "Successfully Connected!" (in blue)
   IF ERROR:
      PRINT "Could not connect!" (in red)
```

---

### Models (Blueprints)

#### User Model (models/user.js)

**What is it?** The blueprint for storing user information.

```javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
```

**Pseudocode:**

```
USER has these fields:
   - name: TEXT (must have it)
   - email: TEXT (must have it)
   - password: TEXT (at least 6 characters, must have it)
   - createdAt: DATE (added automatically)
   - updatedAt: DATE (added automatically)
```

---

#### Issue Model (models/issue.js)

**What is it?** The blueprint for storing bug/issue information.

```javascript
import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 30,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "open",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
```

**Pseudocode:**

```
ISSUE has these fields:
   - title: TEXT (3-30 characters, must have it)
   - description: TEXT (must have it)
   - status: TEXT (starts as "open")
   - createdBy: LINK to a User (must have it)
   - createdAt: DATE (added automatically)
   - updatedAt: DATE (added automatically)
```

---

#### Team Model (models/team.js)

**What is it?** The blueprint for storing team information.

```javascript
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

const Team = mongoose.model("Team", teamSchema);

export default Team;
```

**Pseudocode:**

```
TEAM has these fields:
   - name: TEXT (must have it)
   - description: TEXT (must have it)
   - members: LIST of links to Users
   - createdAt: DATE (added automatically)
   - updatedAt: DATE (added automatically)
```

---

### Controllers (The Brain)

#### Auth Controller (controllers/authController.js)

**What is it?** Handles user registration and login.

```javascript
import { validateUser } from "../utils/validate.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  // validate the request data

  const { error, value } = validateUser(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  // check if the email already exists

  const existingUser = await User.findOne({ email: value.email });

  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  // encrypt the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(value.password, salt);

  // create the user
  const user = new User({
    ...value,
    password: hashedPassword,
  });

  await user.save();

  res.status(201).json({ message: "User created successfully" });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // generate jwt token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

**Pseudocode - Register:**

```
FUNCTION register(request, response):
   1. CHECK if the data (name, email, password) is valid
      IF not valid → SEND ERROR "Bad data"

   2. CHECK if email already exists in database
      IF exists → SEND ERROR "Email already exists"

   3. SCRAMBLE the password (so hackers can't read it)
      - Generate a "salt" (random extra security)
      - Hash the password with the salt

   4. CREATE new user in database with:
      - name from request
      - email from request
      - scrambled password

   5. SAVE to database

   6. SEND SUCCESS "User created successfully"
```

**Pseudocode - Login:**

```
FUNCTION login(request, response):
   TRY:
      1. GET email and password from request

      2. FIND user with that email in database
         IF not found → SEND ERROR "Invalid credentials"

      3. COMPARE password with scrambled password in database
         IF doesn't match → SEND ERROR "Invalid credentials"

      4. CREATE a VIP pass (JWT token) containing:
         - userId
         - email
         - expires in 1 hour

      5. SEND the token back

   IF ERROR:
      SEND ERROR with message
```

---

#### Issue Controller (controllers/issueController.js)

**What is it?** Handles all issue operations (create, read, update).

```javascript
import Issue from "../models/issue.js";
import validateIssue from "../utils/validate.js";

export const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find().populate("createdBy", "name email");
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIssueById = async (req, res) => {
  try {
    const { id } = req.params;

    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIssue = async (req, res) => {
  try {
    // extract the data
    const { error, value } = validateIssue(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // create

    const issue = new Issue(value);
    await issue.save();

    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateIssue = async (req, res) => {
  try {
    const { id } = req.params;

    const issue = await Issue.findByIdAndUpdate(id, req.body, { new: true });

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const searchIssues = async (req, res) => {
  // TODO: Implement search functionality
};
```

**Pseudocode - getAllIssues:**

```
FUNCTION getAllIssues:
   TRY:
      1. FIND all issues in database
      2. INCLUDE the creator's name and email (populate)
      3. SEND the list of issues
   IF ERROR:
      SEND ERROR message
```

**Pseudocode - getIssueById:**

```
FUNCTION getIssueById:
   TRY:
      1. GET the id from the URL (/api/issues/:id)
      2. FIND the issue with that id
      3. IF not found → SEND ERROR "Issue not found"
      4. SEND the issue
   IF ERROR:
      SEND ERROR message
```

**Pseudocode - createIssue:**

```
FUNCTION createIssue:
   TRY:
      1. CHECK if the data (title, description, createdBy) is valid
         IF not valid → SEND ERROR
      2. CREATE new issue with the data
      3. SAVE to database
      4. SEND the new issue
   IF ERROR:
      SEND ERROR message
```

**Pseudocode - updateIssue:**

```
FUNCTION updateIssue:
   TRY:
      1. GET the id from the URL
      2. FIND the issue and UPDATE it with new data
         - {new: true} means "give me the updated version"
      3. IF not found → SEND ERROR "Issue not found"
      4. SEND the updated issue
   IF ERROR:
      SEND ERROR message
```

---

#### Team Controller (controllers/teamController.js)

**What is it?** Handles team operations.

```javascript
import Team from "../models/team.js";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("members", "name email");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;

    const team = await Team.findById(id);

    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTeam = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

**Pseudocode:**

```
FUNCTION getAllTeams:
   FIND all teams
   INCLUDE member names and emails
   SEND the list

FUNCTION getTeamById:
   GET id from URL
   FIND team with that id
   IF not found → SEND ERROR
   SEND the team

FUNCTION createTeam:
   CREATE new team with request data
   SAVE to database
   SEND the new team
```

---

### Routes (The Roads)

#### Auth Routes (routes/authRoutes.js)

```javascript
import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
```

**Road Map:**

```
POST /api/auth/register → register() → Creates new user
POST /api/auth/login    → login()    → Returns JWT token
```

---

#### Issue Routes (routes/issueRoutes.js)

```javascript
import express from "express";
import {
  getAllIssues,
  createIssue,
  getIssueById,
  updateIssue,
} from "../controllers/issueController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllIssues);
router.get("/:id", getIssueById);
router.post("/", verifyToken, createIssue);
router.put("/:id", verifyToken, updateIssue);

export default router;
```

**Road Map:**

```
GET  /api/issues      → getAllIssues() → Anyone can see all issues
GET  /api/issues/:id  → getIssueById() → Anyone can see one issue
POST /api/issues      → 🔐 + createIssue() → Must login to create
PUT  /api/issues/:id  → 🔐 + updateIssue() → Must login to update
```

---

#### Team Routes (routes/teamRoutes.js)

```javascript
import express from "express";
import {
  getAllTeams,
  getTeamById,
  createTeam,
} from "../controllers/teamController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", verifyToken, getAllTeams);
router.get("/:id", verifyToken, getTeamById);
router.post("/", verifyToken, createTeam);

export default router;
```

**Road Map:**

```
GET  /api/teams      → 🔐 + getAllTeams() → Must login to see teams
GET  /api/teams/:id  → 🔐 + getTeamById() → Must login to see one team
POST /api/teams      → 🔐 + createTeam()  → Must login to create team
```

---

### Middleware (Security Guards)

#### Auth Middleware (middlewares/auth.js)

```javascript
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    // extract the token from request header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // verify the token
    const encoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = encoded;

    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
```

**Pseudocode:**

```
FUNCTION verifyToken (Security Guard):
   TRY:
      1. GET the token from the "Authorization" header
         - Header looks like: "Bearer eyJhbGciOiJIUzI..."
         - Remove "Bearer " to get just the token

      2. IF no token:
         SEND ERROR "Unauthorized" (401)
         STOP HERE

      3. VERIFY the token is valid using secret key
         - This decodes the userId and email from the token

      4. ATTACH the decoded user info to the request
         - Now other functions can see who is making the request

      5. CALL next() to continue to the actual function

   IF ERROR:
      SEND ERROR message
```

**Visual Explanation:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    🚔 SECURITY CHECKPOINT                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   REQUEST: "I want to create an issue!"                         │
│   Header: Authorization: Bearer eyJhbGci...                     │
│                                                                 │
│                         │                                       │
│                         ▼                                       │
│   ┌─────────────────────────────────────────────────┐          │
│   │  👮 "Do you have a pass?"                       │          │
│   │                                                 │          │
│   │  ✓ Extract token from header                   │          │
│   │  ✓ Check if token exists                       │          │
│   │  ✓ Verify token is valid                       │          │
│   │  ✓ Get userId from token                       │          │
│   └─────────────────────────────────────────────────┘          │
│                         │                                       │
│          ┌──────────────┴──────────────┐                       │
│          ▼                             ▼                       │
│     ❌ NO TOKEN                   ✅ VALID TOKEN               │
│     "Go away! 401"                "Welcome! Continue..."       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Validation (Data Checking)

#### Validation Utils (utils/validate.js)

```javascript
import Joi from "joi";

// create Schema

const issueSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().max(512).required(),
  createdBy: Joi.string().required(),
});

const userSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

function validateIssue(issue) {
  return issueSchema.validate(issue);
}

export function validateUser(user) {
  return userSchema.validate(user);
}

export default validateIssue;
```

**Pseudocode:**

```
ISSUE RULES:
   - title: must be text, 3-30 characters, required
   - description: must be text, max 512 characters, required
   - createdBy: must be text (user ID), required

USER RULES:
   - name: must be text, 3-20 characters, required
   - email: must be valid email format, required
   - password: must be text, at least 6 characters, required

FUNCTION validateIssue(issue):
   CHECK issue against ISSUE RULES
   RETURN { error: if any, value: cleaned data }

FUNCTION validateUser(user):
   CHECK user against USER RULES
   RETURN { error: if any, value: cleaned data }
```

---

### Seeder (Sample Data)

#### seeder.js

```javascript
import dotenv from "dotenv";
import colors from "colors";
import fs from "fs";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import connectDB from "./config/db.js";
import Issue from "./models/issue.js";
import User from "./models/user.js";
import Team from "./models/team.js";

dotenv.config();

connectDB();

const issues = JSON.parse(fs.readFileSync("./_data/issues.json", "utf-8"));
const users = JSON.parse(fs.readFileSync("./_data/users.json", "utf-8"));
const teams = JSON.parse(fs.readFileSync("./_data/teams.json", "utf-8"));

// Function to hash passwords
const hashPasswords = async (users) => {
  const saltRounds = 10;
  return Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcryptjs.hash(user.password, saltRounds);
      return {
        ...user,
        password: hashedPassword,
      };
    }),
  );
};

const importData = async () => {
  try {
    await Issue.deleteMany();
    await User.deleteMany();
    await Team.deleteMany();

    // Hash passwords before inserting users
    const hashedUsers = await hashPasswords(users);
    const createdUsers = await User.insertMany(hashedUsers);
    const adminUser = createdUsers[0]._id;

    // Create teams with members
    const teamsWithMembers = teams.map((team, index) => {
      const startIndex =
        index * Math.floor(createdUsers.length / teams.length) + 1;
      const endIndex = Math.min(
        startIndex + Math.floor(createdUsers.length / teams.length),
        createdUsers.length,
      );

      const teamMembers = createdUsers
        .slice(startIndex, endIndex)
        .map((user) => user._id);

      teamMembers.unshift(adminUser);

      return {
        ...team,
        members: teamMembers,
      };
    });

    await Team.insertMany(teamsWithMembers);

    const sampleIssues = issues.map((issue) => {
      return { ...issue, createdBy: adminUser };
    });

    await Issue.insertMany(sampleIssues);

    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Issue.deleteMany();
    await User.deleteMany();
    await Team.deleteMany();

    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  destroyData();
} else {
  console.log("Please add -i to import and -d to destroy data".yellow.bold);
  process.exit();
}
```

**Pseudocode:**

```
1. LOAD environment variables
2. CONNECT to database
3. READ sample data from JSON files (issues, users, teams)

FUNCTION importData:
   1. DELETE all existing issues, users, teams (clean slate)
   2. SCRAMBLE all user passwords
   3. INSERT all users into database
   4. GET the first user's ID (this will be the "admin")
   5. CREATE teams and assign members to each
   6. INSERT teams into database
   7. CREATE issues (all created by admin user)
   8. INSERT issues into database
   9. PRINT "Data Imported!" and exit

FUNCTION destroyData:
   1. DELETE all issues, users, teams
   2. PRINT "Data Destroyed!" and exit

IF user runs "node seeder.js -i" → importData()
IF user runs "node seeder.js -d" → destroyData()
ELSE → PRINT instructions
```

---

## 🧪 Postman Testing Guide

> **Postman is like a phone to call your API!**
> **Instead of building a website, you can test your backend directly.**

---

### Setting Up Postman

#### Step 1: Download Postman

1. Go to: https://www.postman.com/downloads/
2. Download and install for your computer
3. Open Postman and create a free account

#### Step 2: Create a New Collection

1. Click **"Collections"** on the left
2. Click **"+"** to create new collection
3. Name it **"Issue Tracker API"**

---

### Environment Variables

#### Why Use Environment Variables?

Instead of typing `http://localhost:3000` every time, we save it as a variable!

#### Step 1: Create Environment

1. Click the **⚙️ gear icon** (top right)
2. Click **"Add"** to create new environment
3. Name it **"Issue Tracker Local"**

#### Step 2: Add Variables

| Variable Name | Initial Value           | Current Value           |
| ------------- | ----------------------- | ----------------------- |
| `base_url`    | `http://localhost:3000` | `http://localhost:3000` |
| `token`       | (leave empty)           | (leave empty)           |

4. Click **"Save"**
5. Select this environment from the dropdown (top right)

---

### Testing Authentication

#### 📝 Test 1: Register a New User

**Create a new request:**

1. Right-click your collection → **"Add request"**
2. Name it: **"Register User"**

**Configure the request:**

```
Method: POST
URL: {{base_url}}/api/auth/register
```

**Headers Tab:**

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

**Body Tab:**

- Select **"raw"**
- Select **"JSON"** from dropdown

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
```

**Click "Send"**

**Expected Response (201 Created):**

```json
{
  "message": "User created successfully"
}
```

**If email already exists (400 Bad Request):**

```json
{
  "error": "Email already exists"
}
```

---

#### 🔐 Test 2: Login

**Create a new request:**

1. Name it: **"Login User"**

**Configure:**

```
Method: POST
URL: {{base_url}}/api/auth/login
```

**Headers:**

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

**Body (raw JSON):**

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

**Click "Send"**

**Expected Response (200 OK):**

```
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYyYTFiMmMzZDRlNWY2ZzciLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTAzNTcwMDAsImV4cCI6MTcxMDM2MDYwMH0.abc123..."
```

**🌟 IMPORTANT: Save the Token!**

1. Copy the token (without quotes)
2. Go to your environment
3. Paste it in the **"token"** variable
4. Save

OR use Postman Scripts (automatic):

**Tests Tab (add this script):**

```javascript
// Automatically save token after login
if (pm.response.code === 200) {
  const token = pm.response.text().replace(/"/g, "");
  pm.environment.set("token", token);
  console.log("Token saved!");
}
```

---

### Testing Issues API

#### 📋 Test 3: Get All Issues (Public)

**Create request: "Get All Issues"**

```
Method: GET
URL: {{base_url}}/api/issues
```

**No headers or body needed!**

**Click "Send"**

**Expected Response (200 OK):**

```json
[
  {
    "_id": "65f2a1b2c3d4e5f6g7h8i9j0",
    "title": "Fix login bug",
    "description": "Users cannot login with correct password",
    "status": "open",
    "createdBy": {
      "_id": "65f1a1b2c3d4e5f6g7h8i9j0",
      "name": "Admin User",
      "email": "admin@example.com"
    },
    "createdAt": "2026-02-11T10:00:00.000Z",
    "updatedAt": "2026-02-11T10:00:00.000Z"
  }
]
```

---

#### 🔍 Test 4: Get Single Issue (Public)

**Create request: "Get Issue By ID"**

```
Method: GET
URL: {{base_url}}/api/issues/:id
```

**Path Variables Tab:**

| Key | Value                    |
| --- | ------------------------ |
| id  | 65f2a1b2c3d4e5f6g7h8i9j0 |

(Replace with a real issue ID from the previous request)

**Click "Send"**

---

#### ➕ Test 5: Create Issue (Protected - Need Token!)

**Create request: "Create Issue"**

```
Method: POST
URL: {{base_url}}/api/issues
```

**Headers:**

| Key           | Value            |
| ------------- | ---------------- |
| Content-Type  | application/json |
| Authorization | Bearer {{token}} |

**Body (raw JSON):**

```json
{
  "title": "New bug found",
  "description": "The submit button doesn't work on mobile",
  "createdBy": "65f1a1b2c3d4e5f6g7h8i9j0"
}
```

(Replace `createdBy` with a real user ID)

**Click "Send"**

**Expected Response (201 Created):**

```json
{
  "_id": "65f3b2c3d4e5f6g7h8i9j0k1",
  "title": "New bug found",
  "description": "The submit button doesn't work on mobile",
  "status": "open",
  "createdBy": "65f1a1b2c3d4e5f6g7h8i9j0",
  "createdAt": "2026-02-11T11:00:00.000Z",
  "updatedAt": "2026-02-11T11:00:00.000Z"
}
```

**Without Token (401 Unauthorized):**

```json
{
  "error": "Unauthorized"
}
```

---

#### ✏️ Test 6: Update Issue (Protected)

**Create request: "Update Issue"**

```
Method: PUT
URL: {{base_url}}/api/issues/:id
```

**Path Variables:**

| Key | Value                 |
| --- | --------------------- |
| id  | (paste issue ID here) |

**Headers:**

| Key           | Value            |
| ------------- | ---------------- |
| Content-Type  | application/json |
| Authorization | Bearer {{token}} |

**Body (raw JSON):**

```json
{
  "status": "in-progress",
  "title": "Updated title"
}
```

**Click "Send"**

---

### Testing Teams API

#### 👥 Test 7: Get All Teams (Protected)

**Create request: "Get All Teams"**

```
Method: GET
URL: {{base_url}}/api/teams
```

**Headers:**

| Key           | Value            |
| ------------- | ---------------- |
| Authorization | Bearer {{token}} |

**Click "Send"**

---

#### 👥 Test 8: Create Team (Protected)

**Create request: "Create Team"**

```
Method: POST
URL: {{base_url}}/api/teams
```

**Headers:**

| Key           | Value            |
| ------------- | ---------------- |
| Content-Type  | application/json |
| Authorization | Bearer {{token}} |

**Body (raw JSON):**

```json
{
  "name": "Backend Team",
  "description": "Handles server-side development",
  "members": []
}
```

**Click "Send"**

---

### Complete Request Collection

Here's a summary of all requests to create:

```
📁 Issue Tracker API
│
├── 📂 Authentication
│   ├── POST Register User     → /api/auth/register
│   └── POST Login User        → /api/auth/login
│
├── 📂 Issues
│   ├── GET  Get All Issues    → /api/issues        (Public)
│   ├── GET  Get Issue By ID   → /api/issues/:id    (Public)
│   ├── POST Create Issue      → /api/issues        (🔐 Protected)
│   └── PUT  Update Issue      → /api/issues/:id    (🔐 Protected)
│
└── 📂 Teams
    ├── GET  Get All Teams     → /api/teams         (🔐 Protected)
    ├── GET  Get Team By ID    → /api/teams/:id     (🔐 Protected)
    └── POST Create Team       → /api/teams         (🔐 Protected)
```

---

### Testing Flow (Step by Step)

Follow this order when testing:

```
┌─────────────────────────────────────────────────────────────────┐
│                    🧪 TESTING WORKFLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STEP 1: Start your server                                      │
│  ┌─────────────────────────────────────────┐                   │
│  │  $ cd /home/moslem/Desktop/IssueTRacker │                   │
│  │  $ npm run dev                          │                   │
│  │  > Server is running on port 3000       │                   │
│  └─────────────────────────────────────────┘                   │
│                         │                                       │
│                         ▼                                       │
│  STEP 2: Import sample data (optional)                          │
│  ┌─────────────────────────────────────────┐                   │
│  │  $ npm run data:import                  │                   │
│  │  > Data Imported...                     │                   │
│  └─────────────────────────────────────────┘                   │
│                         │                                       │
│                         ▼                                       │
│  STEP 3: Test Register (create new user)                        │
│  ┌─────────────────────────────────────────┐                   │
│  │  POST /api/auth/register                │                   │
│  │  ✅ 201 - User created successfully     │                   │
│  └─────────────────────────────────────────┘                   │
│                         │                                       │
│                         ▼                                       │
│  STEP 4: Test Login (get your token)                            │
│  ┌─────────────────────────────────────────┐                   │
│  │  POST /api/auth/login                   │                   │
│  │  ✅ 200 - Returns JWT token             │                   │
│  │  💾 Save token to environment!          │                   │
│  └─────────────────────────────────────────┘                   │
│                         │                                       │
│                         ▼                                       │
│  STEP 5: Test public routes (no token needed)                   │
│  ┌─────────────────────────────────────────┐                   │
│  │  GET /api/issues                        │                   │
│  │  ✅ 200 - Returns all issues            │                   │
│  └─────────────────────────────────────────┘                   │
│                         │                                       │
│                         ▼                                       │
│  STEP 6: Test protected routes (with token)                     │
│  ┌─────────────────────────────────────────┐                   │
│  │  POST /api/issues                       │                   │
│  │  Header: Authorization: Bearer {{token}}│                   │
│  │  ✅ 201 - Issue created                 │                   │
│  └─────────────────────────────────────────┘                   │
│                         │                                       │
│                         ▼                                       │
│  STEP 7: Test teams (all protected)                             │
│  ┌─────────────────────────────────────────┐                   │
│  │  GET /api/teams                         │                   │
│  │  ✅ 200 - Returns all teams             │                   │
│  └─────────────────────────────────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Common Errors & Solutions

| Error                  | What It Means                 | Solution                       |
| ---------------------- | ----------------------------- | ------------------------------ |
| `401 Unauthorized`     | No token or invalid token     | Login again and save new token |
| `400 Bad Request`      | Missing or invalid data       | Check your JSON body format    |
| `404 Not Found`        | Wrong URL or ID doesn't exist | Check the URL and ID           |
| `500 Internal Server`  | Something broke on server     | Check server console for error |
| `ECONNREFUSED`         | Server not running            | Run `npm run dev` first        |
| `Email already exists` | User with that email exists   | Use different email or login   |
| `Invalid credentials`  | Wrong email or password       | Check your login details       |

---

## 📖 Pseudocode Explanations

> **Pseudocode is like writing a recipe in plain English before cooking!**
> **It helps you understand WHAT to do before you write actual code.**

---

### What is Pseudocode?

Think of it like directions to a friend's house:

```
❌ BAD (Too Technical):
   Navigate to coordinates 40.7128° N, 74.0060° W using GPS triangulation

✅ GOOD (Pseudocode):
   1. Go straight until you see the big red house
   2. Turn left at the stop sign
   3. It's the third house on the right
```

---

### How Our App Works (Big Picture)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     🎯 ISSUE TRACKER - HOW IT WORKS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. USER wants to do something (create issue, login, etc.)                  │
│                              │                                              │
│                              ▼                                              │
│  2. BROWSER sends a request to our server                                   │
│     Example: POST /api/issues with { title: "Bug", description: "..." }     │
│                              │                                              │
│                              ▼                                              │
│  3. SERVER receives request at the correct ROUTE                            │
│     Example: /api/issues → issueRoutes.js                                   │
│                              │                                              │
│                              ▼                                              │
│  4. MIDDLEWARE checks security (if needed)                                  │
│     Example: verifyToken() - "Do you have permission?"                      │
│                              │                                              │
│              ┌───────────────┴───────────────┐                             │
│              ▼                               ▼                             │
│         ❌ NO PASS                      ✅ HAS PASS                         │
│         Stop here!                           │                             │
│         Send error                           ▼                             │
│                              5. CONTROLLER does the actual work             │
│                                 Example: createIssue()                      │
│                                          │                                  │
│                                          ▼                                  │
│                              6. CONTROLLER talks to DATABASE                │
│                                 Example: Issue.save()                       │
│                                          │                                  │
│                                          ▼                                  │
│                              7. DATABASE saves the data                     │
│                                          │                                  │
│                                          ▼                                  │
│                              8. CONTROLLER sends response back              │
│                                 Example: { _id: "123", title: "Bug" }       │
│                                          │                                  │
│                                          ▼                                  │
│  9. USER sees the result!                                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Key Functions Pseudocode

#### Registration Process

```
WHEN user clicks "Register":

    1. COLLECT name, email, password from form

    2. VALIDATE the data:
       - Is name at least 3 characters?
       - Is email a valid email format?
       - Is password at least 6 characters?

       IF any validation fails:
           SHOW error message
           STOP

    3. CHECK if email already exists:
       SEARCH database for user with this email

       IF found:
           SHOW "Email already exists"
           STOP

    4. SCRAMBLE the password:
       - Create random "salt" (extra security)
       - Mix password with salt to create hash
       - Nobody can read the original password now!

    5. CREATE new user in database:
       - Save name
       - Save email
       - Save scrambled password

    6. SEND success message to user
```

#### Login Process

```
WHEN user clicks "Login":

    1. COLLECT email and password from form

    2. FIND user in database by email:

       IF not found:
           SHOW "Invalid credentials"
           STOP

    3. COMPARE passwords:
       - Take password user typed
       - Compare with scrambled password in database

       IF doesn't match:
           SHOW "Invalid credentials"
           STOP

    4. CREATE VIP pass (JWT token):
       - Put userId in the token
       - Put email in the token
       - Set expiration to 1 hour
       - Sign with secret key

    5. SEND token to user
       - User saves this token
       - User includes it in future requests
```

#### Creating an Issue

```
WHEN user submits new issue form:

    1. CHECK if user has valid token:

       IF no token:
           SHOW "Please login first"
           STOP

       IF token expired:
           SHOW "Session expired, login again"
           STOP

    2. VALIDATE the issue data:
       - Is title 3-30 characters?
       - Is description provided?
       - Is createdBy a valid user ID?

       IF validation fails:
           SHOW error message
           STOP

    3. CREATE new issue in database:
       - Save title
       - Save description
       - Set status to "open"
       - Save who created it (createdBy)
       - Automatically add timestamp

    4. SEND the new issue back to user
```

#### Getting All Issues

```
WHEN someone requests all issues:

    1. FIND all issues in database

    2. For each issue, ALSO GET the creator's info:
       - Get creator's name
       - Get creator's email
       - (But NOT their password!)

    3. SEND the list of issues
```

---

## ⚙️ How the Backend Works

### Think of it like a Restaurant! 🍕

```
┌─────────────────────────────────────────────────────────────────────┐
│                         THE RESTAURANT                               │
│                                                                      │
│  👤 Customer          🚪 Door           👨‍🍳 Chef          📦 Storage  │
│  (Frontend)          (Routes)      (Controllers)     (Database)     │
│                                                                      │
│    "I want            Goes to         Makes the        Gets the     │
│     pizza!"           kitchen          pizza           ingredients  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### The Flow:

```
1️⃣ Customer (Browser) ──► "I want to see all issues!"
                              │
2️⃣ Door (Route) ────────────► /api/issues (GET request)
                              │
3️⃣ Chef (Controller) ────────► getAllIssues() function
                              │
4️⃣ Storage (Database) ────────► MongoDB finds all issues
                              │
5️⃣ Back to Customer ◄─────────── Returns JSON data
```

### server.js - The Main Engine

```javascript
// 📍 File: server.js
// 🎯 Purpose: Starts our server and connects everything

import express from "express"; // The server framework
import dotenv from "dotenv"; // Reads secret settings
import connectDB from "./config/db.js"; // Connects to database
import issueRoutes from "./routes/issueRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

dotenv.config(); // Load .env file

const app = express(); // Create our server

app.use(express.json()); // Understand JSON data

// ROUTES: Tell server where to send requests
app.use("/api/issues", issueRoutes); // Issues go here
app.use("/api/auth", authRoutes); // Login/register go here
app.use("/api/teams", teamRoutes); // Teams go here

connectDB(); // Connect to MongoDB

app.listen(3000); // Start listening!
```

---

## 🎨 How the Frontend Works

### Current State: Just a Landing Page

```
┌──────────────────────────────────────────────────────────────┐
│  🌐 BROWSER                                                   │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Navigation.jsx   [Logo]  [Features] [Pricing] [Login] │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │                                                        │  │
│  │                    Hero.jsx                            │  │
│  │               "Track Issues. Ship Faster."             │  │
│  │              [Start Free Trial] [Watch Demo]           │  │
│  │                                                        │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │                   Features.jsx                         │  │
│  │    ┌─────────┐  ┌─────────┐  ┌─────────┐              │  │
│  │    │Feature 1│  │Feature 2│  │Feature 3│              │  │
│  │    └─────────┘  └─────────┘  └─────────┘              │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │                  HowItWorks.jsx                        │  │
│  │            Step 1 → Step 2 → Step 3                    │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │                     CTA.jsx                            │  │
│  │              "Ready to get started?"                   │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │                    Footer.jsx                          │  │
│  │              Links | Social | Copyright                │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### App.jsx - The Main Component

```jsx
// 📍 File: frontend/src/App.jsx
// 🎯 Purpose: Puts all pieces together

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navigation /> {/* Menu at top */}
      <Hero /> {/* Big welcome section */}
      <Features /> {/* Shows features */}
      <HowItWorks /> {/* Explains steps */}
      <CTA /> {/* Call to action */}
      <Footer /> {/* Bottom section */}
    </div>
  );
};
```

---

## 🗃️ Database Models Explained

### Think of Models like Forms You Fill Out! 📝

---

### 1. USER Model (user.js)

**What is it?** A blueprint for storing information about a person.

```
┌─────────────────────────────────────────┐
│            👤 USER FORM                  │
├─────────────────────────────────────────┤
│  Name:     [John Doe          ]         │
│  Email:    [john@example.com  ]         │
│  Password: [********          ]         │
│  Created:  [Feb 11, 2026      ]         │
└─────────────────────────────────────────┘
```

**The Code:**

```javascript
// 📍 File: models/user.js

const userSchema = new mongoose.Schema({
  name: {
    type: String, // Text like "John"
    required: true, // MUST have a name
  },
  email: {
    type: String, // Text like "john@email.com"
    required: true, // MUST have an email
  },
  password: {
    type: String, // Text (but hidden)
    minLength: 6, // At least 6 characters
    required: true, // MUST have a password
  },
  createdAt: {
    type: Date, // When they signed up
    default: Date.now, // Automatically set to NOW
  },
});
```

---

### 2. ISSUE Model (issue.js)

**What is it?** A blueprint for storing a bug or problem.

```
┌─────────────────────────────────────────┐
│            🐛 ISSUE FORM                 │
├─────────────────────────────────────────┤
│  Title:       [Fix login bug     ]      │
│  Description: [Users can't login ]      │
│  Status:      [○ Open ● Closed   ]      │
│  Created By:  [John Doe          ]      │
│  Created:     [Feb 11, 2026      ]      │
└─────────────────────────────────────────┘
```

**The Code:**

```javascript
// 📍 File: models/issue.js

const issueSchema = new mongoose.Schema({
  title: {
    type: String, // Short name: "Fix login bug"
    required: true, // MUST have a title
    minLength: 3, // At least 3 characters
    maxLength: 30, // Maximum 30 characters
  },
  description: {
    type: String, // Longer explanation
    required: true, // MUST describe the issue
  },
  status: {
    type: String, // "open" or "closed"
    default: "open", // New issues start as "open"
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // Links to a User
    ref: "User", // Points to User model
    required: true, // MUST know who created it
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
```

---

### 3. TEAM Model (team.js)

**What is it?** A blueprint for a group of people working together.

```
┌─────────────────────────────────────────┐
│            👥 TEAM FORM                  │
├─────────────────────────────────────────┤
│  Name:        [Frontend Team     ]      │
│  Description: [Builds the UI     ]      │
│  Members:     [John, Jane, Mike  ]      │
│  Created:     [Feb 11, 2026      ]      │
└─────────────────────────────────────────┘
```

**The Code:**

```javascript
// 📍 File: models/team.js

const teamSchema = new mongoose.Schema({
  name: {
    type: String, // Team name: "Frontend Team"
    required: true,
  },
  description: {
    type: String, // What this team does
    required: true,
  },
  members: [
    // A LIST of users
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Each member is a User
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
```

---

## 🛣️ API Endpoints (Routes)

### What are Routes?

Routes are like **addresses** for different actions. Just like:

- 🏠 Home = "/"
- 🏫 School = "/school"
- 🏪 Store = "/store"

---

### AUTH Routes (Login & Register)

| Action   | Method | URL                  | What it does       |
| -------- | ------ | -------------------- | ------------------ |
| Register | POST   | `/api/auth/register` | Create new account |
| Login    | POST   | `/api/auth/login`    | Sign in            |

**Example - Register:**

```javascript
// Send this to: POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123"
}

// You get back:
{
  "message": "User created successfully"
}
```

**Example - Login:**

```javascript
// Send this to: POST /api/auth/login
{
  "email": "john@example.com",
  "password": "secret123"
}

// You get back a TOKEN (like a VIP pass):
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

### ISSUE Routes

| Action  | Method | URL               | What it does     | Need Login? |
| ------- | ------ | ----------------- | ---------------- | ----------- |
| Get All | GET    | `/api/issues`     | See all issues   | ❌ No       |
| Get One | GET    | `/api/issues/:id` | See one issue    | ❌ No       |
| Create  | POST   | `/api/issues`     | Create new issue | ✅ Yes      |
| Update  | PUT    | `/api/issues/:id` | Edit an issue    | ✅ Yes      |

**Example - Create Issue:**

```javascript
// Send this to: POST /api/issues
// Header: Authorization: Bearer <your-token>
{
  "title": "Fix login bug",
  "description": "Users cannot log in",
  "createdBy": "user_id_here"
}

// You get back the created issue
```

---

### TEAM Routes

| Action  | Method | URL              | What it does  | Need Login? |
| ------- | ------ | ---------------- | ------------- | ----------- |
| Get All | GET    | `/api/teams`     | See all teams | ✅ Yes      |
| Get One | GET    | `/api/teams/:id` | See one team  | ✅ Yes      |
| Create  | POST   | `/api/teams`     | Create team   | ✅ Yes      |

---

## 🔄 How Things Connect (Sequence Diagrams)

### 1. User Registration Flow

```
👤 User                    🌐 Browser                 🖥️ Server                  🗄️ Database
   │                          │                          │                          │
   │  Fills register form     │                          │                          │
   │─────────────────────────►│                          │                          │
   │                          │                          │                          │
   │                          │   POST /api/auth/register│                          │
   │                          │─────────────────────────►│                          │
   │                          │                          │                          │
   │                          │                          │  Check if email exists   │
   │                          │                          │─────────────────────────►│
   │                          │                          │                          │
   │                          │                          │  Email not found ✅       │
   │                          │                          │◄─────────────────────────│
   │                          │                          │                          │
   │                          │                          │  Hash password           │
   │                          │                          │  (make it secret)        │
   │                          │                          │                          │
   │                          │                          │  Save new user           │
   │                          │                          │─────────────────────────►│
   │                          │                          │                          │
   │                          │                          │  User saved! ✅           │
   │                          │                          │◄─────────────────────────│
   │                          │                          │                          │
   │                          │  "User created!" 201     │                          │
   │                          │◄─────────────────────────│                          │
   │                          │                          │                          │
   │  Shows success message   │                          │                          │
   │◄─────────────────────────│                          │                          │
```

### 2. User Login Flow

```
👤 User                    🌐 Browser                 🖥️ Server                  🗄️ Database
   │                          │                          │                          │
   │  Types email & password  │                          │                          │
   │─────────────────────────►│                          │                          │
   │                          │                          │                          │
   │                          │   POST /api/auth/login   │                          │
   │                          │─────────────────────────►│                          │
   │                          │                          │                          │
   │                          │                          │  Find user by email      │
   │                          │                          │─────────────────────────►│
   │                          │                          │                          │
   │                          │                          │  User found! ✅           │
   │                          │                          │◄─────────────────────────│
   │                          │                          │                          │
   │                          │                          │  Compare passwords       │
   │                          │                          │  (Is it correct?)        │
   │                          │                          │                          │
   │                          │                          │  Password matches! ✅     │
   │                          │                          │                          │
   │                          │                          │  Create JWT Token        │
   │                          │                          │  (VIP Pass)              │
   │                          │                          │                          │
   │                          │  Token returned 200      │                          │
   │                          │◄─────────────────────────│                          │
   │                          │                          │                          │
   │  Saves token, goes to    │                          │                          │
   │  dashboard               │                          │                          │
   │◄─────────────────────────│                          │                          │
```

### 3. Create Issue Flow (Protected Route)

```
👤 User                    🌐 Browser                 🚔 Middleware             🖥️ Controller            🗄️ Database
   │                          │                          │                          │                         │
   │  Fills issue form        │                          │                          │                         │
   │─────────────────────────►│                          │                          │                         │
   │                          │                          │                          │                         │
   │                          │  POST /api/issues        │                          │                         │
   │                          │  + Token in header       │                          │                         │
   │                          │─────────────────────────►│                          │                         │
   │                          │                          │                          │                         │
   │                          │                          │  Check Token             │                         │
   │                          │                          │  (Is this person         │                         │
   │                          │                          │   allowed?)              │                         │
   │                          │                          │                          │                         │
   │                          │                          │  Token valid! ✅          │                         │
   │                          │                          │─────────────────────────►│                         │
   │                          │                          │                          │                         │
   │                          │                          │                          │  Validate data          │
   │                          │                          │                          │  (Is title long enough?)│
   │                          │                          │                          │                         │
   │                          │                          │                          │  Data valid! ✅          │
   │                          │                          │                          │                         │
   │                          │                          │                          │  Save issue             │
   │                          │                          │                          │────────────────────────►│
   │                          │                          │                          │                         │
   │                          │                          │                          │  Issue saved! ✅         │
   │                          │                          │                          │◄────────────────────────│
   │                          │                          │                          │                         │
   │                          │  New issue returned 201  │                          │                         │
   │                          │◄─────────────────────────────────────────────────────                         │
   │                          │                          │                          │                         │
   │  Shows new issue         │                          │                          │                         │
   │◄─────────────────────────│                          │                          │                         │
```

---

## ✅ What We Have vs ❌ What We Need

### Backend Status

| Feature              | Have it? | Notes                   |
| -------------------- | -------- | ----------------------- |
| User Registration    | ✅ Yes   | Works great!            |
| User Login           | ✅ Yes   | Returns JWT token       |
| Password Hashing     | ✅ Yes   | Uses bcryptjs           |
| JWT Authentication   | ✅ Yes   | Token verification      |
| **User Role Field**  | ❌ NO    | Need to add!            |
| **Admin Middleware** | ❌ NO    | Need to add!            |
| **User Management**  | ❌ NO    | Admin CRUD for users    |
| Get All Issues       | ✅ Yes   | Working                 |
| Get Single Issue     | ✅ Yes   | Working                 |
| Create Issue         | ✅ Yes   | Protected route         |
| Update Issue         | ✅ Yes   | Protected route         |
| **Delete Issue**     | ❌ NO    | Need to add!            |
| **Search Issues**    | ❌ NO    | Empty function          |
| **Issue Priority**   | ❌ NO    | Not in model            |
| **Issue Due Date**   | ❌ NO    | Not in model            |
| **Issue Comments**   | ❌ NO    | Not in model            |
| **Assign to User**   | ❌ NO    | Not in model            |
| **Link to Team**     | ❌ NO    | Not in model            |
| Get All Teams        | ✅ Yes   | Working                 |
| Get Single Team      | ✅ Yes   | Working                 |
| Create Team          | ✅ Yes   | Working                 |
| **Update Team**      | ❌ NO    | Need to add!            |
| **Delete Team**      | ❌ NO    | Need to add!            |
| **Add Team Member**  | ❌ NO    | Need to add!            |
| CORS                 | ❌ NO    | Frontend can't connect! |

### Frontend Status

| Feature               | Have it? | Notes            |
| --------------------- | -------- | ---------------- |
| Landing Page          | ✅ Yes   | Looks beautiful! |
| Navigation            | ✅ Yes   | Static links     |
| Hero Section          | ✅ Yes   | With animations  |
| Features Section      | ✅ Yes   | Shows features   |
| Footer                | ✅ Yes   | Working          |
| **Login Page**        | ❌ NO    | Need to create!  |
| **Register Page**     | ❌ NO    | Need to create!  |
| **Dashboard**         | ❌ NO    | Need to create!  |
| **Admin Panel**       | ❌ NO    | Need to create!  |
| **Issue List**        | ❌ NO    | Need to create!  |
| **Issue Detail**      | ❌ NO    | Need to create!  |
| **Create Issue Form** | ❌ NO    | Need to create!  |
| **User Profile**      | ❌ NO    | Need to create!  |
| **API Connection**    | ❌ NO    | Need to create!  |
| **React Router**      | ❌ NO    | Need to install! |

---

## 🚀 Future Features to Build

### Phase 1: Core Features (Do First!)

These are the MUST-HAVE features to make the app work:

#### 1.1 Upgrade Issue Model

```javascript
// 📍 File: models/issue.js
// 🎯 Add these new fields:

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    // NEW FIELDS ⬇️
    status: {
      type: String,
      enum: ["open", "in-progress", "resolved", "closed"],
      default: "open",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    dueDate: {
      type: Date,
    },
    comments: [
      {
        text: String,
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        createdAt: { type: Date, default: Date.now },
      },
    ],

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);
```

#### 1.2 Add Delete Issue

```javascript
// 📍 File: controllers/issueController.js
// 🎯 Add this function:

export const deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the issue
    const issue = await Issue.findByIdAndDelete(id);

    // If not found, tell the user
    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    // Success!
    res.status(200).json({ message: "Issue deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

```javascript
// 📍 File: routes/issueRoutes.js
// 🎯 Add this line:

router.delete("/:id", verifyToken, deleteIssue);
```

#### 1.3 Add Search Issues

```javascript
// 📍 File: controllers/issueController.js
// 🎯 Complete the search function:

export const searchIssues = async (req, res) => {
  try {
    const { q } = req.query; // Get search term from URL

    // Search in title AND description
    const issues = await Issue.find({
      $or: [
        { title: { $regex: q, $options: "i" } }, // "i" = ignore case
        { description: { $regex: q, $options: "i" } },
      ],
    }).populate("createdBy", "name");

    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

```javascript
// 📍 File: routes/issueRoutes.js
// 🎯 Add search route:

router.get("/search", searchIssues); // /api/issues/search?q=login
```

#### 1.4 Add Comments to Issue

```javascript
// 📍 File: controllers/issueController.js
// 🎯 Add comment function:

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    // Add the comment
    issue.comments.push({
      text: text,
      author: req.user.userId, // From token
      createdAt: new Date(),
    });

    await issue.save();

    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

#### 1.5 Install CORS

```bash
# Run in terminal:
cd /home/moslem/Desktop/IssueTRacker
npm install cors
```

```javascript
// 📍 File: server.js
// 🎯 Add these lines:

import cors from "cors";

const app = express();

app.use(cors()); // Add this BEFORE routes
app.use(express.json());
```

---

#### 1.6 Add Admin Middleware (Role-Based Access Control)

**What is Admin Middleware?**

Think of it like this: 🏫

- **Regular Users** = Students (can do basic things)
- **Admin Users** = Teachers (can do EVERYTHING)

Some actions should ONLY be done by admins:

- 🗑️ Delete any issue (not just your own)
- 👥 Delete users
- 🏢 Delete teams
- ⚙️ Change system settings

---

##### Step 1: Add "role" Field to User Model

First, we need to tell our database that users can have different roles!

```javascript
// 📍 File: models/user.js
// 🎯 Add the "role" field to the user schema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
  },
  // ⭐ NEW: Add role field!
  role: {
    type: String,
    enum: ["user", "admin"], // Can only be "user" or "admin"
    default: "user", // New users are regular users by default
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
```

**Explanation for a 10-year-old:**

```
┌─────────────────────────────────────────┐
│            👤 USER FORM (Updated!)       │
├─────────────────────────────────────────┤
│  Name:     [John Doe          ]         │
│  Email:    [john@example.com  ]         │
│  Password: [********          ]         │
│  Role:     [○ User  ● Admin   ]  ← NEW! │
│  Created:  [Feb 11, 2026      ]         │
└─────────────────────────────────────────┘
```

---

##### Step 2: Update Auth Middleware to Include User Info

We need to update the token verification to fetch the full user (including their role):

```javascript
// 📍 File: middlewares/auth.js
// 🎯 Update verifyToken and add isAdmin middleware

import jwt from "jsonwebtoken";
import User from "../models/user.js";

// ======================================
// MIDDLEWARE 1: Verify Token (Updated!)
// ======================================
// This checks if the user is logged in
export const verifyToken = async (req, res, next) => {
  try {
    // Step 1: Get the token from the request header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // Step 2: If no token, user is not logged in
    if (!token) {
      return res
        .status(401)
        .json({ error: "No token provided. Please login!" });
    }

    // Step 3: Verify the token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Step 4: Find the user in database (to get their role!)
    const user = await User.findById(decoded.userId).select("-password");

    // Step 5: If user doesn't exist anymore
    if (!user) {
      return res
        .status(401)
        .json({ error: "User not found. Please login again!" });
    }

    // Step 6: Attach user info to the request
    req.user = user; // Now we have the FULL user with their role!

    // Step 7: Continue to the next function
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Invalid token. Please login again!" });
  }
};

// ======================================
// MIDDLEWARE 2: Check if User is Admin
// ======================================
// This checks if the logged-in user is an admin
export const isAdmin = (req, res, next) => {
  try {
    // Check if user exists (verifyToken should run first!)
    if (!req.user) {
      return res.status(401).json({ error: "Please login first!" });
    }

    // Check if user's role is "admin"
    if (req.user.role !== "admin") {
      return res.status(403).json({
        error: "Access denied! You need to be an admin to do this.",
      });
    }

    // User is an admin, continue!
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// ======================================
// MIDDLEWARE 3: Check Ownership OR Admin
// ======================================
// This allows either the owner of something OR an admin
export const isOwnerOrAdmin = (model) => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;

      // Find the item (issue, team, etc.)
      const item = await model.findById(id);

      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }

      // Check if user is the owner OR an admin
      const isOwner = item.createdBy?.toString() === req.user._id.toString();
      const userIsAdmin = req.user.role === "admin";

      if (!isOwner && !userIsAdmin) {
        return res.status(403).json({
          error: "You can only modify your own items (unless you're an admin)",
        });
      }

      // Attach the item to request for later use
      req.item = item;
      next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
};
```

**How the middlewares work (like security guards):**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         🚪 SECURITY CHECKPOINT                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Request comes in: "I want to delete all users!"                            │
│                              │                                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────┐                               │
│  │  🔐 GUARD 1: verifyToken                 │                               │
│  │  "Do you have a valid VIP pass (token)?" │                               │
│  └─────────────────────────────────────────┘                               │
│                              │                                              │
│              ┌───────────────┴───────────────┐                             │
│              │                               │                             │
│         ❌ NO TOKEN                    ✅ HAS TOKEN                         │
│         "Go away!"                          │                              │
│                                              ▼                              │
│                    ┌─────────────────────────────────────────┐             │
│                    │  👮 GUARD 2: isAdmin                     │             │
│                    │  "Are you a TEACHER or just a STUDENT?"  │             │
│                    └─────────────────────────────────────────┘             │
│                                              │                              │
│                    ┌─────────────────────────┴─────────────────────┐       │
│                    │                                               │       │
│               ❌ REGULAR USER                                ✅ ADMIN       │
│               "Sorry, students can't                         "Welcome,    │
│                do this!"                                     teacher!"    │
│                                                                     │       │
│                                                                     ▼       │
│                                                          ✅ ACCESS GRANTED  │
│                                                          (Do the action)   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

##### Step 3: Update Routes to Use Admin Middleware

Now let's protect certain routes so only admins can access them:

```javascript
// 📍 File: routes/issueRoutes.js
// 🎯 Add admin protection to dangerous routes

import express from "express";
import {
  getAllIssues,
  createIssue,
  getIssueById,
  updateIssue,
  deleteIssue,
  searchIssues,
} from "../controllers/issueController.js";
import { verifyToken, isAdmin, isOwnerOrAdmin } from "../middlewares/auth.js";
import Issue from "../models/issue.js";

const router = express.Router();

// ===== PUBLIC ROUTES (anyone can access) =====
router.get("/", getAllIssues); // See all issues
router.get("/search", searchIssues); // Search issues
router.get("/:id", getIssueById); // See one issue

// ===== PROTECTED ROUTES (must be logged in) =====
router.post("/", verifyToken, createIssue); // Create issue

// ===== OWNER OR ADMIN ROUTES =====
// Only the person who created the issue OR an admin can update/delete
router.put("/:id", verifyToken, isOwnerOrAdmin(Issue), updateIssue);
router.delete("/:id", verifyToken, isOwnerOrAdmin(Issue), deleteIssue);

export default router;
```

```javascript
// 📍 File: routes/teamRoutes.js
// 🎯 Add admin protection

import express from "express";
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/teamController.js";
import { verifyToken, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

// ===== PROTECTED ROUTES (must be logged in) =====
router.get("/", verifyToken, getAllTeams);
router.get("/:id", verifyToken, getTeamById);
router.post("/", verifyToken, createTeam);

// ===== ADMIN ONLY ROUTES =====
// Only admins can update or delete teams!
router.put("/:id", verifyToken, isAdmin, updateTeam);
router.delete("/:id", verifyToken, isAdmin, deleteTeam);

export default router;
```

```javascript
// 📍 File: routes/userRoutes.js (NEW FILE!)
// 🎯 Admin can manage users

import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  makeAdmin,
} from "../controllers/userController.js";
import { verifyToken, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

// ===== ADMIN ONLY ROUTES =====
router.get("/", verifyToken, isAdmin, getAllUsers); // See all users
router.get("/:id", verifyToken, isAdmin, getUserById); // See one user
router.put("/:id", verifyToken, isAdmin, updateUser); // Update user
router.delete("/:id", verifyToken, isAdmin, deleteUser); // Delete user
router.patch("/:id/make-admin", verifyToken, isAdmin, makeAdmin); // Make someone admin

export default router;
```

---

##### Step 4: Create User Controller (Admin Functions)

```javascript
// 📍 File: controllers/userController.js (NEW FILE!)
// 🎯 Admin functions to manage users

import User from "../models/user.js";

// Get all users (Admin only)
export const getAllUsers = async (req, res) => {
  try {
    // Don't send passwords!
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single user (Admin only)
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user (Admin only)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Don't allow changing password through this route
    const { password, ...updateData } = req.body;

    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user (Admin only)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Don't allow admin to delete themselves!
    if (id === req.user._id.toString()) {
      return res.status(400).json({ error: "You cannot delete yourself!" });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Make a user an admin (Admin only)
export const makeAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(
      id,
      { role: "admin" },
      { new: true },
    ).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: `${user.name} is now an admin!`,
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

---

##### Step 5: Register User Routes in Server

```javascript
// 📍 File: server.js
// 🎯 Add the new user routes

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import issueRoutes from "./routes/issueRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // ⭐ NEW!

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/issues", issueRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/users", userRoutes); // ⭐ NEW! Admin can manage users

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

---

##### Step 6: Update Auth Controller to Include Role in Token

```javascript
// 📍 File: controllers/authController.js
// 🎯 Include role when logging in

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Create token with userId AND role
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role, // ⭐ Include role in token!
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }, // Token expires in 7 days
    );

    // Send token AND user info (without password)
    res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // ⭐ Tell frontend if user is admin
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

---

##### Step 7: Update Sample Data (Add Admin User)

```json
// 📍 File: _data/users.json
// 🎯 Add role field to users

[
  {
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "admin@123",
    "role": "admin" // ⭐ This user is an admin!
  },
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "john@123",
    "role": "user" // Regular user
  },
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "password": "jane@123",
    "role": "user" // Regular user
  }
]
```

---

##### Admin Middleware Flow Diagram

```
                              🌐 API REQUEST
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                           REQUEST ARRIVES                                 │
│                    "DELETE /api/users/123"                               │
└──────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                     🔐 STEP 1: verifyToken()                             │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │  • Extract token from "Authorization: Bearer <token>"              │  │
│  │  • Verify token is valid and not expired                          │  │
│  │  • Find user in database by userId from token                     │  │
│  │  • Attach full user object to req.user                            │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                              │                                           │
│              ┌───────────────┴───────────────┐                          │
│              ▼                               ▼                          │
│     ❌ FAIL (401)                     ✅ PASS                           │
│     • No token                        • req.user = {                    │
│     • Invalid token                   •   _id: "...",                   │
│     • User not found                  •   name: "John",                 │
│                                       •   role: "admin"                 │
│                                       • }                               │
└──────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                      👮 STEP 2: isAdmin()                                │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │  • Check if req.user exists                                        │  │
│  │  • Check if req.user.role === "admin"                              │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                              │                                           │
│              ┌───────────────┴───────────────┐                          │
│              ▼                               ▼                          │
│     ❌ FAIL (403)                     ✅ PASS                           │
│     "Access denied!                   Continue to                       │
│      Admins only!"                    controller...                     │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                      🎯 STEP 3: Controller                               │
│                         deleteUser()                                     │
│                     User gets deleted!                                   │
└──────────────────────────────────────────────────────────────────────────┘
```

---

##### Admin Routes Summary Table

| Route                       | Method | Middleware                  | Who Can Access?      |
| --------------------------- | ------ | --------------------------- | -------------------- |
| `/api/users`                | GET    | verifyToken, isAdmin        | 👑 Admin only        |
| `/api/users/:id`            | GET    | verifyToken, isAdmin        | 👑 Admin only        |
| `/api/users/:id`            | PUT    | verifyToken, isAdmin        | 👑 Admin only        |
| `/api/users/:id`            | DELETE | verifyToken, isAdmin        | 👑 Admin only        |
| `/api/users/:id/make-admin` | PATCH  | verifyToken, isAdmin        | 👑 Admin only        |
| `/api/teams/:id`            | PUT    | verifyToken, isAdmin        | 👑 Admin only        |
| `/api/teams/:id`            | DELETE | verifyToken, isAdmin        | 👑 Admin only        |
| `/api/issues/:id`           | PUT    | verifyToken, isOwnerOrAdmin | 👤 Owner OR 👑 Admin |
| `/api/issues/:id`           | DELETE | verifyToken, isOwnerOrAdmin | 👤 Owner OR 👑 Admin |

---

##### Quick Reference: HTTP Status Codes

| Code | Meaning      | When to Use                                  |
| ---- | ------------ | -------------------------------------------- |
| 200  | OK           | Success! Everything worked                   |
| 201  | Created      | New item was created                         |
| 400  | Bad Request  | User sent wrong data                         |
| 401  | Unauthorized | "Who are you? Please login!"                 |
| 403  | Forbidden    | "I know who you are, but you can't do this!" |
| 404  | Not Found    | "That thing doesn't exist"                   |
| 500  | Server Error | "Oops, something broke on our side"          |

---

##### Files to Create/Modify Summary

| File                            | Action | Description                                  |
| ------------------------------- | ------ | -------------------------------------------- |
| `models/user.js`                | MODIFY | Add `role` field                             |
| `middlewares/auth.js`           | MODIFY | Add `isAdmin` and `isOwnerOrAdmin` functions |
| `controllers/userController.js` | CREATE | Admin user management                        |
| `routes/userRoutes.js`          | CREATE | Admin routes for users                       |
| `routes/issueRoutes.js`         | MODIFY | Add owner/admin checks                       |
| `routes/teamRoutes.js`          | MODIFY | Add admin checks                             |
| `controllers/authController.js` | MODIFY | Include role in login response               |
| `server.js`                     | MODIFY | Add user routes                              |
| `_data/users.json`              | MODIFY | Add role to sample users                     |

---

### Phase 2: Frontend Pages

#### 2.1 Install React Router

```bash
# Run in frontend folder:
cd /home/moslem/Desktop/IssueTRacker/frontend
npm install react-router-dom
```

#### 2.2 Create API Service

```javascript
// 📍 File: frontend/src/services/api.js
// 🎯 Talks to our backend

const API_URL = "http://localhost:3000/api";

// Get token from storage
const getToken = () => localStorage.getItem("token");

// ===== AUTH =====
export const register = async (data) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const login = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// ===== ISSUES =====
export const getIssues = async () => {
  const res = await fetch(`${API_URL}/issues`);
  return res.json();
};

export const createIssue = async (data) => {
  const res = await fetch(`${API_URL}/issues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteIssue = async (id) => {
  const res = await fetch(`${API_URL}/issues/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.json();
};
```

#### 2.3 Create Login Page

```jsx
// 📍 File: frontend/src/pages/Login.jsx
// 🎯 Where users sign in

import { useState } from "react";
import { login } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Don't reload page

    try {
      const token = await login({ email, password });
      localStorage.setItem("token", token); // Save token
      window.location.href = "/dashboard"; // Go to dashboard
    } catch (err) {
      setError("Wrong email or password!");
    }
  };

  return (
    <div className="login-page">
      <h1>🔐 Login</h1>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
```

#### 2.4 Create Dashboard Page

```jsx
// 📍 File: frontend/src/pages/Dashboard.jsx
// 🎯 Shows all issues

import { useState, useEffect } from "react";
import { getIssues, deleteIssue } from "../services/api";

function Dashboard() {
  const [issues, setIssues] = useState([]);

  // Load issues when page opens
  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    const data = await getIssues();
    setIssues(data);
  };

  const handleDelete = async (id) => {
    await deleteIssue(id);
    loadIssues(); // Refresh list
  };

  return (
    <div className="dashboard">
      <h1>📋 Issues Dashboard</h1>

      <div className="issues-list">
        {issues.map((issue) => (
          <div key={issue._id} className="issue-card">
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <span className="status">{issue.status}</span>
            <button onClick={() => handleDelete(issue._id)}>🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
```

#### 2.5 Update App.jsx with Routes

```jsx
// 📍 File: frontend/src/App.jsx
// 🎯 Add routing

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

### Phase 3: Nice-to-Have Features

Once the basics work, add these:

| Feature           | Difficulty  | Description                |
| ----------------- | ----------- | -------------------------- |
| Filter Issues     | ⭐ Easy     | Filter by status, priority |
| Issue Detail Page | ⭐⭐ Medium | Click issue to see details |
| Edit Issue Modal  | ⭐⭐ Medium | Edit without leaving page  |
| User Profile      | ⭐⭐ Medium | See/edit your info         |
| Team Management   | ⭐⭐⭐ Hard | Add/remove team members    |
| Notifications     | ⭐⭐⭐ Hard | Email when assigned        |
| Analytics         | ⭐⭐⭐ Hard | Charts showing progress    |
| Dark Mode         | ⭐ Easy     | Toggle light/dark          |

---

## 📝 Step-by-Step Implementation Guide

### 🚀 Getting Started Checklist

```
======================================
PHASE 0: ENVIRONMENT SETUP
======================================

□ Step 0.1: Create .env file in root folder
    └── Create file: .env
    └── Add: MONGO_URI=mongodb://localhost:27017/issuetracker
    └── Add: JWT_SECRET=your-super-secret-key-change-this
    └── Add: PORT=3000

□ Step 0.2: Install MongoDB
    └── Download from mongodb.com/try/download/community
    └── OR use MongoDB Atlas (cloud) for free

□ Step 0.3: Install dependencies
    └── cd /home/moslem/Desktop/IssueTRacker
    └── npm install

□ Step 0.4: Start the server
    └── npm run dev
    └── Should see: "Server is running on port 3000"
    └── Should see: "Successfully Connected to MONGODB..."

□ Step 0.5: Import sample data
    └── npm run data:import
    └── Should see: "Data Imported..."

======================================
PHASE 1A: BACKEND CORE SETUP
======================================

□ Step 1: Install CORS in backend
    └── npm install cors

□ Step 2: Update server.js with cors
    └── import cors from "cors"
    └── app.use(cors())

□ Step 3: Update Issue model with new fields
    └── priority, assignedTo, team, dueDate, comments

□ Step 4: Add deleteIssue controller
    └── Issue.findByIdAndDelete()

□ Step 5: Add deleteIssue route
    └── router.delete("/:id", ...)

□ Step 6: Complete searchIssues function
    └── Use $regex for searching

======================================
PHASE 1B: ADMIN MIDDLEWARE SETUP
======================================

□ Step 7: Add "role" field to User model
    └── role: { type: String, enum: ["user", "admin"], default: "user" }

□ Step 8: Update verifyToken middleware
    └── Fetch full user from database (including role)
    └── Attach user object to req.user

□ Step 9: Create isAdmin middleware
    └── Check if req.user.role === "admin"
    └── Return 403 if not admin

□ Step 10: Create isOwnerOrAdmin middleware
    └── Check if user owns the item OR is admin
    └── Allow access if either condition is true

□ Step 11: Create userController.js
    └── getAllUsers (admin only)
    └── getUserById (admin only)
    └── updateUser (admin only)
    └── deleteUser (admin only)
    └── makeAdmin (admin only)

□ Step 12: Create userRoutes.js
    └── All routes protected with verifyToken + isAdmin

□ Step 13: Register userRoutes in server.js
    └── app.use("/api/users", userRoutes)

□ Step 14: Update authController.js login
    └── Include role in JWT token
    └── Return user info with role in response

□ Step 15: Update issueRoutes.js
    └── Add isOwnerOrAdmin to update/delete routes

□ Step 16: Update teamRoutes.js
    └── Add isAdmin to update/delete routes

□ Step 17: Update _data/users.json
    └── Add "role" field to all sample users
    └── Make first user an admin

======================================
PHASE 1C: POSTMAN TESTING
======================================

□ Step 18: Download and install Postman
    └── https://www.postman.com/downloads/

□ Step 19: Create "Issue Tracker API" collection

□ Step 20: Create environment variables
    └── base_url = http://localhost:3000
    └── token = (leave empty for now)

□ Step 21: Test Register endpoint
    └── POST {{base_url}}/api/auth/register
    └── Body: { name, email, password }
    └── Expected: 201 "User created successfully"

□ Step 22: Test Login endpoint
    └── POST {{base_url}}/api/auth/login
    └── Body: { email, password }
    └── Expected: 200 with JWT token
    └── Save token to environment variable!

□ Step 23: Test Get All Issues (public)
    └── GET {{base_url}}/api/issues
    └── Expected: 200 with array of issues

□ Step 24: Test Create Issue (protected)
    └── POST {{base_url}}/api/issues
    └── Header: Authorization: Bearer {{token}}
    └── Body: { title, description, createdBy }
    └── Expected: 201 with new issue

□ Step 25: Test Get All Teams (protected)
    └── GET {{base_url}}/api/teams
    └── Header: Authorization: Bearer {{token}}
    └── Expected: 200 with array of teams

□ Step 26: Test admin endpoints (after Phase 1B)
    └── Login as admin
    └── Try to delete a user (should work)
    └── Login as regular user
    └── Try to delete a user (should fail with 403)

======================================
PHASE 2: FRONTEND SETUP
======================================

□ Step 27: Install react-router-dom in frontend
    └── cd frontend
    └── npm install react-router-dom

□ Step 28: Create api.js service file
    └── Functions to call backend

□ Step 29: Create Login page
    └── Form with email & password

□ Step 30: Create Register page
    └── Form with name, email, password

□ Step 31: Create Dashboard page
    └── List all issues

□ Step 32: Update App.jsx with routes
    └── Use BrowserRouter

□ Step 33: Test everything end-to-end!
    └── Register → Login → Create Issue → View Dashboard

======================================
PHASE 3: POLISH & EXTRA FEATURES
======================================

□ Step 34: Add Issue priority field
□ Step 35: Add Issue due date field
□ Step 36: Add comments to issues
□ Step 37: Add search functionality
□ Step 38: Add filtering by status
□ Step 39: Add user profile page
□ Step 40: Add team management
□ Step 41: Add dark mode toggle
□ Step 42: Add notifications
□ Step 43: Deploy to production!
```

---

## 🎉 Summary

### What This Document Contains:

```
✅ Complete Current Code - ALL files in your project with explanations
✅ Pseudocode - Plain English explanations of how things work
✅ Postman Testing Guide - Step-by-step API testing instructions
✅ Diagrams - Visual explanations of data flow
✅ Implementation Checklist - 43 steps from start to finish
✅ Future Features - What to build next
```

### What We Built So Far:

```
✅ Backend API with Express.js
✅ MongoDB Database with Mongoose
✅ User Authentication (Register/Login)
✅ JWT Token Security
✅ Issue CRUD (Create, Read, Update)
✅ Team CRUD (Create, Read)
✅ Beautiful Landing Page
✅ Data Seeder for Testing
```

### What We Still Need:

```
❌ User Role Field (admin/user)
❌ Admin Middleware (isAdmin)
❌ Owner-or-Admin Middleware
❌ User Management Routes (admin only)
❌ Delete Issues
❌ Search Issues
❌ Issue Priority & Due Dates
❌ Comments on Issues
❌ CORS (frontend can't connect!)
❌ Login/Register Pages
❌ Dashboard Page
❌ Admin Panel Page
❌ React Router
❌ API Service Layer
```

### The Final Goal:

```
🎯 A complete issue tracking system where:
   - Users can register and login
   - Users can create, view, edit, delete issues
   - Issues have priority and due dates
   - Users can comment on issues
   - Issues can be assigned to team members
   - Teams can manage their own issues
   - Beautiful dashboard with filters
   - 👑 Admins can manage all users, issues, and teams
   - 🔒 Role-based access control (RBAC)
```

---

## 📚 Helpful Commands

```bash
# Start Backend (from root folder)
npm run dev

# Start Frontend (from frontend folder)
cd frontend && npm run dev

# Seed Database with sample data
npm run data:import

# Clear Database
npm run data:destroy
```

---

## 📄 Sample .env File

Create a file called `.env` in the root folder with this content:

```env
# MongoDB Connection String
# For local MongoDB:
MONGO_URI=mongodb://localhost:27017/issuetracker

# For MongoDB Atlas (cloud):
# MONGO_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/issuetracker

# Secret key for JWT tokens (change this to something random!)
JWT_SECRET=my-super-secret-key-change-this-in-production-123

# Server port
PORT=3000
```

---

## 🔗 Quick Reference Links

| Resource        | URL                           |
| --------------- | ----------------------------- |
| Express.js Docs | https://expressjs.com/        |
| Mongoose Docs   | https://mongoosejs.com/docs/  |
| JWT.io          | https://jwt.io/               |
| Postman         | https://www.postman.com/      |
| MongoDB Atlas   | https://www.mongodb.com/atlas |
| React Router    | https://reactrouter.com/      |
| Joi Validation  | https://joi.dev/api/          |

---

**Created with ❤️ for learning**

_Last Updated: February 11, 2026_
