import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RdxAspectRatioDirective } from '@radix-ng/primitives/aspect-ratio';
import {
  provideRdxDialog,
  RdxDialogService,
} from '@radix-ng/primitives/dialog';
import { LoginModalComponent } from '../../../components/login-modal/login-modal.component';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, CarouselModule, RdxAspectRatioDirective],
  providers: [provideRdxDialog()],
  host: {
    class: '',
  },
})
export class HomeComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  #dialog = inject(RdxDialogService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fa-chevron-left"></i>',
      '<i class="fa-chevron-right></i>"',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {}

  openLoginModal() {
    this.#dialog.open({
      content: LoginModalComponent,
      backdropClass: 'login-backdrop',
      panelClasses: ['login-panel'],
    });
  }
}
