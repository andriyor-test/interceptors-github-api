import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-generic-infinite-scroll',
  templateUrl: './generic-infinite-scroll.component.html',
  styleUrls: ['./generic-infinite-scroll.component.css']
})
export class GenericInfiniteScrollComponent implements OnInit {
  @Input() url;
  @Output() itemSelect = new EventEmitter();
  items = [];
  currentUrl: string;
  currentPage = 1;
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.url.subscribe(url => {
      this.currentUrl = url;
      this.initialItems(this.currentUrl);
    })
  }

  initialItems(url) {
    this.loading = true;
    this.http.get(url).subscribe((items: []) => {
      this.items = items;
      this.loading = false;
    })
  }

  onScroll () {
    this.currentPage += 1;
    this.http.get(`${this.currentUrl}?page=${this.currentPage}`).subscribe((items: []) => {
      this.items = [...this.items, ...items];
    })
  }

  onItemSelect(item) {
    this.itemSelect.emit(item);
  }

}
