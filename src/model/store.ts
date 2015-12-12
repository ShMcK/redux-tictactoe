"use strict";
import { createStore } from "redux";
import { reducer } from "./reducer";

export const store: Redux.Store = createStore(reducer);
