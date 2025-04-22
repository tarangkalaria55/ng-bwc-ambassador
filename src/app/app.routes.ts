import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NonAdminLayoutComponent } from './layouts/non-admin-layout/non-admin-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: NonAdminLayoutComponent,
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
        title: 'Dashboard',
        loadComponent: () =>
          import('./pages/non-admin/dashboard/dashboard.component').then(
            m => m.DashboardComponent,
          ),
      },
      {
        path: 'influencer-performance',
        title: 'Influencer performance',
        loadComponent: () =>
          import(
            './pages/non-admin/influencer-performance/influencer-performance.component'
          ).then(m => m.InfluencerPerformanceComponent),
      },
      {
        path: 'profile',
        title: 'Profile',
        loadComponent: () =>
          import('./pages/non-admin/profile/profile.component').then(
            m => m.ProfileComponent,
          ),
      },
      {
        path: 'ambassador',
        title: 'Ambassador',
        loadComponent: () =>
          import('./pages/non-admin/ambassador/ambassador.component').then(
            m => m.AmbassadorComponent,
          ),
      },
      {
        path: 'earnings-history',
        title: 'Earning history',
        loadComponent: () =>
          import(
            './pages/non-admin/earnings-history/earnings-history.component'
          ).then(m => m.EarningsHistoryComponent),
      },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component').then(
            m => m.DashboardComponent,
          ),
      },

      {
        path: 'applications',
        title: 'Applications',
        loadComponent: () =>
          import('./pages/admin/applications/applications.component').then(
            m => m.ApplicationsComponent,
          ),
      },

      {
        path: 'influencers',
        title: 'Influencers',
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
            title: 'Add influencer',
            loadComponent: () =>
              import(
                './pages/admin/influencers/influencer-add/influencer-add.component'
              ).then(m => m.InfluencerAddComponent),
          },
          {
            path: ':influencerID',
            title: 'Influencer detail',
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
                title: 'Edit influencer',
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
        title: 'Influencer code details',
        loadComponent: () =>
          import(
            './pages/admin/influencer-code-details/influencer-code-details.component'
          ).then(m => m.InfluencerCodeDetailsComponent),
      },

      {
        path: 'admin-invoices',
        title: 'Admin invoices',
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
            title: 'Admin invoice detail',
            loadComponent: () =>
              import(
                './pages/admin/admin-invoices/admin-invoice-detail/admin-invoice-detail.component'
              ).then(m => m.AdminInvoiceDetailComponent),
          },
        ],
      },

      {
        path: 'active-codes',
        title: 'Active codes',
        loadComponent: () =>
          import('./pages/admin/active-codes/active-codes.component').then(
            m => m.ActiveCodesComponent,
          ),
      },

      {
        path: 'code-details/:code',
        title: 'Code details',
        loadComponent: () =>
          import('./pages/admin/code-details/code-details.component').then(
            m => m.CodeDetailsComponent,
          ),
      },

      {
        path: 'welcome-email',
        title: 'Welcome email',
        loadComponent: () =>
          import('./pages/admin/welcome-email/welcome-email.component').then(
            m => m.WelcomeEmailComponent,
          ),
      },
    ],
  },

  {
    path: '**',
    component: NonAdminLayoutComponent,
    children: [
      {
        path: '',
        title: 'Page not found',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then(
            m => m.NotFoundComponent,
          ),
      },
    ],
  },
];
