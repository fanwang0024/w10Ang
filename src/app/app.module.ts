import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddactorComponent } from './addactor/addactor.component';
import { ListactorsComponent } from './listactors/listactors.component';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { Addactor2movieComponent } from './addactor2movie/addactor2movie.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';


const appRoutes: Routes = [
  {path:"listactors", component:ListactorsComponent},
  {path:"addactor", component:AddactorComponent},
  { path: "updateactor", component: UpdateactorComponent},
  { path: "deleteactor", component: DeleteactorComponent},
  { path: "addmovie", component: AddmovieComponent},
  { path: "deletemovie", component: DeletemovieComponent},
  { path: "listmovies", component: ListmoviesComponent},
  { path: "addactor2movie", component: Addactor2movieComponent},
  { path: "viewnotfound", component: ViewnotfoundComponent},
  { path: "", redirectTo: "/listactors", pathMatch: "full"},
];



@NgModule({
  declarations: [
    AppComponent,
    AddactorComponent,
    ListactorsComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmoviesComponent,
    Addactor2movieComponent,
    ViewnotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
