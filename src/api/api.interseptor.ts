import axios from "axios";

import { errorCatchMassage, getContentType } from "./api.helper";
import { API_URL } from "@/utils/config";

export const instance = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});
