/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Event from "./Event";


const Events = () => {

    const [events , setEvents] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/events")
        .then(res=> res.json())
        .then(data=> setEvents(data))
        .catch(er=> console.log(er.message));
    },[])

    return (
        <div  className="p-2">

            <h2 className="text-4xl font-bold text-center my-5">Our Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center">
                {
                    events.map(event=> <Event key={event._id} event={event}></Event>)
                }
            </div>
            
        </div>
    );
};

export default Events;