import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

    public cadastro: FormGroup;

    public formulario = [
   { artista: 'Adam Sandler', isChecked: true },
   { artista: 'Leonardo DiCaprio', isChecked: false },
   { artista: 'Keanu Reeves', isChecked: true },
   { artista: 'Bruce Willis', isChecked: false },
   { artista: 'Emma Watson', isChecked: true },
   { artista: 'Galinha pintadinha', isChecked: false }
 ];

    constructor(private fconstrutor: FormBuilder) {
        this.cadastro = this.fconstrutor.group({
            'nome': ['', Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10)
        ])],
            'diretor': ['', Validators.compose([
            Validators.required,
            Validators.minLength(3)
         ])],
            'senha': ['', Validators.compose([
            Validators.required,
            Validators.minLength(6)
         ])]
   });

    }
    enviarCadastro(){
       console.log(this.cadastro.value);
     }

  ngOnInit() {
  }

}
