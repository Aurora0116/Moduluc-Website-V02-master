import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import LandingHeader from "../../components/LandingTitle"
import PageFooter from "../../components/PageFooter"
import SolutionsTitle from "../../components/SolutionsTitle"
import { SolutionCard15Icon, SolutionCard16Icon, SolutionCard17Icon, SolutionCard18Icon } from "../../components/svgIcons"

const ProductMarketingPage: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <NextSeo
                title="Moduluc | Product Marketing"
                description="The only and first photorealistic metaverse that is designed for product marketing. Moduluc allows for importing photorealistic representation of real world products into the metaverse with no limitations in file size, quality, and visual properties. Create the perfect showroom or venue to display your products."
                openGraph={{
                    url: 'https://moduluc-v02.herokuapp.com/solutions/product-marketing',
                    title: 'Moduluc | Product Marketing',
                    description: 'The only and first photorealistic metaverse that is designed for product marketing. Moduluc allows for importing photorealistic representation of real world products into the metaverse with no limitations in file size, quality, and visual properties. Create the perfect showroom or venue to display your products.',
                    images: [
                        {
                            url: 'https://moduluc-v02.herokuapp.com/img/seo/product-marketing.jpg',
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
                <LandingHeader title="Product" subtitle="Marketing" />
                <div className="museums-hero">
                    {/* eslint-disable-next-line */}
                    <img
                        src="/img/product-marketing-hero.jpg"
                        alt=""
                    />
                </div>
                <SolutionsTitle title="The only and first photorealistic metaverse" subtitle="that is designed for product marketing" />
                <div className="container">
                    <div className="prm-row-1">
                        <div className="solution-card-2">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard15Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Moduluc allows for  </span><br />
                                        importing photorealistic representation of real world products into the metaverse
                                    </h2>
                                    <p>with no limitations in file size, quality, and visual properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="solution-card-1">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard16Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Create the</span><br />
                                        perfect showroom
                                    </h2>
                                    <p>or venue to display your products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            src="/img/prom-banner-2.png"
                            alt=""
                        />
                    </div>
                    <div className="container">
                        <div className="banner-content">
                            <SolutionCard17Icon />
                            <h3>
                                Utilize enviro as<br />
                                <span>
                                    the one-stop marketing hub
                                </span>
                            </h3>
                            <p>with professional studio-grade lighting and state-of-the-art
                                photography and videography tools</p>
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
                <div className="container">
                    <div className="prom-row-2">
                        <div className="bordered-card">
                            <div className="border-card">
                                <div className="card-content">
                                    <SolutionCard18Icon />
                                    <h3>
                                        Own the space and
                                        <br />
                                        <span>in one line</span>
                                    </h3>
                                    <p>
                                        to view your products, interact with, and ultimately purchase your product within the metaverse
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prom-banner-3">
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
                                            src="/img/prom-banner-3.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-text">
                                        <h3>Moduluc provides<br /> tools such as AIrIA</h3>
                                        <p>which allow you to have events and shows focused<br /> on product launches and demos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter title="Enterprise" link="/enterprise" />
            </div>
        </>
    )
}
export default ProductMarketingPage
