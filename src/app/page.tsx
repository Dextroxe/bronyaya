'use client'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

// const { EnkaClient, DetailedGenshinUser } = require("enka-network-api");
// const enka = new EnkaClient({ defaultLanguage: "en" });


// import EnkaFetch from '@/components/EnkaFetch'



const fetcher = (...args) => fetch(...args).then((res) => res.json())


export async function show (index:number) {
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  // const data  =await useSWR(`https://enka.network/api/uid/804202517?info`, fetcher)
  const url = 'https://enka.network/api/uid/804202517?info'
  const response =await fetch(url);
  const data = response.text();
  // console.log(data);
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
 
  return {
    props: {userData:data}
  }
}


// async function run() {
//   const uid = 825436041;
//   /** @type {DetailedGenshinUser} */
//   const user = await enka.fetchUser(uid);

//   const characters = user.characters;

//   if (characters.length === 0) {
//       console.log("This user has no detailed characters on the profile.");
//       return;
//   }

//   for (const char of characters) {
//       const name = char.characterData.name.get();
//       const level = char.level;
//       const maxLevel = char.maxLevel;
//       const statsList = char.stats.statProperties.map((stats) => {
//           return ` - ${stats.fightPropName.get()}: ${stats.valueText}`;
//       });

//       console.log(`${name} - Lv.${level}/${maxLevel}\n${statsList.join("\n")}`);
//   }

//   enka.close();
// }





export default function Home() {


  const list = ['Character List', 'TCG', "4.0 update", "Genshin Code", "UID"]
  console.log(show(804202517))


  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div className='bg-black w-[95%] text-white flex justify-center items-center py-2 text-xl'><h1>Bronyaya</h1></div>
        <div className=' w-[95%] h-[30rem] relative  bg-cover shadow-lg' style={{ backgroundImage: `url('/genshin-impact-4.0.webp')` }}>
          <div className='absolute bottom-0.5 flex  items-center w-full justify-around h-[3rem]  backdrop-contrast-50 backdrop-blur-sm drop-shadow-lg shadow-lg shadow-yellow-500 '>
            {/* <p className=' text-semibold text-2xl text-orange-300'>Genshin Impact v4.0</p> */}
          </div>
        </div>
        <div className='w-[95%] h-[4rem] border-2 shadow-lg flex justify-evenly items-center'>
          {list.map((ele) => {
            return (
              <p key={ele} className=' hidden md:flex hover:shadow-lg border-x-[1px] w-full h-full text-center items-center justify-center cursor-pointer' >{ele}</p>
            )
          })}
        </div>
        <h1>sure</h1>
        {/* {<EnkaFetch/>} */}
      </div>
     

    </>
  )
}
