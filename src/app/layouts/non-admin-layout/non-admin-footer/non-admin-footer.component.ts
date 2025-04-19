import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'footer[app-non-admin-footer]',
  templateUrl: './non-admin-footer.component.html',
  styleUrl: './non-admin-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'bg-bwc-black text-white py-12',
  },
})
export class NonAdminFooterComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
