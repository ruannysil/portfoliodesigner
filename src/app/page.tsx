import Image from 'next/image'
import Header from './components/header/page'
import My from './components/sections/my/page'
import About from './components/sections/about/page'
import Skills from './components/sections/skills/page'
import Project from './components/sections/project/page'






export default function Home() {
  return (
   <div className='flex w-full flex-col'>
   <Header />
   <My />
   <About />
   <Project />
   <Skills/>
   </div>
  )
}
