<template>
    <div class="container">
        <div class="main-carousel-section">
            <el-carousel :interval="4000" :autoplay="true" height="100vh" indicator-position="outside" @change="onCarouselChange">
                <el-carousel-item v-for="(image, index) in images" :key="index">
                    <div class="bg-container">
                        <div class="bg-container-img" :style="{ backgroundImage: `url(${image})` }"></div>
                        <div class="content-wrapper" :class="{ 'animate-in': currentSlide === index }">
                            <p class="subtitle">{{ subtitles[index] }}</p>
                            <h1 class="main-title">{{ titles[index] }}</h1>
                            <p class="desc-text">{{ descriptions[index] }}</p>
                            <button class="action-btn" @click="toService">跳转到服务页面</button>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="company-intro-section">
            <div class="intro-image" ref="introImage">
                <el-carousel :interval="4000" :autoplay="true" height="80vh" arrow="always">
                    <el-carousel-item v-for="(image, index) in images" :key="index">
                        <img :src="image" :alt="`公司图片${index + 1}`" />
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="intro-content" ref="introContent">
                <div class="intro-header">
                    <h1>公司简介</h1>
                    <p>Company profile</p>
                </div>
                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-number">120</span>
                        <span class="stat-label">项 专利发明</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">5,000</span>
                        <span class="stat-label">家 优质客户</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">2005</span>
                        <span class="stat-label">年 成立于</span>
                    </div>
                </div>

                <div class="blue-info-block">
                    <h2>历经二十余年的创新发展</h2>
                    <p>
                        集团公司创建于2004年，经过近20年快速健康发展，在全球拥有中国、德国、加拿大、越南等九大专业化制造基地，
                        成为集新材料、新能源等产业于一体的科技型、国际化公司。
                    </p>
                    <button class="action-btn" @click="toAboutUs">探索更多</button>
                </div>
            </div>
        </div>
        <div class="product-center">
            <div class="title-action">
                <div class="section-header" ref="productHeader">
                    <h2 class="title">产品中心</h2>
                    <p class="subtitle">Product Center</p>
                </div>
                <button @click="toProduct" class="action-btn" style="background-color: #0066cc;">探索更多</button>
            </div>
            <div class="product-list">
                <div 
                    class="product-item" 
                    v-for="(item, index) in products" 
                    :key="item.id" 
                    @click="toProductDetial(item.id)"
                    :ref="el => { if (el) productItems[index] = el }"
                >
                    <div class="product-img-container">
                        <img :src="item.url" alt="产品展示" class="product-img" />
                        <div class="product-overlay">
                            <button class="detail-btn">详情</button>
                        </div>
                    </div>
                    <h1 class="product-name">{{item.name}}</h1>
                    <p class="product-desc">{{item.desc}}</p>
                </div>
            </div>
        </div>
        
        <div class="case-section">
            <div class="title-action">
                <div class="section-header" ref="caseHeader">
                    <h2 class="title">客户案例展示</h2>
                    <p class="subtitle">Customer Cases</p>
                </div>
                <button @click="toCutCase" class="action-btn">了解更多</button>
            </div>
            <div class="case-list">
                <div 
                    class="case-item" 
                    v-for="(item, index) in 2" 
                    :key="index" 
                    @click="toCutCase"
                    :ref="el => { if (el) caseItems[index] = el }"
                >
                    <div class="case-img-container">
                        <img :src="require('@/assets/bg.jpg')" alt="客户案例" class="case-img" />
                        <div class="case-overlay">
                            <h3>客户解决案例</h3>
                            <p>点击查看详情</p>
                        </div>
                    </div>
                    <p class="case-name">客户解决案例</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const images = [require('@/assets/bg.jpg'), require('@/assets/bg3.jpg')]
