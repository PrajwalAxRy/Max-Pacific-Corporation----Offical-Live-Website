import React from 'react'

import TeamCard from '../components/teamComponent'

import RamPrakashImage from '../assests/Team/RamPrakash.jpg';
import KamleshImage from '../assests/Team/Kamlesh.jpg';
import NareshImage from '../assests/Team/Naresh.jpg';

function Team() {

  const handleClickRamX = () => {
    window.open('https://www.linkedin.com/in/ram-prakash-singh-82483b30/', '_blank');
  };

  const handleClickRamLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ram-prakash-singh-82483b30/', '_blank');
  };

  const handleClickRamFacebook = () => {
    window.open('https://www.linkedin.com/in/ram-prakash-singh-82483b30/', '_blank');
  };

  const handleClickKamleshX = () => {
    window.open('https://www.linkedin.com/in/kamlesh-aggarwal-66475767/', '_blank');
  };

  const handleClickKamleshLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kamlesh-aggarwal-66475767/', '_blank');
  };

  const handleClickKamleshFacebook = () => {
    window.open('https://www.linkedin.com/in/kamlesh-aggarwal-66475767/', '_blank');
  };

  

  const handleClickNareshX = () => {
    window.open('https://www.linkedin.com/in/naresh-aggarwal-35688818/', '_blank');
  };

  const handleClickNareshLinkedIn = () => {
    window.open('https://www.linkedin.com/in/naresh-aggarwal-35688818/', '_blank');
  };

  const handleClickNareshFacebook = () => {
    window.open('https://www.linkedin.com/in/naresh-aggarwal-35688818/', '_blank');
  };

  return (
    <div>
      <div className='w-11/12 mx-auto mb-10'>
        <h1 className='mt-11 font-extrabold text-2xl md:text-5xl text-center'>Our Team</h1>
        <h2 className='mt-2 sm:mt-6 font-normal text-sm sm:text-lg md:text-2xl text-customBlack text-center'>Meet our amazing team of some people who are doing something. I am not sur what but it does seem like that they are doing something.</h2>
      </div>

      <div className='w-full min-h-14'  style={{backgroundColor: '#F7F7F7'}}>
        <div className='w-11/12 mx-auto flex  flex-wrap py-10 gap-4 justify-evenly'>
          
          <TeamCard
            image={KamleshImage}
            name="Kamlesh Agarwal"
            designation={'Managing Director & Founder'} 
            description={'Ram Prakash Singh is the Chief Technical Officer at our company. He is a very hardworking and dedicated person. He is responsible for the technical aspects of the company.'} 
            onClickX={handleClickKamleshX}
            onClickLinkedIn={handleClickKamleshLinkedIn}
            onClickFacebook={handleClickKamleshFacebook}
          />

          <TeamCard
            image={NareshImage}
            name="Naresh Agarwal"
            designation={'Director'}
            description={'Ram Prakash Singh is the Chief Technical Officer at our company. He is a very hardworking and dedicated person. He is responsible for the technical aspects of the company.'} 
            onClickX={handleClickNareshX}
            onClickLinkedIn={handleClickNareshLinkedIn}
            onClickFacebook={handleClickNareshFacebook  }
          />

          <TeamCard
            image={RamPrakashImage}
            name="Ram Prakash Singh"
            designation={'Chief Technical Officer'}
            description={'Ram Prakash Singh is the Chief Technical Officer at our company. He is a very hardworking and dedicated person. He is responsible for the technical aspects of the company.'} 
            className=' shadow-2xl'
            onClickX={handleClickRamX}
            onClickLinkedIn={handleClickRamLinkedIn}
            onClickFacebook={handleClickRamFacebook}
          />
        </div>
      </div>

    </div>
  )
}

export default Team