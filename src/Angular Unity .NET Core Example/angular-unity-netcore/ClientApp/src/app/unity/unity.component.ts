import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {

  gameInstance: any;
  progress = 0;
  isReady = false;

  constructor() { }

  ngOnInit(): void {
    const loader = (window as any).UnityLoader;

    this.gameInstance = loader.instantiate('gameContainer', '/assets/Build/CraigGilchristUnity.json', {
      onProgress: (gameInstance: any, progress: number) => {
        this.progress = progress;
        if (progress === 1) {
          this.isReady = true;
        }
      }
    });
  }

}
