import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'header[app-non-admin-header]',
  templateUrl: './non-admin-header.component.html',
  styleUrl: './non-admin-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'sticky top-0 w-full z-50',
  },
})
export class NonAdminHeaderComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
