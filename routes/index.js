const express = require('express'),
router = express.Router();
albumModel = require('../models/albumModel');


/* GET home page. */

router.get('/', async function (req, res, next) {
  const data = await albumModel.getAllAlbums();
  console.log("data",data);

  res.render('template', {
    locals: {
      title: 'Album Review Daily ',
      data: data
    },
    partials: {
      partial: "partial-index",

    }


  });
});

router.get('/:entry_id?', async (req, res, next) => {
  const entryId = req.params.entry_id;
  const data = await albumModel.getById(entryId);
  const reviews = await albumModel.getAllReviewsByID(entryId);
  console.log("reviews", reviews);
  
  
  
  res.render('template', {
      locals: {
          title: data[0].name_album,
          data: data,
          reviews: reviews

          
      },
      partials: {
          partial: 'partial-single-entry'
      }
  });
});

router.post('/', async function(req,res) {
  console.log('req body:', req.body) ;
  const {album_id, review_title, review_text} = req.body;
  const postData = await albumModel.addReview(album_id, review_title, review_text);
  console.log(postData);
  res.sendStatus(200);
});

module.exports = router;
