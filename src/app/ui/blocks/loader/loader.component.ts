import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent { }
