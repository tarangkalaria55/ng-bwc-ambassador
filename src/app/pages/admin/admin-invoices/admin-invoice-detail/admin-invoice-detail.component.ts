import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-admin-invoice-detail',
  templateUrl: './admin-invoice-detail.component.html',
  styleUrl: './admin-invoice-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class AdminInvoiceDetailComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
