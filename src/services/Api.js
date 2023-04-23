import axios from "axios";
import { PER_PAGE_LIMIT } from "../utils/constants.js";

axios.defaults.baseURL = "https://6443e02c90738aa7c079a511.mockapi.io/";

export async function getUsers(page) {
  const response = await axios.get(
    `users?page=${page}&limit=${PER_PAGE_LIMIT}`
  );
  return response.data;
}

export async function updateFollowing(updatedUser) {
  const response = await axios.put(`users/${updatedUser.id}`, updatedUser);
  return response.data;
}
