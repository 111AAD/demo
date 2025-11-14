<template>
    <div class="main">
        <div class="top-image-container">
            <img src="@/assets/bg.jpg" alt="顶部图片" class="top-image" />
        </div>
        <div class="button-group">
            <button class="nav-button" @click="toAboutUs">公司简介</button>
            <button class="nav-button" @click="toCompanyHistory">发展历程</button>
            <button class="nav-button" @click="toHonor">荣誉资质</button>
        </div>
    </div>
</template>
<script setup>
import router from '@/router';
const toCompanyHistory = () => {
    router.push('/companyHistory')
}
const toAboutUs = () => {
    router.push('/about')
}
const toHonor = () =>{
    router.push('/honor')
}
</script>
<style scoped>
.main{
    margin-top: 10vh;
}
.top-image-container {
    width: 100%;
    box-sizing: border-box;
}

.top-image {
    width: 100%;
    height: 35vh;
    object-fit: cover;
}

.button-group {
    display: flex;
    gap: 12px;
    padding: 20px;
    justify-content: left;
    height: auto;
    background-color: #f8f9fa;

}

.nav-button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    color: #585151;
    background-color: white;
    border: 2px solid #ffffff;
    cursor: pointer;
    margin-left: 100px;
    transition: all 0.3s ease;
}

.nav-button:hover {
    background-color: #0066cc;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 102, 204, 0.2);
}
</style>