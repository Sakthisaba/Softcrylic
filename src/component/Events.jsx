import axios from 'axios'
import { useState,useEffect } from 'react';
import Card from './Card';
function Event()
{

    const [event, setEvent] = useState(null);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const event = await (
        await fetch(
          "http://localhost:8080/fetchEvents"
        )
      ).json()

      // set state when the data received
      setEvent(await event);
    };

    dataFetch();
  }, []);
  console.log(event)
  return(
    <div className='card-grid'>
    {event==null?<>Loading</> :event.map(event=><Card event={event}></Card>) }
    </div>
  )
}
export default Event;
