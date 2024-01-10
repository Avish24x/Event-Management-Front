import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Initialize sidebar
    this.initSidebar();

    // Highlight active link on component initialization
    this.highlightActiveLink();

    // Subscribe to router events to update the active link on route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.highlightActiveLink();
      }
    });
  }

  initSidebar(): void {
    $("#close-sidebar").click(() => {
      $(".page-wrapper").removeClass("toggled");
    });

    $("#show-sidebar").click(() => {
      $(".page-wrapper").addClass("toggled");
    });
  }

  highlightActiveLink(): void {
    $(".sidebar-dropdown").removeClass("active");
    const currentRoute = this.router.url;
    $(`.sidebar-dropdown a[href='${currentRoute}']`).parent().addClass("active");
  }
}
