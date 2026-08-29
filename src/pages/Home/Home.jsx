import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import "./Home.scss"

export default function Home() {
    return (
        <div className="page--home">
            <Header />

            <main className="home">
                <div className="home__container">
                    <div className="home__wrapper">
                        <div className="home__hero">
                            <span className="home__hero-subtitle">SO YOU WANT TO TRAVEL TO</span>

                            <h1 className="home__hero-title">SPACE</h1>

                            <p className="home__hero-text">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                        </div>

                        <div className="home__explore">
                            <Link to="/destination">
                                <button className="home__explore-button">EXPLORE</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}