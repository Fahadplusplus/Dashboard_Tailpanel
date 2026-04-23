import Card from "../components/layout/analyticsCard/Card"
import Highchart from "../components/charts/Highchart";
import DeciveAnalytics from "../components/layout/analyticsCard/DeciveAnalytics";
import TopPerforming from "../components/layout/analyticsCard/TopPerforming";
import Table from "../components/layout/analyticsCard/Table";


const Analytic = () => {
  const userGrowthOptions = {
  chart: { type: "area", backgroundColor: "var(--chart-bg)" ,
        borderRadius: 12 },
  title: { text: "User Growth" , style: { color:"var(--text)" }},

  xAxis: {
    categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], labels: { style: { color: "var(--text)" }}
  },

  yAxis: {
    title: { text: "Users" }, labels: { style: { color: "var(--text)" }}
  },

  plotOptions: {
    area: {
      marker: { enabled: false },
      fillOpacity: 0.3
    }
  },

  series: [
    {
      name: "New Users",
      data: [1200, 1400, 1600, 1900, 2100, 2300],
      color: "#3b82f6"
    },
    {
      name: "Returning Users",
      data: [3200, 3600, 4000, 4500, 5000, 5600],
      color: "#10b981"
    }
  ]
};
const pageViewsOptions = {
  chart: { type: "column", backgroundColor: "var(--chart-bg)" ,
        borderRadius: 12  },
  title: { text: "Page Views (Last 7 Days)" , style: { color:"var(--text)" } },

  xAxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] , labels: { style: { color: "var(--text)" }}
  },

  yAxis: {
    title: { text: "Views" } , labels: { style: { color: "var(--text)" }}
  },

  series: [
    {
      name: "Total Views",
      data: [12000, 13000, 11500, 14000, 15000, 9000, 8500],
      color: "#6366f1"
    },
    {
      name: "Unique Visitors",
      data: [8000, 8500, 7800, 9200, 10000, 6500, 6000],
      color: "#10b981"
    }
  ]
};
const trafficOptions = {
  chart: { type: "pie", backgroundColor: "var(--chart-bg)" ,
        borderRadius: 12  },
  title: { text: "Traffic Sources", style: { color:"var(--text)" } },

  plotOptions: {
    pie: {
      innerSize: "50%", // makes it donut style
      dataLabels: {
        enabled: true,
        format: "{point.name}: {point.percentage:.0f}%"
      }
    }
  },

  series: [
    {
      name: "Traffic",
      data: [
        { name: "Direct", y: 35 },
        { name: "Organic Search", y: 25 },
        { name: "Social Media", y: 20 },
        { name: "Referral", y: 14 },
        { name: "Email", y: 6 }
      ]
    }
  ]
};

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


        <div className="mt-3">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="shadow-sm  ">
                <Highchart options={userGrowthOptions} />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className="shadow-sm">
                <Highchart options={pageViewsOptions} />
              </div>
            </div>
             <div className="col-12 col-md-6">
              <div className="shadow-sm">
                <Highchart options={trafficOptions  } />
              </div>
            </div>
             <div className="col-12 col-md-6">
              <div className="shadow-sm">
                <Highchart options={trafficOptions} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              
                <DeciveAnalytics />
              
            </div>
            <div className="col-12 col-md-6">
              
                <TopPerforming />
              
            </div>
              <div className="col-12 col-md-12">
              
                <Table />
              
            </div>
          </div>
        </div>
      
    </div>
      
    </>
  )
}

export default Analytic