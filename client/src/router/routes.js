
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/InitialPage.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/school/register', component: () => import('pages/RegisterNewSchool.vue') },
      { path: '/school/ambience', component: () => import('pages/AmbienceSelection.vue') },
      { path: '/school/list', component: () => import('pages/SchoolsList.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
