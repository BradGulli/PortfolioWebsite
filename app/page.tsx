import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-700'>
      
      <main className='grow pl-4 text-gray-300 font-normal font-noto'>
        Hello!  My name is Bradley, and I am a passionate and dedicated software engineer with a strong technical background and a drive for innovation. With several years of experience in the industry, I have developed a diverse skill set and a deep understanding of various programming languages and frameworks.

I thrive in both front-end and back-end development, making me a versatile full-stack engineer. From designing and implementing captivating user interfaces using React and Vue.js to building scalable and efficient back-end systems with technologies like Spring MVC and AWS, I have a solid foundation in creating robust and seamless software solutions.

What sets me apart is my problem-solving mindset and my commitment to delivering high-quality work. I enjoy tackling complex challenges head-on, finding innovative solutions, and continuously seeking opportunities for improvement. Whether it's optimizing performance, implementing new functionalities, or streamlining processes, I am always eager to make a positive impact.

Throughout my career, I have embraced a collaborative approach, working closely with cross-functional teams to achieve shared goals. I find great joy in mentoring junior engineers and sharing my knowledge with colleagues, fostering a supportive and growth-oriented environment.
      </main>
    </div>
  )
}
