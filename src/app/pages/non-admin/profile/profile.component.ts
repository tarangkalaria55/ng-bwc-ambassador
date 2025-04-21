import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[app-profile]',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'flex-grow pt-24 pb-20',
  },
})
export class ProfileComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
