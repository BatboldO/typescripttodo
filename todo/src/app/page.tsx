'use client'

import {useState} from  "react"


export default function Home() {
  const [count, setCount] = useState<number>(10);

  
  const add = () => {
    setCount((prev) => prev + 1);
  };
  const sub = () => { 
    setCount((prev) => prev - 1);
  }
  return (
    <main className="flex  flex-col items-center justify center p-24 bg-indigo-200">
      <h1 className="text-xl text-indigo-500 m-6">Todo Application</h1>
      {/* <p className="text-xl  text-gray-600 dark:text-gray"> Count:{count}</p> */}
      {/* <div className="flex justify-content"> 
      <button className="border rounded-md m-4 p-3 bg-slate-300" onClick={add}>+1</button>
      <button className="border rounded-md m-4 p-3 bg-slate-300" onClick={sub}>-1</button>
      </div> */}
      
      

     <div className=" flex flex-row grid grid-cols-3 divide-x gap-6 w-full h-full">
     <div className=" border rounded-lg px-12 pb-64 bg-gray-200 text-indigo-400">To do</div>
     <div className=" border rounded-lg px-12 pb-64 bg-gray-200 text-indigo-400">In progress</div>
     <div className=" border rounded-lg px-12 pb-64 bg-gray-200 text-indigo-400">Closed</div>
     </div>
     
    </main>
  );
}
