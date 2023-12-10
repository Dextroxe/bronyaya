import Image from "next/image";

const ArtifactsCard = () => {
  const heightArtifact = "h-full w-[30rem]";
  const cardStyle = "flex justify-between  items-center";
  const ImgArtifact = `h-[6rem] w-[10rem] bg-background rounded-xl p-1`;
  return (
    <div>
      <div className={`rounded-xl ${heightArtifact} flex gap-1`}>
        <div className={`${ImgArtifact}`}>
        <Image src="/icons/hp.png" width={20} height={20} alt="img" />
        </div>
        <div
          className={`h-[6rem] w-[20rem] bg-background rounded-xl p-4 grid grid-cols-2 grid-flow-row gap-2`}
        >
          <div className="flex">
            <Image src="/icons/hp.png" width={20} height={20} alt="img" />
            <p>e1</p>
          </div>
          <div className="flex">
            <Image src="/icons/hp.png" width={20} height={20} alt="img" />
            <p>e1</p>
          </div>
          <div className="flex">
            <Image src="/icons/hp.png" width={20} height={20} alt="img" />
            <p>e1</p>
          </div>
          <div className="flex">
            <Image src="/icons/hp.png" width={20} height={20} alt="img" />
            <p>e1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsCard;
