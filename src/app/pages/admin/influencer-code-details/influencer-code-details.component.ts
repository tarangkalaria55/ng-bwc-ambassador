import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-influencer-code-details',
  templateUrl: './influencer-code-details.component.html',
  styleUrl: './influencer-code-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class InfluencerCodeDetailsComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
