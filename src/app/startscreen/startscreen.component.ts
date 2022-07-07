import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor(private router: Router) { }
  gamesound = new Audio('assets/sound/gamestart.ogg');


  ngOnInit(): void {
  }
  

  newGame(){
    //Start Game
    this.gamesound.play();

    this.router.navigateByUrl('/game');
  }

}
