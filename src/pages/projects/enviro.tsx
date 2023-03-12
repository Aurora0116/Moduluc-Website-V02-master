import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import Image from "next/image"
import PageFooter from "../../components/PageFooter"
import { EnviroIcon1 } from "../../components/svgIcons"

const EnviroPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Moduluc | enviro"
        description="enviro is the premier metaverse builder"
        openGraph={{
          url: 'https://moduluc-v02.herokuapp.com/projects/enviro',
          title: 'Moduluc | enviro',
          description: 'that allows you to customize your personal space in a dynamic, user-friendly, and high-fidelity environment. Owners can design their own space by adding furniture, change the wall and floor finishes, add light and fixtures, change the overall composition and much more! Place your own 2D and 3D NFTs as you see fit to further customize your own space',
          images: [
            {
              url: 'https://moduluc-v02.herokuapp.com/img/seo/enviro.jpg',
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
        <div className="enviro-bg">
          {/* eslint-disable-next-line */}
          <img
            src="/img/enviro-bg.jpg"
            alt=""
          />
        </div>
        <div className="enviro-hero-title">
          {/* eslint-disable-next-line */}
          <img
            src="/img/enviro-logo.png"
            alt=""
          />
          <span className="shadow-effect"></span>
        </div>
        <div className="container">
          <div className="enviro-content">
            <h1 className="page-title">
              Welcome to the<br />
              <span>metaverse builder</span>
            </h1>
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
                    src="/img/enviro-banner-1.svg"
                    alt=""
                  />
                </div>
                <div className="card-text">
                  <h3>enviro is the premier metaverse builder</h3>
                  <p>that allows you to customize your personal space in a dynamic, user-friendly, and high-fidelity environment. Owners can design their own space by adding furniture, change the wall and floor finishes, add light and fixtures, change the overall composition and much more! Place your own 2D and 3D NFTs as you see fit to further customize your own space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="enviro-banner-2">
            <div className="enviro-banner-2-content">
              <h2>Depending on the tier level,<br />
                <span>enviro will launch packed with many exciting features,</span>
              </h2>
              <p>all emphasizing immersion, interaction and customizability. Attention to details, stunning visual quality and wide interoperability set enviro apart from the competition.</p>
              <h3>These features include:</h3>
            </div>
            <div className="enviro-banner-2-img">
              {/* eslint-disable-next-line */}
              <img
                src="/img/enviro-banner-2.svg"
                alt=""
              />
            </div>
          </div>
          <div className="enviro-cardbox">
            <div className="enviro-cardbox-bg">
              {/* eslint-disable-next-line */}
              <img
                src="/img/enviro-banner-3.png"
                alt=""
              />
            </div>
            {cardData.map((item, key) => (
              <div className="enviro-card" key={key}>
                <div className="card-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src={item.img}
                    alt=""
                  />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="enviro-cardbox-desciption">
            AND MANY MORE!
          </div>
          <div className="enviro-banner-3">
            <div className="enviro-banner-3-content">
              <h2>Enviro galleries will come in 10 sizes (tiers), <br />
                <span>suiting any collector/ company&#39;s need</span>
              </h2>
              <p>As you move toward tier 10, the galleries will be larger in size and architecturally more complex. Tier 10 is almost a whole museum!</p>
            </div>
            <div className="enviro-banner-3-img">
              {/* eslint-disable-next-line */}
              <img
                src="/img/enviro-banner-3.svg"
                alt=""
              />
            </div>
          </div>

          <div className="enviro-row">
            <div className="bordered-card">
              <div className="border-card">
                <div className="card-content">
                  <EnviroIcon1 />
                  <h3>
                    Owners of enviro NFTs will have the option to<br />
                    <span>upgrade their tier to a higher level</span>
                  </h3>
                  <p>
                    To do so, the user must submit two enviros of the same tier plus 25k PRMS tokens to be given a single high tier enviro: 2 Tier X + 25k PRMS = Tier X + 1.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter title="AIrIA" link="/projects/airia" />
      </div >
    </>
  )
}

export default EnviroPage

const cardData = [
  {
    img: "/img/enviro-icon/icon-1.svg",
    title: "Light customization",
    description: "color & intensity"
  },
  {
    img: "/img/enviro-icon/icon-2.svg",
    title: "Professional",
    description: "photography and videography tools"
  },
  {
    img: "/img/enviro-icon/icon-3.svg",
    title: "Daylight",
    description: "system"
  },
  {
    img: "/img/enviro-icon/icon-4.svg",
    title: "Artboard",
    description: "customization"
  },
  {
    img: "/img/enviro-icon/icon-5.svg",
    title: "Particle",
    description: "systems"
  },
  {
    img: "/img/enviro-icon/icon-6.svg",
    title: "Built-in",
    description: "asset library"
  },
  {
    img: "/img/enviro-icon/icon-7.svg",
    title: "Social media",
    description: "integration"
  },
  {
    img: "/img/enviro-icon/icon-8.svg",
    title: "3D asset",
    description: "integration"
  },
  {
    img: "/img/enviro-icon/icon-9.svg",
    title: "Music player ",
    description: "integration"
  },
  {
    img: "/img/enviro-icon/icon-10.svg",
    title: "Cross chain",
    description: "compatibility"
  },
]