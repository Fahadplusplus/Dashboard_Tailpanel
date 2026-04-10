import React from 'react'

function DeciveAnalytics() {
    return (
    
            <div className="bg-white rounded-3 shadow-sm p-3" style={{ height: "550px" }}>
                <h5>Device Analytics</h5>
                <div className=" d-flex py-2 px-2 my-3 rounded-1" style={{ backgroundColor: "#f8fafc" }}>
                    <div className=" mx-2 d-flex align-items-center rounded-3" style={{ backgroundColor: "rgb(214, 235, 245)" }}>
                        <i className="bi bi-display fs-1 mx-2  " style={{ color: "blue" }}></i>
                    </div>
                    <div className="">
                        <p className="m-0 p-0 fw-bold">Desktop</p>
                        <p className="m-0 p-0" style={{ color: "#303030" }}>5,400 users</p>
                    </div>
                    <div className="ms-auto">
                        <p className="m-0 p-0 fw-bold text-end">12,300</p>
                        <p className="m-0 p-0" style={{ color: "#303030" }}>sessions</p>
                    </div>
                </div>
                <div className=" d-flex py-2 px-2 my-3 rounded-1" style={{ backgroundColor: "#f8fafc" }}>
                    <div className=" mx-2 d-flex align-items-center rounded-3" style={{ backgroundColor: "rgb(214, 235, 245)" }}>
                        <i className="bi bi-phone fs-1 mx-2  " style={{ color: "blue" }}></i>
                    </div>
                    <div className="">
                        <p className="m-0 p-0 fw-bold">Mobile</p>
                        <p className="m-0 p-0" style={{ color: "#303030" }}>8,200 users</p>
                    </div>
                    <div className="ms-auto">
                        <p className="m-0 p-0 fw-bold text-end">15,800</p>
                        <p className="m-0 p-0" style={{ color: "#303030" }}>sessions</p>
                    </div>
                </div>
                <div className=" d-flex py-2 px-2 my-3 rounded-1" style={{ backgroundColor: "#f8fafc" }}>
                    <div className=" mx-2 d-flex align-items-center rounded-3" style={{ backgroundColor: "rgb(214, 235, 245)" }}>
                        <i className="bi bi-tablet fs-1 mx-2  " style={{ color: "blue" }}></i>
                    </div>
                    <div className="">
                        <p className="m-0 p-0 fw-bold">Tablet</p>
                        <p className="m-0 p-0" style={{ color: "#303030" }}>1,800 users</p>
                    </div>
                    <div className="ms-auto">
                        <p className="m-0 p-0 fw-bold text-end">3,200</p>
                        <p className="m-0 p-0" style={{ color: "#303030" }}>sessions</p>
                    </div>
                </div>
            </div>
        

    )
}

export default DeciveAnalytics