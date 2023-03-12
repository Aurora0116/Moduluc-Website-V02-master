import { Dialog } from "@mui/material";
import Link from "next/link";
import { ALPHA_ART_LINK, BIRDEYE_LINK, DEXLAB_LINK, EXCHANGE_ART_LINK, FTX_US_LINK, MAGICEDEN_LINK, OPENSEA_LINK, RAYDIUM_LINK, SOLANART_LINK } from "../config";
import { CloseIcon } from "./svgIcons";

export default function MarketsModal(props: { open: boolean, onClose: Function }) {
    return (
        <Dialog
            open={props.open}
            onClose={() => props.onClose()}
            sx={{
                borderRadius: 24
            }}
        >
            <div className="markets-modal">
                <button className="btn-nav" onClick={() => props.onClose()}>
                    <CloseIcon color="#DFE7ED" />
                </button>
                <div className="modal-header">
                    <h1>Markets</h1>
                </div>
                <div className="modal-content">
                    <div className="markets-row">
                        <h2>NFT</h2>
                        <div className="markets-contents">
                            <Link href={OPENSEA_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    Open Sea
                                </a>
                            </Link>
                            <Link href={MAGICEDEN_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    Magic Eden
                                </a>
                            </Link>
                            <Link href={EXCHANGE_ART_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    Exchange Art
                                </a>
                            </Link>
                            <Link href={SOLANART_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    Solanart
                                </a>
                            </Link>
                            <Link href={ALPHA_ART_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    Alpha Art
                                </a>
                            </Link>
                            <Link href={FTX_US_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    FTX US
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="markets-row">
                        <h2>PRMS</h2>
                        <div className="markets-contents">
                            <Link href={BIRDEYE_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    birdeye
                                </a>
                            </Link>
                            <Link href={DEXLAB_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    DEXLAB
                                </a>
                            </Link>
                            <Link href={RAYDIUM_LINK}>
                                <a className="btn-outline-secondary" target="_blank" rel="noreferrer">
                                    RAYDIUM
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}