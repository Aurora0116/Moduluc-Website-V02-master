import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import LandingHeader from "../../components/LandingTitle"
import PageFooter from "../../components/PageFooter"
import SolutionsTitle from "../../components/SolutionsTitle"
import { SolutionCard11Icon, SolutionCard12Icon, SolutionCard13Icon, SolutionCard14Icon } from "../../components/svgIcons"

const ArtistsDesignersPage: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <NextSeo
                title="Moduluc | Artists & Designers"
                description="Own the show setup your personalized virtual art gallery in metaverse. Import you masterpieces and digital creations in ant size and proportion with no loss in quality and pixel-perfected and to impress your audiences"
                openGraph={{
                    url: 'https://moduluc-v02.herokuapp.com/solutions/artists-designers',
                    title: 'Moduluc | Artists & Designers',
                    description: 'Own the show setup your personalized virtual art gallery in metaverse. Import you masterpieces and digital creations in ant size and proportion with no loss in quality and pixel-perfected and to impress your audiences',
                    images: [
                        {
                            url: 'https://moduluc-v02.herokuapp.com/img/seo/artists-and-designers.jpg',
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
                <LandingHeader title="Artists" subtitle="&#38; Designers" />
                <div className="museums-hero">
                    {/* eslint-disable-next-line */}
                    <img
                        src="/img/artists-designers-bg.jpg"
                        alt=""
                    />
                </div>
                <SolutionsTitle title="Own the show" subtitle="setup your personalized virtual art gallery in metaverse" />
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
                                        src="/img/ard-banner-1.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="card-text">
                                    <h3>Import you masterpieces and digital creations in ant size and proportion</h3>
                                    <p>with no loss in quality and pixel-perfected and to impress your audiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pm-row-2">
                    <div className="bordered-card">
                        <div className="border-card">
                            <div className="card-content">
                                <SolutionCard11Icon />
                                <h3>
                                    Through<br /> LaunchPod,<br />
                                    <span>sell your 3D asset NFTs</span>
                                </h3>
                                <p>
                                    to an existing and growing community and supporters of Moduluc ecosystem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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
                                <SolutionCard12Icon />
                                <h3>
                                    Turn your enviro<br /> into an<br />
                                    <span>
                                        art gallery
                                    </span>
                                </h3>
                                <p>to showcase your artwork with professional photography tools, dynamic and realistic lighting, photorealistic materials and shaders and much more!</p>
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

                <div className="container">
                    <div className="ard-row-3">
                        <div className="solution-card-1">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard13Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Convert your<br /> enviro into a</span><br />
                                        one-stop marketing vehicle
                                    </h2>
                                    <p>to take professional photographs or cinematic trailers</p>
                                </div>
                            </div>
                        </div>
                        <div className="solution-card-2">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard14Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Invite others into</span><br />
                                        your AIrIA
                                    </h2>
                                    <p>and open up your collections for sale or auction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter title="Product Marketing" link="/solutions/product-marketing" />
            </div>
        </>
    )
}
export default ArtistsDesignersPage