const subtitles = ['创新科技，引领未来', '专业服务，值得信赖']
const titles = ['打造智能解决方案', '构建数字化未来']
const descriptions = [
    '我们致力于为客户提供最前沿的技术解决方案，助力企业数字化转型。',
    '凭借多年的行业经验和专业技术团队，我们为客户提供全方位的服务支持。'
]
const products = ref([
    {
    name:"某某某产品展示",
    id:0,
    desc:"产品描述内容，简要介绍产品的特点和优势。",
    url:require('@/assets/bg.jpg')
},{
    name:"某某某产品展示",
    id:1,
    desc:"产品描述内容，简要介绍产品的特点和优势。",
    url:require('@/assets/bg.jpg')
},{
    name:"某某某产品展示",
    id:2,
    desc:"产品描述内容，简要介绍产品的特点和优势。",
    url:require('@/assets/bg.jpg')
},{
    name:"某某某产品展示",
    id:2,
    desc:"产品描述内容，简要介绍产品的特点和优势。",
    url:require('@/assets/bg.jpg')
},
]
)
const router = useRouter()
const currentSlide = ref(0)

// 引用DOM元素
const introImage = ref(null)
const introContent = ref(null)
const productHeader = ref(null)
const productItems = ref([])
const caseHeader = ref(null)
const caseItems = ref([])

// 轮播图变化事件
const onCarouselChange = (index) => {
    currentSlide.value = index
}

const toAboutUs = () =>{
    router.push('/about')
}
const toProductDetial = (id) =>{
  router.push(`/products/${id}`);
}
const toProduct = () =>{
    router.push('/product')
}
const toCutCase = () => {
    router.push('/caseDetail')
}

// 滚动动画处理
const handleScroll = () => {
    // 获取所有需要动画的元素
    const elements = [
        introImage.value,
        introContent.value,
        productHeader.value,
        caseHeader.value,
        ...productItems.value,
        ...caseItems.value
    ].filter(el => el !== null && el !== undefined)
    
    // 检查元素是否在视口中
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animate-in')
        }
    })
}

// 检查元素是否在视口中
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
    )
}

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
.container {
    background-color: transparent;
    margin-top: 83.4px;
    overflow-x: hidden;
}

.main-carousel-section {
    position: relative;
}

.el-carousel__item {
    height: 100vh;
}

.bg-container {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
}

.bg-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
    z-index: 1;
}

.bg-container-img {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.content-wrapper {
    z-index: 2;
    position: relative;
    color: rgb(255, 255, 255);
    padding: 0 10%;
    padding-top: 250px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    max-width: 600px;
}

.content-wrapper .subtitle {
    opacity: 0;
    transform: translateY(30px);
    font-size: 1.25rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    letter-spacing: 1px;
    transition: opacity 1.2s cubic-bezier(0, 0, 1, 1), transform 1.2s cubic-bezier(0, 0, 1, 1);
    transition-delay: 0.2s;
}

.content-wrapper .main-title {
    opacity: 0;
    transform: translateX(30px);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    transition: opacity 1.2s cubic-bezier(0, 0, 1, 1), transform 1.2s cubic-bezier(0, 0, 1, 1);
    transition-delay: 0.5s;
}

.content-wrapper .desc-text {
    opacity: 0;
    transform: translateX(-30px);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    transition: opacity 1.2s cubic-bezier(0, 0, 1, 1), transform 1.2s cubic-bezier(0, 0, 1, 1);
    transition-delay: 0.2s;
}

.content-wrapper.animate-in .subtitle,
.content-wrapper.animate-in .main-title,
.content-wrapper.animate-in .desc-text {
    opacity: 1;
    transform: translate(0, 0);
}

.action-btn {
    width: 9.625rem;
    height: 2.525rem;
    border: 1px solid #ffffff;
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
    background-color: #ffffff;
    transition: all 0.3s ease;
    z-index: -1;
}

.action-btn:hover::before {
    left: 0;
}

.action-btn:hover {
    border-color: #ffffff;
    color: #000;
}

/* 公司简介部分 */
.company-intro-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 80vh;
    padding: 5rem 10%;
    box-sizing: border-box;
    color: #000;
    background-color: #f8f9fa;
}

.intro-image {
    width: 48%;
    min-height: 500px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease, transform 1s ease;
}

.intro-image.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.intro-image .el-carousel {
    width: 100%;
}

.intro-image img {
    width: 100%;
    height: 80vh;
    display: block;
    object-fit: cover;
}

.intro-content {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 1s ease, transform 1s ease;
}

.intro-content.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.intro-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #333;
}

.intro-header p {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
    letter-spacing: 1px;
}

.stats {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 1.5rem 0;
}

