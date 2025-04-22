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

  invoiceId = input.required<string>();

  ngOnInit(): void {}
}
