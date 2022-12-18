import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  type :any;
  id :any;
  url="";
  movies:any;
  movie:any;

  constructor(private route: ActivatedRoute , private http : HttpClient) { }

  ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    this.id=this.route.snapshot.params['id'];
    if(this.type==='trending'){
      this.url='http://localhost:4200/assets/data/trending-movies.json';
    }
    else if(this.type==='theatre'){
      this.url='http://localhost:4200/assets/data/theatre-movies.json';
    }
    else if(this.type==='popular'){
      this.url='http://localhost:4200/assets/data/popular-movies.json';
    }
    else{this.url="";}
    console.log(this.id);
    console.log(this.type);
    console.log(this.url);
    this.getMovie();
  }

  // getMovie(){
  //   this.http.get(this.url).subscribe((moviess) => {
  //     this.movies=moviess;
  //     var index = this.movies.findIndex((movie: {id:number}) => { movie.id === this.id }); 
  //     console.log(index);
  //     if(index > -1) {
  //       this.movie=this.movies[index];
  //       console.log(index);
  //       console.log(this.movie);
  //     }
  //   });
  // }


  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
        console.log(this.movie);
      }
    });
  }
}
