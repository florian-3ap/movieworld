import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isOnSearchPage = false;

  searchForm = this.formBuilder.group({
    searchInput: '',
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isOnSearchPage = event.url.startsWith('/search');
      }
    });
  }

  onSubmit(): void {
    const input = this.searchForm.value.searchInput;
    this.searchForm.reset();
    if (input) {
      this.router.navigate(['/search'], {queryParams: {search: input}});
    } else {
      this.router.navigate(['/search']);
    }
  }
}
