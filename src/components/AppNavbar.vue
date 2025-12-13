<template>
  <div class="main">
    <img src="@/assets/科技1.png" class="logo" alt="公司logo" />


    <div class="navbar">
      <ul class="nav-links">
        <li v-for="(item, index) in navItems" :key="index">
          <router-link :to="item.path" :class="{ active: isActive(item.path) }" class="nav-link">
            {{ item.name }}
            <span class="nav-indicator"></span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="tel">
      <img src="@/assets/电话.png" alt="联系电话" />
      <span class="tel-number">400-123-4567</span>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const navItems = [
  { name: '网站首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '服务中心', path: '/services' },
  { name: '产品中心', path: '/product' },
  { name: '客户案例', path: '/customerCase' },
  { name: '联系我们', path: '/contact' }
]
const isActive = (path) => {
  return route.path === path;
}

</script>

<style scoped>
.main {
  height: 10vh;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}


.logo {
  height: 80%;
  padding-left: 40px;
  margin-right: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}


.navbar {
  height: 100%;
  display: flex;
  justify-content: center;
  padding-left: 0;
}

.nav-links {
  list-style: none;
  display: flex;
  height: 100%;
  padding-left: 0;
  margin: 0;
  align-items: center;
}

.nav-link {
  font-size: 18px;
  color: #333;
  text-decoration: none;
  padding: 8px 20px;
  margin: 0 5px;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  color: #0066cc;
  transform: translateY(-2px);
}

.nav-link.active {
  color: #0066cc;
  font-weight: 600;
}

.nav-indicator {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #0066cc;
  transition: width 0.3s ease;
}

.nav-link:hover .nav-indicator,
.nav-link.active .nav-indicator {
  width: 100%;
}
.tel {
  height: 100%;
  width: 6vw;
  background-color: #183980;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tel:hover {
  width: 15vw;
  background-color: #1e4393;
}

.tel img {
  height: 50%;
  width: 50%;
  object-fit: contain;
  z-index: 2;
  transition: transform 0.3s ease;
}

.tel:hover img {
  transform: scale(1.1) translateX(-35px);
}

.tel-number {
  position: absolute;
  right: -100%;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 1;
}

.tel:hover .tel-number {
  right: 15%;
}
</style>