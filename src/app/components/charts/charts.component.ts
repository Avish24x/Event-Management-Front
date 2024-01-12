import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartType, ChartData, ChartOptions, AnimationOptions } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('barChart') private barChartRef!: ElementRef;
  @ViewChild('pieChart') private pieChartRef!: ElementRef;
  @ViewChild('lineChart') private lineChartRef!: ElementRef;

  private barChart!: Chart;
  private pieChart!: Chart;
  private lineChart!: Chart;

  ngAfterViewInit() {
    this.createBarChart();
    this.createPieChart();
    this.createLineChart();
  }

  private createBarChart() {
    const ctx = (this.barChartRef.nativeElement as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          label: 'Bar Chart',
          data: [10, 20, 30],
          backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      },
      options: this.getChartOptions(),
    });
  }

  private createPieChart() {
    const ctx = (this.pieChartRef.nativeElement as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      },
      options: this.getChartOptions(),
    });
  }

  private createLineChart() {
    const ctx = (this.lineChartRef.nativeElement as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          label: 'Line Chart',
          data: [10, 20, 30],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: this.getChartOptions(),
    });
  }

  private getChartOptions(): ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false, // Set to false for responsiveness
      animation: {
        duration: 1000,
        easing: 'easeOutBounce',
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  }
}
