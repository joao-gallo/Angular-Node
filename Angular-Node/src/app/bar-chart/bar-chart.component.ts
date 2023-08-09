import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  public chart: any;

  createChart() {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: ['My First Dataset'],
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow',
          'New',
          'Blue',
          'Yellow',
          'New',
          'New'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 200, 300, 50, 100, 200],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(142, 100, 86)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(142, 100, 86)',
            'rgb(142, 100, 86)'
          ],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    })
  }

  ngOnInit(): void {
    this.createChart();
  }
}
