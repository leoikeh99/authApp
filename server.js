const express = require("express");
const db = require("./config/db");

const app = express();

db();
app.use(express.json({ extended: false }));

//routes set-up
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
