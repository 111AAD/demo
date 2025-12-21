<template>
    <div class="main">
        <AboutBar />
        <div class="about-wrapper">
            <div class="about-us-container-text fade-in-up" ref="textDOM">
                <div class="about-header">
                    <h2 class="main-title">关于我们</h2>
                    <p class="sub-title">About Us</p>
                </div>
                <div class="about-intro">
                    <p>我们是一家专注于科技服务的公司，成立于。一直以来，我们秉持着
                        <strong>"某某某"</strong> 的核心价值观，致力于为客户提供具体服务或产品 。
                    </p>
                    <p>
                        在发展过程中，我们不断积累经验、拓展业务版图，组建了一支专业且富有激情的团队。我们相信通过持续的创新和真诚的合作，能够为行业带来积极的改变，助力更多合作伙伴实现价值提升。
                    </p>
                    <button class="action-btn fade-in-delay-3" style="background-color: #0066cc;">了解更多</button>
                </div>
            </div>

            <div class="about-image-container fade-in-up" ref="imageDOM">
                <img class="about-image" src="@/assets/bg.jpg" />
            </div>
        </div>

        <div class="bottom-container">
            <div class="parallel-item fade-in-left" ref="item1">
                <img src="@/assets/握手.png" />
                <div class="parallel-text">
                    <p>123</p>
                </div>
            </div>
            <div class="parallel-item fade-in-left" ref="item2">
                <img src="@/assets/people.png" />
                <div class="parallel-text">
                    <p>123</p>
                </div>
            </div>
            <div class="parallel-item fade-in-left" ref="item3">
                <img src="@/assets/科技项目.png" />
                <div class="parallel-text">
                    <p>123</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AboutBar from '@/components/AboutBar.vue';
import { ref, onMounted, onUnmounted } from 'vue'

const textDOM = ref(null)
const imageDOM = ref(null)
const item1 = ref(null)
const item2 = ref(null)
const item3 = ref(null)

// 检测元素是否在视口中
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
    )
}

// 处理滚动动画
const handleScroll = () => {
    const elements = [
        textDOM.value,
        imageDOM.value,
        item1.value,
        item2.value,
        item3.value
    ].filter(el => el != null && el != undefined)
    
    elements.forEach((el, index) => {
        if (isElementInViewport(el)) {
            // 为不同元素设置不同的延迟
            setTimeout(() => {
                el.classList.add('animate-in')
            }, index * 200) // 每个元素延迟200ms
        }
    })
}

// 初始加载动画
const initAnimations = () => {
    // 页面加载时先隐藏所有需要动画的元素
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-delay-3')
    animatedElements.forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
    })
    
    // 延迟显示，创造渐进效果
    setTimeout(() => {
        document.querySelectorAll('.fade-in-up').forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
            }, index * 300)
        })
        
        setTimeout(() => {
            document.querySelectorAll('.fade-in-delay-3').forEach(el => {
                el.style.transition = 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s'
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
            })
        }, 900)
    }, 500)
}

// 组件挂载后添加滚动监听
onMounted(() => {
    // 初始加载动画
    initAnimations()
    
    // 初始检查一次滚动
    setTimeout(handleScroll, 1500)
    
    // 添加滚动监听
    window.addEventListener('scroll', handleScroll)
})

// 组件卸载前移除监听
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 全局动画类 */
.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-delay-3 {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
}

.main {
    width: 100%;
    height: fit-content;
    overflow-x: hidden;
}

.bottom-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    padding: 60px 0;
}

/* 单个项目容器 */
.parallel-item {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    transition-delay: calc(var(--item-index, 0) * 0.2s);
}

.parallel-item:nth-child(1) { --item-index: 1; }
.parallel-item:nth-child(2) { --item-index: 2; }
.parallel-item:nth-child(3) { --item-index: 3; }

.parallel-item.animate-in {
    opacity: 1;
    transform: translateX(0);
}

/* 文字样式 */
.parallel-text {
    flex: 1;
    text-align: left;
}

.parallel-text p {
    margin: 0;
    font-size: 40px;
    color: #1b0303;
    line-height: 1.6;
    font-weight: bold;
}

.bottom-container img {
    max-height: 85px;
    width: auto;
    object-fit: contain;
    padding-left: 100px;
}

.action-btn {
    width: 9.625rem;
    height: 2.525rem;
    border: 1px solid #000000;
    text-align: center;
    line-height: 2.275rem;
    font-size: 0.8625rem;
    color: #ffffff;
    margin: 0;
    padding: 0;
    cursor: pointer;
    background: transparent;
    transition: all 0.3s ease;
    position: relative;
    z-index: 0;
    overflow: hidden;
}

.action-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #fdfeff;
    transition: all 0.3s ease;
    z-index: -1;
}

.action-btn:hover::before {
    left: 0;
}

.action-btn:hover {
    border-color: #000000;
    color: #000;
}

.about-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 0;
    align-items: stretch;
    height: 70vh;
}

.about-image-container {
    flex: 1;
    height: 70h;
    box-sizing: border-box;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 1s ease, transform 1s ease;
}

.about-image-container.animate-in {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.3s;
}

/* 图片样式 */
.about-image {
    width: 100%;
    height: 60%;
    object-fit: contain;
    transition: transform 1.2s ease;
}

.about-image-container.animate-in .about-image {
    transform: scale(1.05);
}

.about-us-container-text {
    width: 40%;
    margin-right: auto;
    padding-left: 100px;
    height: 100vh;
    box-sizing: border-box;
    background-color: transparent;
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease, transform 1s ease;
}

.about-us-container-text.animate-in {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.2s;
}

.about-intro {
    line-height: 2;
    font-size: 20px;
    text-align: left;
    color: #444;
    text-indent: 2em;
    margin: 0 0 20px 0;
}

.about-intro p {
    margin-bottom: 20px;
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.about-us-container-text.animate-in .about-intro p:nth-child(1) {
    transition-delay: 0.4s;
}

.about-us-container-text.animate-in .about-intro p:nth-child(2) {
    transition-delay: 0.6s;
}

.about-header {
    text-align: left;
    margin-bottom: 20px;
}

.main-title {
    font-size: 36px;
    font-weight: bold;
    color: #0066cc;
    margin: 0 0 10px 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.about-us-container-text.animate-in .main-title {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
}

.sub-title {
    font-size: 20px;
    color: #666;
    margin: 0 0 30px 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.about-us-container-text.animate-in .sub-title {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.4s;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .about-wrapper {
        flex-direction: column;
        height: auto;
    }
    
    .about-us-container-text {
        width: 100%;
        padding: 20px;
        height: auto;
    }
    
    .about-image-container {
        width: 100%;
        padding: 20px;
    }
    
    .bottom-container img {
        padding-left: 20px;
    }
}
</style>