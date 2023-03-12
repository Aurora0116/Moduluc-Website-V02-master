export default function SolutionsTitle(props: { title: string, subtitle: string }) {
    return (
        <div className="solutions-title">
            {/* eslint-disable-next-line */}
            <img
                src="/img/product-manufacturers-title.png"
                alt=""
            />
            <div className="container">
                <h1>{props.title}<br />
                    <span>
                        {props.subtitle}
                    </span>
                </h1>
            </div>
        </div>
    )
}