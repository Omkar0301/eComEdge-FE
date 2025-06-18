import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_DATA } from "./constants/userConstants";
import {
  ADD_LOADER_BUTTON,
  REMOVE_LOADER_BUTTON,
} from "./constants/uiConstants";
import apiInstance from "@/utils/api";
import { showAlert } from "@/utils/alerts";

function* genericApiSaga(action) {
  const {
    url,
    method = "GET",
    contentType = "application/json",
    data,
    onSuccess,
    onFailure,
    loaderBtn,
  } = action;
  try {
    if (loaderBtn) {
      yield put({ type: ADD_LOADER_BUTTON, payload: loaderBtn });
    }
    const response = yield call(apiInstance.request, {
      method,
      url,
      headers: {
        "Content-Type": contentType,
      },
      data,
    });

    if (onSuccess) {
      yield put({ type: onSuccess, payload: response.data });
    }
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || error.message || "API Error";

    yield call(showAlert, errorMessage, "error");

    if (onFailure) {
      yield put({ type: onFailure, payload: error.message });
    }
  } finally {
    if (loaderBtn) {
      yield put({ type: REMOVE_LOADER_BUTTON, payload: loaderBtn });
    }
  }
}

function* watchFetchData() {
  yield takeEvery([FETCH_DATA], genericApiSaga);
}

export default function* rootSaga() {
  yield watchFetchData();
}
