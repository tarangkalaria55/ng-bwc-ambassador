import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[app-influencer-detail]',
  templateUrl: './influencer-detail.component.html',
  styleUrl: './influencer-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: {
    class: 'flex-1 overflow-y-auto bg-gray-50',
  },
})
export class InfluencerDetailComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  influencerID = input.required<string>();

  ngOnInit(): void {}
}
