import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from "../database.service";


@Component({
  selector: 'app-listactors',
  templateUrl: './listactors.component.html',
  styleUrls: ['./listactors.component.css']
})
export class ListactorsComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) {}

  actorsDB: any[] = [];

  ngOnInit(): void {
    this.onGetActors();
   
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data: any[]) =>{
      this.actorsDB = data;
    });
  }

  

}
