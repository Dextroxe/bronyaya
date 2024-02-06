import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-60 bg-teal-600 border-y-2 rounded-md mt-20">
            <div className="flex w-full justify-center items-center gap-10 h-full">
            
                    <Link href="https://github.com/Dextroxe/bronyaya.git" ><span className="text-xl cursor-pointer">Github</span></Link>
                    <Link href="https://discord.gg/AV9zcCAd" ><span className="text-xl cursor-pointer">Discord</span></Link>
                    
               
            </div>
        </div>
    );
}

export default Footer;