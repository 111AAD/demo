<template>
    <div class="customer-wrap">
        <div class="top-img" ref="topImgDOM">
            <p>客户案例<br>Case</p>
            <span class="pointer" @click="xiahua">SCROLL&nbsp;&nbsp;&nbsp;&nbsp;→</span>
        </div>
        <div class="cases" ref="casesDOM">
            <div class="cases-item" v-for="(item, index) in caseList" :key="index">
                <img class="cases-item-img" :src="item.img" />
                <div class="cases-item-middle" @click="toDetail(item)">了解更多</div>
                <div class="cases-item-right">
                    <h1 class="cases-item-h1">{{ item.title }}</h1>
                    <hr class="divider" />
                    <p class="cases-item-p">{{ item.des }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {ref, onMounted, onUnmounted} from 'vue'

const router = useRouter();
const casesDOM = ref(null)
const topImgDOM = ref(null)

const caseList = [{
    id: 0,
    img: require('@/assets/bg.jpg'),
    title: '这是项目名称',
    des: '这是项目的具体内容'
}, {
    id: 1,
    img: require('@/assets/bg.jpg'),
    title: '这是项目名称',
    des: '这是项目的具体内容'
}, {
    id: 2,
    img: require('@/assets/bg.jpg'),
    title: '这是项目名称',
    des: '这是项目的具体内容'
}]

const xiahua = () => {
    window.scrollTo({
        top: 708.9,
        behavior: 'smooth'
    })
}

const toDetail = (item) => {
    router.push({
        path: '/caseDetail',
        query: {
            id: item.id
        }
    })
}

const handleScroll = () => {
    const element = [
        topImgDOM.value,
        casesDOM.value,
    ]
    element.forEach(el => {
        if (el && isElementInViewport(el)) {
            el.classList.add('animate-in')
        }
    })
}

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        && rect.bottom >= 0
    )
}

onMounted(() => {
    // 延迟执行滚动检测，确保DOM已渲染
    setTimeout(handleScroll, 100)
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.customer-wrap {
    margin-top: 10vh;
    max-width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
}

/* 顶部图片区域 - 缩放进入效果 */
.top-img {
    height: 85vh;
    width: 100%;
    position: relative;
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}

.top-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
        rgba(0, 0, 0, 0.4) 0%, 
        rgba(0, 0, 0, 0.2) 50%, 
        rgba(0, 0, 0, 0.4) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 1s ease 0.3s;
}

.top-img.animate-in {
    opacity: 1;
    transform: scale(1) translateY(0);
}

.top-img.animate-in::before {
    opacity: 1;
}

.top-img p {
    font-size: 40px;
    font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    font-weight: 500;
    color: white;
    position: absolute;
    margin-left: 100px;
    margin-top: 200px;
    z-index: 2;
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.top-img.animate-in p {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.pointer {
    display: inline-block;
    color: #fff;
    animation-name: huadong;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translateX(-50%);
    font-size: 20px;
    writing-mode: vertical-lr;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.8s ease 0.8s;
}

.top-img.animate-in .pointer {
    opacity: 1;
}

@keyframes huadong {
    0%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(-10px);
    }
}

/* 案例区域 */
.cases {
    height: fit-content;
    width: 80%;
    background-color: #fff;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 1s ease, transform 1s ease;
}

.cases.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.cases-item {
    background: linear-gradient(to right, #eaf5ff, #ffffff);
    box-shadow: 0 2px 12px rgba(135, 206, 250, 0.2);
    margin: 50px 0;
    height: 30vh;
    width: 95%;
    color: rgb(105, 120, 159);
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cases-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(135, 206, 250, 0.3);
}

.cases-item-img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
    transition: transform 0.8s ease;
}

.cases-item:hover .cases-item-img {
    transform: scale(1.05);
}

.cases-item-middle {
    width: 0;
    opacity: 0;
    transition: all 1.2s ease;
    background-color: rgba(40, 134, 222, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30%;
}

.cases-item-right {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    transition: all 1.2s ease;
    padding: 20px;
}

.cases-item-h1 {
    font-size: 30px;
    padding-left: 20px;
    flex: 1;
    font-weight: 600;
    color: #2c3e50;
    transition: color 0.3s ease;
}

.cases-item:hover .cases-item-h1 {
    color: #2980b9;
}

.divider {
    border: none;
    height: 1px;
    background: linear-gradient(to right, #87cefa, transparent);
    margin: 10px 0;
    width: 80%;
}

.cases-item-p {
    padding-left: 20px;
    font-size: 18px;
    flex: 3;
    line-height: 1.6;
    color: #5d6d7e;
    transition: color 0.3s ease;
}

.cases-item:hover .cases-item-p {
    color: #34495e;
}

.cases-item:hover .cases-item-right {
    transform: translateX(50px);
}

.cases-item:hover .cases-item-middle {
    width: 100px;
    opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .top-img {
        height: 70vh;
    }
    
    .top-img p {
        font-size: 28px;
        margin-left: 30px;
        margin-top: 150px;
    }
    
    .cases {
        width: 95%;
    }
    
    .cases-item {
        height: auto;
        flex-direction: column;
        margin: 30px 0;
    }
    
    .cases-item-img {
        width: 100%;
        height: 200px;
        border-radius: 8px 8px 0 0;
    }
    
    .cases-item-middle {
        display: none;
    }
    
    .cases-item:hover .cases-item-right {
        transform: none;
    }
    
    .cases-item-h1 {
        font-size: 24px;
        padding-left: 0;
    }
    
    .cases-item-p {
        font-size: 16px;
        padding-left: 0;
    }
    
    .pointer {
        font-size: 16px;
        top: 85%;
    }
}

@media (max-width: 480px) {
    .top-img p {
        font-size: 22px;
        margin-left: 20px;
        margin-top: 120px;
    }
    
    .cases-item-h1 {
        font-size: 20px;
    }
    
    .cases-item-p {
        font-size: 14px;
    }
}
</style>