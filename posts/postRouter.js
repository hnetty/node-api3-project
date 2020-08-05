const express = require('express');

const Posts = require('./postDb');

const router = express.Router();


router.get('/', (req, res) => {
  Posts.get(req.body)
    .then(art => {
      res.status(200).json(art)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error getting the post"
      })
    })
});

router.get('/:id', validatePostId, (req, res) => {
  Posts.getById(req.params.id)
    .then(art => {
      res.status(200).json(art)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error getting the post"
      })
    })
});

router.delete('/:id', (req, res) => {
  Posts.remove(req.body)
  .then(donzo => {
    res.status(200).json({ message: "This id is donzo"});
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "This has issues my dude"
    });
  });
});

router.put('/:id', (req, res) => {
  Posts.update(req.body)
  .then(newStuff => {
    res.status(201).json(newStuff);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Can/did not update"
    })
  })
});

// custom middleware

function validatePostId(req, res, next) {
  if (req.params.post === res){
    next();
  } else {
    res.status(401).json({
      message: "YOUUU SHALL NOT... PASSSSS"
    })
  }
}

module.exports = router;
