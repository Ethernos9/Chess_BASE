import React from 'react'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className=" w-full h-screen flex items-center justify-center">
        <div className='h-[500px] w-[500px]'>
            <img className = "rounded-md" src="./chess-img.png" alt="" />
        </div>
        <div >
        <div className=" w-[400px] m-6 pt-40 h-screen p-8  ">
          <div className='flex-row gap-9'>
          <h1 className='text-white font-extrabold text-4xl text-center'>
           Play Chess Online <br/>on the #1 Site!
           </h1>
            <div className="pt-3">
               <button onClick = {()=>{
                  navigate("/game")
               }}className='bg-customGreen w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  '>
               Play Online
               </button>
               <button className='bg-customGreen mt-5 w-full hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  '>
               Play Bot
               </button>

            </div>
           
          </div>
          
        </div>
        </div>
        
    </div>
  )
}

export default Landing