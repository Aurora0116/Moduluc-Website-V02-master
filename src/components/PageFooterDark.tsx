import Link from "next/link";
import { LongArrowIcon } from "./svgIcons";

export default function PageFooterDark(props: { title: string, link: string }) {
    return (
        <footer className="dark-footer">
            <div className="footer-content">
                {/* eslint-disable-next-line */}
                <img
                    src="/img/footer-bg-dark.png"
                    alt=""
                />
                <div className="footer-linker">
                    <Link href={props.link} >
                        <a>
                            <h5 style={{ color: "#dfe6ed" }}>{props.title}</h5>
                            <LongArrowIcon color="#dfe6ed" />
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}