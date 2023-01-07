import axios from "axios";

const endpoint = `http://${process.env.REACT_APP_backend_host}:${process.env.REACT_APP_backend_port}/graphql`;

export const apiCaller = async (graphqlQuery, token) => {
  try {

    // console.log(graphqlQuery)

    const headers = {
      "content-type": "application/json",
      Authorization: token,
    };

    const options = {
      method: "POST",
      url: endpoint,
      headers: headers,
      data: graphqlQuery,
    };

    return await axios.request(options);
  } catch (error) {
    console.log(error);
  }
};
