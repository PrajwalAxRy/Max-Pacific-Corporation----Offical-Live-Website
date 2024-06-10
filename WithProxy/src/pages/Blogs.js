import React from 'react'
import BlogComponent from '../components/blogPageComponent';

// Authors
import vaibhav from '../assests/Author/vaibhav.png'

// Blog 1
import blog1 from '../assests/BlogPage/Blog1.png';
import IshitaChhakra from '../assests/BlogPage/IshitaChhakra.png'

// Blog 2
import blog2 from '../assests/BlogPage/Blog2.png';
import Prajwal from '../assests/BlogPage/Prajwal.png'

// Blog 3
import blog3 from '../assests/BlogPage/Blog3.png';

function Blogs() {
  const blogs = [
    {
      backgroundImage: blog1,
      category: "#Future",
      title: "Digital Transformation Wave in Warehousing",
      content: "This blog explores the impact of digital transformation in warehousing, highlighting key technologies, challenges, and opportunities for enhancing efficiency, productivity, and resilience.",
      date: "April 16th, 2024",
      readingTime: "5 min read",
      authorImage: vaibhav,
      authorName: "Vaibhav Nemani",
      authorRole: "SDE Intern, MPCL",
      url: '/blogOneMPCL'
    },
    {
      backgroundImage: blog2,
      category: "#Technology",
      title: "Why fast shipping is not just about speed anymore",
      content: "The blog emphasizes the importance of fast, efficient, transparent, and human-centric logistics in enhancing customer satisfaction and loyalty in the fast-paced world of online shopping.",
      date: "May 10th, 2024",
      readingTime: "7 min read",
      authorImage: IshitaChhakra,
      authorName: "Prajwal Singh",
      authorRole: "Marketing Intern, MPCL",
      url: '/blogTwoMPCL'
    },
    
    {
      backgroundImage: blog3,
      category: "#Future",
      title: "The Future of Sustainable Transportation",
      content: "This blog explores trends in sustainable transportation like electric vehicles, micromobility and public transport.",
      date: "May 29th, 2024",
      readingTime: "7 min read",
      authorImage: IshitaChhakra,
      authorName: "Ishita Chhakra",
      authorRole: "Marketing Intern, MPCL",
      url: '/blogThreeMPCL'
    }
    
    // Add more blogs here
    // --> Things to take care
    // 1. Add the image in the assests folder
    // 2. Import the image at the top of the file
    // 3. Add the blog object in the blogs array
    // 4. Make sure the image path is correct
    // 5. When adding in the array, make sure the order is maintained
    // 6. Make sure the author image is correct


  ];



  return (
    <div>
      <div className='w-11/12 mx-auto'>
        <h1 className='mt-11 font-extrabold text-2xl md:text-5xl'>Blogs</h1>
        <h2 className='w-full sm:w-10/12 md:w-3/4 mt-6 font-normal text-sm sm:text-lg md:text-2xl text-customBlack text-justify'>Welcome to your source for Logistics Industry Insights & Solutions! Learn interesting facts on industry transformation, covering topics from trends to service excellence and beyond.</h2>
      </div>
      

      <div className='mt-11 pt-16 pb-8' style={{backgroundColor: '#F7F7F7'}}>
        {blogs.map((blog, index) => (
          <BlogComponent 
            key={index}
            backgroundImage={blog.backgroundImage}
            category={blog.category}
            title={blog.title}
            content={blog.content}
            date={blog.date}
            readingTime={blog.readingTime}
            authorImage={blog.authorImage}
            authorName={blog.authorName}
            authorRole={blog.authorRole}
            url={blog.url}
          />
        ))}
      </div>

    </div>
  )
}

export default Blogs