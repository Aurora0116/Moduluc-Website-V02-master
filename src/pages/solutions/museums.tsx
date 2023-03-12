import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import PageFooter from "../../components/PageFooter"
import SolutionsTitle from "../../components/SolutionsTitle"
import { MuseumsCard3Icon, MuseumsCard4Icon } from "../../components/svgIcons"

const Museums: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <NextSeo
        title="Moduluc | Museums"
        description="Museums looking to expand exhibits into the metaverse"
        openGraph={{
          url: 'https://moduluc-v02.herokuapp.com/solutions/museums',
          title: 'Moduluc | Museums',
          description: 'Museums looking to expand exhibits into the metaverse',
          images: [
            {
              url: 'https://moduluc-v02.herokuapp.com/img/seo/museums.jpg',
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
        <div className="landing-header">
          <h1 style={{ paddingTop: 20 }}>Museums</h1>
          <div className="landing-header-bg">
            {/* eslint-disable-next-line */}
            <img
              src="/img/section-heading__bg.png"
              alt=""
            />
          </div>
          <div className="title-bg"></div>
        </div>
        <div className="museums-hero">
          {/* eslint-disable-next-line */}
          <img
            src="/img/museums-hero.jpg"
            alt=""
          />
        </div>
        <SolutionsTitle title="Create your own" subtitle="metaverse world" />
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
                    src="/img/museums-banner-2.svg"
                    alt=""
                  />
                </div>
                <div className="card-text">
                  <h3>Museums looking to<br /> expand exhibits into<br /> the metaverse</h3>
                  <p>have multiple Moduluc products to help transition to Web 3 and the metaverse.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="soution-card-5 card-rtd">
            <div className="card-img">
              {/* eslint-disable-next-line */}
              <img
                src="/img/museums-banner-3.svg"
                alt=""
              />
            </div>
            <div className="card-content">
              <h3>
                Option of<br />
                <span>
                  recreating a<br />current exhibit
                </span>
              </h3>
              <p>
                into a virtual space, or creating a new interactive metaverse exhibit
              </p>
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
              src="/img/museums-banner-4.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="banner-content">
              <MuseumsCard3Icon />
              <h3>Moduluc offers<br />
                <span>business solutions</span></h3>
              <p>we can help converting your physical assets and artworks to digital format to be showcased inside Moduluc metaverse! </p>
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
          <div className="museums-row">
            <div className="bordered-card">
              <div className="border-card">
                <div className="card-content">
                  <MuseumsCard4Icon />
                  <h3>
                    Move beyond limitations,<br />
                    <span>Moduluc reinvents how you connect to users and stay social</span>
                  </h3>
                  <p>
                    from Web3 integration to custom made smart contracts to real-time analytics, we remove the barriers for a larger metaverse adoption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter title="Product Manufactures" link="/solutions/product-manufactures" />
      </div >
    </>
  )
}

export default Museums
