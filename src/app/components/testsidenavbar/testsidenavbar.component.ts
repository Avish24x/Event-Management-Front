import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testsidenavbar',
  templateUrl: './testsidenavbar.component.html',
  styleUrls: ['./testsidenavbar.component.scss']
})
export class TestsidenavbarComponent implements OnInit {
  collapsed: boolean = false;
  showToggle: boolean = true;
  responsive: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Navigate to the /analytics page when the component initializes
    this.router.navigateByUrl('/event-display');
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  isActive(link: string): boolean {
    // Logic to determine if the link is active based on the current route or any other criteria
    return true; // Example logic, replace it with your actual implementation
  }
}
