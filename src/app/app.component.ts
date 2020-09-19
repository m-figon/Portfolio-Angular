import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading=true;
  constructor(private router: Router) { }
  currentUrl="/";
ngOnInit(){
  setTimeout(()=>{
    this.loading=false;
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
  },2000)
}
}
