const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/one", (req, res, next) => {
  res.json({
    data: {
      one: true
    }
  });
});

app.get("/two", (req, res, next) => {
  res.status(500).json({
    data: {
      two: true
    }
  });
});

app.get("/three", (req, res, next) => {
  res.json({
    data: {
      three: true
    }
  });
});

app.listen(3000);
