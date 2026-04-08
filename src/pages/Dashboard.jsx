import DashboardCard from "../components/layout/DashboardCard";
import Highchart from "../components/charts/Highchart";
import OrdersCard from "../components/layout/OrdersCard";
import TopProductCard from "../components/layout/TopProductCard";
import Card from "../components/layout/dashboardcard/Card";


const Dashboard = () => {
 

  const lineChartOptions = {
    title: { text: "Sales" },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"]
    },
    series: [
      {
        name: "Sales",
        data: [10, 20, 30, 40]
      }
    ]
  };


  const barChartOptions = {
    chart: { type: "bar" },
    title: { text: "Users" },
    xAxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"]
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
      <div className="content   ">
          <h1>Dashboard Content</h1> 



       
        <div className="row">
            <Card />
        </div>




        <div className="mt-3">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="shadow-sm  ">
                <Highchart options={lineChartOptions} />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className="shadow-sm">
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
