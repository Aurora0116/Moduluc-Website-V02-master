import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import PageFooter from "../../components/PageFooter"

const Parametrise: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Moduluc | Parametrise | Generative Art System"
        description="Parametrise collections are digital items you can truly own. Here, you could find our existing and recently minted collections and also, be the first to know about our upcoming collections!"
        openGraph={{
          url: 'https://moduluc-v02.herokuapp.com/projects/parametrise',
          title: 'Moduluc | Parametrise | Generative Art System',
          description: 'Parametrise collections are digital items you can truly own. Here, you could find our existing and recently minted collections and also, be the first to know about our upcoming collections!',
          images: [
            {
              url: 'https://moduluc-v02.herokuapp.com/img/seo/parametrise.jpg',
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
        <div className="parametrise-hero">
          <div className="container" style={{ position: "relative" }}>
            <div className="parametrise-hero-content">
              <p>GENERATIVE ART SYSTEM</p>
              <h1>Parametrise</h1>
              <p>Parametrise collections are digital items you can truly own. Here, you could find our existing and recently minted collections and also, be the first to know about our upcoming collections!</p>
            </div>
            <div className="parametrise-hero-pattern">
              {/* eslint-disable-next-line */}
              <img
                src="/img/parametrise-hero-pattern.png"
                alt=""
              />
            </div>
          </div>
          <div className="parametrise-hero-bg">
            {/* eslint-disable-next-line */}
            <img
              src="/img/parametrise-hero-bg.png"
              alt=""
            />
          </div>
        </div>
        <div className="parametrise-main">
          <span className="parametrise-bg">
            {/* eslint-disable-next-line */}
            <img
              src="/img/parametries-bg.png"
              alt=""
            />
          </span>
          <div className="container">
            <div className="parametries-card-row">
              <div className="parametries-card">
                <div className="parametries-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/parametrise-card-1.png"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>PolitiBox</h3>
                  <p>Collectible 3D voxels of political icons, each with unique abstraction level, voxel size and depth</p>
                </div>
              </div>
              <div className="parametries-card">
                <div className="parametries-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/parametrise-card-2.png"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>DojoBox</h3>
                  <p>Parametrised version of Cyber Samurai NFT collections</p>
                </div>
              </div>
            </div>
            <div className="parametries-card-row">
              <div className="parametries-card">
                <div className="parametries-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/parametrise-card-3.png"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>ToneBox</h3>
                  <p>This parametric project portrays famous &#38; well-known artworks, from the Mona Lisa, to Starry Night, and other classic paintings</p>
                </div>
              </div>
              <div className="parametries-card">
                <div className="parametries-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/parametrise-card-4.png"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>TensorBox</h3>
                  <p>an impossibly addictive NFT collectible. Artistic compositions of mathematical tensors, colors, materials and light. Inspired by Piet Mondrian&#39;s abstract art movement </p>
                </div>
              </div>
            </div>
            <div className="parametries-card-row">
              <div className="parametries-card">
                <div className="parametries-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/parametrise-card-5.png"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>SolBox</h3>
                  <p>A collection of many mini collections which will be gifted to OG Solana people &#38; projects. What is done with them after is up to them</p>
                </div>
              </div>
              <div className="parametries-card">
                <div className="parametries-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/parametrise-card-6.png"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>NumBox</h3>
                  <p>Part of our Prime Collections. First of its kind and the core elements for our upcoming parametric on-chain collections.</p>
                </div>
              </div>
            </div>
            <div className="parametries-card-row">
              <div className="parametries-card">
                <div className="parametries-img">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/parametrise-card-7.png"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>FluentBox</h3>
                  <p>Modular collectible NFTs designed by Motion, Depth, Light, Scale and Material with proof of ownership stored on blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter title="Enviro" link="/projects/enviro" />
      </div >
    </>
  )
}

export default Parametrise
