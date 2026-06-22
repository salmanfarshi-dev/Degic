import React from 'react'
import Subheading from '../Component.jsx/Subheading'
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import Icon from '@mui/material/Icon'
import Cards from '../Component.jsx/Cards';
import BlogImage from '../assets/vase-1-b 2 (1).png'
import BlogImage2 from '../assets/vase-1-b 2.png'
import BlogImage3 from '../assets/vase-1-b 2 (2).png'

function Blog() {
  return (
    <section className='md:px-20 px-4 md:pt-[117px] md:pb-[126px] pt-10 pb-10'>

        <Subheading className="" text="Get more from our blog"/>
        <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-y-4">
            <p className='text-black/50 text-[16px]
            font-inter md:tracking-[-0.8px md:leading-[30px]  md:text-xl md:w-[448px] flex-wrap'>There are a lot of different components that will help you create the perfect look for your project</p>

            <Button variant="contained" endIcon={<EastIcon />} className="!bg-[#5F62E2] !bg-opacity-[15%] !text-[#5F62E2] !capitalize !text-[16px]">
        Explore All
      </Button>
        </div>

        <div className="flex justify-between flex-wrap gap-8 mx-auto">
            <Cards src={BlogImage2} tittle="Make myspace your best designed space" pera="A lot of different components that will help you create the perfect look for your project" design="Design"/>
            <Cards src={BlogImage} tittle="My company culture has changed today" pera="A lot of different components that will help you create the perfect look for your project" design="3D illustrations"/>
            <Cards src={BlogImage3} tittle="Professionals in craft! All products were super great" pera="A lot of different components that will help you create the perfect look for your project" design="Development"/>
        </div>

    </section>
  )
}

export default Blog