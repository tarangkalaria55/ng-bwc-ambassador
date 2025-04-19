import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NonAdminLayoutComponent } from './layouts/non-admin-layout/non-admin-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    // component: AdminLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/non-admin/home/home.component').then(
            m => m.HomeComponent,
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/non-admin/dashboard/dashboard.component').then(
            m => m.DashboardComponent,
          ),
      },
      {
        path: 'influencer-performance',
        loadComponent: () =>
          import(
            './pages/non-admin/influencer-performance/influencer-performance.component'
          ).then(m => m.InfluencerPerformanceComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/non-admin/profile/profile.component').then(
            m => m.ProfileComponent,
          ),
      },
      {
        path: 'ambassador',
        loadComponent: () =>
          import('./pages/non-admin/ambassador/ambassador.component').then(
            m => m.AmbassadorComponent,
          ),
      },
      {
        path: 'earnings-history',
        loadComponent: () =>
          import(
            './pages/non-admin/earnings-history/earnings-history.component'
          ).then(m => m.EarningsHistoryComponent),
      },
    ],
  },

  {
    path: 'admin',
    // component: NonAdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component').then(
            m => m.DashboardComponent,
          ),
      },

      {
        path: 'applications',
        loadComponent: () =>
          import('./pages/admin/applications/applications.component').then(
            m => m.ApplicationsComponent,
          ),
      },

      {
        path: 'influencers',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/admin/influencers/influencer-list/influencer-list.component'
              ).then(m => m.InfluencerListComponent),
          },
          {
            path: 'add',
            loadComponent: () =>
              import(
                './pages/admin/influencers/influencer-add/influencer-add.component'
              ).then(m => m.InfluencerAddComponent),
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import(
                    './pages/admin/influencers/influencer-detail/influencer-detail.component'
                  ).then(m => m.InfluencerDetailComponent),
              },
              {
                path: 'edit',
                loadComponent: () =>
                  import(
                    './pages/admin/influencers/influencer-edit/influencer-edit.component'
                  ).then(m => m.InfluencerEditComponent),
              },
            ],
          },
        ],
      },

      {
        path: 'influencer-code-details',
        loadComponent: () =>
          import(
            './pages/admin/influencer-code-details/influencer-code-details.component'
          ).then(m => m.InfluencerCodeDetailsComponent),
      },

      {
        path: 'admin-invoices',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/admin/admin-invoices/admin-invoices.component'
              ).then(m => m.AdminInvoicesComponent),
          },
          {
            path: ':invoiceId',
            loadComponent: () =>
              import(
                './pages/admin/admin-invoices/admin-invoice-detail/admin-invoice-detail.component'
              ).then(m => m.AdminInvoiceDetailComponent),
          },
        ],
      },

      {
        path: 'active-codes',
        loadComponent: () =>
          import('./pages/admin/active-codes/active-codes.component').then(
            m => m.ActiveCodesComponent,
          ),
      },

      {
        path: 'code-details/:code',
        loadComponent: () =>
          import('./pages/admin/code-details/code-details.component').then(
            m => m.CodeDetailsComponent,
          ),
      },

      {
        path: 'welcome-email',
        loadComponent: () =>
          import('./pages/admin/welcome-email/welcome-email.component').then(
            m => m.WelcomeEmailComponent,
          ),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        m => m.NotFoundComponent,
      ),
  },
];
