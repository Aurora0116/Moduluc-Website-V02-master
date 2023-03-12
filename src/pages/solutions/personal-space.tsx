import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import LandingHeader from "../../components/LandingTitle"
import PageFooter from "../../components/PageFooter"
import SolutionsTitle from "../../components/SolutionsTitle"
import { SolutionCard10Icon, SolutionCard8Icon, SolutionCard9Icon } from "../../components/svgIcons"

const PersonalSpage: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <NextSeo
                title="Moduluc | Personal Space"
                description="Create your own metaverse world. Moduluc is your metaverse and enviro is your builder Create the metaverse room that you want to enjoy, a space to socialize with with friends, and your room to escape from the real world."
                openGraph={{
                    url: 'https://moduluc-v02.herokuapp.com/solutions/personal-space',
                    title: 'Moduluc | Personal Space',
                    description: 'Create your own metaverse world. Moduluc is your metaverse and enviro is your builder Create the metaverse room that you want to enjoy, a space to socialize with with friends, and your room to escape from the real world.',
                    images: [
                        {
                            url: 'https://moduluc-v02.herokuapp.com/img/seo/personal-space.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Moduluc',
                            type: 'image/jpeg',
                        }
                    ],
                    site_name: 'Moduluc',
                }}
            />
            <div className="main">
                <LandingHeader title="Personal" subtitle="Space" />
                <div className="museums-hero">
                    {/* eslint-disable-next-line */}
                    <img
                        src="/img/personal-space-hero.jpg"
                        alt=""
                    />
                </div>
                <SolutionsTitle title="Create your own" subtitle="metaverse world" />
                <div className="prs-row">
                    <div className="solution-banner">
                        <div className="solution-banner-bg">
                            {/* eslint-disable-next-line */}
                            <img
                                src="/img/solution-banner-bg.png"
                                alt=""
                            />
                        </div>
                        <div className="solution-banner-img">
                            {/* eslint-disable-next-line */}
                            <img
                                src="/img/personal-space-banner.png"
                                alt=""
                            />
                        </div>
                        <div className="container">
                            <div className="banner-content">
                                <SolutionCard8Icon />
                                <h3>
                                    Moduluc is your<br />metaverse and<br />
                                    <span>
                                        enviro is your builder
                                    </span>
                                </h3>
                                <p>Create the metaverse room that you want to enjoy, a space to socialize with with friends, and your room to escape from the real world</p>
                                <button className="button button-primary" onClick={() => router.push("/projects/enviro")}>
                                    Discover  enviro
                                </button>
                                {/* eslint-disable-next-line */}
                                <img
                                    src="/img/museum-card-3-bg.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prs-row-3">
                    <div className="container">
                        <div className="soution-card-5">
                            <div className="card-img">
                                {/* eslint-disable-next-line */}
                                <img
                                    src="/img/prs-banner-3.svg"
                                    alt=""
                                />
                            </div>
                            <div className="card-content">
                                <h3>
                                    Your artworks, your space<br />
                                    <span>
                                        import your favorite NFTs to add that personal touch to a place that you own
                                    </span>
                                </h3>
                                <p>
                                    any 2D NFTs, dynamic NFTs including MP4 and GIF and even Moduluc certified 3D NFTs!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solution-banner-2">
                    <div className="solution-banner-2-bg">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/img/solution-banner-2-bg.png"
                            alt=""
                        />
                    </div>
                    <div className="container">
                        <div className="mobile-pattern">
                            {/* eslint-disable-next-line */}
                            <img
                                src="/img/solution-banner-2-mobile-pattern-1.png"
                                alt=""
                            />
                            {/* eslint-disable-next-line */}
                            <img
                                src="/img/solution-banner-2-mobile-pattern-2.png"
                                alt=""
                            />
                        </div>
                        <div className="border-content">
                            <div className="card-content">
                                <div className="card-img">
                                    {/* eslint-disable-next-line */}
                                    <img
                                        src="/img/prs-banner-2.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="card-text">
                                    <h3>Connect to your<br /> streaming services</h3>
                                    <p>and enjoy movies, shows, sports, or music in your<br /> metaverse space</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="prs-row-4">
                        <div className="solution-card-2">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard9Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Once your space is perfected</span><br />
                                        invite friends to come over for a tour or hang out
                                    </h2>
                                    <p>they don&#39;t even need to own an enviro. Your space, your party!</p>
                                </div>
                            </div>
                        </div>
                        <div className="solution-card-1">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard10Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>One more thing,</span><br />
                                        Setup your small business in metaverse!
                                    </h2>
                                    <p>Moduluc enables you to be an entrepreneur by giving you every tools to convert your personal space to a full-featured auction house! (higher tier enviro only)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter title="Artists &#38; Designers" link="/solutions/artists-designers" />
            </div>
        </>
    )
}
export default PersonalSpage

