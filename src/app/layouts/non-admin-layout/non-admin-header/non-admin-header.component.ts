import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  provideRdxDialog,
  RdxDialogService,
} from '@radix-ng/primitives/dialog';
import { LoginModalComponent } from '../../../components/login-modal/login-modal.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header[app-non-admin-header]',
  templateUrl: './non-admin-header.component.html',
  styleUrl: './non-admin-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  providers: [provideRdxDialog()],
  host: {
    class: 'sticky top-0 w-full z-50',
  },
})
export class NonAdminHeaderComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  #dialog = inject(RdxDialogService);

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.#dialog.open({
      content: LoginModalComponent,
      backdropClass: 'login-backdrop',
      panelClasses: ['login-panel'],
    });
  }
}
