import React from "react";
import { useNavigate } from 'react-router-dom';

import sustainableDev from '../assests/sustainableDev.jpg';
import future from '../assests/futureOfDelivery.png';

import './stylesBlogSection.css';

function BlogSection() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Blogs');
    };

    const handleClickBlogOne = () => {
      navigate('/blogOne');
    };

    const handleClickBlogTwo = () => {
      navigate('/blogTwo');
    };

  return (
    <div className=" p-16 flex gap-20">
      {/* TODO: Here we will have our card */}
      <div className="w-1/2 flex gap-10">
        
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white rounded-xl w-96 newhoverEffects" style={{ borderRadius: "26.32px" }}>
          <div class="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              className="object-cover w-full h-48 rounded-xl"
              src={sustainableDev}
              alt="card"
            />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Towards Sustainability
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              onClick={handleClickBlogOne}
            >
              Read More
            </button>
          </div>
        </div>

        <div class="relative flex flex-col mt-6 text-gray-700 bg-white rounded-xl w-96 newhoverEffects" style={{ borderRadius: "26.32px" }}>
          <div class="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              className="object-cover w-full h-48 rounded-xl"
              src={future}
              alt="card"
            />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
              Future of Logistics
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              onClick={handleClickBlogTwo}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* TODO: Here we will have info */}
      <div>
        <div className=" text-4xl pt-2 text-orange-600" style={{  fontFamily: "Inter", fontWeight: 800}}>BLOGS</div>
        <div className="text-2xl mt-0.5" style={{color: "#222222", fontFamily: "Inter", fontWeight: 500}}>Recently Updated</div>
        
        <div className='flex'>
            <div className=' w-52 bg-orange-600 h-1.5 mt-3'></div>
            <div className='w-2 bg-orange-600 h-1.5 ml-2 mt-3'></div>
        </div>

        <div className="mt-10 text-justify" style={{color: "#222222", fontFamily: "Inter", fontWeight: 500}}>
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. 
        </div>
       
        <div className=" bg-orange-600 px-6 py-4 mt-10 items-center justify-center cursor-pointer give-hover hover:bg-orange-700 transition duration-300 ease-in-out" 
            style={{ borderRadius: '5px', display: 'inline-flex', boxShadow: "33.653846740722656px 33.653846740722656px 96.15384674072266px 9.615385055541992px rgba(225, 125, 0, 0.55), -33.653846740722656px -33.653846740722656px 96.15384674072266px 9.615385055541992px rgba(255, 125, 0, 0.50)" }}
            onClick={handleClick}
            >
            <div style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>MORE POSTS</div>
        </div>


      </div>
    </div>
  );
}

export default BlogSection;
