<template>
<div>
    <div class="services-detail">
        <div class="left-section">
            <div class="square">
                <div class="quarter top-left"></div>
                <div class="quarter top-right"></div>
                <div class="quarter bottom-left"></div>
                <div class="quarter bottom-right"></div>
            </div>
            <div class="text-container-left">
                <h3>标题</h3>
                <p>哈机密</p>
            </div>
        </div>
        <div class="right-section">
            <div class="text-container">
                <h3>Service Lists</h3>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
            </div>
            <div class="text-container">
                <h3>标题</h3>
                <p>内容</p>
            </div>
        </div>
    </div>

    <div class="card-section">
        <div class="card-text">
            <strong>ServicesDetail</strong>
        </div>
        <div class="cards-wrapper">
            <div class="card-container" @mouseenter="isHover[index] = true" @mouseleave="isHover[index] = false" v-for="(item, index) in 4" :key="index">
                <div class="card" :style="getCardStyle(index)">
                    <div class="card-front">
                        <img :src="serviceList[index].image" class="card-front-img" />
                    </div>
                    <div class="card-back">{{ serviceList[index].description }}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ServicesDetail',
    data() {
        return {
            isHover: new Array(4).fill(false),
            serviceList: [{
                    description: '服务1',
                    image: require('@/assets/bg.jpg')
                },
                {
                    description: '服务2',
                    image: require('@/assets/bg.jpg')
                },
                {
                    description: '服务3',
                    image: require('@/assets/bg.jpg')
                },
                {
                    description: '服务4',
                    image: require('@/assets/bg.jpg')
                }
            ]
        }
    },
    methods: {
        getCardStyle(index) {
            return {
                transform: this.isHover[index] ? 'rotateY(180deg) scale(1.05)' : 'rotateY(0deg) scale(1)'
            }
        }
    }
}
</script>

<style scoped>
.services-detail {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
    padding: 40px 80px;
    box-sizing: border-box;
    background-color: #fff;
    flex-wrap: wrap;
}

.left-section {
    width: 60%;
}

.square {
    width: 100%;
    height: 55vh;
    position: relative;
    border: 3px solid #333;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 0;
}

.right-section {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.text-container {
    background-color: #e6ffe6;
    padding: 20px;
    box-sizing: border-box;
}

.text-container-left h3 {
    font-size: 55px;
    margin: 0;
    margin-bottom: 20px;
    padding-bottom: 5px;
    text-align: left;
}

.text-container-left p {
    line-height: 1.4;
    margin: 0;
    padding: 0;
    font-size: 20px;
    text-align: left;
    color: #444;
    text-indent: 2em;
    max-width: 2000px;
}

.text-container h3 {
    font-size: 28px;
    color: #33cc33;
    line-height: 1.4;
    margin-bottom: 20px;
    border-bottom: 3px solid #33cc33;
    display: inline-block;
    padding-bottom: 5px;
}

.quarter {
    position: absolute;
    width: 50%;
    height: 50%;
    transition: all 0.3s ease-out;
    cursor: pointer;
    background-image: url('@/assets/bg.jpg');
    background-size: 200% 200%;
}

.top-left {
    top: 0;
    left: 0;
    transform-origin: bottom right;
    background-position: 0 0;
}

.top-right {
    top: 0;
    right: 0;
    transform-origin: bottom left;
    background-position: 100% 0;
}

.bottom-left {
    bottom: 0;
    left: 0;
    transform-origin: top right;
    background-position: 0 100%;
}

.bottom-right {
    bottom: 0;
    right: 0;
    transform-origin: top left;
    background-position: 100% 100%;
}

.top-left:hover {
    transform: scale(1.1) translate(-5px, -5px);
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.top-right:hover {
    transform: scale(1.1) translate(5px, -5px);
    box-shadow: -8px 8px 15px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.bottom-left:hover {
    transform: scale(1.1) translate(-5px, 5px);
    box-shadow: 8px -8px 15px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.bottom-right:hover {
    transform: scale(1.1) translate(5px, 5px);
    box-shadow: -8px -8px 15px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.card-section {
    height: auto;
    min-height: 100vh;
    padding: 50px 80px;
    box-sizing: border-box;
}

.card-text {
    font-size: 28px;
    color: #000000;
    margin-bottom: 16px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 100px;
}

.cards-wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
}

.card-container {
    perspective: 500px;
    width: calc(25% - 22.5px);
    min-width: 250px;
    height: 400px;
    margin: 0;
}

.card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    cursor: pointer;
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}

.card-front-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.card-back {
    background-color: #0776e5;
    color: rgb(255, 255, 255);
    transform: rotateY(180deg);
}
</style>
