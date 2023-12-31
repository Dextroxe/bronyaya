"use client"
import Image from "next/image";

interface StatsCardProps {
    name?: string;
    effect?: number;
  }


const StatsCard = ({name,effect}:StatsCardProps) => {
    return (
        <div>
            <div className="hp flex justify-between w-full p-2">
                  <div className="flex">
                    <Image
                      src="/icons/hp.png"
                      width={20}
                      height={20}
                      alt="img"
                    />
                    <p className="font-bold">{name}</p>
                  </div>
                  <div className="font-bold">
                    <p>{effect}</p>
                  </div>
                </div>
        </div>
    );
}

export default StatsCard;