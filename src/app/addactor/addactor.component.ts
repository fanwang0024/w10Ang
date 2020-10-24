import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.css']
})
export class AddactorComponent implements OnInit {

  actorsDB: any[] = [];
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";


  constructor(private dbService: DatabaseService, private router: Router) { }

  //get all actors
  onGetActors(){
    this.dbService.getActors().subscribe((data: any[]) =>{
      this.actorsDB = data;
    })
  }

  //create a new actor with post request
  onSaveActor(){
    let obj = { name: this.fullName, bYear: this.bYear};
    this.dbService.createActor(obj).subscribe(result =>{
      this.router.navigate(["/listactors"]);
    })
  }

  

  ngOnInit(): void {
  }

}
