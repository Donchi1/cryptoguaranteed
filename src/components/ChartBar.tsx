"use client"
import React, { useEffect } from 'react'
import {Chart,  PointElement, LinearScale, Title, CategoryScale, BarController, BarElement} from 'chart.js'


Chart.register(BarController, BarElement, PointElement, LinearScale, Title, CategoryScale)


export default function ChartBar() {
  useEffect(() => {
    let config = {
      type: 'bar',
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
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear(),
            fill: false,
            backgroundColor: '#eee',
            borderColor: '#eee',
            fontColor: 'white',
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: 'white',
          },
          align: 'end',
          position: 'bottom',
        },
        //scales: {
        //   xAxes: [
        //     {
        //       display: false,
        //       scaleLabel: {
        //         display: true,
        //         labelString: 'Month',
        //         color: 'white',
        //       },
        //       gridLines: {
        //         borderDash: [2],
        //         borderDashOffset: [2],
        //         color: 'rgba(33, 37, 41, 0.3)',
        //         zeroLineColor: 'rgba(33, 37, 41, 0.3)',
        //         zeroLineBorderDash: [2],
        //         zeroLineBorderDashOffset: [2],
        //       },
        //     },
        //   ],
        //   yAxes: [
        //     {
        //       display: true,
        //       ticks: {
        //         fontColor: 'white',
        //       },
        //       scaleLabel: {
        //         display: false,
        //         labelString: 'Value',
        //       },
        //       gridLines: {
        //         borderDash: [2],
        //         drawBorder: false,
        //         borderDashOffset: [2],
        //         color: 'rgba(33, 37, 41, 0.2)',
        //         zeroLineColor: 'rgba(33, 37, 41, 0.15)',
        //         zeroLineBorderDash: [2],
        //         zeroLineBorderDashOffset: [2],
        //       },
        //     },
        //   ],
        // },
      },
    }
    //@ts-ignore
    let ctx = document.getElementById('bar-chart')?.getContext('2d') 
     //@ts-ignore
    window.myBar  = new Chart(ctx, config)
  }, [])
  return (
    <div className="!bg-[#011628]/30 c-bg rounded-xl p-4">
      
        <h6 className="uppercase main-color text-xl mb-2 px-4 pt-2 font-medium">
         Market Value
        </h6>

      <div>
        <div className="relative h-96">
          <canvas id="bar-chart"></canvas>
        </div>
      </div>
    </div>
  )
}
