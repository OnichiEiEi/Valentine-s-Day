import admin from "./firebaseAdmin.js";
import User from "../modules/user/user.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const idToken = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    let user = await User.findOne({
      firebaseUid: decodedToken.uid,
    });

    if (!user) {
      user = await User.create({
        firebaseUid: decodedToken.uid,
        email: decodedToken.email,
      });

      console.log("New user created");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
