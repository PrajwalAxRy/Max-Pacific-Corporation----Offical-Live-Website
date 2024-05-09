import React from 'react'

import TeamCard from '../components/teamComponent'

import RamPrakashImage from '../assests/Team/RamPrakash.jpg';
import KamleshImage from '../assests/Team/Kamlesh.jpg';
import NareshImage from '../assests/Team/Naresh.jpg';

function Team() {

  const handleClickRam = () => {
    window.open('https://www.linkedin.com/in/ram-prakash-singh-82483b30/', '_blank');
  };

  const handleClickKamlesh = () => {
    window.open('https://www.linkedin.com/in/naresh-aggarwal-35688818/', '_blank');
  };

  const handleClickNaresh = () => {
    window.open('https://www.linkedin.com/in/naresh-aggarwal-35688818/', '_blank');
  };

  return (
    <div>
      <div className='w-11/12 mx-auto mb-10'>
        <h1 className='mt-11 font-extrabold text-5xl text-center'>Our Team</h1>
        <h2 className='mt-6 font-normal text-2xl text-customBlack text-center'>Meet our amazing team of some people who are doing something. I am not sur what but it does seem like that they are doing something.</h2>
      </div>

      <div className='w-full min-h-14'  style={{backgroundColor: '#F7F7F7'}}>
        <div className='w-11/12 mx-auto flex py-10 gap-4 justify-evenly'>
          <TeamCard
            image={RamPrakashImage}
            name="Ram Prakash Singh"
            designation={'Chief Technical Officer'}
            description={'Ram Prakash Singh is the Chief Technical Officer at our company. He is a very hardworking and dedicated person. He is responsible for the technical aspects of the company.'} 
            className=' shadow-2xl'
            onClick={handleClickRam}
          />
          
          <TeamCard
            image={KamleshImage}
            name="Kamlesh Agarwal"
            designation={'Managing Director & Founder'} 
            description={'Ram Prakash Singh is the Chief Technical Officer at our company. He is a very hardworking and dedicated person. He is responsible for the technical aspects of the company.'} 
            onClick={handleClickKamlesh}
          />

          <TeamCard
            image={NareshImage}
            name="Naresh Agarwal"
            designation={'Director'}
            description={'Ram Prakash Singh is the Chief Technical Officer at our company. He is a very hardworking and dedicated person. He is responsible for the technical aspects of the company.'} 
            onClick={handleClickNaresh}
          />
        </div>
      </div>

    </div>
  )
}

export default Team