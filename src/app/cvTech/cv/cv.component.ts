import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { PremierService } from 'src/app/premier.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
personnes: Personne[];
selectedPersonne: Personne;
  constructor(private premierService: PremierService,private cvservice: CvService) { }

  ngOnInit() {
    this.cvservice.getPersonnes().subscribe(
      (response) => {
        this.personnes = response;
      },
      (error) => {
         alert('Probleme access a l api les donnees afficher sont fake');
         this.personnes = this.cvservice.getFakePersonnes();

      }
    );

    this.premierService.addData('data from cv component');
    this.premierService.logger(this.personnes);
  }

selectPersonne(personne) {
  console.log(personne);
 this.selectedPersonne = personne;
 
}
}
