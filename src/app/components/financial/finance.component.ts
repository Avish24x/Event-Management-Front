import { Component, OnInit } from '@angular/core';
import Chart, { ChartTypeRegistry } from 'chart.js/auto';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generateCharts();
  }

  generateCharts() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    
    // Dummy data for Budget Allocation
    const budgetAllocationData = [50, 30, 70, 40, 90];
    this.createChart('budgetAllocationChart', 'Budget Allocation', months, budgetAllocationData, 'bar');

    // Dummy data for Expenses Over Time
    const expensesOverTimeData = [20, 40, 60, 80, 100];
    this.createChart('expensesOverTimeChart', 'Expenses Over Time', months, expensesOverTimeData, 'line');

    // Dummy data for Revenue Sources
    const revenueSourcesData = [30, 50, 80, 60, 110];
    this.createChart('revenueSourcesChart', 'Revenue Sources', months, revenueSourcesData, 'bar');

    // Dummy data for Profit and Loss Statement
    const profitLossData = [-10, 20, -10, 30, 50];
    this.createChart('profitLossChart', 'Profit and Loss Statement', months, profitLossData, 'line');

    // Dummy data for Cash Flow
    const cashFlowData = [10, -20, 30, -40, 50];
    this.createChart('cashFlowChart', 'Cash Flow', months, cashFlowData, 'bar');

    // Dummy data for Sponsorship Contribution
    const sponsorshipData = [20, 40, 60, 80, 100];
    this.createChart('sponsorshipContributionChart', 'Sponsorship Contribution', months, sponsorshipData, 'line');

    // Dummy data for Miscellaneous Expenses
    const miscellaneousExpensesData = [10, 15, 20, 25, 30];
    this.createChart('miscellaneousExpensesChart', 'Miscellaneous Expenses', months, miscellaneousExpensesData, 'bar');

    // Dummy data for Trend Analysis
    const trendAnalysisData = [50, 60, 70, 80, 90];
    this.createChart('trendAnalysisChart', 'Trend Analysis', months, trendAnalysisData, 'line');
  }

  createChart(
    canvasId: string,
    label: string,
    labels: string[],
    data: number[],
    type: keyof ChartTypeRegistry
  ) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!ctx) return;

    new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true }
        }
      }
    });
  }
}
