import { getImageUrl } from "../../utils/imageHelper";
import { useTabNavigation } from "../../hooks/useTabNavigation";
import "./Technology.scss";
import Header from "../../components/Header/Header";
import data from "../../assets/data.json";

export default function Technology() {
    const {
        currentIndex: technologyIndex,
        setCurrentIndex: setTechnologyIndex,
        currentItem: currentTechnology
    } = useTabNavigation(data.technology);

    return (
        <div className="page--technology">
            <Header />

            <main className="technology">
                <div className="technology__title">
                    <span className="technology__title-number">03</span>
                    <span className="technology__title-text">SPACE LAUNCH 101</span>
                </div>

                <div className="technology__container" role="tabpanel" aria-label={currentTechnology.name}>
                    <div className="technology__image">
                        <picture>
                            <source media="(min-width: 1024px)" srcset={getImageUrl(currentTechnology.images.portrait)} />
                            <img src={getImageUrl(currentTechnology.images.landscape)} alt="" />
                        </picture>
                    </div>

                    <div className="technology__content">
                        <div className="technology__pagination">
                            {data.technology.map((technology, index) => {
                                const isActive = technologyIndex === index;

                                return (
                                    <button key={technology.name}
                                        role="tab"
                                        aria-selected={technologyIndex === index}
                                        aria-label={`Slide ${index + 1}: ${technology.name}`}
                                        className={`technology__pagination-number ${isActive ? "active" : ""}`}
                                        onClick={() => setTechnologyIndex(index)}>
                                        {index + 1}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="technology__explanation">
                            <div className="technology__info">
                                <span>THE TERMINOLOGY</span>
                                <span className="technology__name">{currentTechnology.name}</span>
                            </div>

                            <p className="technology__description">{currentTechnology.description}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}