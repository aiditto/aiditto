import axios from "axios";

export const API = {
  demand: {
    create: "/demand/create",
    get: "/demand/get/:id",
    update: "/demand/update/",
    delete: "/demand/remove/:id",
    list: "/demand/list",
    shortlist: "/demand/shortlist"
  },
  supply: {},

  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    refresh_token: "/auth/refresh_token"
  },
  location: {
    getSwe: "/location/1/cities "
  },
  wp: {
    info: "/wp/page_info",
    news: "/wp/news"
  }
};

export const Axios = axios.create({
  baseURL: "https://aiditto.se"
});
