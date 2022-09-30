
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/InitialPage.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/ambience', component: () => import('pages/Ambience.vue') },
      { path: '/school/list', component: () => import('pages/SchoolsList.vue') },
      { path: '/school/ambience', component: () => import('pages/AmbienceSelection.vue') },
      { path: '/school/register', component: () => import('pages/RegisterNewSchool.vue') },
      { path: '/school/problems', component:()=>import('pages/ProblemReport.vue')},
      { path: '/school/options', component:()=>import('pages/SelectPage.vue')},
      { path: '/school/options/security', component:()=>import('pages/Security.vue') },
      { path: '/school/options/sustentability', component:()=>import('pages/Sustentability.vue') },
      { path: '/school/options/infraestrutura', component:()=>import('pages/Infraestrutura.vue') },
      { path: '/school/options/incendio', component:()=>import('pages/PrevencaoCombateIncendio.vue') },
      { path: '/school/EquipmentCheck', component:()=>import('pages/Equipment.vue')},
      { path: '/school/EquipmentCheckHistory', component:()=>import('pages/EquipmentHistory.vue')}
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
