import Link from "next/link";
import { useRouter } from "next/router";
import { LongArrowIcon } from "./svgIcons";

export default function PageFooter(props: { title: string, link: string }) {
    const router = useRouter();
    return (
        <footer>
            <div className="footer-content">
                {/* eslint-disable-next-line */}
                <img
                    src="/img/footer-bg.svg"
                    alt=""
                />
                <div className="footer-linker" onClick={() => router.push(props.link)}>
                    <Link href={props.link} >
                        <a>
                            <h5>{props.title}</h5>
                            <LongArrowIcon />
                        </a>
                    </Link>
                </div>
                <div className="footer-bg"></div>
            </div>
        </footer>
    )
}