<template>
    <div class="customer-wrap">
        <div class="top-img">
            <p>客户案例<br>Case</p>
            <span class="pointer" @click="xiahua">SCROLL&nbsp;&nbsp;&nbsp;&nbsp;→</span>
        </div>
        <div class="cases">
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
const router = useRouter();
const caseList = [{
    id: 1,
    img: require('@/assets/bg.jpg'),
    title: '这是项目名称',
    des: '这是项目的具体内容'
}, {
    id: 2,
    img: require('@/assets/bg.jpg'),
    title: '这是项目名称',
    des: '这是项目的具体内容'
}, {
    id: 3,
    img: require('@/assets/bg.jpg'),
    title: '这是项目名称',
    des: '这是项目的具体内容'
},
]
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
</script>
<style scoped>
.customer-wrap {
    margin-top: 10vh;
    max-width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#2886DE;

}

.top-img {
    height: 85vh;
    width: 100%;
    position: relative;
    background-image: url('@/assets/bg.jpg');
}

.top-img p {
    font-size: 40px;
    font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    font-weight: 500;
    color: white;
    position: absolute;
    margin-left: 100px;
    margin-top: 200px;
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
    font-size: 20px;
    writing-mode: vertical-lr;
    cursor: pointer;
}

@keyframes huadong {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}

.cases {
    height: fit-content;
    width: 80%;
    background-color: #fff;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
}

.cases-item-img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
}



.cases-item-middle {
    width: 0;
    opacity: 0;
    transition: all 1.2s ease;
    background-color: rgba(40, 134, 222, 0.734);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

}

.cases-item-right {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    transition: all 1.2s ease;
}

.cases-item-h1 {
    font-size: 30px;
    padding-left: 20px;
    flex: 1;
}

.divider {
    border: none;
    height: 1px;
    background: #87cefa;
    margin: 5px 0;
}

.cases-item-p {
    padding-left: 20px;
    font-size: 20px;
    flex: 3;
}


.cases-item:hover .cases-item-right {
    transform: translateX(50px);
}

.cases-item:hover .cases-item-middle {
    width: 100px;
    opacity: 1;
    cursor: pointer;
}
</style>
