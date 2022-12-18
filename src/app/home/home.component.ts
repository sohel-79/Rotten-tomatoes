import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies :any;
  theatreMovies: any;
  popularMovies: any;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getAllTimePopularMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=>{
      this.trendingMovies=movies;
      console.log(this.trendingMovies);
    });
  }

  
  getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies)=>{
      this.theatreMovies=movies;
      console.log(this.theatreMovies);
    });
  }

  getAllTimePopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies)=>{
      this.popularMovies=movies;
      console.log(this.popularMovies);
    });

  }

  goToMovie(type:String, id:number){
    this.router.navigate(['movie',type, id]);
  }

}