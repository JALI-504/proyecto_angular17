import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ CommonModule, TitleComponent],
  template: `

  <app-title title="Change Detecction" />

  <pre> {{ frameworkAsSignal() | json }} </pre>
  <pre> {{ frameworkAsProperty | json }} </pre>

 `
  
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseData: 2016,
  })
  public frameworkAsProperty = {
    name: 'Angular',
    releaseData: 2016,
  };
  
  constructor(){

    setTimeout(()=>{

      this.frameworkAsProperty.name = 'React';
      
      console.log('Hecho')
    }, 3000);
  }

}
