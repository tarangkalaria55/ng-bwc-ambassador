import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'main[app-admin-invoice-detail]',
  templateUrl: './admin-invoice-detail.component.html',
  styleUrl: './admin-invoice-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'flex-1 overflow-y-auto bg-gray-50',
  },
})
export class AdminInvoiceDetailComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
