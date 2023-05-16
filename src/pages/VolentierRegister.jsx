
const VolentierRegister = () => {
    return (
        <div className="flex flex-col justify-center items-center my-14">
            <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                <form  className="card-body">
                    <h2 className="text-3xl font-bold text-center">Voulentier Register</h2>
                    <p className="text-center text-red-600"></p>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" name="name" placeholder="name" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  type="email" name="email" placeholder="email" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Register Date</span>
                        </label>
                        <input  type="date" name="date" className="p-2 border-2 rounded-lg w-full" />
                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text ">Intarested Event</span>
                        </label>
                        <input required type="text" name="event" placeholder="Interested Event" className="p-2 border-2 rounded-lg w-full" />
                    </div>

                    <button type="submit" className="mt-2 btn btn-warning font-bold">Register</button>

                </form>

            </div>
        </div>
    );
};

export default VolentierRegister;