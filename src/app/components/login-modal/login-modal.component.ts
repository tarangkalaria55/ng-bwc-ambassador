import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';
import { injectDialogRef } from '@radix-ng/primitives/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: '!grid gap-4 p-6 !relative',
  },
})
export class LoginModalComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  // readonly data = injectDialogData<{ name: string; username?: string }>();

  readonly ref = injectDialogRef<boolean>();

  ngOnInit(): void {}

  close(): void {
    this.ref.close(true);
  }
}
