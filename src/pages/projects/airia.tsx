import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import PageFooter from "../../components/PageFooter"
import { AiriaIcon1, AiriaIcon10, AiriaIcon2, AiriaIcon3, AiriaIcon4, AiriaIcon5, AiriaIcon6, AiriaIcon7, AiriaIcon8, AiriaIcon9 } from "../../components/svgIcons"

const AiriaPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Moduluc | AIrIA"
        description="the premier social experience in the metaverse"
        openGraph={{
          url: 'https://moduluc-v02.herokuapp.com/projects/airia',
          title: 'Moduluc | AIrIA',
          description: 'the premier social experience in the metaverse',
          images: [
            {
              url: 'https://moduluc-v02.herokuapp.com/img/seo/airia.jpg',
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
            src="/img/airia-bg.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="airia-row">
            <div className="airia-card-1">
              <h2>AIrIA</h2>
              <p>the premier social experience in the metaverse</p>
            </div>
            <div className="airia-card-2">
              <AiriaIcon1 />
              <h2>Use the dynamic building tools in enviro<br />
                <span>to make your fully customized room,</span>
              </h2>
              <p>and experience it with your friends and guests in AIrIA. AIrIA is loaded with multiplayer and social features to make Moduluc a true metaverse experience</p>
            </div>
          </div>
        </div>
        <div className="airia-title">
          {/* eslint-disable-next-line */}
          <img
            src="/img/airia-title-bg.png"
            alt=""
          />
          <div className="container">
            <h1>
              <span>
                Core Features
              </span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="airia-row-2">
            <div className="bordered-card">
              <div className="border-card">
                <div className="card-content">
                  <h3>
                    <span>Multiplayer</span>
                  </h3>
                  <p>
                    the heart of the social experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="airaia-card-group">
            <h2 className="title">Communication</h2>
            <div className="airaia-card-row">
              <div className="airaia-card">
                <AiriaIcon2 />
                <h2>Chat</h2>
                <p>AIrIA comes loaded with two chat features which allow for universal communication for all users. There will be a chat room feature for the entire room, and a private dialogue feature for those directly engaging within the metaverse</p>
              </div>
            </div>
            <div className="airaia-card-row">
              <div className="airaia-card">
                <AiriaIcon3 />
                <h2>Voice</h2>
                <p>Voice chat and communication experience within AIrIA</p>
              </div>
            </div>
            <div className="airaia-card-row">
              <div className="airaia-card">
                <AiriaIcon4 />
                <h2>Experience real world conversation physics</h2>
                <p>Whether in a virtual meeting or at a metaverse party, distance from audio source or person talking dictates volume using attenuation radius integration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="airaia-banner-2">
            <div className="banner-conetnt">
              <h2>AVATA integration</h2>
              <button className="button button-primary" onClick={() => router.push("/projects/avata")}>Discover AVATA</button>
            </div>
            <div className="banner-img">
              {/* eslint-disable-next-line */}
              <img
                src="/img/airia-banner-2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="airaia-row-3">
            <div className="airaia-card-2">
              <AiriaIcon5 />
              <h3>
                <span>The most advanced and highest quality avatar</span><br /> to match you high fidelity environment
              </h3>
            </div>
            <div className="airaia-card-2">
              <AiriaIcon6 />
              <h3>
                <span>Don&#39;t have a custom AVATA,</span><br /> choose from a default library to represent you
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="airaia-card-group">
            <h2 className="title">Advanced features</h2>
            <div className="airaia-card-row-3">
              <div className="airaia-card-3">
                <div className="card-image">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/airia-card-3-1.svg"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>Marketplace and storefronts</h3>
                  <p>After creating your ideal business layout in enviro, port it to AIrIA and bring on the customers!</p>
                </div>
              </div>
            </div>
            <div className="airaia-card-row-3">
              <div className="airaia-card-3">
                <div className="card-image">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/img/airia-card-3-2.svg"
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>Auction house</h3>
                  <p>Smart contracts to allow for real-time bidding and sales (limited to higher tiers)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="airaia-card-group">
            <h2 className="title">Additional features</h2>
            <div className="airaia-features">
              <div className="features-card">
                <AiriaIcon7 />
                <h5>Streaming and movies</h5>
              </div>
              <div className="features-card">
                <AiriaIcon8 />
                <h5>Ticketing system</h5>
              </div>
              <div className="features-card">
                <AiriaIcon9 />
                <h5>User analytics</h5>
              </div>
              <div className="features-card">
                <AiriaIcon10 />
                <h5>Rental</h5>
              </div>
            </div>
          </div>
        </div>
        <PageFooter title="AVATA" link="/projects/avata" />
      </div>
    </>
  )
}

export default AiriaPage