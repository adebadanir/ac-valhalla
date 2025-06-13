import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [Header, Button, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
