"use client";

import { PuffLoader } from "react-spinners";
import characters from "@/data/store/characters.json";
import Image from "next/image";
import Text from "../Canvas/text";
import ArtifactsCard from "./ArtifactsCard";
import StatsCard from "./StatsCard";
import MainCard from "./MainCard";
import en from "@/data/store/loc.json";
import { useState } from "react";

const PlayerCard = ({ data, isError, isLoading, refetch }) => {

  // {console.log(characters[10000002].NameTextMapHash)}

  const heightArtifact = "h-[22rem] w-[30rem]";
  const cardStyle = "flex justify-between  items-center";
  const ImgArtifact = `h-full w-[10rem] bg-background rounded-xl p-1`;

  const [currentIndex, setCurrentIndex] = useState(0);

  const setAvatar = (index) => {
    setCurrentIndex(index);
  };

  if (!data) {
    return <div>Uid Where</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex gap-2 p-2 mb-4 w-full h-20 justify-center items-center">
        {data?.avatarInfoList?.map((avatar, index) => (
          <div
            key={avatar.avatarId}
            onClick={() => setAvatar(index)}
            className={`w-[6rem] h-14 ${
              index === currentIndex ? 'bg-primary -top-2 ' : 'bg-secondary'}  flex items-center justify-center  cursor-pointer relative rounded-full gap-4`}
          >
      {/* {console.log(avatar.equipList[2].flat.icon)} */}

            <Image
              src={`https://enka.network/ui/${
                characters[avatar.avatarId].SideIconName
              }.png`}
              width={100}
              height={100}
              alt="img"
              className="absolute -top-10 w-full"
            />
          </div>
        ))}
      </div>
      <div>
        {data?.avatarInfoList?.map((avatar, index) => (
          <div
            key={avatar.avatarId}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <MainCard key={avatar.avatarId} avatar={avatar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
