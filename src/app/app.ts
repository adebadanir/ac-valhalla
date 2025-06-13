import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './features/hero/components/button/button';
import { Hero } from './features/hero/pages/hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ac-valhalla';
}
