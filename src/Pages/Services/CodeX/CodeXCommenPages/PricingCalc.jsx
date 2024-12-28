import React, { useState } from 'react'
import { HiQrCode } from 'react-icons/hi2'
import DiscreteSlider from '../../../../MUIComps/DiscreteSlider'
import { MdHeight } from 'react-icons/md'
import CustomButton from '../../../../Prebuild_Components/CustomButton'
import bgBox from '../../../../Assets/Images/ServicesIMG/BgBoxes.jpg'

const PricingCalc = ({page}) => {
    const [isCalculated , setCalculated] = useState(false)
    const [estimate , setEstimate] = useState(0)
    const [items , setItems] = useState(page.requirements)

    
    const valueChanger = (index, value) => {
        // Create a new array with all items
    const updatedItems = items.map((item, idx) => {
        if (idx === index) {
            // Return a new object for the updated item
            return { ...item, selected: value };
        }
        return item;
        });

        
        setItems(updatedItems);
    }

    const getEstimate = () => {
        let price = 0;
        items.map((item ) => {
            
            price += item.pricing[item.selected]
            
        })
        setEstimate(price)
        setCalculated(true)

    }

  return (
    <div className='w-full   px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center ' >

        <h1 className='2xl:text-[3rem] z-10 text-[2.5rem] font-[800]'  
        dangerouslySetInnerHTML={{
            __html: page.heading, 
          }}
        >
        </h1>

        <span className='absolute w-full h-full opacity-30 z-0' style={{backgroundImage : `url(${bgBox})`}}/>

        <div className='lg:w-3/4 w-full sm:px-10 mt-10 z-10'>
            {page.requirements.map((requirement , index ) => 
            <div key={index} className='w-full p-4  flex bg-white justify-evenly items-center'>

            <div className='flex-1 text-xl font-semibold text-left'>{requirement.item}</div>
            <div className='flex-1'><DiscreteSlider slider={requirement.slider} onValueChange={(value) => valueChanger(index, value)} className={{...requirement.className}}/>
            </div>
            <div className='flex gap-x-5 flex-1 justify-center '>
            <h1 className='font-bold text-lg bg-[#013a6e] text-white px-4 py-2 min-w-36 rounded-lg'>{items[index].options[items[index].selected]}</h1>    
            </div> 
            </div>
            )}
        </div>

            <div className='w-full py-8 z-10 '>
                <CustomButton onClick={getEstimate} text={"Get Your Estimated Price"} className={"bg-[#013a6e] px-6 py-4  text-white font-semibold"}/>
            </div>

            <div className='  font-bold text-xl z-10 text-[#013a6e]'>{isCalculated && `Your Estimated Price is $${estimate - 300} - $${estimate}`}</div>
        


    </div>
  )
}

export default PricingCalc