<template>
    <div class="honor">
        <AboutBar />
        <h2 class="title">荣誉资质</h2>
        <p class="en-title">Honors and Qualifications</p>
        <div class="timeline-container">
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
import { ref } from 'vue'

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
}

.en-title {
    font-size: 25px;
    text-align: left;
    color: #999;
    margin-bottom: 30px;
    margin-left: 122px;
}

.timeline-container {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 50vh;
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
