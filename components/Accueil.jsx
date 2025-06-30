import Activite from './Activite'
import Hero from './Hero'
import Latest from './Latest'
import Marque from './Marque'
import NewsCarousel from './NewsCarousel'
import Transition from './Transition'

const Accueil = () => {
  return (
    <div>
        <Hero />
        <NewsCarousel />
        <Marque />
        <Transition />
        <Latest />
        <Activite />
    </div>
  )
}

export default Accueil