import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface SoundPacks {
  id: number;
  color: string;
  color2: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  public soundPacks: SoundPacks[] = [];

  public showedSoundPacks: SoundPacks[] = [];

  public searchedPack = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.soundPacks.push({
        id: i+1,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        color2: '#' + Math.floor(Math.random() * 16777215).toString(16),
        title: 'Sound Pack ' + i,
        description: 'This is a description of the sound pack',
        image: 'https://picsum.photos/200/300?random=' + i
      })
    }
    this.showedSoundPacks = this.soundPacks;
  }

  public onChangeEvent(event: any): void {
    this.showedSoundPacks = this.soundPacks.filter(pack => pack.title.toLowerCase().includes(event.target.value.toLowerCase()));
  }
}
