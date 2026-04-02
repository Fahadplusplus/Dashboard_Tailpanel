import React, { useState } from "react";

export default function Tables() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setShow(true)}
      >
        Open Modal
      </button>

      {show && (
        <>
          {/* Overlay */}
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">My Modal</h5>
                  <button
                    className="btn-close"
                    onClick={() => setShow(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>This modal works with React state ✅</p>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Backdrop */}
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
}