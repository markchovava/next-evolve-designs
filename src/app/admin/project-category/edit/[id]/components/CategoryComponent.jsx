"use client"
import { MdOutlineRemoveCircle } from "react-icons/md";


export default function CategoryComponent({ id, category }) {

    console.log(category)
  return (
    <div key={id} className='w-[100%] mb-[2rem] flex justify-start items-center gap-3'>
        <select
            type="select"
            name='level'
            className="w-[90%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300">
            <option value=''>Select an option.</option>
            { category.length > 0 && 
                category.map((item) => (
                    <option value={item.id}>
                        {item.name}</option>
                ))
            }
        </select>
        <MdOutlineRemoveCircle className="text-2xl" />

    </div>
  )
}
