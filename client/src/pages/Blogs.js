import React from 'react'
import BlogComponent from '../components/blogPageComponent';

// Blog 1
import blog1 from '../assests/BlogPage/Blog1.png';
import IshitaChhakra from '../assests/BlogPage/IshitaChhakra.png'

// Blog 2
import blog2 from '../assests/BlogPage/Blog2.png';
import Prajwal from '../assests/BlogPage/Prajwal.png'

// Blog 3
import blog3 from '../assests/BlogPage/Blog1.png';

function Blogs() {
  const blogs = [
    {
      backgroundImage: blog1,
      category: "#Future",
      title: "The future of Gig Economy in Transportation",
      content: "This blog talks about how gig economy in transportation translate to convenience for both workers and customers.",
      date: "April 16th, 2024",
      readingTime: "5 min read",
      authorImage: IshitaChhakra,
      authorName: "Ishita Chhakra",
      authorRole: "Marketing Intern, MPCL"
    },
    {
      backgroundImage: blog2,
      category: "#Technology",
      title: "The Rise of AI in Everyday Life",
      content: "Explore how AI is integrating into every aspect of our lives and what it means for the future. AI will take your job. Fear AI. AI and beyond becase Virat Kohli is the best.",
      date: "May 10th, 2024",
      readingTime: "7 min read",
      authorImage: Prajwal,
      authorName: "Prajwal Singh",
      authorRole: "SDE Intern, MPCL"
    },
    
    {
      backgroundImage: blog3,
      category: "#Technology",
      title: "The Rise of AI in Everyday Life",
      content: "Explore how AI is integrating into every aspect of our lives and what it means for the future. AI will take your job. Fear AI. AI and beyond becase Virat Kohli is the best.",
      date: "May 10th, 2024",
      readingTime: "7 min read",
      authorImage: IshitaChhakra,
      authorName: "Vaibhav Nemani",
      authorRole: "SDE Intern, MPCL"
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
        <h1 className='mt-11 font-extrabold text-5xl'>Blogs</h1>
        <h2 className='w-3/4 mt-6 font-normal text-2xl text-customBlack text-justify'>Welcome to your source for Logistics Industry Insights & Solutions! Learn interesting facts on industry transformation, covering topics from trends to service excellence and beyond.</h2>
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
          />
        ))}
      </div>

    </div>
  )
}

export default Blogs