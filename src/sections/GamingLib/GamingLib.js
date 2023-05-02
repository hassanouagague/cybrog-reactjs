import "./GamingLib.css"

import {GamingCard,SectionHeader,SectionWrapper} from '../../components/index'

import GamingPopularData from '../../Data/GamingPopularData'

const GamingLib = () => {
    const games = GamingPopularData.map(games => {
        return <GamingCard key={games.id} image={games.image}  title={games.title}   category={games.category}    date_added={games.date_added} hours_played={games.hours_played}   downloaded={games.downloaded}/>
      })
  return (
    <>
    <SectionWrapper>
        <SectionHeader>Your Gaming <em>Library</em></SectionHeader>
        <div className='gaming-lib-cards'>
            {games}
        </div>
      </SectionWrapper>
    </>
  )
}

export default GamingLib