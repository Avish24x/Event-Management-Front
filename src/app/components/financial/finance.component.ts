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
    this.createChart('revenueChart', 'Revenue', [100, 200, 300, 400, 500, 600, 700], 'line');
    this.createChart('expensesChart', 'Expenses', [50, 150, 250, 350, 450, 550, 650], 'column');
    this.createChart('profitChart', 'Profit', [50, 100, 150, 200, 250, 300, 350], 'area');
    this.createChart('salesChart', 'Sales', [10, 20, 30, 40, 50, 60, 70], 'bar');
    this.createChart('growthChart', 'Growth', [5, 15, 25, 35, 45, 55, 65], 'spline');
    
    
  }

  createChart(container: string, title: string, data: number[], type: string): void {
    Highcharts.chart(container, {
      chart: {
        
        type: type as any // Cast 'type' to any to resolve the typing issue
      },
      title: {
        text: title
      },
      xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      },
      yAxis: {
        
        title: {
          text: title
        }
      },
      series: [{
        type: type as any, // Cast 'type' to any to resolve the typing issue
        name: title,
        data: data
      }]
    });
  }
}
