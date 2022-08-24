const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("./Models/User");
const { json } = require("express");

let app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
const TIME_OUT = 30; // time in minutes
const secrete_key = "secrete_key";
mongoose.connect("mongodb://127.0.0.1:27017/LibraryV2");

app.post("/api/auth", async (req, res) => {
    const username = req.body.username;
    const password = req.body.passwrod;
    try {
        const user = await User.findOne({
            register_number: username,
            password: password,
        });

        if (user) {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                    register_number: user.register_number,
                    type: user.type,
                    isDisenabled: user.disenable,
                },
                secrete_key
            );
            res.json({ status: "ok", user: token });
            console.log(`${user.register_number} successfully logged in.`);
        } else {
            res.json({ status: "ok", user: false });
        }
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.post("/api/user_data", async (req, res) => {
    try {
        const token = req.headers["x-access-token"];
        const decode = jwt.verify(token, secrete_key);
        if (decode) {
            const user_data = await User.findOne(
                {
                    register_number: decode.register_number,
                },
                { password: 0, _id: 0, __v: 0 }
            );
            res.json({ status: "ok", data: user_data });
            console.log(`user data fetched: ${user_data.register_number}`);
        } else {
            res.json({ status: "err", err: "token error" });
        }
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log("server is up🙌");
});

const user_create = () => {
    User.create({
        name: "vaisakh",
        lastname: "b",
        email: "vaisakh2077@gmail.com",
        register_number: "vaisakh2077",
        register_date: Date.now(),
        qr_delay: 5,
        smart_catching: true,
        auto_start: true,
        keep_running: false,
        darkTheme: true,
        password: "nasa",
        type: "admin",
        disenable: false,
    });
};

// user_create();
