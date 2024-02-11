import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testsidenavbar',
  templateUrl: './testsidenavbar.component.html',
  styleUrls: ['./testsidenavbar.component.scss']
})
export class TestsidenavbarComponent implements OnInit {
  collapsed: boolean = false;
  showToggle: boolean = true;
  responsive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  isActive(link: string): boolean {
    // Logic to determine if the link is active based on the current route or any other criteria
    return true; // Example logic, replace it with your actual implementation
  }
}
