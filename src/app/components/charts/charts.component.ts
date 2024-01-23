import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('highchartsChart') private highchartsChartRef!: ElementRef;

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  updateFlag: boolean = false;

  // Bar Chart
  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Highcharts Bar Chart'
    },
    xAxis: {
      categories: ['Label 1', 'Label 2', 'Label 3']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Bar Chart',
      type: 'bar', // Specify the chart type
      data: [10, 20, 30]
    }]
  };

  // Line Chart
  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Highcharts Line Chart'
    },
    xAxis: {
      categories: ['Label 1', 'Label 2', 'Label 3']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Line Chart',
      type: 'line', // Specify the chart type
      data: [30, 20, 10]
    }]
  };

  // Area Chart
  areaChartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Highcharts Area Chart'
    },
    xAxis: {
      categories: ['Label 1', 'Label 2', 'Label 3']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Area Chart',
      type: 'area', // Specify the chart type
      data: [5, 15, 25]
    }]
  };

  // Pie Chart
  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Highcharts Pie Chart'
    },
    series: [{
      name: 'Pie Chart',
      type: 'pie', // Specify the chart type
      data: [
        ['Category 1', 30],
        ['Category 2', 40],
        ['Category 3', 20],
        ['Category 4', 10]
      ]
    }]
  };

  // Column Chart
  columnChartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Highcharts Column Chart'
    },
    xAxis: {
      categories: ['Label 1', 'Label 2', 'Label 3']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Column Chart',
      type: 'column', // Specify the chart type
      data: [25, 15, 30]
    }]
  };

  constructor() {}

  ngAfterViewInit() {
    this.createHighchartsChart();
  }

  private createHighchartsChart() {
    // You can customize this method to update the chart dynamically if needed
  }
}
