import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-updateactor',
  templateUrl: './updateactor.component.html',
  styleUrls: ['./updateactor.component.css']
})
export class UpdateactorComponent implements OnInit {

  actorsDB: any[] = [];
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetActors();
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data: any[])=>{
      this.actorsDB = data;
    })
  }

  onUpdateActor(){
    let obj = {name: this.fullName, bYear: this.bYear};
    this.dbService.updateActor(this.actorId, obj).subscribe(result =>{
      this.onGetActors();
      this.router.navigate(["listactors"]);
    })
  }

  onSelectActor(item){
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id
  }

}
