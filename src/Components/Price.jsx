import React from 'react'

const Price = (props) => {
    return (
        <div style={{height: props.height}} className='price border-[0.5px] border-black/20 shadow shadow-lg rounded-[24px] flex flex-col gap-1 pt-[75px] h-[450px] w-[333px] p-5'>
            <div className="text">
                <span className='text-black font-bold'>{props.title}</span>
                <h1 className='font-[900] text-[25px]'>{props.price}</h1>
                <span className='section-mini-des'>Lorem ipsum dolor, sit amet consectetur.</span>
            </div>
            <div className='mt-3 flex-1'>
                <div className='item flex gap-2 items-center text-md text-[#656565]'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[#FB7916]'></div>
                    <span>Lorem, ipsum dolor sit amet</span>
                </div>
                <div className='item flex gap-2 items-center text-md text-[#656565]'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[#FB7916]'></div>
                    <span>Lorem, ipsum dolor sit amet</span>
                </div>
                <div className='item flex gap-2 items-center text-md text-[#656565]'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[#FB7916]'></div>
                    <span>Lorem, ipsum dolor sit amet</span>
                </div>
                <div className='item flex gap-2 items-center text-md text-[#656565]'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[#FB7916]'></div>
                    <span>Lorem, ipsum dolor sit amet</span>
                </div>
            </div>

            {/* Move the button to the bottom of the container */}
            <button 
                style={{ backgroundColor: props.bg, color: props.color}}
                className={`w-[100%] rounded-[12px] p-3 border-[2px] font-semibold border-[#FB7916] flex justify-center items-center mt-auto`}>Get started</button>
        </div>
    )
}

export default Price
