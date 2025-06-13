import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  imgUrl = 'images/logo.png';
  navigation = [
    {
      name: 'Main',
      url: '#',
    },
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Game Features',
      url: '#gamne-features',
    },
    {
      name: 'System Requirements',
      url: '#system-requirements',
    },
    {
      name: 'Subscribe',
      url: '#subscribe',
    },
  ];

  svgIcon = [
    {
      name: 'XBOX',
      url: 'svg/xbox.svg',
    },
    {
      name: 'STEAM',
      url: 'svg/steam.svg',
    },
  ];

  languages = [
    {
      name: 'Eng',
      url: '#',
    },
    {
      name: 'Ind',
      url: '#',
    },
    {
      name: 'Jpn',
      url: '#',
    },
    {
      name: 'Chn',
      url: '#',
    },
    {
      name: 'Tha',
      url: '#',
    },
  ];

  constructor() {}

  isClicked: boolean = false;

  onClick() {
    this.isClicked = !this.isClicked;
  }
}
