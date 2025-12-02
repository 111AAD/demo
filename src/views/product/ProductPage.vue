<template>
    <div class="product-container">
        <div class="product-container-top">
            <div class="banner-mask"></div>
            <div class="banner-content">
                <p class="banner-subtitle" ref="subtitleDOM">PRODUCT COLLECTION</p>
                <h2 class="banner-title" ref="titleDOM">为您提供优质服务</h2>
                <p class="banner-desc" ref="descDOM">精选高品质产品，满足您的多样化需求</p>
            </div>
        </div>


        <div class="product-container-middle" ref="conDOM">
            <div class="grid-item" v-for="(item, index) in currentPageItems" :key="index" @click="toDetail(item)">

                <div class="product-img-wrap">
                    <img :src="item.img" :alt="item.alt" class="product-img" loading="lazy" />
                </div>

                <div class="product-info">
                    <p class="product-des">{{ item.des }}</p>
                </div>
            </div>
        </div>


        <div class="fenye">
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
                :current-page="currentPage" @current-change="change" class="product-pagination" />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, onUnmounted } from 'vue'
const subtitleDOM = ref(null)
const titleDOM = ref(null)
const descDOM = ref(null)
const conDOM = ref(null)
const handleScroll = () => {
    const element = [
        subtitleDOM.value,
        titleDOM.value,
        descDOM.value,
        conDOM.value
    ]
    element.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animate-in')
        }
    })
}
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (
        rect.top <= (window.innerHeight || document.documentElement.classHeight) * 0.85
        && rect.bottom >= 0
    )
}
onMounted(() => {
    setTimeout(handleScroll, 100)
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
const productList = [
    { id: 0, img: require('@/assets/bg.jpg'), alt: '图片15', des: "某某某产品的介绍,此示例是一个完整的用例" },
    { id: 1, img: require('@/assets/bg.jpg'), alt: '图片1', des: "某某某产品的介绍,此示例是一个完整的用例" },
    { id: 2, img: require('@/assets/bg.jpg'), alt: '图片2', des: "某某某产品的介绍" },
    { id: 3, img: require('@/assets/bg.jpg'), alt: '图片3', des: "某某某产品的介绍" },
    { id: 4, img: require('@/assets/bg.jpg'), alt: '图片4', des: "某某某产品的介绍" },
    { id: 5, img: require('@/assets/bg.jpg'), alt: '图片5', des: "某某某产品的介绍" },
    { id: 6, img: require('@/assets/bg.jpg'), alt: '图片6', des: "某某某产品的介绍" },
    { id: 7, img: require('@/assets/bg.jpg'), alt: '图片7', des: "某某某产品的介绍" },
    { id: 8, img: require('@/assets/bg.jpg'), alt: '图片8', des: "某某某产品的介绍" },
    { id: 9, img: require('@/assets/bg.jpg'), alt: '图片9', des: "某某某产品的介绍" },
    { id: 10, img: require('@/assets/bg.jpg'), alt: '图片10', des: "某某某产品的介绍" },
    { id: 11, img: require('@/assets/bg.jpg'), alt: '图片11', des: "某某某产品的介绍" },
    { id: 12, img: require('@/assets/bg.jpg'), alt: '图片12', des: "某某某产品的介绍" },
    { id: 13, img: require('@/assets/bg.jpg'), alt: '图片13', des: "某某某产品的介绍,此示例是一个完整的用例" },
    { id: 14, img: require('@/assets/bg.jpg'), alt: '图片14', des: "某某某产品的介绍,此示例是一个完整的用例" },
];

const pageSize = 6;
const currentPage = ref(1);
const total = productList.length;
const router = useRouter();

const currentPageItems = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    return productList.slice(startIndex, startIndex + pageSize);
});

const change = (newPage) => {
    currentPage.value = newPage;

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toDetail = (item) => {
    router.push({
        path: `/products/${item.id}`
    });
}


</script>

<style scoped>
.product-container {
    margin-top: 10vh;
    position: relative;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.product-container-top {
    height: 40vh;
    min-height: 300px;
    width: 100%;
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}


.banner-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);

}

.banner-content {
    margin-left: clamp(20px, 8vw, 100px);
    z-index: 2;
    color: #fff;
}

.banner-subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 500;
    margin: 0 0 8px;
    opacity: 0.9;
    letter-spacing: 2px;
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 1s ease, transform 1s ease;
}

.banner-subtitle.animate-in,
.banner-title.animate-in,
.banner-desc.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.banner-title {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 600;
    margin: 0 0 12px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    line-height: 1.2;
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 1s ease, transform 1s ease;
    transition-delay: 0.2s;
}

.banner-desc {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    opacity: 0.9;
    max-width: 600px;
    line-height: 1.5;
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 1s ease, transform 1s ease;
    transition-delay: 0.4s;
}

.product-container-middle {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: clamp(20px, 3vw, 40px);
    justify-content: center;
    padding: clamp(30px, 5vw, 60px) 20px;
    box-sizing: border-box;
    max-width: 1400px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(-30px);
    transition: opacity 1s ease, transform 1s ease;
}

.product-container-middle.animate-in {
    opacity: 1;
    transform: translateY(0)
}

.grid-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    text-align: left;
    background: #fff;
    cursor: pointer;
    border: 1px solid #f0f0f0;
    display: flex;
    flex-direction: column;

}


.grid-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(22, 93, 255, 0.15);
    border-color: #e1eaff;
}


.product-img-wrap {
    width: 100%;
    aspect-ratio: 4/3;
    background: #f8f9fa;
    overflow: hidden;
    position: relative;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

}


.grid-item:hover .product-img {
    transform: scale(1.03);
}


.product-info {
    padding: clamp(15px, 2vw, 20px);
    flex: 1;
    display: flex;
    align-items: center;
}

.product-des {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 500;
    color: #333;
    margin: 0;
    max-height: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    text-indent: 2em;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.6;
}

.fenye {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 40px;
    box-sizing: border-box;
}

.product-pagination {
    --el-pagination-active-color: #165dff;
    --el-pagination-hover-color: #165dff;
    --el-pagination-font-size: clamp(0.9rem, 1.2vw, 1rem);
}

/* 分页按钮Hover优化 */
.product-pagination .el-pager li:not(.disabled):hover {
    color: #165dff;
    background: rgba(22, 93, 255, 0.05);
    border-radius: 4px;
}

.product-pagination .el-pager li.active {
    background: #165dff;
    color: #fff;
    border-radius: 4px;
}

/* 响应式适配：小屏幕优化 */
@media (max-width: 768px) {
    .product-container-middle {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 20px;
        padding: 30px 15px;
    }

    .product-des {
        -webkit-line-clamp: 2;
        line-clamp: 2;
        text-indent: 1.5em;
    }
}

@media (max-width: 480px) {
    .product-container-middle {
        grid-template-columns: 1fr;
        /* 手机端1列布局 */
        gap: 15px;
    }

    .product-container-top {
        height: 35vh;
        justify-content: center;
        text-align: center;
    }

    .banner-content {
        margin-left: 0;
    }
}
</style>