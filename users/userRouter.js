const express = require('express');

const Users = require("./userDb.js");

const router = express.Router();

router.post('/', (req, res) => {
  Users.insert(req.body)
    .then(newStuff => {
      res.status(201).json(newStuff);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Can/did not post the post"
      })
    })
});

router.post('/:id/posts', (req, res) => {
  Users.insert(req.body.posts)
    .then(newStuff => {
      res.status(201).json(newStuff);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Can/did not post the post"
      })
    })
});

router.get('/', validateUser, (req, res) => {
  Users.get(req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error getting the user"
      });
    });
});

router.get('/:id', validateUserId, (req, res) => {
  Users.getById(req.params.id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error finding the ids"
      });
    });
});

router.get('/:id/posts', validatePost, (req, res) => {
  Users.getUserPosts(req.params.p)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the posts"
      });
    });
});

router.delete('/:id', (req, res) => {
  Users.remove(req.params.id)
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
  Users.update(req.body)
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

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  if (req.params.id === res){
    next();
  } else {
    res.status(401).json({
      message: "YOUUU SHALL NOT... PASSSSS"
    })
  }
}

function validateUser(req, res, next) {
  if (req.params.user === res){
    next();
  } else {
    res.status(401).json({
      message: "Who is you?"
    })
  }
}

function validatePost(req, res, next) {
  if (req.params.post === res){
    next();
  } else {
    res.status(401).json({
      message: "What is this business??"
    })
  }
}

module.exports = router;
