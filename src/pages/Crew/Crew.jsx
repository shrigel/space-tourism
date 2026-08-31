import { getImageUrl } from "../../utils/imageHelper";
import { useTabNavigation } from "../../hooks/useTabNavigation";
import "./Crew.scss";
import Header from "../../components/Header/Header";
import data from "../../assets/data.json"

export default function Crew() {
    const {
        currentIndex: crewIndex,
        setCurrentIndex: setCrewIndex,
        currentItem: currentCrew
    } = useTabNavigation(data.crew);

    return (
        <div className="page--crew">
            <Header />
            <main className="crew">
                <div className="crew__title">
                    <span className="crew__title-number">02</span>
                    <span className="crew__title-text">MEET YOUR CREW</span>
                </div>

                <div className="crew__container">
                    <div className="crew__content" role="tabpanel" aria-label={currentCrew.name}>
                        <div className="crew__explanation">
                            <div className="crew__info">
                                <span className="crew__role">{currentCrew.role}</span>
                                <span className="crew__name">{currentCrew.name}</span>
                            </div>

                            <p className="crew__bio">{currentCrew.bio}</p>
                        </div>

                        <div className="crew__pagination" role="tablist" aria-label="Crew member list">
                            {data.crew.map((member, index) => {
                                const isActive = crewIndex === index;

                                return (
                                    <button key={member.name}
                                        role="tab"
                                        aria-selected={crewIndex === index}
                                        aria-label={`Slide ${index + 1}: ${member.name}`}
                                        className={`crew__pagination-dot ${isActive ? "active" : ""}`}
                                        onClick={() => setCrewIndex(index)}>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="crew__image">
                        <img src={getImageUrl(currentCrew.images.webp)} alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}