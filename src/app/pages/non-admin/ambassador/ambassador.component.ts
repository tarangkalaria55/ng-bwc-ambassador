import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrl: './ambassador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class AmbassadorComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
