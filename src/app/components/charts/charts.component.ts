import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('highchartsChart') private highchartsChartRef!: ElementRef;

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
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
      name: 'Highcharts Bar Chart',
      data: [10, 20, 30]
    }] as Highcharts.SeriesOptionsType[], // Explicitly cast the series property
    plotOptions: {
      series: {
        animation: {
          duration: 1000, // Set the duration of the animation in milliseconds
          easing: 'easeOutBounce' // Set the easing function for the animation
        }
      }
    }
  }; // required

  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
    // optional function, defaults to null
    // You can add any additional logic or actions here
  };

  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  ngAfterViewInit() {
    this.createHighchartsChart();
  }

  private createHighchartsChart() {
    // You can customize this method to update the chart dynamically if needed
  }
}
