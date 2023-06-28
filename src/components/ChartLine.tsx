"use client"
import { useEffect } from 'react'
import {Chart, defaults, LineController, LineElement,CategoryScale, PointElement, LinearScale, Title} from 'chart.js'



Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale)

export default function ChartLine() {
  useEffect(() => {
    var config = {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#7450fe',
            borderColor: '#7450fe',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear(),
            fill: false,
            backgroundColor: '#eee',
            borderColor: '#eee',
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Sales Charts',
          fontColor: 'white',
        },
        legend: {
          labels: {
            fontColor: 'white',
          },
          align: 'end',
          position: 'bottom',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        // scales: {
        //   xAxes: [
        //     {
        //       ticks: {
        //         fontColor: 'white',
        //       },
        //       display: true,
        //       scaleLabel: {
        //         display: false,
        //         labelString: 'Month',
        //         fontColor: 'white',
        //       },
        //       gridLines: {
        //         display: false,
        //         borderDash: [2],
        //         borderDashOffset: [2],
        //         color: 'rgba(33, 37, 41, 0.3)',
        //         zeroLineColor: 'rgba(0, 0, 0, 0)',
        //         zeroLineBorderDash: [2],
        //         zeroLineBorderDashOffset: [2],
        //       },
        //     },
        //   ],
          // yAxes: [
          //   {
          //     ticks: {
          //       fontColor: 'white',
          //     },
          //     display: true,
          //     scaleLabel: {
          //       display: false,
          //       labelString: 'Value',
          //       fontColor: 'white',
          //     },
          //     gridLines: {
          //       borderDash: [3],
          //       borderDashOffset: [3],
          //       drawBorder: false,
          //       color: 'rgba(17, 17, 17, 0.15)',
          //       zeroLineColor: 'rgba(33, 37, 41, 0)',
          //       zeroLineBorderDash: [2],
          //       zeroLineBorderDashOffset: [2],
          //     },
          //   },
          // ],
        //},
      },
    }
    //@ts-ignore
    var ctx = document.getElementById('line-chart')?.getContext('2d')
    //@ts-ignore
    var myLine = new Chart(ctx, {...config, type: "line"})
  }, [])

  return (
    <div className="!bg-[#011628]/30 c-bg p-4 rounded-xl">
        
        <h6 className="uppercase main-color text-xl mb-2 px-4 pt-2 font-medium">
          Overview
        </h6>

      <div>
        <div className="relative h-96 text-white">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  )
}
