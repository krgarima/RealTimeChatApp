import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    ); // not equal to
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ error: "Error getting users for sidebar" });
  }
};
