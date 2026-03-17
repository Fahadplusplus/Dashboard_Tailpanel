import DashboardCard from "../components/layout/DashboardCard";
import Highchart from "../components/charts/Highchart";

const Dashboard = () => {
  const cardsData = [
    { id: 1, cardTitle: "Total Revenue", extra: "$", cardSubTitle: 45231.89, cardText: "vs last month", percent: "21.1%", icon: "bi bi-currency-dollar" },
    { id: 2, cardTitle: "Active Users", cardSubTitle: 750, cardText: "vs last month", percent: "15.3%", icon: "bi bi-currency-dollar" },
    { id: 3, cardTitle: "Total Orders", cardSubTitle: 560, cardText: "vs last month", percent: "4.2%", icon: "bi bi-currency-dollar" },
    { id: 4, cardTitle: "Converstion Rate", extra2: "%", cardSubTitle: 3.42, cardText: "vs last month", percent: "8.7%", icon: "bi bi-currency-dollar" },

  ];

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
        data: [5, 15, 25, 35]
      }
    ]
  };
  return (
    <>
      <div className="content   ">

        <h1>Dashboard Content</h1>
        <div className="row">
          {cardsData.map((card) => (
            <div className="col-12 col-md-6 col-xxl-3 g-3" key={card.id}>
              <DashboardCard
                cardTitle={card.cardTitle}
                extra={card.extra}
                cardSubTitle={card.cardSubTitle}
                cardText={card.cardText}
                extra2={card.extra2}
                percent={card.percent}
                icon={card.icon}
              />
            </div>
          ))}
        </div>




        <div className="mt-3">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="shadow-sm  ">
                <Highchart options={lineChartOptions} />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className="card">
                <Highchart options={barChartOptions} />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-3">
          <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="card ">
               <Highchart options={lineChartOptions}/>
            </div>
           
            </div>
          <div className="col-12 col-md-6"> 
              <div className="card">
                 <Highchart options={barChartOptions}/>
              </div>
            </div>
        </div>
      </div>
      </div>






    </>
  );
}



export default Dashboard;
