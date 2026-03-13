const DashboardCard = ({ cardTitle="Add Title", cardSubTitle="Add value", percent="add amount", cardText="Add text", icon="bi bi-question", extra, extra2,
}) => {
    let iconColor = "green";
    let bgColor = "rgb(196, 236, 196)";

    if (cardSubTitle < 500) {
        iconColor = "red";
        bgColor = "rgb(255, 210, 210)";
    } else if (cardSubTitle === 0) {
        iconColor = "gray";
        bgColor = "rgb(230,230,230)";
    }

    return (
        <>
            <div className="card rounded-4 p-2 border-0 shadow-sm">
                <div className="card-body d-flex">
                    <div>
                        <h6 className="card-title text-body-secondary" style={{ fontSize: "14px" }}>{cardTitle}</h6>
                        <h2 className="card-subtitle my-2 fw-bold" style={{ letterSpacing: "2px", fontSize: "28px" }} >{extra} {cardSubTitle} {extra2}</h2>

                        <span className="d-flex">
                            <div className="d-flex btn m-0 p-0 px-2 justify-content-center" style={{ fontSize: "14px", borderRadius: "10px", color: iconColor, backgroundColor: bgColor, }}>
                                <i className="bi bi-arrow-90deg-right m-0 p-0"></i>
                                <p className="m-0 p-0 mx-1">{percent}</p>
                            </div>
                            <p className="card-text ms-2" style={{ fontSize: "14px", color: "rgb(68, 68, 68)" }}>
                                {cardText}
                            </p>
                        </span>
                    </div>

                    <div className="ms-auto">
                        <button className="btn rounded-3" style={{ padding: "1px 12px", backgroundColor: bgColor, color: iconColor, }} >
                            <i className={icon}></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardCard;
