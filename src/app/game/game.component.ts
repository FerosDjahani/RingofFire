import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';





@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  


  constructor(firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  cardsound = new Audio('assets/sound/cardflip.mp3');


  newGame(){
      this.game = new Game();
      console.log(this.game);
  }


  takeCard(){
    if (!this.pickCardAnimation) {
      this.cardsound.play();

    this.currentCard = this.game.stack.pop();
    console.log(this.currentCard);
    this.pickCardAnimation = true;


    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

    setTimeout(()  =>{
      this.game.playedCards.push(this.currentCard);

     this.pickCardAnimation = false;
    },1000);

    }
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
   
    dialogRef.afterClosed().subscribe((name: string) => {
      if(name && length >0){
      this.game.players.push(name);
      }
    });
  }


}



