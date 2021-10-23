import axios from 'axios';

const URL='https://lit-ridge-19324.herokuapp.com/api/feedbacks'

async function sendFeedback(data) {
    try {
      const response = await axios.post(`${URL}`, data);
      // const response = await axios.get(URL, data.email)
      const resStatus = response.data;
     return resStatus
  } catch (error) {
      console.error(error);
  }
}
export default sendFeedback;