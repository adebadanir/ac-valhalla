import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/hero/pages/hero/hero';
import { About } from './features/about/pages/about/about';
import { GameFeatures } from "./features/game-features/pages/game-features/game-features";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, GameFeatures],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ac-valhalla';
}
