import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



function Highchart({ options }) {
  
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Highchart;