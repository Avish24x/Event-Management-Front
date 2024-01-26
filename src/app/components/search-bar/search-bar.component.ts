import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: string = '';
  isClosed: boolean = true;
  isExpanded: boolean = false;
  isProfileDropdownOpen: boolean = false; // Add this line

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchQuery);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Toggle Chatbox
  toggleChatbox() {
    this.isClosed = !this.isClosed;
  }

  onClose() {
    this.isClosed = true;
  }

  onClick() {
    this.isExpanded = !this.isExpanded;
  }

  // Toggle Profile Dropdown
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
}
