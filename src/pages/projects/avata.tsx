import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import PageFooter from "../../components/PageFooter"
import { AvataIcon1, AvataIcon2, AvataIcon3, AvataIcon4 } from "../../components/svgIcons"

const AVATAPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Moduluc | AVATA"
        description="Hyperrealism, Customizable, AI behavior Implementations, NFT integration"
        openGraph={{
          url: 'https://moduluc-v02.herokuapp.com/projects/avata',
          title: 'Moduluc | AVATA',
          description: 'Hyperrealism, Customizable, AI behavior Implementations, NFT integration',
          images: [
            {
              url: 'https://moduluc-v02.herokuapp.com/img/seo/avata.jpg',
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
            src="/img/avata-bg.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="avata-row">
            <div className="solution-card-2">
              <div className="card-box">
                <div className="card-icon">
                  <AvataIcon1 />
                </div>
                <div className="card-content">
                  <h2>Hyperrealism</h2>
                  <p>Enjoy the most advanced, physically plausible &#38; high-fidelity digital human avatar to match your premium quality metaverse
                  </p>
                </div>
              </div>
            </div>
            <div className="solution-card-1">
              <div className="card-box">
                <div className="card-icon">
                  <AvataIcon2 />
                </div>
                <div className="card-content">
                  <h2>
                    Customizable
                  </h2>
                  <p>Similar to everything in the Moduluc ecosystem, your AVATA will be fully customizable from clothing to skin color to facial features, and much much more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="avata-row-1">
            <div className="solution-card-2">
              <div className="card-box">
                <div className="card-icon">
                  <AvataIcon3 />
                </div>
                <div className="card-content">
                  <h2>AI behavior Implementations </h2>
                  <p>Built in library of gestures, including dances, greetings, etc</p>
                </div>
              </div>
            </div>
          </div>

          <div className="avata-row-2">
            <div className="solution-card-1">
              <div className="card-box">
                <div className="card-icon">
                  <AvataIcon4 />
                </div>
                <div className="card-content">
                  <h2>NFT integration</h2>
                  <p>Integrate your profile picture NFTs or other NFT arts into your AVATA in the form of apparel and overall look!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter title="Museums" link="/solutions/museums" />
      </div>
    </>
  )
}

export default AVATAPage