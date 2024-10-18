import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT ME"  text="Hi there! I'm Pratyush Sinha, currently navigating my way through the exciting world of engineering at Ramaiah Institute of Technology. I'm in my 4th year, soaking in the challenges and adventures that come with it.

Coding is my playground, and web development is my canvas. You'll often find me immersed in the realms of LeetCode and GeeksforGeeks, passionately solving problems and crafting web applications that tell a story.

Beyond the textbooks, I'm genuinely curious about the happenings around me and the world. Blogs and articles are my go-to companions, keeping me in the loop and sparking conversations about the latest buzz.

In my downtime, I'm all about unwinding with a good web series or a movie marathon. It's my way of escaping into different worlds and characters, finding inspiration in narratives from various genres.

Life is an exciting journey of learning and exploration, and I'm thrilled to be part of the ever-evolving tech landscape. Let's connect and share stories along the way!"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
