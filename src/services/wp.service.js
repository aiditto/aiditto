/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { API, Axios } from "api";
const wordpressService = {
  info: (instance, slug, callback) => {
    Axios.get(API.wp.info, {
      params: {
        instance: instance,
        slug: slug
      }
    })
      .then(response => {
        if (response && response.data) {
          callback(response);
        }
      })
      .catch(error => {
        callback(error);
      });
  },
  news: (instance, callback) => {
    Axios.get(API.wp.news, {
      params: {
        instance: instance
      }
    }).then(response => {
      if (response && response.data) {
        callback(response);
      }
    });
  }
};

export default wordpressService;
