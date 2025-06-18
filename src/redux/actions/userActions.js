import {
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from "../constants/userConstants";

export const fetchData = () => ({
  type: FETCH_DATA,
  url: "/users",
  method: "GET",
  onSuccess: FETCH_DATA_SUCCESS,
  onFailure: FETCH_DATA_FAILURE,
  loaderBtn: "getUsers",
});

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
