import Carousel from './Carousel'
import Tendance from './Tendance'
import Topintro from './Topintro'


function Modeles() {
  return (
    <>
      
      <div>
        <Carousel />
        <div className=' container sm:px-22'>

        <Tendance />
        </div>
        <div>

        <Topintro />
        </div>
      </div>
    </>
  )
}

export default Modeles