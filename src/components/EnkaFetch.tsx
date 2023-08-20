const EnkaFetch = async() => {
    return ( 
        <div className="flex items-center justify-center gap-3">
            <input className="rounded-full p-2 text-center border-2 hover:shadow-xl shadow-md" placeholder="804202517"/>
            <div>
                <p className="text-2xl rounded-full w-20 text-center border-2 hover:shadow-xl shadow-md cursor-pointer">{`<-`}</p>
            </div>
        </div>
     );
}
 
export default EnkaFetch;