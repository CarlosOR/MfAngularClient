import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

}
