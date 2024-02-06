"use client";

import Image from "next/image";

const ArtifactsCard = ({icon,subState,mainState}) => {
  const heightArtifact = "h-full w-[30rem]";
  const cardStyle = "flex justify-between  items-center";
  const ImgArtifact = `h-[6rem] w-[10rem] bg-background rounded-xl p-1 gap-2 flex justify-start items-center`;
  return (
    <div>
      <div className={`rounded-xl ${heightArtifact} flex gap-2`}>
        <div className={`${ImgArtifact}`}>
          <Image src={`https://enka.network/ui/${icon}.png`} width={100} height={140} alt="img" />
          <div className="flex items-center">
          <span className="text-white text-center font-bold">{mainState}</span>
          </div>
        </div>
        <div
          className={`h-[6rem] w-[20rem] bg-background rounded-xl p-4 grid grid-cols-2 grid-flow-row gap-2`}
        >
          {subState?.map((ele,index)=> {
            return(
              <div key={index} className="w-full bg-primary flex items-center justify-center">
                <span className="font-bold">{ele.statValue}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtifactsCard;
