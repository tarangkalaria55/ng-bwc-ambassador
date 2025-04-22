import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[app-code-details]',
  templateUrl: './code-details.component.html',
  styleUrl: './code-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'flex-1 overflow-y-auto bg-gray-50',
  },
})
export class CodeDetailsComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  code = input.required<string>();

  ngOnInit(): void {}
}
