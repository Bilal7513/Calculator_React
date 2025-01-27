import React, { useState } from 'react'
import CalBtn from './components/CalBtn'

function App() {
  const [number, setNumber] = useState("");

  const handleClick = (add) => {
    const lastChar = number.slice(-1);
    const operators = ['+', '-', '*', '/', '.', '%'];
    
    if (operators.includes(add)) {
      if (operators.includes(lastChar)) {
          setNumber(number.slice(0, -1) + add);
        } else {
          setNumber(number + add)
        }
    } else {
        setNumber(number + add)
      }
  }

  const clearAllBtn = () => {
    setNumber("")
  }

  const clearBtn = () => {
    setNumber(number.slice(0, -1));
  }

  const equalTo = () => {
    if(number){
      setNumber(String(eval(number)));
    }
  }

  return (
    <>
      <div className='bg-black w-[25%] mx-auto my-20 p-10 rounded-2xl flex flex-col'>
        <input type="text" className='text-white border-2 outline-0 rounded-[8px] mb-5 h-16 text-[22px]' value={number} readOnly/>
        <table>
          <tbody>
            <tr>
              <td className='flex justify-between'>
                <CalBtn text={"AC"} className={'bg-[#737374] text-[22px]'} btnClick={clearAllBtn}/>
                <CalBtn text={"C"} className={'bg-[#737374] text-[22px]' } btnClick={clearBtn}/>
                <CalBtn text={"%"} className={'bg-[#737374] text-[22px]' } btnClick={handleClick}/>
                <CalBtn text={"/"} className={'bg-[#FF9500] hover:bg-white hover:text-[#FF9500]' } btnClick={handleClick}/>
              </td>
            </tr>
            <tr>
              <td className='flex justify-between'>
                <CalBtn text={"7"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"8"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"9"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"*"} className={'bg-[#FF9500] hover:bg-white hover:text-[#FF9500]'} btnClick={handleClick}/>
              </td>
            </tr>
            <tr>
              <td className='flex justify-between'>
                <CalBtn text={"4"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"5"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"6"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"-"} className={'bg-[#FF9500] hover:bg-white hover:text-[#FF9500]'} btnClick={handleClick}/>
              </td>
            </tr>
            <tr>
              <td className='flex justify-between'>
                <CalBtn text={"1"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"2"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"3"} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"+"} className={'bg-[#FF9500] hover:bg-white hover:text-[#FF9500]'} btnClick={handleClick}/>
              </td>
            </tr>
            <tr>
              <td className='flex justify-between'>
                <CalBtn text={0} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px] w-[125px]'} btnClick={handleClick}/>
                <CalBtn text={"."} className={'bg-[#1C1C1C] hover:bg-[#737374] text-[22px]'} btnClick={handleClick}/>
                <CalBtn text={"="}  className={'bg-[#FF9500] hover:bg-white hover:text-[#FF9500]'} btnClick={equalTo}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
