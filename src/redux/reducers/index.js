import post from "./post";
import auth from "./auth";
import movie from "./movie";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  post,
  auth,
  movie,
});
