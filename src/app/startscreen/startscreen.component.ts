import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) { }
  gamesound = new Audio('assets/sound/gamestart.ogg');


  ngOnInit(): void {
  }
  

  newGame(){
    //Start Game
    let game = new Game();
    this.gamesound.play();
    this.firestore
        .collection('games')
        .add(game.toJson())
        .then((gameInfo: any) => {
          this.router.navigateByUrl('/game/' +gameInfo.id);

        });

  }

}
