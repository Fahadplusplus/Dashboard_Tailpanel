import React from 'react'

function DeciveAnalytics() {
    return (
    
            <div className=" Order p-3" style={{ height: "550px" }}>
                <h5>Device Analytics</h5>
                <div className=" d-flex py-2 px-2 my-3 Order">
                    <div className=" mx-2 d-flex align-items-center rounded-3">
                        <i className="bi bi-display fs-1 mx-2  " ></i>
                    </div>
                    <div className="">
                        <p className="m-0 p-0 fw-bold">Desktop</p>
                        <p className="m-0 p-0" >5,400 users</p>
                    </div>
                    <div className="ms-auto">
                        <p className="m-0 p-0 fw-bold text-end">12,300</p>
                        <p className="m-0 p-0" >sessions</p>
                    </div>
                </div>
                <div className=" d-flex py-2 px-2 my-3 Order">
                    <div className=" mx-2 d-flex align-items-center rounded-3" >
                        <i className="bi bi-phone fs-1 mx-2  "></i>
                    </div>
                    <div className="">
                        <p className="m-0 p-0 fw-bold">Mobile</p>
                        <p className="m-0 p-0" >8,200 users</p>
                    </div>
                    <div className="ms-auto">
                        <p className="m-0 p-0 fw-bold text-end">15,800</p>
                        <p className="m-0 p-0" >sessions</p>
                    </div>
                </div>
                <div className=" d-flex py-2 px-2 my-3 Order" >
                    <div className=" mx-2 d-flex align-items-center rounded-3" >
                        <i className="bi bi-tablet fs-1 mx-2  " ></i>
                    </div>
                    <div className="">
                        <p className="m-0 p-0 fw-bold">Tablet</p>
                        <p className="m-0 p-0" >1,800 users</p>
                    </div>
                    <div className="ms-auto">
                        <p className="m-0 p-0 fw-bold text-end">3,200</p>
                        <p className="m-0 p-0">sessions</p>
                    </div>
                </div>
            </div>
        

    )
}

export default DeciveAnalytics