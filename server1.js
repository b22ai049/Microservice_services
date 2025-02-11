const express = require("express");
const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
    res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

app.listen(3001, () => console.log("User Service running on 3001"));

