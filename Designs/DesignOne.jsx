import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import MobileBlog from "/components/MobileBlog";
import smallHero from "../images/article-image-hero.png";
import largeHero from "../images/desktopHero.png";
import blogPlaceHolder from "../images/article-image-03.png";

export default function DesignOne() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", watchWidth);
        return () => window.removeEventListener("resize", watchWidth);
    }, []);

    return (
        <div className="design-one-container">
            <Header />
            <div className="hero-1" role="banner">
                <div className="image-container">
                    <img
                        src={
                            windowWidth < 474
                                ? smallHero
                                : largeHero
                        }
                        alt="Scenic view illustrating a new journey as a bootcamp student"
                    />
                    <div className="text-overlay">
                        <h6>June 5, 2024</h6>
                        <h2>My new journey as a bootcamp student.</h2>
                        <p>
                            After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid-desktop" role="main" aria-labelledby="recent-blogs">
                <h2 id="recent-blogs" className="visually-hidden">Recent Blogs</h2>
                <MobileBlog
                    source={blogPlaceHolder}
                    date="June 5, 2024"
                    blog="Blog one"
                    desc="I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
                />
                <MobileBlog
                    source={blogPlaceHolder}
                    date="June 5, 2024"
                    blog="Blog two"
                    desc="I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
                />
                <MobileBlog
                    source={blogPlaceHolder}
                    date="June 5, 2024"
                    blog="Blog three"
                    desc="I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
                />
                {windowWidth > 474 && (
                    <>
                        <MobileBlog
                            source={blogPlaceHolder}
                            date="June 5, 2024"
                            blog="Blog four"
                            desc="I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
                        />
                        <MobileBlog
                            source={blogPlaceHolder}
                            date="June 5, 2024"
                            blog="Blog five"
                            desc="I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
                        />
                        <MobileBlog
                            source={blogPlaceHolder}
                            date="June 5, 2024"
                            blog="Blog six"
                            desc="I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
                        />
                    </>
                )}
            </div>
            <p className="view-more" tabIndex="0">View More</p>
            <Footer />
        </div>
    );
}
