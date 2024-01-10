import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const self = this; // Capture the reference to 'this'

    $(function () {
      $(".sidebar-dropdown > a").click(function (this: HTMLElement) {
        $(".sidebar-submenu").slideUp(200);
        if (
          $(this)
            .parent()
            .hasClass("active")
        ) {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .parent()
            .removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
          $(this)
            .parent()
            .addClass("active");
        }
      });

      $("#close-sidebar").click(function (this: HTMLElement) {
        $(".page-wrapper").removeClass("toggled");
      });
      $("#show-sidebar").click(function (this: HTMLElement) {
        $(".page-wrapper").addClass("toggled");
      });
    });
  }
}
