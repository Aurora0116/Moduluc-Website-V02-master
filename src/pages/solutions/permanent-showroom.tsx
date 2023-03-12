import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import LandingHeader from "../../components/LandingTitle"
import PageFooter from "../../components/PageFooter"
import { SolutionCard5Icon, SolutionCard6Icon, SolutionCard7Icon } from "../../components/svgIcons"

const PermanentShowroom: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Moduluc | Permanent Showroom"
                description="Create and customize your own storefront allow your customers to experience your products in metaverse, Create a showroom to display new or upcoming products as virtual assets. Because the showroom is yours to own, when not in use, can be rented to another business for use as a showroom for other products in the metaverse"
                openGraph={{
                    url: 'https://moduluc-v02.herokuapp.com/solutions/permanent-showroom',
                    title: 'Moduluc | Permanent Showroom',
                    description: 'Create and customize your own storefront allow your customers to experience your products in metaverse, Create a showroom to display new or upcoming products as virtual assets. Because the showroom is yours to own, when not in use, can be rented to another business for use as a showroom for other products in the metaverse',
                    images: [
                        {
                            url: 'https://moduluc-v02.herokuapp.com/img/seo/permanent-showroom.jpg',
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
                <LandingHeader title="Permanent" subtitle="Showroom" />
                <div className="museums-hero">
                    {/* eslint-disable-next-line */}
                    <img
                        src="/img/permanent-showroom-hero.jpg"
                        alt=""
                    />
                </div>
                <div className="solutions-title permanent-showrom-title">
                    {/* eslint-disable-next-line */}
                    <img
                        src="/img/product-manufacturers-title.png"
                        alt=""
                    />
                    <div className="container">
                        <h1>Create and customize your own storefront<br />
                            <span>
                                allow your customers to experience your products in metaverse
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="container">
                    <div className="ps-row">
                        <div className="solution-card-1">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard5Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Create a</span><br />
                                        showroom
                                    </h2>
                                    <p>to display new or upcoming products as virtual assets</p>
                                </div>
                            </div>
                        </div>
                        <div className="solution-card-2">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard6Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Because the</span><br />
                                        showroom is yours to own,
                                    </h2>
                                    <p>when not in use, can be rented to another business for use as a showroom for other products in the metaverse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solution-banner-2 ps-banner">
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
                                        src="/img/ps-banner-2.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="card-text">
                                    <h3>Allow for customers<br /> to come directly to <br />your showroom,</h3>
                                    <p>let them engage with your product in the metaverse and take advantage of video demonstrations, live stream, virtual guided tour and much more!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="ps-row-2">
                        <div className="bordered-card">
                            <div className="border-card">
                                <div className="card-content">
                                    <SolutionCard7Icon />
                                    <h3>
                                        Customers can<br />
                                        <span>go beyond products/assets</span>
                                    </h3>
                                    <p>
                                        they can bid on the assets, participate in the auctions, or perform direct sales when appropriate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-row-3">
                    <div className="container">
                        <div className="soution-card-5">
                            <div className="card-img">
                                {/* eslint-disable-next-line */}
                                <img
                                    src="/img/ps-banner-3.svg"
                                    alt=""
                                />
                            </div>
                            <div className="card-content">
                                <h3>
                                    Move beyond limitations<br />
                                    <span>
                                        Moduluc reinvents future of e-commerce
                                    </span>
                                </h3>
                                <p>
                                    designed for next generation customers with built-in analytics to help any business harness the power of Web3 and the metaverse
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter title="Personal Space" link="/solutions/personal-space" />
            </div>
        </>
    )
}
export default PermanentShowroom