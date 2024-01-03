import Image from "next/image";
import StatsCard from "./StatsCard";
import ArtifactsCard from "./ArtifactsCard";
import characters from "@/data/store/characters.json";
import en from "@/data/store/loc.json";

const MainCard = ({ avatar }) => {
  return (
    <div className="container relative w-[80rem] h-[35rem]  mb-20 rounded-xl overflow-hidden  bg-accent flex gap-2 justify-end items-center">
      <div className=" absolute h-full w-[40rem] -z-0 rounded-l-xl  overflow-x-hidden -left-20">
        <Image
          src={`https://cdn.wanderer.moe/genshin-impact/splash-art/${en.en[
            characters[avatar.avatarId].NameTextMapHash]
            .toLowerCase()
            .replace(" ", "-")}.png`}
          width={1900}
          height={1900}
          alt="img"
          className="overflow-hidden w-full h-full object-cover"
        />
      </div>

      <div className=" h-full w-[53rem] rounded-xl flex flex-row gap-2 z-10">
        <div className="flex flex-col gap-2 p-2">
          <div className=" h-[7rem] w-[20rem] rounded-xl flex gap-2">
            <div className={`h-full w-[5rem] bg-background rounded-xl p-1 `}>
              <Image src={`https://enka.network/ui/${avatar.equipList[avatar.equipList.length - 1].flat.icon}.png`} width={100} height={100} alt="img" />
            </div>
            <div className={`h-full w-[15rem] bg-background rounded-xl p-4 `}>
              <p className="text-lg font-bold">{en.en[avatar.equipList[avatar.equipList.length - 1].flat.nameTextMapHash]}</p>
            </div>
          </div>
          <div className="bg-secondary h-full w-[20rem] rounded-xl">
            <div className="flex w-full flex-col h-full justify-around">
              <StatsCard
                name={"HP"}
                effect={avatar?.fightPropMap[2000].toFixed()}
              />
              <StatsCard
                name={"ATK"}
                effect={avatar?.fightPropMap[2001].toFixed()}
              />
              <StatsCard
                name={"DEF"}
                effect={avatar?.fightPropMap[2002].toFixed()}
              />
              <StatsCard
                name={"EM"}
                effect={avatar?.fightPropMap[28].toFixed()}
              />
              <StatsCard
                name={"CR"}
                effect={(avatar?.fightPropMap[20] * 100).toFixed(1) + "%"}
              />
              <StatsCard
                name={"CD"}
                effect={(avatar?.fightPropMap[22] * 100).toFixed(1) + "%"}
              />
              <StatsCard
                name={"ER"}
                effect={(avatar?.fightPropMap[23] * 100).toFixed(1) + "%"}
              />
              <StatsCard
                name={"DMG Bonus"}
                effect={
                  characters[avatar?.avatarId].Element === "Water"
                    ? (avatar?.fightPropMap[42] * 100).toFixed(1) + "%"
                    : characters[avatar?.avatarId].Element === "Fire"
                    ? (avatar?.fightPropMap[40] * 100).toFixed(1) + "%"
                    : characters[avatar?.avatarId].Element === "Ice"
                    ? (avatar?.fightPropMap[30] * 100).toFixed(1) + "%"
                    : characters[avatar?.avatarId].Element === "Electro"
                    ? (avatar?.fightPropMap[41] * 100).toFixed(1) + "%"
                    : characters[avatar?.avatarId].Element === "Wind"
                    ? (avatar?.fightPropMap[44] * 100).toFixed(1) + "%"
                    : characters[avatar?.avatarId].Element === "Rock"
                    ? (avatar?.fightPropMap[45] * 100).toFixed(1) + "%"
                    : characters[avatar?.avatarId].Element === "Grass"
                    ? (avatar?.fightPropMap[43] * 100).toFixed(1) + "%"
                    : "gay"
                }
                // (avatar?.fightPropMap[30] * 100).toFixed(1)
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 justify-evenly">
          <ArtifactsCard />
          <ArtifactsCard />
          <ArtifactsCard />
          <ArtifactsCard />
          <ArtifactsCard />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
