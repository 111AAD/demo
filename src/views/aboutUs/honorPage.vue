<template>
    <div class="honor">
        <AboutBar />
        <h2 class="title" ref="titleDOM">荣誉资质</h2>
        <p class="en-title" ref="entitleDOM">Honors and Qualifications</p>
        <div class="timeline-container" ref="timelineDOM">
            <el-icon @click="prev" v-if="currentIndex > 0" class="circle">
                <ArrowLeftBold />
            </el-icon>
            <el-icon v-else class="circle-xiaoshi">
                <ArrowLeft />
            </el-icon>

            <div class="timeline-wrap">
                <div class="timeline" ref="timelineRef">
                    <div class="timeline-item" v-for="(item, index) in HonorsData" :key="index">
                        <img :src="item.img" />
                    </div>
                </div>
            </div>

            <el-icon @click="next" v-if="currentIndex < HonorsData.length - 3" class="circle">
                <ArrowRightBold />
            </el-icon>
            <el-icon v-else class="circle-xiaoshi">
                <ArrowRight />
            </el-icon>
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted, onUnmounted  } from 'vue'

import {
    ArrowRightBold,
    ArrowLeftBold,
    ArrowLeft,
    ArrowRight
} from '@element-plus/icons-vue'
import AboutBar from '@/components/AboutBar.vue'
const timelineRef = ref(null)
const currentIndex = ref(0)
const translateX = ref(0)
const itemWidth = 400
const timelineDOM = ref(null)
const entitleDOM = ref(null)
const titleDOM = ref(null)
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
    )
}

const handleScroll = () => {
    const elements = [
        entitleDOM.value,
        titleDOM.value,
        timelineDOM.value
    ].filter(el => el !== null && el !== undefined)
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animate-in')
        }
    })
}
const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
        translateX.value += itemWidth
        timelineRef.value.style.transform = `translateX(${translateX.value}px)`
    }
}
const next = () => {
    if (currentIndex.value < HonorsData.length - 3) {
        currentIndex.value++
        translateX.value -= itemWidth
        timelineRef.value.style.transform = `translateX(${translateX.value}px)`
    }
}
const HonorsData = [
    {
        index: 0,
        img: require('@/assets/honor1.png'),
        des: '公司于1年获得某荣誉',
    }, {
        index: 1,
        img: require('@/assets/honor1.png'),
        des: '公司于2年获得某荣誉',
    }, {
        index: 2,
        img: require('@/assets/honor1.png'),
        des: '公司于3年获得某荣誉',
    }, {
        index: 3,
        img: require('@/assets/honor1.png'),
        des: '公司于4年获得某荣誉',
    }, {
        index: 4,
        img: require('@/assets/honor1.png'),
        des: '公司于5年获得某荣誉',
    },


]
// 组件挂载后添加滚动监听
onMounted(() => {
    // 初始检查一次
    setTimeout(handleScroll, 100)

    // 添加滚动监听
    window.addEventListener('scroll', handleScroll)
})
// 组件卸载前移除监听
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.honor {
    height: 120vh;
}

.title {
    font-size: 50px;
    font-weight: bold;
    text-align: left;
    color: #0056b3;
    margin-bottom: 10px;
    margin-left: 122px;
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease, transform 1s ease;
}

.title.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.en-title {
    font-size: 25px;
    text-align: left;
    color: #999;
    margin-bottom: 30px;
    margin-left: 122px;
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease, transform 1s ease;
    transition-delay: 0.2s;
}

.en-title.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.timeline-container {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 50vh;
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 2s ease, transform 2s ease;
}

.timeline-container.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.timeline-wrap {
    position: relative;
    width: 1200px;
    /* 显示3个 */
    height: 100%;
    overflow: hidden;
    margin: 50px auto;
}

.timeline {
    position: relative;
    width: fit-content;
    height: 100%;
    display: flex;
    margin: 20px;
    transition: transform 0.3s ease;
}

.timeline-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 400px;
}

.timeline-item img {
    max-height: 90%;
    max-width: 90%;
    object-fit: cover;
    display: block;
}


.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #0066cc;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.circle-xiaoshi {
    background-color: #ddd5d9;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>
