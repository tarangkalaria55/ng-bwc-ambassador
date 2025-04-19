import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NonAdminHeaderComponent } from './non-admin-header/non-admin-header.component';
import { NonAdminFooterComponent } from './non-admin-footer/non-admin-footer.component';

@Component({
  selector: 'app-non-admin-layout',
  templateUrl: './non-admin-layout.component.html',
  styleUrl: './non-admin-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NonAdminHeaderComponent, NonAdminFooterComponent],
  host: {
    class: 'min-h-screen flex flex-col',
  },
})
export class NonAdminLayoutComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
