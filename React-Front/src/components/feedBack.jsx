import React, { useState } from "react";
import axiosMethods from "../Models/axios";

function FeedBack(props) {

  const [feedbacks, setFeedbacks] = useState(
    {
      emailAddress: '',
      usercomment: null,
      userRank: null,
      feedbackTime: null,
    },
  );

  


  let handleChange = e => {
    let name = e.target.name;
    setFeedbacks({
      ...feedbacks,
      [name]: e.target.value
    });

  };

  let handleSubmit = () => {
    const obj = {
      emailAddress: feedbacks.emailAddress,
      usercomment: feedbacks.usercomment,
      userRank: feedbacks.userRank
    };
    axiosMethods.addFeedback(obj).then(res => {
      props.fetch();
    });
  };


  return (
    <div className="form-container">
      <div className="form-group">
        <label>Email:</label>
        <input className="form-control" type="text" name="emailAddress" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Comment:</label>
        <input className="form-control" type="text" name="usercomment" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Rank:</label>
        <input className="form-control" type="text" name="userRank" onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Send Comment</button>

    </div>
  );
}


export default FeedBack;