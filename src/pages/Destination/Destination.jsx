import { useState } from "react";
import "./Destination.scss"
import Header from "../../components/Header/Header";
import data from "../../assets/data.json"

export default function Destination() {
    const [destinationIndex, setDestinationIndex] = useState(0);
    const currentDestination = data.destinations[destinationIndex];

    const images = import.meta.glob('../../assets/**/*.{png,webp}', {
        eager: true,
        import: 'default',
    });

    const getImageUrl = (path) => {
        const cleanPath = path.replace(/^\.\//, '');
        return images[`../../assets/${cleanPath}`];
    };

    return (
        <div className="page--destination">
            <Header />

            <main className="destination">
                <div className="destination__title">
                    <span className="destination__title-number">01</span>
                    <span className="destination__title-text">PICK YOUR DESTINATION</span>
                </div>

                <div className="destination__container">
                    <div className="destination__image">
                        <img src={getImageUrl(currentDestination.images.webp)} alt="" />
                    </div>

                    <div className="destination__wrapper">
                        {/* <div className="destination__wrapper-sub"> */}
                        <div className="destination__navigation">
                            {data.destinations.map((destination, index) => (
                                <div
                                    key={destination.name}
                                    className={`destination__navigation-item ${destination.name === currentDestination.name ? "active" : ""}`}
                                >
                                    <button
                                        onClick={() => setDestinationIndex(index)}
                                        className="destination__navigation-button"
                                    >
                                        {destination.name}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="destination__explanation">
                            <h2 className="destination__name">{currentDestination.name}</h2>

                            <p className="destination__description">{currentDestination.description}</p>
                        </div>

                        <div className="destination__line" aria-hidden="true" />

                        <div className="destination__data">
                            <div className="destination__data-item">
                                <span>AVG. DISTANCE</span>
                                <span>{currentDestination.distance}</span>
                            </div>
                            <div className="destination__data-item">
                                <span>EST. TRAVEL TIME</span>
                                <span>{currentDestination.travel}</span>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </main>
        </div>
    )
}