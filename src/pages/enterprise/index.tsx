import type { NextPage } from "next"
import { NextSeo } from "next-seo";
import Image from "next/image";
import { MAIL_TO } from "../../config";

const EnterprisePage: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Moduluc | Enterprise"
                description="Custom Solutions. Speak to one of our consultants to evaluate your business needs and allow us to create your custom metaverse solution."
                openGraph={{
                    url: 'https://moduluc-v02.herokuapp.com/enterprise',
                    title: 'Moduluc | Enterprise',
                    description: 'Custom Solutions. Speak to one of our consultants to evaluate your business needs and allow us to create your custom metaverse solution.',
                    images: [
                        {
                            url: 'https://moduluc-v02.herokuapp.com/img/seo/custom-solutions.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Moduluc',
                            type: 'image/jpeg',
                        }
                    ],
                    site_name: 'Moduluc',
                }}
            />
            <div className="main-dark">
                <div id="custom-solutions">
                    <div className="page-title-dark">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/img/section-heading__bg-dark.png"
                            alt=""
                        />
                        <h1>
                            Custom<br />
                            <span>Solutions</span>
                        </h1>
                    </div>
                    <div className="container">
                        <div className="enterprise-card">
                            <div className="card-image">
                                <Image
                                    src="/img/enterprise-banner-1.svg"
                                    width={320}
                                    height={320}
                                    alt=""
                                />
                            </div>
                            <div className="card-content">
                                <h2>
                                    Speak to one of our consultants to <br />
                                    <span>evaluate your business needs</span>
                                </h2>
                                <p style={{ marginBottom: 16 }}>and allow us to create your custom metaverse solution</p>
                                <a className="button button-secondary" href={MAIL_TO}>
                                    Contact us
                                </a>
                            </div>
                        </div>
                        <div className="enterpise-row">
                            <div className="col">
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-1.svg"
                                            width={89}
                                            height={146}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h2>
                                            Moduluc offers <br />
                                            <span>a comprehensive ecosystem</span>
                                        </h2>
                                        <p>that can help businesses integrate their products and digital assets in the first business-oriented metaverse ever</p>
                                    </div>
                                </div>
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-1.svg"
                                            width={89}
                                            height={146}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h2>
                                            Harness<br />
                                            <span>Unreal Engine 5</span>
                                        </h2>
                                        <p>to create the venue, showroom, gallery, etc to fit your needs. Either create it yourself with enviro or allow our team of digital architects tailor the venue to your specifications</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-second">
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-2.svg"
                                            width={115}
                                            height={71}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <p>
                                            <span>Storefront or auction house features</span><br />
                                            which allow for sales directly from your metaverse showroom
                                        </p>
                                    </div>
                                </div>
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-2.svg"
                                            width={115}
                                            height={71}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <p>
                                            <span>Web3 for businesses and enterprise toolsets</span><br />
                                            to customize your unique needs and empower you to have a strong presence in the metaverse
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="enterprise-splite-effect"></div>
                    <div className="enterprise-splite-effect-1"></div>
                </div>

                <div id="secure-cloud-hosting">
                    <div className="container">
                        <h1 className="enterprice-subtitle">
                            Secure<br />
                            <span>cloud hosting</span>
                        </h1>
                        <div className="enterpise-row-1">
                            <div className="col">
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-3.svg"
                                            width={106}
                                            height={106}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h2>
                                            Use the technology<br />
                                            <span>behind AIrIA</span>
                                        </h2>
                                        <p>to create a custom solution for inviting guests, attendees, or customers to your metaverse</p>
                                    </div>
                                </div>
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-4.svg"
                                            width={106}
                                            height={106}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h2>
                                            Cybersecurity<br />
                                            <span>protocols implemented</span>
                                        </h2>
                                        <p>to limit host personal information exposure and protect against loss of personal or company information while simultaneously allowing customers to engage with products or enjoy live events</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-5.svg"
                                            width={106}
                                            height={106}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h2>
                                            Allow for secure <br />
                                            <span>cloud hosting</span>
                                        </h2>
                                        <p>via the Moduluc Web Services to seamlessly harness a decentralized cloud GPU rendering for real-time applications</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="enterprise-splite-effect"></div>
                    <div className="enterprise-splite-effect-1"></div>
                </div>
                <div id="custom-licensing">
                    <div className="container">
                        <h1 className="enterprice-subtitle">
                            Custom<br />
                            <span>LICENSING</span>
                        </h1>
                        <div className="enterpise-row-1">
                            <div className="col">
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-6.svg"
                                            width={106}
                                            height={106}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h2>
                                            Beyond limitations<br />
                                            <span>customized productivity tools</span>
                                        </h2>
                                        <p>that are tailor-made to help market your business and help your company grow</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="enterprise-card-2">
                                    <div className="card-image">
                                        <Image
                                            src="/img/enterprise-cardicon-7.svg"
                                            width={106}
                                            height={106}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h2>
                                            Speak with one of <br />
                                            <span>our metaverse consultants</span>
                                        </h2>
                                        <p style={{ marginBottom: 16 }}>to see what doors Moduluc can open for you</p>
                                        <a className="button button-secondary" href={MAIL_TO}>
                                            Contact us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <PageFooterDark title="Resources" link="/resources" /> */}
            </div >
        </>
    )
}

export default EnterprisePage