import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-code-details',
  templateUrl: './code-details.component.html',
  styleUrl: './code-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class CodeDetailsComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
