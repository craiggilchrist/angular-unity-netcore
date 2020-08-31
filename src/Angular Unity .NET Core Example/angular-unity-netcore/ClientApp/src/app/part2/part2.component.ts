import { Component, OnInit, ViewChild } from '@angular/core';
import { UnityComponent } from '../unity/unity.component';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
  animationName = "Unknown";

  constructor() { }

  @ViewChild('unity', { static: true }) unity: UnityComponent;

  ngOnInit() {

    (window as any).animationChangeListener = (animationName: string) => {
      this.animationName = animationName;
    }

  }

  get unityIsLoaded(): boolean {
    return this.unity.progress === 1;
  }

  startStopAnimation(): void {
    this.unity.startStopAnimation();
  }

  startStopCameraLoop(): void {
    this.unity.startStopRotating();
  }

  setCameraDistance(distance: number): void {
    this.unity.setDistance(distance);
  }

  get progress(): number {
    return this.unity.progress * 100;
  }

}
