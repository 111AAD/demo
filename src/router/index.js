import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    props:true,
    component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/aboutUs/aboutUs.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/services/ServicesPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contactUs/contactUs.vue')
  },
  {
    path: '/servicesdetail',
    name: 'ServicesDetail',
    component: () => import(/* webpackChunkName: "services-detail" */ '../views/services/ServicesDetial.vue')
  },
  {
    path: '/companyHistory',
    name: 'CompanyHistory',
    component: () => import(/* webpackChunkName: "company-history" */ '@/views/aboutUs/companyHistory.vue')
  },
  {
    path: '/honor',
    name: 'Honor',
    component: () => import(/* webpackChunkName: "honor" */ '@/views/aboutUs/honorPage.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '@/views/product/ProductPage.vue')
  },
  {
    path: '/customerCase',
    name: 'CustomerCase',
    component: () => import(/* webpackChunkName: "customer-case" */ '@/views/Cases/customerCase.vue')
  },
  {
    path: '/caseDetail',
    name: 'CaseDetail',
    component: () => import(/* webpackChunkName: "case-detail" */ '@/views/Cases/caseDetail.vue'),
    props: true
  },
  {
    path: '/products',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "product-detail" */ '@/views/product/productDetail.vue'),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;