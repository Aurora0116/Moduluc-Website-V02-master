export default function LandingHeader(props: { title: string, subtitle: string }) {
    return (
        <div className="landing-header">
            <h1>{props.title}
                {props.subtitle !== "" &&
                    <>
                        <br />
                        <span>{props.subtitle}</span>
                    </>
                }
            </h1>
            <div className="landing-header-bg">
                {/* eslint-disable-next-line */}
                <img
                    src="/img/section-heading__bg.png"
                    alt=""
                />
            </div>
            <div className="title-bg"></div>
        </div>
    )
}