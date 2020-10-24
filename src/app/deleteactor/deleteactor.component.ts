import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-deleteactor',
  templateUrl: './deleteactor.component.html',
  styleUrls: ['./deleteactor.component.css']
})
export class DeleteactorComponent implements OnInit {

  actorsDB: any[] = [];
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetActors();
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data: any[]) =>{
      this.actorsDB = data;
    })
  }

  onDeleteActor(item) {
    this.dbService.deleteActor(item._id).subscribe(result => {
      this.onGetActors();
    });
  }
}
