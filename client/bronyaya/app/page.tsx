"use client";

import { useState, useEffect } from "react";
import useGetAllInfo from "@/hooks/useGetAllInfo";
import { PuffLoader } from "react-spinners";
import PlayerCard from "@/components/playerCard/playerCard";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const { data, isError, isLoading, refetch } = useGetAllInfo(inputValue);

  const handleSearchClick = () => {
    refetch();
    window.scrollX = 200;
  };

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }
  if (isLoading) {
    console.log(isLoading ? "yes" : "no");
  }


  return (
    <div className="w-full flex flex-col">
      <div className="p-2 mb-20 flex justify-evenly w-full  mt-20 h-20">
        <input
          className="rounded-lg text-center  h-16 w-[30em] bg-secondary"
          placeholder="804202517 "
          value={inputValue}
          type="number"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="rounded-sm  border-t-fuchsia-600 h-16 w-32 bg-accent"
          onClick={handleSearchClick}
          disabled={isLoading}
        >
          Search
        </button>
      </div>

      <div className="w-full flex justify-center">
        {isLoading ? (
          <PuffLoader size={20} color="#4066ff" aria-label="puff-loading" />
        ) : (
          <PlayerCard
            data={data}
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
}
