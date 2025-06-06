import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'footer[app-non-admin-footer]',
  templateUrl: './non-admin-footer.component.html',
  styleUrl: './non-admin-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: {
    class: 'bg-bwc-black text-white py-12',
  },
})
export class NonAdminFooterComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  year = new Date().getFullYear();

  ngOnInit(): void {}
}
