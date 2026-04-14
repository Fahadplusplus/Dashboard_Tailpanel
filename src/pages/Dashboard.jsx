import DashboardCard from "../components/layout/DashboardCard";
import Highchart from "../components/charts/Highchart";
import OrdersCard from "../components/layout/OrdersCard";
import TopProductCard from "../components/layout/TopProductCard";
import Card from "../components/layout/dashboardcard/Card";



const Dashboard = () => {
 

  const lineChartOptions = {
      chart: { backgroundColor: "var(--chart-bg)" ,
        borderRadius: 12
       },
   title: {
      text:"Sales",
    style: { color:"var(--text)" }
  },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr","May" ] , labels: { style: { color: "var(--text)" } }
    },
    
    series: [
      {
        name: "Sales",
         style: { color:"var(--text)" },
        data: [5, 30, 40, 20,10]
      }
    ]
  };
  


  const barChartOptions = {
    chart: { type: "bar", backgroundColor: "var(--chart-bg)" ,  borderRadius: 12 },
    title: {
      text:"Users",
    style: { color: "var(--text)" }
  },
    // title: { text: "Users" , style: { color: "#fff" },
    xAxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"] , labels: { style: { color: "var(--text)" } }
    },
    series: [
      {
        name: "Users",
        data: [5, 15, 25, 100]
   
      }
    ]
  };
 
  return (
    <>
    <div className="ms-4 d-flex align-items-center">
      <i className="bi bi-house "></i>
      <i className=" ms-3"> &gt;</i>
      <h6 className="ms-3 mt-2">Dashboard</h6>
      
    </div>
    
      <div className="content  ">
        
          <h2>Dashboard Overview</h2> 
          <p>Welcome back! Here's what's happening with your business today.</p>


       
        <div className="row">
            <Card />
        </div>




        <div className="mt-3">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="shadow-sm  ">
                <Highchart className="bg-black" options={lineChartOptions} />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className="shadow-sm ">
                <Highchart options={barChartOptions} />
              </div>
            </div>
          </div>
        </div>

      
      </div>

<div className="content">
 <div className="row">
  <div className="col-12 col-md-6">
      <OrdersCard />
  </div>
   <div className="col-12 col-md-6">
      <TopProductCard  />
  </div>

 </div>

</div>





    </>
  );
}



export default Dashboard;
