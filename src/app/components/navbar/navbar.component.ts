import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnInit {

  isNavbarHidden = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Initial check for visibility
    this.toggleNavbarVisibility();

    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check for visibility on route change
        this.toggleNavbarVisibility();
        // Highlight active link
        this.highlightActiveLink();
      }
    });
  }

  ngAfterViewInit(): void {
    // Initialize sidebar
    this.initSidebar();
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

  toggleNavbarVisibility(): void {
    // Check if the current route is a login or signup page
    const isLoginPage = this.router.url.includes('login');
    const isSignUpPage = this.router.url.includes('sign%20up'); // Updated to match the encoded space

    // Hide the navbar on login and signup pages, show it otherwise
    this.isNavbarHidden = isLoginPage || isSignUpPage;
  }
}
