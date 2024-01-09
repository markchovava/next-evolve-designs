import { BsArrowRight } from 'react-icons/bs'



export default function Subscribe() {
  return (
    <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto '>
    <div className='mx-auto w-[80%] py-[4rem] flex flex-col items-center justify-center'>
        <label className='text-2xl italic text-white block pb-4'>
            Send us A WhatsApp Message.
        </label>
            <button 
                className='group flex items-center justify-center gap-1 rounded-lg py-4 px-10 text-white border hover:bg-gradient-to-br drop-shadow-lg hover:from-gray-400 hover:to-slate-600'>
                WhatsApp Link <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
            </button>
        <div className='w-[100%] flex justify-start items-center gap-4'>
            {/* <input type='text' className='w-[85%] text-white py-5 px-3 rounded-lg outline-none bg-white/20 border border-white' />   */}
        </div>
    </div>
</section>
  )
}
