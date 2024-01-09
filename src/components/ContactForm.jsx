
import { BsArrowRight } from 'react-icons/bs'

export default function ContactForm() {
  return (
    <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
          {/* Title */}
          <div className="w-[100%] flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem]">Talk to us.</h1>
            <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
          </div>
          <div className="">
           {/*  <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
              <input type="text" placeholder="Write your First Name..." className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
              <input type="text" placeholder="Write your Last Name..." className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div> */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
              <input type="text" placeholder="Write your Email / Phone Number here..." className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
             {/*  <input type="text" placeholder="Write your Last Phone Number..." className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" /> */}
            </div>
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
              <textarea placeholder="Write your Message here..." className="w-[100%] h-[10rem] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300"></textarea>
            </div>
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
              <button className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                Submit<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
          </div>
        </div>
      </section>
  )
}
