/* eslint-disable react/no-unescaped-entities */


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1638526970908-b18e32b0bc42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-black bg-blend-multiply bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">
                        Welcome To <br />
                        <span>Volenters Network !!!</span>
                    </h1>
                    <p className="mb-5">
                        Here you can join With us some Pure hearted dedicated Volentiers on some social events.Our main Motivation is to Live Healthy with others. Let's Create a Healthy planet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;