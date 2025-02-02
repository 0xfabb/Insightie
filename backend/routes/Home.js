const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("This is the Homepage of Insightie");
});

module.exports = router;
