import { NextSeo } from "next-seo"
import Link from "next/link"
import { useRouter } from "next/router"
import PageFooter from "../components/PageFooter"
import { AiriaIcon1, AVATAIcon, CapturaIcon, LaunchPadIcon, ParametriesIcon, PRMSIcon } from "../components/svgIcons"
import { DISCORD_LINK } from "../config"


export default function HomePage(props: { onCloseMarketsModal: Function, onOpenMarketsModal: Function }) {
  const router = useRouter()
  return (
    <>
      <NextSeo
        title="Moduluc | Foundations to build a Metaverse"
        description="The concept refers to the name - Moduluc, or modules, which are the building blocks of the Metaverse."
        openGraph={{
          url: 'https://moduluc-v02.herokuapp.com/',
          title: 'Moduluc | Foundations to build a Metaverse',
          description: 'The concept refers to the name - Moduluc, or modules, which are the building blocks of the Metaverse.',
          images: [
            {
              url: 'https://moduluc-v02.herokuapp.com/img/seo/moduluc-home-hero-banner.jpg',
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
        <section className="hero-section">
          {/* eslint-disable-next-line */}
          <img
            src="/img/home-hero-bg-shapes.png"
            className="banner-bg-image"
            alt=""
          />
          <div className="home-hero">
            <div className="container">
              <div className="home-hero-content">
                <h1>
                  Foundations to build
                  <br />
                  <span>a Metaverse</span>
                </h1>
                <p>The concept refers to the name - Moduluc, or modules, which are the building blocks of the Metaverse.</p>
                <button
                  className="button button-primary mr-05"
                  onClick={() => props.onOpenMarketsModal()}
                >
                  Markets
                </button>
                <Link href={DISCORD_LINK}>
                  <a className="button button-outline ml-05" target="_blank" rel="noreferrer" >Community</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <span className="pattern-2">
            <svg width="313" height="291" viewBox="0 0 313 291" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.15" x="4" y="4" width="555" height="283" rx="21.8996" stroke="#E72561" strokeOpacity="0.25" strokeWidth="8" />
            </svg>
          </span>
          <div className="container-1">
            <span className="pattern-1">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M0 18H36" stroke="#E72561" />
                  <path d="M18 0L18 36" stroke="#E72561" />
                </g>
              </svg>
            </span>
            <h1 className="page-title">
              Build your own<br />
              <span>metaverse world</span>
            </h1>
            <div className="moduluc-intro">
              <div className="moduluc-intro-item">
                <div className="intro-card">
                  <span className="card-icon">
                    <CapturaIcon />
                  </span>
                  <div className="card-content">
                    <h2>Captura</h2>
                    <p>3D Photogrammetry Suite</p>
                  </div>
                </div>
              </div>
              <div className="moduluc-intro-item">
                <div className="intro-card">
                  <span className="card-icon">
                    <AVATAIcon />
                  </span>
                  <div className="card-content">
                    <h2>AVATA</h2>
                    <p>Photorealistic metaverse avatars</p>
                    <button className="button button-outline-1" onClick={() => router.push("/projects/avata")}>
                      Discover
                    </button>
                  </div>
                </div>
              </div>
              <div className="moduluc-intro-item">
                <div className="intro-card">
                  <span className="card-icon">
                    <LaunchPadIcon />
                  </span>
                  <div className="card-content">
                    <h2>LaunchPod</h2>
                    <p>3D Asset Marketplace</p>
                  </div>
                </div>
              </div>
              <div className="moduluc-intro-item">
                <div className="intro-card">
                  <span className="card-icon">
                    <ParametriesIcon />
                  </span>
                  <div className="card-content">
                    <h2>Parametrise</h2>
                    <p>Generative and Parametric Art</p>
                    <button className="button button-outline-1" onClick={() => router.push("/projects/parametrise")}>
                      Discover
                    </button>
                  </div>
                  {/* <button className="button-card-more">
                  <MoreIcon /><span>more</span>
                </button> */}
                </div>
              </div>
              <div className="moduluc-center-item">
                <h2>enviro</h2>
                <h3>metaverse builder</h3>
                <button className="button button-outline-1" onClick={() => router.push("/projects/enviro")}>
                  Discover
                </button>
                {/* eslint-disable-next-line */}
                <img
                  src="/img/home-back-1.png"
                  alt=""
                  className="home-back-1"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="page-section-1">
          <span className="section-bg-2">
            {/* eslint-disable-next-line */}
            <img
              src="/img/home-back-2.svg"
              alt=""
            />
          </span>
          <div className="container-1">
            <h1 className="page-title">
              Share your work<br />
              <span>with the community</span>
            </h1>
            <div className="section-2-content">
              <div className="section-2-items">
                <div className="section-2-item">
                  <div className="intro-card">
                    <span className="card-icon">
                      <AiriaIcon1 />
                    </span>
                    <h2>AIrIA</h2>
                    <p>Custom Metaverse Room</p>
                    <button className="button button-outline-1" onClick={() => router.push("/projects/airia")}>
                      Discover
                    </button>
                    {/* <button className="button-card-more">
                    <MoreIcon /><span>more</span>
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section-3">
          <span className="section-bg-3">
            {/* eslint-disable-next-line */}
            <img
              src="/img/home-back-4.svg"
              alt=""
            />
          </span>
          <div className="container-1">
            <h1 className="page-title">
              Utilize the power of<br />
              <span>the PRMS token</span>
            </h1>
            <div className="section-3-card">
              <div className="intro-card">
                <span className="card-icon">
                  <PRMSIcon />
                </span>
                <span className="circle-sol">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/circle-sol.png"
                    alt=""
                  />
                </span>
                <h2>PRMS</h2>
                <p>Utility SPL Token</p>
                <h5>$PRMS is the SPL utility token used within the Moduluc ecosystem</h5>
                <button className="button button-outline-1" onClick={() => router.push("/token")}>
                  Discover
                </button>
                {/* <button className="button-card-more">
                <MoreIcon /><span>more</span>
              </button> */}
              </div>
            </div>
          </div>
        </section>
        <PageFooter title="PRMS Token" link="/token" />
      </div>
    </>
  )
}

