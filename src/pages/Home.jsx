import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Process from '../components/Process.jsx'
import Projects from '../components/Projects.jsx'
import Contacts from '../components/Contacts.jsx'

export default function Home() {
  return (
    <>
      <Seo
        title=""
        description="ME Event Agency — event-агентство полного цикла. Организация свадеб и праздников от идеи до реализации. Осуществляем мечты со вкусом."
        path="/"
      />
      <Hero />
      <About />
      <WhyUs />
      <Process />
      <Projects />
      <Contacts />
    </>
  )
}
