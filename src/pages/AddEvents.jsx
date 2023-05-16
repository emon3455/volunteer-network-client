/* eslint-disable no-unused-vars */


const AddEvents = () => {

    const handleAddEvents=(e)=>{

        e.preventDefault();
        const form = e.target;
        const eventName = form.EventName.value;
        const eventDate = form.EventDate.value;
        const eventDescription = form.description.value;
        const eventPhoto = form.photo.value;
        const event = {
            eventName,
            eventDate,
            eventDescription,
            eventPhoto
        }
        console.log(event);

        fetch("http://localhost:5000/events",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event)
        })
        .then(res=> res.json())
        .then(data=>{ 
            if(data.insertedId){
                alert("Event Added succesfully");
                form.reset();
            }
        })
        .catch(er=> console.log(er.message));



    }

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
                <form onSubmit={handleAddEvents}  className="card-body ">
                    <h2 className="text-3xl font-bold text-center">Add Events</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="">
                            <label className="label">
                                <span className="label-text">Event Name</span>
                            </label>
                            <input required type="text" name="EventName" placeholder="Event name" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Event Date</span>
                            </label>
                            <input type="date" name="EventDate" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="label-text ">Description</span>
                            </label>
                            <textarea className="p-2 border-2 rounded-lg w-full h-40" name="description" id="description"></textarea>
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Event Photo</span>
                            </label>
                            <input required type="text" name="photo" placeholder="Event Photo URL" className="p-2 border-2 rounded-lg w-full" />
                        </div>
                    </div>

                    <button type="submit" className="mt-2 btn btn-warning font-bold">Add</button>

                </form>

            </div>
        </div>
    );
};

export default AddEvents;