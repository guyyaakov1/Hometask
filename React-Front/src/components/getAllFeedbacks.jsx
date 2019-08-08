import React, { useState, useEffect } from "react";
import axios from 'axios';
import FeedBack from "./feedBack";
import { Popover, OverlayTrigger} from 'react-bootstrap';


function GetAllFeedbacks() {

  const [feedbacks, setFeedbacks] = useState([{
    feedbacks: [],
  }]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {

    const response = await axios.get("http://localhost:1000/getAllFeedbacks");

    if (response.status === 200) {
      setFeedbacks({ feedbacks: response.data.success });
    }

  };

  const popover = (x) => {
    return (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{x.emailAddress}</Popover.Title>
        <Popover.Content>
          Lest active: <strong>{x.feedbackTime}</strong>
        </Popover.Content>
      </Popover>
    )
  };

  const search = async function (e) {
    const response = await axios.post("http://localhost:1000/getUserFeedbacks", { emailAddress: e.target.value });
    if (response.status === 200) {
      setFeedbacks({ feedbacks: response.data.success });
    }

  };

  return (

    <div className="comment-container">
      <FeedBack fetch={fetchData} />
      <label>Write your email here:</label>
      <div className="input-group mb-3">
        <input placeholder="Filter" name="searchInput" onChange={search} type="text" className="form-control" />
        <div className="input-group-append">
          <span className="input-group-text"><i className='fas fa-search'></i>
          </span>
        </div>
      </div>
      
      {feedbacks.feedbacks && feedbacks.feedbacks.map((x,index) => {
        return (
          <div key={index} className="comment-item">
            <div className="comment-avatar">

              <OverlayTrigger trigger="click" placement="left" overlay={popover(x)}>
                <img src={x.gravatar} alt="not available" />
              </OverlayTrigger>
            </div>
            <div className="comment-info">
              <div className="comment-email">
                {x.emailAddress}
              </div>
              <div className="comment-content">
                {x.usercomment}
              </div>
            </div>
            <div className="rank">
              <i className='fas fa-star'></i>{x.userRank}
            </div>

          </div>)
      }
      )}

    </div>
  );
}

export default GetAllFeedbacks;