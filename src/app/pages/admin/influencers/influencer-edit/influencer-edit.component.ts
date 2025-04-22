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
  selector: 'main[app-influencer-edit]',
  templateUrl: './influencer-edit.component.html',
  styleUrl: './influencer-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'flex-1 overflow-y-auto bg-gray-50',
  },
})
export class InfluencerEditComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  influencerID = input.required<string>();

  ngOnInit(): void {}
}
