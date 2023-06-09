/* eslint-disable react/no-unescaped-entities */
import bnr from "../assets/bnr.jpg";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bnr})` }}>
            <div className="hero-overlay bg-black bg-blend-multiply bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-semibold">
                        Welcome To <br />
                        <span>Volunteers Network !!!</span>
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