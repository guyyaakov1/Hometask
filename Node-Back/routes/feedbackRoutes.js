const express = require("express");
const feedbackModel = require("../Models/feedbackMeng");

const router = express.Router();

const gravatar = require('nodejs-gravatar');

router.get("/getAllFeedbacks",(req, res) => {
  feedbackModel
    .getAllFeedbacks()
    .then(data => {
      console.log(data);
      
      return res.status(200).json({ success: data });
    })
    .catch(error => {
      return res.status(207).json({ error: error });
    });
});


router.post("/getUserFeedbacks",(req, res) => {
  feedbackModel
    .getUserFeedbacks(req.body)
    .then(data => {
      return res.status(200).json({ success: data });
    })
    .catch(error => {
      return res.status(207).json({ error: error });
    });
});


router.post("/register", (req, res) => {
  console.log('email-----1-',req.body);

  const gravatarImg = gravatar.imageUrl(req.body.emailAddress ,  {s: '100', r: 'x', d: 'retro'}, true)

  let obj = {
    gravatar: gravatarImg,
    emailAddress: req.body.emailAddress,
    usercomment: req.body.usercomment,
    userRank: req.body.userRank,
  };

  feedbackModel
    .createFeedback(obj)
    .then(data => {
        console.log(obj.gravatar);
        
      // console.log({success: data});
      return res.status(200).json({ success: data });
    })
    .catch(error => {
      //console.log({error: error});
      return res.status(207).json({ error: error });
    });
});

module.exports = router;
