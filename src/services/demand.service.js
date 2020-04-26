/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { API, Axios } from "api";
import { authHeader } from "shared/utility";

const demandService = {
  shortList: callback => {
    Axios.get(API.demand.shortlist, {})
      .then(response => {
        if (response.data && response.data.message) {
          callback(response);
        }
      })
      .catch(error => {
        callback(error);
      });
  },
  list: callback => {
    Axios.get(API.demand.list, {
      headers: authHeader()
    })
      .then(response => {
        if (response.data && response.data.message) {
          callback(response);
        }
      })
      .catch(error => {
        callback(error);
      });
  },
  addDemand: (data, callback) => {
    Axios.post(API.demand.create, data, {
      headers: authHeader()
    })
      .then(response => {
        if (response.data && response.data.message) {
          callback(response);
        }
      })
      .catch(error => {
        callback(error);
      });
  },
  deleteDemand: (demandId, callback) => {
    Axios.delete(API.demand.delete.replace(":id", demandId), {
      headers: authHeader()
    })
      .then(response => {
        callback(response);
      })
      .catch(error => {
        console.log(error);
        callback(error);
      });
  },
  updateDemand: (demandId, data, callback) => {
    Axios.put(API.demand.create, data)
      .then(response => {
        if (response.data && response.data.message) {
          callback(response);
        }
      })
      .catch(error => {
        callback(error);
      });
  }
};

export default demandService;
