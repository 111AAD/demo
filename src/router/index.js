import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '@/views/aboutUs/aboutUs.vue';
import ServicesPage from '../views/services/ServicesPage.vue';
import Contact from '../views/contactUs/contactUs.vue';
import ServicesDetail from '../views/services/ServicesDetial.vue';
import CompanyHistory from '@/views/aboutUs/companyHistory.vue';
import HonorPage from '@/views/aboutUs/honorPage.vue';
import ProductPage from '@/views/product/ProductPage.vue';
import ProductDetail from '@/views/product/productDetail.vue';
import CustomerCase from '@/views/Cases/customerCase.vue';
import CaseDetail from '@/views/Cases/caseDetail.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/contact', component: Contact },
  { path: '/servicesdetail', component: ServicesDetail },
  { path: '/companyHistory', component: CompanyHistory },
  { path: '/honor', component: HonorPage },
  { path: '/product', component: ProductPage },
  { path: '/customerCase', component: CustomerCase },
  { path: '/caseDetail', component: CaseDetail, props: true },
  { path: '/products', component: ProductDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;
