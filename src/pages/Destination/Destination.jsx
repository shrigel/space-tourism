import { getImageUrl } from "../../utils/imageHelper";
import { useTabNavigation } from "../../hooks/useTabNavigation";
import "./Destination.scss"
import Header from "../../components/Header/Header";
import data from "../../assets/data.json"

export default function Destination() {
    const {
        currentIndex: destinationIndex,
        setCurrentIndex: setDestinationIndex,
        currentItem: currentDestination
    } = useTabNavigation(data.destinations);

    return (
        <div className="page--destination">
            <Header />

            <main className="destination">
                <div className="destination__title">
                    <span className="destination__title-number">01</span>
                    <span className="destination__title-text">PICK YOUR DESTINATION</span>
                </div>

                <div className="destination__container" role="tabpanel" aria-label={currentDestination.name}>
                    <div className="destination__image">
                        <img src={getImageUrl(currentDestination.images.webp)} alt="" />
                    </div>

                    <div className="destination__wrapper">
                        <div className="destination__navigation">
                            {data.destinations.map((destination, index) => {
                                const isActive = destinationIndex === index;

                                return (
                                    <div
                                        key={destination.name}
                                        className={`destination__navigation-item ${isActive ? "active" : ""}`}
                                    >
                                        <button
                                            role="tab"
                                            aria-selected={destinationIndex === index}
                                            aria-label={`Slide ${index + 1}: ${destination.name}`}
                                            onClick={() => setDestinationIndex(index)}
                                            className="destination__navigation-button"
                                        >
                                            {destination.name}
                                        </button>
                                    </div>
                                )
                            })}
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
                    </div>
                </div>
            </main>
        </div>
    )
}