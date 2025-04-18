import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-non-admin-layout',
  templateUrl: './non-admin-layout.component.html',
  styleUrl: './non-admin-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class NonAdminLayoutComponent implements OnInit {
  ngOnInit(): void {}
}
