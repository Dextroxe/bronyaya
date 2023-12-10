import axios from "axios";
import { toast } from "react-toastify";
export const api = axios.create({
  baseURL: "http://localhost:3001/api/uid",
});

export const getAllInformation = async (uid: string) => {
  try {
    const res = await api.get(`/${uid}`, {
      headers:{
        "User-Agent": "bronyaya "
      },
      timeout: 3 * 60 * 1000,
    });

    if (res.status === 400) {
      toast.error("Wrong UID format");
      // throw res.data;
    }
    else if (res.status === 404) {
      toast.error("Player does not exist (MHY server said that)");
      // throw res.data;
    }
    else if (res.status === 424 ) {
      toast.error("Game maintenance / everything is broken after the game update");
      // throw res.data;
    }
    else if (res.status === 429  ) {
      toast.error("Rate-limited (either by my server or by MHY server)");
      // throw res.data;
    }
    else if (res.status === 500  ) {
      toast.error("General server error");
      // throw res.data;
    }
    else if (res.status === 503   ) {
      toast.error("I screwed up massively");
      // throw res.data;
    }




    return res.data;
  } catch (error) {
    toast.error("Something went wrong while fetching the properties");
    throw error;
  }
};
