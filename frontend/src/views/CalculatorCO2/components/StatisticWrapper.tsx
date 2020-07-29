import React from 'react';
import {Bar} from 'react-chartjs-2';

const StatisticWrapper = (props:any) => {
  const data = {
    labels: Object.keys(props.totalData).map(el => props.totalData[el].label),
    datasets: [
      {
        label: '',
        borderWidth: 1,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.keys(props.totalData).map(el => props.totalData[el].emission),
      }
    ]
  };

  return (
    <>
    <div className="statics-count-wrapper">
      <div className="statics-count">
        <h2> { props.countPeople } </h2>
        <h4>People</h4>
      </div>
      <div className="statics-count">
        <h2> { props.total() } </h2>
        <h4>kgCO2/year</h4>
      </div>
    </div>
    <div className='chart-wrapper'>
      <Bar
        data={data}
        height={250}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
    </>
  )
}

export default StatisticWrapper;
