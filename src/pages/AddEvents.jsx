

const AddEvents = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
                <form className="card-body ">
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
                            <textarea className="p-2 border-2 rounded-lg w-full h-40" name="description" id="" cols="30" rows="10"></textarea>
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