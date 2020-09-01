import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit, OnDestroy {

  gameInstance: any;
  progress = 0;
  isReady = false;

  @Input() version: number = 1;

  constructor() { }

  ngOnInit(): void {
    const loader = (window as any).UnityLoader;

    this.gameInstance = loader.instantiate('gameContainer', `/assets/Build${this.version}/CraigGilchristUnity.json`, {
      onProgress: (gameInstance: any, progress: number) => {
        this.progress = progress;
        if (progress === 1) {
          this.isReady = true;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.gameInstance.Quit();
  }

  startStopRotating() {
    this.gameInstance.SendMessage('Director', 'StartStopRotating');
  }

  startStopAnimation() {
    this.gameInstance.SendMessage('Director', 'StartStopAnimation');
  }

  setDistance(distance: number) {
    this.gameInstance.SendMessage('Director', 'SetDistance', distance);
  }

}
