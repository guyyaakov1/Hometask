import axios from "axios";

const API="http://localhost:1000/"


function addFeedback(obj) {
  return axios.post(`${API}register`, {
    emailAddress: obj.emailAddress,
    usercomment: obj.usercomment,
    userRank: obj.userRank,
  });
}

function getAllFeedback(){
    return axios.get(`${API}getAllFeedbacks`)
}

let axiosMethods = {
    addFeedback: addFeedback,
    getAllFeedback:getAllFeedback
  };
  export default axiosMethods;
  