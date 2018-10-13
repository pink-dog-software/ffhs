const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("views"));
app.use(express.static("styles"));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
