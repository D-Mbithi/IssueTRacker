import dotenv from "dotenv";
import colors from "colors";
import fs from "fs";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Issue from "./models/issue.js";

import User from "./models/user.js";

dotenv.config();

connectDB();

const issues = JSON.parse(
    fs.readFileSync("./_data/issues.json", "utf-8")
);

const users = JSON.parse(
    fs.readFileSync("./_data/users.json", "utf-8")
);

const importData = async () => {
    try {
        await Issue.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

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
