// finance.component.ts
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Placeholder for initializing financial data
    const pieChartData = [{ name: 'Category A', y: 40 }, { name: 'Category B', y: 60 }];
    const barChartData = [10, 20, 30, 40, 50];
    const lineChartData = [5, 10, 15, 20, 25];
    const scatterPlotData = [[1, 10], [2, 20], [3, 30], [4, 40], [5, 50]];

    // Render different charts
    this.renderChart('pieChartContainer', 'Pie Chart', 'pie', 'Categories', pieChartData);
    this.renderChart('barChartContainer', 'Bar Chart', 'bar', 'Values', barChartData);
    this.renderChart('lineChartContainer', 'Line Chart', 'line', 'Values', lineChartData);
    this.renderChart('scatterPlotContainer', 'Scatter Plot', 'scatter', 'Values', scatterPlotData);
  }

  private renderChart(
    containerId: string,
    title: string,
    type: string,
    seriesName: string,
    data: any[]
  ): void {
    Highcharts.chart(containerId, {
      chart: {
        type: type as any, // Explicitly cast 'type' to 'any'
      },
      title: {
        text: title,
      },
      series: [
        {
          name: seriesName,
          data: data,
        },
      ],
    } as any); // Explicitly cast the entire object to 'any'
  }
}
