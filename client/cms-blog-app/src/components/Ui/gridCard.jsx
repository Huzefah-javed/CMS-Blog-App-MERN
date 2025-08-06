import { IoIosArrowBack } from "react-icons/io"

export function GridCard({cards}){

    return(<>
            
            <div className="grid grid-cols-2 grid-rows-[auto] gap-5 my-6">
        {cards?.map((element, id) => {
            const key = Object.keys(element)
            const val = Object.values(element)
            return(
                <section key={id} className="bg-white rounded-2xl p-6 shadow-2xl dark:bg-[#ffffff10]">
                    <div className="flex justify-between mb-4 font-extrabold text-slate-500"><h3>{key}</h3><IoIosArrowBack/></div>
                    <div className="text-[2rem] dark:text-white">{val}</div>
                </section>
            )

})}
            </div>
        
        </>)
}