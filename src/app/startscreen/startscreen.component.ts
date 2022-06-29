import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newGame(){
    //Start Game
    this.router.navigateByUrl('/game');
  }

}
