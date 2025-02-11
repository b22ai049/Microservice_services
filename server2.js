const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.get("/orders", async (req, res) => {
    const users = await axios.get("http://192.168.1.10:3001/users");
    res.json({ orderId: 101, users: users.data });
});

app.listen(3002, () => console.log("Order Service running on 3002"));
