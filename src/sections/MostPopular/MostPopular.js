import './MostPopular.css'

import { Card,SectionHeader,SectionWrapper} from '../../components/index'
import MostPopularData from '../../Data/MostPopularData'




const MostPopular = () => {

  const cards = MostPopularData.map(cards => {
    return <Card key={cards.id} image={cards.image}  title={cards.title}   category={cards.category}    rate={cards.rate}   download={cards.download}/>
  })
  
  
  
  return (
    <>
    <SectionWrapper>
        <SectionHeader>Must Popular <em>Desktop</em></SectionHeader>
        <div className='most-popular-items'>
            {cards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default MostPopular