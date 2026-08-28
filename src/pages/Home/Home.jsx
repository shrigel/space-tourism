import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import "./Home.scss"

export default function Home() {
    return (
        <>
            <Header />

            <main className="home">
                <div className="home__container">
                    <div className="home__wrapper">
                        <div className="home__hero">
                            <span className="text-preset-6">SO YOU WANT TO TRAVEL TO</span>

                            <h1 className="text-preset-1">SPACE</h1>

                            <p className="text-preset-9">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                        </div>

                        <div className="home__explore">
                            <Link to="/destination">
                                <button className="home__explore-button text-preset-4">EXPLORE</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}