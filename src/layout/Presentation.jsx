import React from 'react'
import PresentationCard from '../Component.jsx/PresentationCard'
import Managment from '../assets/Managment.png'
import Entertainment from '../assets/Entertainment.png'
import Marketing from '../assets/Marketing.png'
import References from '../assets/References.png'
import Subheading from '../Component.jsx/Subheading'
import Pera from '../Component.jsx/Pera'
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import Icon from '@mui/material/Icon'
import Icons from '../Component.jsx/Icons';


function Presentation() {
  return (
   <section className="bg-gray-50 md:py-[135px] py-10">
    <div className="md:px-20 px-4 container mx-auto flex flex-col md:flex-row items-start gap-x-20 gap-y-10">
        <div className="md:w-1/2 w-full grid md:grid-cols-2 grid-cols-1 gap-7">
        <PresentationCard image={Managment} tittle="Managment" des="Software platform for running your new internet business"/>
        <PresentationCard image={Entertainment} tittle="Entertainment" des="Software platform for running your new internet business"/>
        <PresentationCard image={Marketing} tittle="Marketing" des="Software platform for running your new internet business"/>
        <PresentationCard image={References} tittle="References" des="Software platform for running your new internet business"/>
        
        </div>

        <div className="md:w-1/2 w-full">
        <Subheading text="The quickest way to create modern presentation" className="w-full leading-[44px]  md:w-[440px] md:leading-[60px]" />
        <Pera text="Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce." className="md:w-[440px] mt-4 mb-8"/>
          <Button variant="contained" endIcon={<EastIcon />} className="!bg-[#5F62E2] !bg-opacity-[15%] !text-[#5F62E2] !capitalize !text-[16px]">
        Explore All
      </Button>

      <div className="md:mt-44 mt-10">
        <span className="font-normal text-lg text-black opacity-50">Follow us</span>

        <Icons />

      


        
      </div>
        
        </div>
    </div>


   </section>
  )
}

export default Presentation