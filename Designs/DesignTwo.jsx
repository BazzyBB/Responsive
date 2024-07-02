import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import MobileBlog from "/components/MobileBlog";
import smallHero from "../images/article-imageMobileTwo.png";
import largeHero from "../images/article-image.png";
import blogPlaceHolder from "../images/article-image-03.png";


export default function DesignTwo() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", watchWidth);
        return () => window.removeEventListener("resize", watchWidth);
    }, []);

    return (
        <>
            <Header />
            <div className="design-two-container">
                <div className="design-two-hero" role="banner">
                    <h6>June 5, 2024</h6>
                    <h2>My new journey as a bootcamp student.</h2>
                    <p>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </p>
                </div>
                <img
                    src={windowWidth < 474 ? smallHero : largeHero}
                    alt="Scenic view illustrating a new journey as a bootcamp student"
                    id="hero-image-2"
                />
                <div className="design-two-body" role="main" aria-labelledby="learning-commitment">
                    <h2 id="learning-commitment" className="visually-hidden">How I Stay Committed to Learning</h2>
                    <h5>How I stay committed to learning</h5>
                    <p>
                        I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.
                    </p>
                    <p>
                        While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.
                    </p>
                    <h5>How I got started</h5>
                    <p>
                        I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.
                    </p>
                    <p>
                        That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.
                    </p>
                </div>
                <p className="recent-post" tabIndex="0">Recent posts</p>
                <div className="grid-desktop-2-3">
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
                </div>
            </div>
            <Footer />
        </>
    );
}
