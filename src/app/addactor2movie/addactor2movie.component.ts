import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addactor2movie',
  templateUrl: './addactor2movie.component.html',
  styleUrls: ['./addactor2movie.component.css']
})
export class Addactor2movieComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }

  actorsDB: any[] = [];
  moviesDB: any[] = [];
  fullName: string = "";
  title: string = "";
  bYear: number = 0;
  year: number = 0;
  actorId: string = "";
  movieId: string = "";

  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }

  onSelectMovie(item){
    this.title = item.title;
    this.year = item.year;
    this.movieId = item._id;
  }

  onSelectActor(item){
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  addActor2Movie(){
    let idA = {_id: this.actorId};
    let idM = this.movieId;
    this.dbService.addActor2Movie(idA,idM).subscribe((data: any[])=>{
      this.onGetMovies();
    })
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data: any[])=>{
      this.actorsDB = data;
    });
  }
  onGetMovies(){
    this.dbService.getMovies().subscribe((data: any[]) =>{
      this.moviesDB = data;
    });
  }
}
