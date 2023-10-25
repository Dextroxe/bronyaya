import { useQuery } from "@tanstack/react-query";
import { getAllInformation } from "@/utils/api";

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

const useGetAllInfo = (uid:string) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["getAllInfo"],
    queryFn: async () => {
      const data = await getAllInformation(uid);
      // console.log(data);
      return data;
    },
    enabled: false,
  });

  return { data, isLoading, isError, refetch };
};

export default useGetAllInfo;
