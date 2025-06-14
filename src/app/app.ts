import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './features/hero/components/button/button';
import { Hero } from './features/hero/pages/hero/hero';
import { About } from './features/about/pages/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ac-valhalla';
}
