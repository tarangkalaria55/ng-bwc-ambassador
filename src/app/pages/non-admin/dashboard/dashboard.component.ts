import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'flex-grow pt-24 pb-20',
  },
})
export class DashboardComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
