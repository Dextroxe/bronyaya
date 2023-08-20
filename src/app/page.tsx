import EnkaFetch from "@/components/EnkaFetch"

export default function Home() {
  const list = ['Character List','TCG',"4.0 update","Genshin Code","UID"]
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-black w-[95%] text-white flex justify-center items-center py-2 text-xl'><h1>Bronyaya</h1></div>
      <div className=' w-[95%] h-[30rem] relative  bg-cover shadow-lg' style={{backgroundImage:`url('/genshin-impact-4.0.webp')`}}>
        <div className='absolute bottom-0.5 flex  items-center w-full justify-around h-[3rem]  backdrop-contrast-50 backdrop-blur-sm drop-shadow-lg shadow-lg shadow-yellow-500 '>
        {/* <p className=' text-semibold text-2xl text-orange-300'>Genshin Impact v4.0</p> */}
        </div>
      </div>
      <div className='w-[95%] h-[4rem] border-2 shadow-lg flex justify-evenly items-center'>
          {list.map((ele) => {
            return(
              <p key={ele} className=' hidden md:flex hover:shadow-lg border-x-[1px] w-full h-full text-center items-center justify-center cursor-pointer' >{ele}</p>
            )
          })}
      </div>
    </div>
      <div className="mt-8 flex flex-col items-center justify-center">
      <EnkaFetch/>
      </div>
    </>
  )
}
