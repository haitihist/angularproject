import { CvService } from './../cv.service';
import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   searchResult: Personne[];
   chaine  = '';
  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit() {
    this.searchResult = [];
  }

  search() {
    const name = this.chaine.trim();
    if (name.length) {
      this.cvService.findByName(name).subscribe(
        (response) => {
          this.searchResult = response;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.searchResult = [];
    }


  }

  selectPersonne(personne: Personne) {
   const link = ['cv', personne.id];
   this.router.navigate(link);
   this.searchResult = [];
   this.chaine = '';
  }

}
