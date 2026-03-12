import DashboardCard from "../components/layout/DashboardCard";

const Dashboard = () => {
      const cardsData = [
    { id: 1, cardTitle: "Total Revenue", extra:"$", cardSubTitle: 45231.89 , cardText: "vs last month", percent: "20.1%", icon: "bi bi-currency-dollar" },
    { id: 2, cardTitle: "Active Users", cardSubTitle: 0, cardText: "vs last month", percent: "15.3%", icon: "bi bi-currency-dollar" },
    { id: 3, cardTitle: "Total Orders", cardSubTitle: 560, cardText: "vs last month", percent: "4.2%", icon: "bi bi-currency-dollar" },
    { id: 4, cardTitle: "Converstion Rate",extra2:"%", cardSubTitle: 3.42, cardText: "vs last month", percent: "8.7%", icon: "bi bi-currency-dollar" },
  
  ];
    return (
        <>
          <div className="content mt-5">

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
                  icon={card.icon}
                />
              </div>
            ))}
          </div>
        </div>
            
        </>
    );
}



export default Dashboard;
