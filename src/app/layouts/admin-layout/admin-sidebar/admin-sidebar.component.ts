// import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Renderer2,
  signal,
  type OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  host: {
    class:
      'sidebar relative flex flex-col h-screen bg-[#111111] border-r border-gray-800 text-white transition-all duration-300',
  },
})
export class AdminSidebarComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  #elRef = inject(ElementRef);
  #renderer = inject(Renderer2);

  isOpen = signal(false);

  constructor() {
    effect(() => {
      if (this.#elRef.nativeElement) {
        if (this.isOpen()) {
          // eslint-disable-next-line no-debugger
          debugger;
          this.#renderer.setAttribute(
            this.#elRef.nativeElement,
            'data-sidebar-open',
            'true',
          );
          this.#renderer.removeClass(this.#elRef.nativeElement, 'w-[60px]');
          this.#renderer.addClass(this.#elRef.nativeElement, 'w-[240px]');
        } else {
          this.#renderer.removeAttribute(
            this.#elRef.nativeElement,
            'data-sidebar-open',
          );
          this.#renderer.removeClass(this.#elRef.nativeElement, 'w-[240px]');
          this.#renderer.addClass(this.#elRef.nativeElement, 'w-[60px]');
        }
      }
    });
  }

  ngOnInit(): void {
    this.toggleMenu();
  }

  toggleMenu() {
    this.isOpen.update(x => !x);
  }
}
