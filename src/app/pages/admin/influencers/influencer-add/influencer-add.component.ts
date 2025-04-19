import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-influencer-add',
  templateUrl: './influencer-add.component.html',
  styleUrl: './influencer-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class InfluencerAddComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
