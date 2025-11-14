<template>
    <div class="development-course">
        <AboutBar />
        <h2 class="title">发展历程</h2>
        <p class="en-title">Development course</p>

        <div class="timeline-container">
            <el-icon @click="prev" v-if="currentIndex > 0" class="circle">
                <ArrowLeftBold />
            </el-icon>
            <el-icon v-else class="circle-xiaoshi">
                <ArrowLeft />
            </el-icon>
            <div class="timeline-wrap">
                <div class="timeline" ref="timelineRef">
                    <div class="timeline-line-wrap">
                        <div class="timeline-line"></div>
                    </div>
                    <div v-for="(item, index) in timelineData" :key="index" class="timeline-item">
                        <div class="timeline-dot"></div>
                        <img src="@/assets/坐标.png" alt="坐标" />
                        <div class="year">{{ item.year }}</div>
                        <p class="desc">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
            <el-icon @click="next" v-if="currentIndex < timelineData.length - 3" class="circle">
                <ArrowRightBold />
            </el-icon>
            <el-icon v-else class="circle-xiaoshi">
                <ArrowRight />
            </el-icon>
        </div>
    </div>
</template>

<script setup>
import {
    ref
} from 'vue'
import {
    ArrowRightBold,
    ArrowLeftBold,
    ArrowLeft,
    ArrowRight
} from '@element-plus/icons-vue'
import AboutBar from '@/components/AboutBar.vue'

const timelineData = [{
    year: 2014,
    desc: '公司举办第二期上市辅导培训班 荣获优秀企业、先进集团和先进单位啊大阿萨大大啊大苏打撒旦啊大大撒旦大撒旦。'
},
{
    year: 2015,
    desc: '公司举办第二期上市辅导培训班 荣获优秀企业、先进集团和先进单位。'
},
{
    year: 2016,
    desc: '公司举办第二期上市辅导培训班 荣获优秀企业、先进集团和先进单位。'
},
{
    year: 2017,
    desc: '公司举办第二期上市辅导培训班 荣获优秀企业、先进集团和先进单位。'
},
{
    year: 2018,
    desc: '公司举办第二期上市辅导培训班 荣获优秀企业、先进集团和先进单位。'
},
]
const timelineRef = ref(null)
const currentIndex = ref(0)
const itemWidth = 400
const translateX = ref(0)
const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
        translateX.value += itemWidth
        timelineRef.value.style.transform = `translateX(${translateX.value}px)`

    }
}

const next = () => {
    if (currentIndex.value < timelineData.length - 3) {
        currentIndex.value++
        translateX.value -= itemWidth
        timelineRef.value.style.transform = `translateX(${translateX.value}px)`

    }
}
</script>

<style scoped>
.development-course {
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
    align-items: center;
    width: 100%;
    height: 50vh;
    position: relative;
}

.timeline-wrap {
    position: relative;
    width: 1200px;
    height: 100%;
    overflow: hidden;
    margin: 50px auto;
}

.timeline {
    display: flex;
    width: fit-content;
    height: 100%;
    position: relative;
    margin: 20px;
    transition: transform 0.5s ease;
}

.timeline-item {
    
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 400px;
}

.timeline-line-wrap {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
}

.timeline-line {
    border-top: 2px solid #0056b3;
    width: 100%;
}

.timeline-marker {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
}

.year {

    font-size: 30px;
    font-weight: bold;
    color: #0056b3;
    top: 90px;
    position: absolute;
}

.desc {
    position: absolute;
    text-align: left;
    font-size: 18px;
    color: #666;
    height: 70%;
    width: 300px;
    margin-top: 150px;
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

.timeline-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #4293e4;
    position: absolute;
    top: 43px;

}

.timeline-item img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
}
</style>
