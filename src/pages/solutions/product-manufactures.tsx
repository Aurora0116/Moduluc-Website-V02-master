import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import LandingHeader from "../../components/LandingTitle";
import PageFooter from "../../components/PageFooter";
import SolutionsTitle from "../../components/SolutionsTitle";
import { SolutionCard1Icon, SolutionCard2Icon, SolutionCard3Icon, SolutionCard4Icon } from "../../components/svgIcons";

const ProductmanufacturesPage: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <NextSeo
                title="Moduluc | Product Manufactures"
                description="Create your own metaverse world. Companies utilizing Web 3, Start by Moduluc convert your products into digital assets"
                openGraph={{
                    url: 'https://moduluc-v02.herokuapp.com/solutions/product-manufactures',
                    title: 'Moduluc | Product Manufactures',
                    description: 'Create your own metaverse world. Companies utilizing Web 3, Start by Moduluc convert your products into digital assets',
                    images: [
                        {
                            url: 'https://moduluc-v02.herokuapp.com/img/seo/product-manufactures.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Moduluc',
                            type: 'image/jpeg',
                        }
                    ],
                    site_name: 'Moduluc',
                }}
            />
            <div className="main pm-page">
                <LandingHeader title="Product" subtitle="Manufactures" />
                <div className="museums-hero">
                    {/* eslint-disable-next-line */}
                    <img
                        src="/img/product-manufacturers-hero-bg.jpg"
                        alt=""
                    />
                </div>
                <SolutionsTitle title="Create your own" subtitle="metaverse world" />
                <div className="container">
                    <div className="pm-row">
                        <div className="solution-card-1">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard1Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Companies</span><br />
                                        utilizing Web 3
                                    </h2>
                                    <p>the metaverse have to look no further than Moduluc for business solutions from conception to product roll-out and sales</p>
                                </div>
                            </div>
                        </div>
                        <div className="solution-card-2">
                            <div className="card-box">
                                <div className="card-icon">
                                    <SolutionCard2Icon />
                                </div>
                                <div className="card-content">
                                    <h2>
                                        <span>Start by Moduluc</span><br />
                                        convert your products into digital assets
                                    </h2>
                                    <p>and let users interact with them inside virtual world!</p>
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
                            src="/img/product-manufactures-banner.png"
                            alt=""
                        />
                    </div>
                    <div className="container">
                        <div className="banner-content">
                            <SolutionCard3Icon />
                            <h3>
                                After the product has been <br />
                                <span>
                                    imported into the metaverse,
                                </span>
                            </h3>
                            <p>enviro, the metaverse builder, allows for creating the perfect venue for<br /> displaying and marketing the product</p>
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
                                        src="/img/pm-banner-2.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="card-text">
                                    <h3>Moduluc&#39;s suite of <br />products</h3>
                                    <p>allow for demos, sales, and showcasing of products<br /> or new collections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pm-row-2">
                    <div className="bordered-card">
                        <div className="border-card">
                            <div className="card-content">
                                <SolutionCard4Icon />
                                <h3>
                                    Move beyond limitations<br />
                                    <span>Moduluc reinvents future of e-commerce</span>
                                </h3>
                                <p>
                                    designed for next generation customers with built-in analytics to help any business harness the power of Web3 and the metaverse
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter title="Permanent Showroom" link="/solutions/permanent-showroom" />
            </div >
        </>
    )
}

export default ProductmanufacturesPage

