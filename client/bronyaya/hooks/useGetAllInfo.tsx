import { useQuery } from "@tanstack/react-query";
import { getAllInformation } from "@/utils/api";
import { toast } from "react-toastify";


interface IPlayerInfo {
  playerInfo: {
    nickname: string;
    level: number;
    signature: string;
    worldLevel: number;
    nameCardId: number;
    finishAchievementNum: number;
    towerFloorIndex: number;
    towerLevelIndex: number;
    showAvatarInfoList: [
      { avatarId: number; level: number },
      { avatarId: number; level: number },
      { avatarId: number; level: number },
      { avatarId: number; level: number }
    ];
    showNameCardIdList: [number];
    profilePicture: { avatarId: number };
  };
  ttl: number;
  uid: string;
}

const useGetAllInfo = (uid: string) => {
  const { data, isLoading, isError, refetch, error } = useQuery({
    queryKey: ["getAllInfo"],
    queryFn: async () => {
      try {
        const data = await getAllInformation(uid);
        return data;
      } catch (error:any) {
        // Handle error and show toast
        if (error.response && error.response.status) {
          handleApiError(error.response.status);
        } else {
          toast.error("Something went wrong while fetching the properties");
        }

        // Rethrow the error to let react-query handle it
        throw error;
      }
    },
      
    enabled: false,
  });

  // Function to handle specific API errors
  const handleApiError = (status: number) => {
    switch (status) {
      case 400:
        toast.error("Wrong UID format");
        break;
      case 404:
        toast.error("Player does not exist (MHY server said that)");
        break;
      case 424:
        toast.error("Game maintenance / everything is broken after the game update");
        break;
      case 429:
        toast.error("Rate-limited (either by my server or by MHY server)");
        break;
      case 500:
        toast.error("General server error");
        break;
      case 503:
        toast.error("I screwed up massively");
        break;
      default:
        toast.error("An unexpected error occurred");
    }
  };

  return { data, isLoading, isError, refetch, error };
};

export default useGetAllInfo;
