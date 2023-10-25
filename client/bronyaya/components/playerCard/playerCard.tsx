import { PuffLoader } from "react-spinners";
import characters from "@/data/store/characters.json";
import Image from "next/image";
import Text from "../Canvas/text";
const PlayerCard = ({ data, isError, isLoading, refetch }) => {
  // console.log(characters[10000038].Consts[0]);

  const cardStyle = "flex justify-between  items-center hover:bg-slate-300 "
  if (!data) {
    return (
      <div className="container w-full h-[100vh]  mb-20 rounded-xl bg-accent flex ">
        
      </div>
    );
  }
  return <></>;
};

export default PlayerCard;
