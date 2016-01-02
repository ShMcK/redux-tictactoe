"use strict";
import { createStore } from "redux";
import { reducer } from "./reducer";

// data store
export const store: Redux.Store = createStore(reducer);
