import { generateToken } from "../../utils/generateToken.js";
import User from "./user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Missing required from fields!!", success: false });
  }

  const user = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (user) {
    return res.status(400).json({
      message:
        user.username === username
          ? "Username is already taken!"
          : "Email is already registered!",
      success: false,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  const token = generateToken({ _id: newUser._id, username: newUser.username });

  res.status(201).json(token);
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Please provide username and password!!",
      success: false,
    });
  }

  const user = await User.findOne({ username: username });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Invalid Credentials!!", success: false });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res
      .status(401)
      .json({ message: "Invalid Credentials!!", success: false });
  }

  const token = generateToken({ _id: user._id, username: user.username });

  res.status(200).json(token);
};
