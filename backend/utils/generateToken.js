import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 1000 * 60 * 60 * 24 * 15, // ms
    httpOnly: true, // prevent XSS attack - cross-site scripting attack
    sameSite: "strict", // CSRF attack cross-site request forgery attack
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
