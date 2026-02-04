import User from "../models/user.js";
import { validateUser } from "../utils/validate.js";
import bcrypt, { hash } from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { error } = validateUser(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // extract data from request body
    const { name, email, password } = req.body;

    // chekc if we already have a user with the provided email

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User with this email already exists",
      });
    }

    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
