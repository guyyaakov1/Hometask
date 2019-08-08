const mongoose = require('mongoose');

const feedbackSheme = mongoose.Schema({
    gravatar:{
    type:String,
    required:true,
    },
    emailAddress:{
        type:String,
        required:true,
    },
    usercomment:{
        type:String,
        required:true,
    },
    userRank:{
        type:Number,
        required:true,
    },
    feedbackTime:{ 
      type: Date, 
      default: Date.now
    },
});

const feedbackTable = mongoose.model("feedback", feedbackSheme);

createFeedback = data => {
  let p = new Promise((resolve, reject) => {
      let feedbackObj = feedbackTable({
        gravatar: data.gravatar,
        emailAddress: data.emailAddress,
        usercomment: data.usercomment,
        userRank: data.userRank,
        feedbackTime:data.feedbackTime,
      });
      feedbackObj.save();
      resolve("feedback created");
  });
  return p;
};

getAllFeedbacks= ()=>{
  let p = new Promise((resolve, reject)=>{

    feedbackTable.find().then(feedbacks=>{
      if (!feedbacks) reject("no users found");
      resolve(feedbacks);
    })
  })
  return p;
};



getUserFeedbacks=(data)=>{
  let p = new Promise((resolve, reject)=>{
    console.log(data.emailAddress)
    feedbackTable.find( { 'emailAddress' : { '$regex' : data.emailAddress, '$options' : 'i' } } ).then((feedbacks) => {
      if (!feedbacks) reject("no users found");
      console.log(feedbacks)
      resolve(feedbacks);
    })
  })
  return p;
}
module.exports={
  createFeedback: createFeedback,
  getAllFeedbacks: getAllFeedbacks,
  getUserFeedbacks: getUserFeedbacks
}
