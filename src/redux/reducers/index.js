import post from "./post";
import auth from "./auth";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  post,
  auth,
});
