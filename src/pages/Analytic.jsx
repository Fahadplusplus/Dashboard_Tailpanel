import Card from "../components/layout/analyticsCard/Card"



const Analytic = () => {

  return (
    <>
     <div className="ms-4 d-flex align-items-center">
      <i className="bi bi-house "></i>
      <i className=" ms-2"> &gt;</i>
      <h6 className="ms-2 mt-2">Analytics</h6>
    </div>
    <div className="content">

        <h2>Analytics Dashboard</h2> 
          <p>Detailed analytics and insights for your business performance.</p>
      <div className="row">
          <Card />
      </div>
      
    </div>
      
    </>
  )
}

export default Analytic