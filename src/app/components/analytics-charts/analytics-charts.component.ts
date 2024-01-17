import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-analytics-charts',
  templateUrl: './analytics-charts.component.html',
  styleUrls: ['./analytics-charts.component.scss']
})
export class AnalyticsChartsComponent implements AfterViewInit {
  @ViewChild('highchartsPieChart') private highchartsPieChartRef!: ElementRef;
  @ViewChild('highchartsBarChart') private highchartsBarChartRef!: ElementRef;
  @ViewChild('highchartsLineChart') private highchartsLineChartRef!: ElementRef;
  @ViewChild('highchartsAreaChart') private highchartsAreaChartRef!: ElementRef;
  @ViewChild('highchartsScatterPlot') private highchartsScatterPlotRef!: ElementRef;
  @ViewChild('highchartsBubbleChart') private highchartsBubbleChartRef!: ElementRef;

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'

  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Highcharts Pie Chart'
    },
    series: [{
      name: 'Highcharts Pie Chart',
      data: [
        ['Category 1', 30],
        ['Category 2', 50],
        ['Category 3', 20],
      ]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      pie: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

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
      name: 'Highcharts Bar Chart',
      data: [10, 20, 30]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Highcharts Line Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Highcharts Line Chart',
      data: [10, 20, 15, 25, 30]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  areaChartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Highcharts Area Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Highcharts Area Chart',
      data: [10, 20, 15, 25, 30]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  scatterPlotOptions: Highcharts.Options = {
    chart: {
      type: 'scatter',
    },
    title: {
      text: 'Highcharts Scatter Plot'
    },
    xAxis: {
      title: {
        text: 'X-Axis'
      }
    },
    yAxis: {
      title: {
        text: 'Y-Axis'
      }
    },
    series: [{
      name: 'Highcharts Scatter Plot',
      data: [[5, 10], [10, 15], [15, 20], [20, 25], [25, 30]]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  bubbleChartOptions: Highcharts.Options = {
    chart: {
      type: 'bubble',
    },
    title: {
      text: 'Highcharts Bubble Chart'
    },
    series: [{
      name: 'Highcharts Bubble Chart',
      data: [
        [10, 20, 30],
        [15, 25, 35],
        [20, 30, 40],
        [25, 35, 45],
        [30, 40, 50]
      ]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      bubble: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
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
    // Create the pie chart
    this.createHighchartsChart(this.highchartsPieChartRef, this.pieChartOptions);

    // Create the bar chart
    this.createHighchartsChart(this.highchartsBarChartRef, this.barChartOptions);

    // Create the line chart
    this.createHighchartsChart(this.highchartsLineChartRef, this.lineChartOptions);

    // Create the area chart
    this.createHighchartsChart(this.highchartsAreaChartRef, this.areaChartOptions);

    // Create the scatter plot
    this.createHighchartsChart(this.highchartsScatterPlotRef, this.scatterPlotOptions);

    // Create the bubble chart
    this.createHighchartsChart(this.highchartsBubbleChartRef, this.bubbleChartOptions);
  }

  private createHighchartsChart(chartRef: ElementRef, options: Highcharts.Options) {
    const ctx = (chartRef.nativeElement as HTMLDivElement).querySelector('.chart-container') as HTMLElement;
    new Highcharts.Chart(ctx, options);
  }
}
