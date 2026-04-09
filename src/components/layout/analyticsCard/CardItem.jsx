import React from 'react'

function CardItem({ item }) {
     let iconColor = "green";
    let bgColor = "rgb(196, 236, 196)";

    if (item.cardSubTitle < 500) {
        iconColor = "red";
        bgColor = "rgb(255, 210, 210)";
    } else if (item.cardSubTitle === 0) {
        iconColor = "gray";
        bgColor = "rgb(230,230,230)";
    }
    return (
        <>
            <div className="card rounded-4  border-0 shadow-sm   ">
                <div className="card-body d-flex d-flex p-4 ">
                    <div>
                        <h6 className="card-title " style={{ fontSize: "14px" }}>{item.cardTitle}</h6>
                        <h2 className="card-subtitle my-2 fw-bold" style={{ letterSpacing: "2px", fontSize: "28px" }} >{item.extra} {item.cardSubTitle} {item.extra2}</h2>

                        <span className="d-flex">
                            <div className="d-flex btn m-0 p-0 px-2 justify-content-center" style={{ fontSize: "14px", borderRadius: "10px",backgroundColor:bgColor }}>
                                <i className="bi bi-arrow-90deg-right m-0 p-0" style={{color:iconColor}}></i>
                                <p className="m-0 p-0 mx-1 " style={{color:iconColor}}>{item.percent}</p>
                            </div>
                            <p className="card-text ms-2" style={{ fontSize: "14px" }}>
                                {item.cardText}
                            </p>
                        </span>
                    </div>

                    <div className="ms-auto">
                        <button   className="btn rounded-3 p-2 badge"  style={{ padding: "1px 12px"  , backgroundColor:bgColor}} >
                                <i className={`fs-6  ${item.icon}`} style={{color:iconColor}}></i>
                            
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem