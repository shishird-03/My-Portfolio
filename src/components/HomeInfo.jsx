import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div>
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-teal-100 mx-5'>
        Hi, I'm
        <span className=' text-teal-100 font-semibold mx-2 text-white'>Shishir D</span>
        👋<div className="text-black-500">

         Full-Stack &amp; Backend Developer<br></br>
         CSE student at NMAMIT, Nitte
         </div>
      </h1>
    </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center text-teal-100'>
          I build full-stack apps end to end <br /> REST APIs, databases and Python microservices
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more about me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl text-teal-100'>
          An AI-driven e-commerce platform, a YOLOv8 e-challan system <br /> and a fest site for 3000+ users
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center text-teal-100'>
        Need a project built or looking for an intern? <br/> Open to Development, SDET and DevOps roles
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
