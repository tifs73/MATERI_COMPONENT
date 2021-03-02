import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  paranama : String;

  ngOnInit() {
    let isinama = this.route.snapshot.paramMap.get('nama');
    this.paranama = isinama;
  }

}