.stat-item {
    text-align: center;
    flex: 1;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0066cc;
    display: block;
    line-height: 1;
}

.stat-label {
    font-size: 1rem;
    color: #666;
    margin-top: 0.5rem;
    display: block;
}

.blue-info-block {
    background-color: #0066cc;
    color: #fff;
    padding: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 102, 204, 0.2);
}

.blue-info-block h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
}

.blue-info-block p {
    font-size: 1rem;
    line-height: 1.7;
    margin: 0 0 1.5rem 0;
    opacity: 0.9;
}

/* 产品中心部分 */
.product-center {
    width: 100%;
    padding: 5rem 10%;
    box-sizing: border-box;
    background-color: #fff;
}

.section-header {
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
}

.section-header.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #333;
    margin: 0;
    position: relative;
    display: inline-block;
}

.title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #0066cc;
}

.subtitle {
    font-size: 1rem;
    color: #999;
    font-weight: 400;
    margin-top: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* 标题和按钮所在行 */
.title-action {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3rem;
}

.product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

/* 单个产品项样式 */
.product-item {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease;
}

.product-item.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.product-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.product-img-container {
    position: relative;
    overflow: hidden;
    height: 250px;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 102, 204, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.product-item:hover .product-overlay {
    opacity: 1;
}

.product-item:hover .product-img {
    transform: scale(1.05);
}

/* 产品名称样式 */
.product-name {
    font-size: 1.25rem;
    color: #333;
    margin: 1.5rem 1.5rem 0.5rem;
    font-weight: 600;
}

/* 产品描述样式 */
.product-desc {
    font-size: 0.95rem;
    color: #666;
    margin: 0 1.5rem 1.5rem;
    line-height: 1.5;
}

/* 产品详情按钮样式 - 保留原有样式 */
.detail-btn {
    background-color: #fff;
    color: #0066cc;
    border: 1px solid #0066cc;
    padding: 8px 50px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

/* 背景填充动画层 */
.detail-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #0066cc;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.8s ease, height 0.8s ease;
    z-index: -1;
}

/* 悬停状态动画 */
.detail-btn:hover {
    color: #fff;
    border-color: transparent;
}

/* 背景填充效果 */
.detail-btn:hover::after {
    width: 300px;
    height: 300px;
}

/* 客户案例部分 */
.case-section {
    width: 100%;
    padding: 5rem 10%;
    box-sizing: border-box;
    background-color: #f8f9fa;
}

/* 案例列表容器 */
.case-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
}

/* 单个案例项 */
.case-item {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease;
}

.case-item.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.case-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.case-img-container {
    position: relative;
    overflow: hidden;
    height: 350px;
}

.case-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.case-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #fff;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
}

.case-overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.case-overlay p {
    font-size: 1rem;
    opacity: 0.8;
}

.case-item:hover .case-overlay {
    opacity: 1;
}

.case-item:hover .case-img {
    transform: scale(1.05);
}

/* 案例名称 */
.case-name {
    font-size: 1.25rem;
    color: #333;
    padding: 1.5rem;
    margin: 0;
    font-weight: 600;
    transition: color 0.3s ease;
}

.case-item:hover .case-name {
    color: #0066cc;
}

/* 响应式调整 */
@media (max-width: 1200px) {
    .product-list {
        grid-template-columns: repeat(2, 1fr);
    }

    .content-wrapper {
        padding-top: 200px;
    }

    .main-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .company-intro-section {
        flex-direction: column;
        padding: 3rem 5%;
    }

    .intro-image,
    .intro-content {
        width: 100%;
    }

    .intro-image {
        margin-bottom: 2rem;
        min-height: 300px;
    }

    .stats {
        flex-direction: column;
        gap: 1.5rem;
    }

    .content-wrapper {
        padding: 0 5%;
        padding-top: 150px;
        text-align: center;
    }

    .main-title {
        font-size: 2rem;
    }

    .product-center,
    .case-section {
        padding: 3rem 5%;
    }

    .title-action {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
    }

    .product-list,
    .case-list {
        grid-template-columns: 1fr;
    }

    .case-img-container {
        height: 250px;
    }

    /* 移动端按钮调整 */
    .action-btn {
        width: 8rem;
        height: 2.2rem;
        line-height: 2rem;
    }
}
</style>