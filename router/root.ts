import express from "express";
const router = express.Router();

import authRouter from "./auth";
import userRouter from "./user";

router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);

// APIs
router.get("/api", (req, res) => {
    res.json({
        msg: "Welcome",
        routes: {
            server: "/",
            client: "http://127.0.0.1:5000/",
            api: {
                auth: {
                    register: {
                        method: "POST",
                        path: "/api/auth/register",
                    },
                    login: {
                        method: "POST",
                        path: "/api/auth/login",
                    },
                },
            },
        },
    });
});

export default router;
