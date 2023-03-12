import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DISCORD_LINK, TWITTER_LINK } from "../config";
import { CloseIcon, DiscordIcon, DropdownDownIcon, HamburgerIcon, MenuArrowDown, MenuArrowUp, RightArrow, TwitterIcon } from "./svgIcons";

export default function Header(props: { onCloseMarketsModal: Function, onOpenMarketsModal: Function }) {

  const { onOpenMarketsModal, onCloseMarketsModal } = props;

  const [projectsOpen, setProjectsOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [defiOpen, setDefiOpen] = useState(false);

  const handleSubMenu = (link: string) => {
    router.push(link)
    setProjectsOpen(false)
    setSolutionOpen(false)
    setResourceOpen(false)
  }

  const [projectsOpenMobile, setProjectsOpenMobile] = useState(true);
  const [solutionOpenMobile, setSolutionOpenMobile] = useState(false);
  const [resourceOpenMobile, setResourceOpenMobile] = useState(false);
  const [defiOpenMobile, setDefiOpenMobile] = useState(false);

  const [mobileOpened, setMobileOpened] = useState(false);
  const router = useRouter();
  const [firstPathName, setFirstPathname] = useState("/");

  useEffect(() => {
    const pathname = router.pathname
    setFirstPathname(pathname.split("/")[1])
  }, [router])

  const handleProjectsMenu = () => {
    setProjectsOpenMobile(!projectsOpenMobile);
    setSolutionOpenMobile(false);
    setResourceOpenMobile(false);
    setDefiOpenMobile(false);
  }

  const handleSolutionMenu = () => {
    setProjectsOpenMobile(false);
    setDefiOpenMobile(false);
    setSolutionOpenMobile(!solutionOpenMobile);
    setResourceOpenMobile(false);
  }

  const handleResourceMenu = () => {
    setProjectsOpenMobile(false);
    setSolutionOpenMobile(false);
    setDefiOpenMobile(false);
    setResourceOpenMobile(!resourceOpenMobile);
  }

  const handleDefiMenu = () => {
    setProjectsOpenMobile(false);
    setSolutionOpenMobile(false);
    setResourceOpenMobile(false);
    setDefiOpenMobile(!defiOpenMobile);
  }

  const handleMobileMarkets = () => {
    onOpenMarketsModal();
    setMobileOpened(false);
  }
  const handleMobileLink = (link: string) => {
    router.push(link);
    setMobileOpened(false);
  }

  return (
    <header className={`header ${router.pathname === "/enterprise" ? "dark" : ""}`}>
      <div className="header-content">
        <div className="logo">
          <Link href="/">
            <a>

              <Image
                src={router.pathname === "/enterprise" ? "/logo-dark.png" : "/logo-light.png"}
                alt=""
                width={38}
                height={38}
              />
            </a>
          </Link>
        </div>
        <div className="header-right">
          <div className="header-nav">
            <ul className="header-ul">
              <li className="header-li" onClick={() => router.push("/token")}>
                <span className={`header-li-title ${router.pathname === "/token" ? "active" : ""}`}>Token</span>
              </li>
              <li className="header-li" onMouseOver={() => setProjectsOpen(true)} onMouseLeave={() => setProjectsOpen(false)}>
                <span className={!projectsOpen ? "drop-icon" : "drop-icon opened"}>
                  <DropdownDownIcon />
                </span>
                <span className={`header-li-title ${firstPathName === "projects" ? "active" : ""}`}>Projects</span>
                <div className={!projectsOpen ? "nav-dropdown" : "nav-dropdown opened"}>
                  <div className="nav-row">
                    <div className="nav-drop-item text-item" onClick={() => handleSubMenu("/projects/parametrise")}>
                      <div className="icon-mark">
                        <RightArrow />
                      </div>
                      <h5 style={{ marginLeft: 0 }}>Parametrise</h5>
                      <p>Growing Library of Parametric NFT Collections</p>
                    </div>
                    <div className="nav-drop-item text-item" onClick={() => handleSubMenu("/projects/enviro")}>
                      <div className="icon-mark">
                        <RightArrow />
                      </div>
                      <h5 style={{ marginLeft: 0 }}>enviro</h5>
                      <p>Premier metaverse builder that allows you to customize your personal space in a user-friendly, and high-fidelity environment</p>
                    </div>

                    <div className="nav-drop-item text-item" onClick={() => handleSubMenu("/projects/airia")}>
                      <div className="icon-mark">
                        <RightArrow />
                      </div>
                      <h5 style={{ marginLeft: 0 }}>AIrIA</h5>
                      <p>The premier social experience in the metaverse empowered by enviro</p>
                    </div>

                    <div className="nav-drop-item text-item" onClick={() => handleSubMenu("/projects/avata")}>
                      <div className="icon-mark">
                        <RightArrow />
                      </div>
                      <h5 style={{ marginLeft: 0 }}>AVATA</h5>
                      <p>The most advanced, physically plausible &#38; high-fidelity digital human avatar to match your premium quality metaverse</p>
                    </div>

                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>MWS</h5>
                      <p>Peer-to-peer GPU Cloud Service to access Moduluc metaverse through a web portal or a lightweight free app</p>
                    </div>

                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>Captura</h5>
                      <p>3D Photogrammetry suite to turn physical assets into an accurate &#38; immersive digital twin</p>
                    </div>

                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>launchPod</h5>
                      <p>Helping 3D artists and designers to build assets for Moduluc&#39;s next-gen photorealistic metaverse</p>
                    </div>

                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>Moduluc Marketplace</h5>
                      <p>The first NFT marketplace focused on high quality 3D assets for the future of metaverse</p>
                    </div>

                  </div>
                </div>
              </li>
              <li className="header-li" onMouseOver={() => setSolutionOpen(true)} onMouseLeave={() => setSolutionOpen(false)}>
                <span className={!solutionOpen ? "drop-icon" : "drop-icon opened"}>
                  <DropdownDownIcon />
                </span>
                <span className={`header-li-title ${firstPathName === "solutions" ? "active" : ""}`}>Solutions</span>
                <div className={!solutionOpen ? "nav-dropdown" : "nav-dropdown opened"}>
                  <div className="nav-row">
                    <div className="nav-drop-item ">
                      <h5>By Industry</h5>
                      <ul>
                        <li className="link-li" onClick={() => handleSubMenu("/solutions/museums")} style={{ marginRight: -10 }}>
                          <a>Museums</a>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                        </li>
                        <li className="link-li" onClick={() => handleSubMenu("/solutions/product-manufactures")} style={{ marginRight: -10 }}>
                          <a>Product manufactures</a>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-drop-item ">
                      <h5>By Use Case</h5>
                      <ul>
                        <li className="link-li" onClick={() => handleSubMenu("/solutions/permanent-showroom")} style={{ marginRight: -10 }}>
                          <a>Permanent Showroom</a>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                        </li>
                        <li className="link-li" onClick={() => handleSubMenu("/solutions/personal-space")} style={{ marginRight: -10 }}>
                          <a>Personal Space</a>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-drop-item ">
                      <h5>By Role</h5>
                      <ul>
                        <li className="link-li" onClick={() => handleSubMenu("/solutions/artists-designers")} style={{ marginRight: -10 }}>
                          <a>Artists &#38; Designers</a>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                        </li>
                        <li className="link-li" onClick={() => handleSubMenu("/solutions/product-marketing")} style={{ marginRight: -10 }}>
                          <a>Product Marketing</a>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-drop-item ">
                      <h5 style={{ opacity: 0.4 }}>Case Studies</h5>
                    </div>
                  </div>
                </div>
              </li>
              <li className="header-li" onClick={() => router.push("/enterprise")}>
                <span className={`header-li-title ${firstPathName === "enterprise" ? "active" : ""}`}>Enterprise</span>
              </li>
              <li className="header-li" onMouseOver={() => setDefiOpen(true)} onMouseLeave={() => setDefiOpen(false)}>
                <span className={!defiOpen ? "drop-icon" : "drop-icon opened"}>
                  <DropdownDownIcon />
                </span>
                <span className={`header-li-title ${firstPathName === "defi" ? "active" : ""}`}>DeFi</span>
                <div className={!defiOpen ? "nav-dropdown" : "nav-dropdown opened"}>
                  <div className="nav-row">
                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>EUS</h5>
                      <p>An easy to use platform to upgrade your enviro from Tier 01 all the way to Tier 10</p>
                    </div>
                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>Staking</h5>
                      <p>Earn $PRMS, NFTs, discounts and even an enviro itself by staking your enviroPass and Parametrise NFTs</p>
                    </div>
                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>Airdrop</h5>
                      <p>Receive future NFT airdrops by simply hold enviroPass in your wallet</p>
                    </div>
                    <div className="nav-drop-item text-item disable-item">
                      <h5 style={{ marginLeft: 0 }}>Rental</h5>
                      <p>The most comprehensive and feature-rich rental system for Moduluc metaverse that allows you earn more by owning an enviro or AIrIA</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-action">
            <button className="button button-primary mr-16" onClick={() => onOpenMarketsModal()}>
              Markets
            </button>
            <div className="social-group">
              <Link href={TWITTER_LINK}>
                <a className="btn-social" rel="noreferrer" target="_blank">
                  <TwitterIcon />
                </a>
              </Link>
              <Link href={DISCORD_LINK} >
                <a className="btn-social" rel="noreferrer" target="_blank">
                  <DiscordIcon />
                </a>
              </Link>
            </div>
            <button className="mobile-nav-handler" onClick={() => setMobileOpened(!mobileOpened)}>
              {!mobileOpened ?
                <HamburgerIcon />
                :
                <CloseIcon />
              }
            </button>
          </div>
          <div className={`mobile-nav ${mobileOpened ? "opened" : ""}`}>
            <div className="mobile-nav-content">
              <div className="mobile-nav-action">
                <button className="button button-primary" onClick={() => handleMobileMarkets()}>
                  Markets
                </button>
              </div>
              <ul>
                <li>
                  <div className="mobile-nav-item">
                    <div className="mobile-nav-item-title" onClick={() => handleMobileLink("/token")}>
                      Token
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mobile-nav-item">
                    <div className="mobile-nav-item-title" onClick={() => handleProjectsMenu()}>
                      {!projectsOpenMobile ? <MenuArrowDown /> : <MenuArrowUp />}Projects
                    </div>
                    <div className={`nav-dropdown ${projectsOpenMobile ? "opened" : ""}`}>
                      <div className="nav-row">
                        <div className="nav-drop-item text-item" onClick={() => handleMobileLink("/projects/parametrise")}>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                          <h5 style={{ marginLeft: 0 }}>Parametrise</h5>
                          <p>Growing Library of Parametric NFT Collections</p>
                        </div>
                        <div className="nav-drop-item text-item" onClick={() => handleMobileLink("/projects/enviro")}>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                          <h5 style={{ marginLeft: 0 }}>enviro</h5>
                          <p>Premier metaverse builder that allows you to customize your personal space in a user-friendly, and high-fidelity environment</p>
                        </div>
                        <div className="nav-drop-item text-item" onClick={() => handleMobileLink("/projects/airia")}>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                          <h5 style={{ marginLeft: 0 }}>AIrIA</h5>
                          <p>The premier social experience in the metaverse empowered by enviro</p>
                        </div>
                        <div className="nav-drop-item text-item" onClick={() => handleMobileLink("/projects/avata")}>
                          <div className="icon-mark">
                            <RightArrow />
                          </div>
                          <h5 style={{ marginLeft: 0 }}>AVATA</h5>
                          <p>The most advanced, physically plausible &#38; high-fidelity digital human avatar to match your premium quality metaverse</p>
                        </div>
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>MWS</h5>
                          <p>Peer-to-peer GPU Cloud Service to access Moduluc metaverse through a web portal or a lightweight free app</p>
                        </div>
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>Captura</h5>
                          <p>3D Photogrammetry suite to turn physical assets into an accurate &#38; immersive digital twin</p>
                        </div>
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>launchPod</h5>
                          <p>Helping 3D artists and designers to build assets for Moduluc&#39;s next-gen photorealistic metaverse</p>
                        </div>
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>Moduluc Marketplace</h5>
                          <p>The first NFT marketplace focused on high quality 3D assets for the future of metaverse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mobile-nav-item">
                    <div className="mobile-nav-item-title" onClick={() => handleSolutionMenu()}>
                      {!solutionOpenMobile ? <MenuArrowDown /> : <MenuArrowUp />}Solutions
                    </div>
                    <div className={`nav-dropdown ${solutionOpenMobile ? "opened" : ""}`}>
                      <div className="nav-row">
                        <div className="nav-drop-item ">
                          <h5>By Industry</h5>
                          <ul>
                            <li className="link-li" onClick={() => handleMobileLink("/solutions/museums")}>
                              <a>Museums</a>
                              <div className="icon-mark">
                                <RightArrow />
                              </div>
                            </li>
                            <li className="link-li" onClick={() => handleMobileLink("/solutions/product-manufactures")}>
                              <a>Product manufactures</a>
                              <div className="icon-mark">
                                <RightArrow />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="nav-drop-item ">
                          <h5>By Use Case</h5>
                          <ul>
                            <li className="link-li" onClick={() => handleMobileLink("/solutions/permanent-showroom")}>
                              <a>Permanent Showroom</a>
                              <div className="icon-mark">
                                <RightArrow />
                              </div>
                            </li>
                            <li className="link-li" onClick={() => handleMobileLink("/solutions/personal-space")}>
                              <a>Personal Space</a>
                              <div className="icon-mark">
                                <RightArrow />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="nav-drop-item ">
                          <h5>By Role</h5>
                          <ul>
                            <li className="link-li" onClick={() => handleMobileLink("/solutions/artists-designers")}>
                              <a>Artists &#38; Designers</a>
                              <div className="icon-mark">
                                <RightArrow />
                              </div>
                            </li>
                            <li className="link-li" onClick={() => handleMobileLink("/solutions/product-marketing")}>
                              <a>Product Marketing</a>
                              <div className="icon-mark">
                                <RightArrow />
                              </div>
                            </li>
                          </ul>
                        </div><div className="nav-drop-item ">
                          <h5 style={{ opacity: 0.4 }}>Case Studies</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="mobile-nav-item">
                  <div className="mobile-nav-item-title" onClick={() => handleMobileLink("/enterprise")}>
                    Enterprise
                  </div>
                </div>
                <li>
                  <div className="mobile-nav-item">
                    <div className="mobile-nav-item-title" onClick={() => handleDefiMenu()}>
                      {!defiOpenMobile ? <MenuArrowDown /> : <MenuArrowUp />}Defi
                    </div>
                    <div className={`nav-dropdown ${defiOpenMobile ? "opened" : ""}`}>
                      <div className="nav-row">
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>EUS</h5>
                          <p>An easy to use platform to upgrade your enviro from Tier 01 all the way to Tier 10</p>
                        </div>
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>Staking</h5>
                          <p>Earn $PRMS, NFTs, discounts and even an enviro itself by staking your enviroPass and Parametrise NFTs</p>
                        </div>
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>Airdrop</h5>
                          <p>Receive future NFT airdrops by simply hold enviroPass in your wallet</p>
                        </div>
                        <div className="nav-drop-item text-item disable-item">
                          <h5 style={{ marginLeft: 0 }}>Rental</h5>
                          <p>The most comprehensive and feature-rich rental system for Moduluc metaverse that allows you earn more by owning an enviro or AIrIA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}
