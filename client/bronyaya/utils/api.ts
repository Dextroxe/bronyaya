"use client"

import axios from "axios";
import { toast } from "react-toastify";

// Create an Axios instance with default configurations
export const api = axios.create({
  baseURL: "http://localhost:3001/api/uid",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
  timeout: 3 * 60 * 1000,
});

export const getAllInformation = async (uid: string) => {
  try {
    const res = await api.get(`/${uid}`);
    
    // Handle different status codes
    if (res.status === 400) {
      toast.error("Wrong UID format");
    } else if (res.status === 404) {
      toast.error("Player does not exist (MHY server said that)");
    } else if (res.status === 424) {
      toast.error("Game maintenance / everything is broken after the game update");
    } else if (res.status === 429) {
      toast.error("Rate-limited (either by my server or by MHY server)");
    } else if (res.status === 500) {
      toast.error("General server error");
    } else if (res.status === 503) {
      toast.error("I screwed up massively");
    }

    return res.data;
  } catch (error) {
    toast.error("Something went wrong while fetching the properties");
    throw error;
  }
};