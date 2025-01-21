import {
  Component,
  effect,
  ElementRef,
  inject,
  Injector,
  TemplateRef,
  viewChild,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgDriver, provideNgDriver} from '../../../ng-driver/src/lib/ng-driver.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    provideNgDriver({animate: true})]
})
export class AppComponent {
  ngDriver = inject(NgDriver)

  steps = [
    {element: '#step1', popover: {title: 'Step 1', description: 'This is Step 1'}},
    {element: '#step2', popover: {title: 'Step 2', description: 'This is Step 2'}},
    {element: '#step3', popover: {title: 'Step 3', description: 'This is Step 3'}},
  ]

  startTour() {
    this.ngDriver.setSteps(this.steps);
    this.ngDriver.drive()
  }
}
