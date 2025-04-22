import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { mockInfluencers } from '../../../../data/mockInfluencerData';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[app-influencer-list]',
  templateUrl: './influencer-list.component.html',
  styleUrl: './influencer-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: {
    class: 'flex-1 overflow-y-auto bg-gray-50',
  },
})
export class InfluencerListComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #router = inject(Router);

  influencers = [...mockInfluencers];

  ngOnInit(): void {}

  onClickDetail(id: number | string) {
    this.#router.navigate(['/', 'admin', 'influencers', id]);
  }
}
