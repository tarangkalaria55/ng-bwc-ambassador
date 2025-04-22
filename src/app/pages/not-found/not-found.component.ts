import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: {
    class: 'flex-grow pt-24 pb-20',
  },
})
export class NotFoundComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
