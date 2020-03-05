const express = require("express"),
  router = express.Router();
albumModel = require("../models/albumModel");

router.get("/:entry_id?", async (req, res, next) => {
  const entryId = req.params.entry_id;
  const data = await albumModel.getById(entryId);
  const reviews = await albumModel.getAllReviewsByID(entryId);
  console.log("reviews", reviews);

  res.render("template", {
    locals: {
      title: data[0].name_album,
      data: data,
      reviews: reviews
    },
    partials: {
      partial: "partial-single-entry"
    }
  });
});

module.exports = router;
