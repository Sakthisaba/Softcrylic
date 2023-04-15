import EventCard from './EventCard'
import Nav from './Nav'
import '../style/EventCard.css'

function Home()
{

    return(<div className='home'><Nav />
    <EventCard></EventCard></div>
       
    )
}

export default Home;