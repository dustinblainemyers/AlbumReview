var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/signup", async (req, res, next) => {
  res.render("template", {
    locals: {
      title: "signup"
    },
    partials: {
      partial: "partial-signup"
    }
  });
});

router.get("/login", async (req, res, next) => {
  res.render("template", {
    locals: {
      title: "login"
    },
    partials: {
      partial: "partial-login"
    }
  });
});

module.exports = router;
