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
        description="Студия МЕ — event-агентство с авторским подходом. Организация свадеб, дней рождения и корпоративов под ключ: концепция, площадка, команда, координация в день события."
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
