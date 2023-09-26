import { useEffect, useState } from "react";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
const { EnkaClient, DetailedGenshinUser } = require("enka-network-api");
const enka = new EnkaClient({ defaultLanguage: "en" });



async function run() {
    const uid = 825436041;
    /** @type {DetailedGenshinUser} */
    const user = await enka.fetchUser(uid);

    const characters = user.characters;

    if (characters.length === 0) {
        console.log("This user has no detailed characters on the profile.");
        return;
    }

    for (const char of characters) {
        const name = char.characterData.name.get();
        const level = char.level;
        const maxLevel = char.maxLevel;
        const statsList = char.stats.statProperties.map((stats) => {
            return ` - ${stats.fightPropName.get()}: ${stats.valueText}`;
        });

        console.log(`${name} - Lv.${level}/${maxLevel}\n${statsList.join("\n")}`);
    }

    enka.close();
}



const EnkaFetch = async() => {
    return (
        <div className="flex items-center justify-center gap-3">
            <input className="rounded-full p-2 text-center border-2 hover:shadow-xl shadow-md" placeholder="804202517"/>
            <div>
                <p className="text-2xl rounded-full w-20 text-center border-2 hover:shadow-xl shadow-md cursor-pointer">{`<-`}</p>
            </div>
            <div>
                {/* {users.map((ele:ele) =>{
                    return(
                        <>
                        <p key={ele.id}>{ele.name}</p>
                        </>
                    )
                })} */}
                {/* {users.playerInfo.nickname} */}
            
            </div>
            {/* <p>{users.uid}</p> */}
            {/* {users.playerInfo.nickname} */}
            {/* {useEffect(()=>{
            },[])} */}
            {/* run() */}
        </div>
       
    );
}

export default EnkaFetch;