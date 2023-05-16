/* eslint-disable react/prop-types */


const Event = ({event}) => {
    return (
        <div className="card bg-base-100 shadow-2xl p-2">
            <img className="h-60 w-60" src={event.eventPhoto} alt=""/>
            <h4 className="text-xl font-semibold p-2">{event.eventName}</h4>
        </div>
    );
};

export default Event;