import { PuffLoader } from "react-spinners";
import characters from "@/data/store/characters.json";
import Image from "next/image";
import Text from "../Canvas/text";
import ArtifactsCard from "./ArtifactsCard";
import StatsCard from "./StatsCard";

const PlayerCard = ({ data, isError, isLoading, refetch }) => {
  // console.log(characters[10000038].Consts[0]);
  const heightArtifact = "h-[22rem] w-[30rem]";
  const cardStyle = "flex justify-between  items-center";
  const ImgArtifact = `h-full w-[10rem] bg-background rounded-xl p-1`;
  if (!data) {
    return (
      <div className="container w-[80rem] h-[35rem]  mb-20 rounded-xl bg-accent flex gap-2 justify-start items-center">
        <div className="bg-secondary h-full w-[40rem]  rounded-l-xl">

            <Image
              src="https://cdn.wanderer.moe/genshin-impact/splash-art/zhongli.png"
              width={1900}
              height={1900}
              alt="img"
              className="overflow-hidden w-full h-full object-cover"
            />
        
        </div>
        <div className=" h-full w-[100rem] rounded-xl flex flex-row gap-2 justify-around">
          <div className="flex flex-col gap-2 p-2">
            <div className="bg-secondary h-[7rem] w-[25rem] rounded-xl">
              <div className={`h-full w-[8rem] bg-background rounded-xl p-1`}>
                <Image src="/icons/hp.png" width={20} height={20} alt="img" />
              </div>
            </div>
            <div className="bg-secondary h-full w-[25rem] rounded-xl">
              <div className="flex w-full flex-col h-full justify-around">
                <StatsCard name={"HP"} effect={999999} />
                <StatsCard name={"ATK"} effect={999999} />
                <StatsCard name={"DEF"} effect={999999} />
                <StatsCard name={"EM"} effect={999999} />
                <StatsCard name={"ER"} effect={999999} />
                <StatsCard name={"CR"} effect={999999} />
                <StatsCard name={"CD"} effect={999999} />
                <StatsCard name={"DMG Bonus"} effect={999999} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 justify-around">
            <ArtifactsCard />
            <ArtifactsCard />
            <ArtifactsCard />
            <ArtifactsCard />
            <ArtifactsCard />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div>{data.playerInfo.nickname}</div>
    </>
  );
};

export default PlayerCard;
