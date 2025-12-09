<template>
    <div class="container" v-if="caseData!=undefined" ref="pageContainer">
        <!-- 页面头部 -->
        <div class="case-header" ref="headerDOM">
            <button class="back-btn" @click="goBack">
                <span>←</span> 返回案例列表
            </button>
            <h1 class="case-title">{{ caseData.title }}</h1>
        </div>

        <!-- 案例概览模块 -->
        <section class="case-overview" ref="overviewDOM">
            <h2 class="section-title">案例概览</h2>
            <div class="overview-content">
                <div class="client-info" ref="clientInfoDOM">
                    <h3 class="client-name">{{ caseData.client.name }}</h3>
                    <p>{{ caseData.client.industry }}</p>
                    <p>{{ caseData.client.description }}</p>
                </div>

                <div class="key-data" ref="keyDataDOM">
                    <div class="data-item" v-for="(item, index) in keyDataItems" :key="index" :ref="el => dataItemRefs[index] = el">
                        <span class="data-label">{{ item.label }}</span>
                        <span class="data-value">{{ item.value }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 案例详情模块 -->
        <section class="case-details" ref="detailsDOM">
            <h2 class="section-title">案例详情</h2>

            <div class="detail-section" v-for="(content, key, index) in caseData.details" :key="key" 
                 :ref="el => detailSectionRefs[index] = el">
                <h3 class="detail-title">{{ formatDetailTitle(key) }}</h3>
                <p class="detail-content">{{ content }}</p>
            </div>
        </section>
    </div>
    <div v-else class="failecon" ref="failDOM">
        <a>未找到</a>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()
let Id = route.query.id

// 定义DOM引用
const pageContainer = ref(null)
const headerDOM = ref(null)
const overviewDOM = ref(null)
const clientInfoDOM = ref(null)
const keyDataDOM = ref(null)
const detailsDOM = ref(null)
const failDOM = ref(null)

// 为动态元素创建引用数组
const dataItemRefs = ref([])
const detailSectionRefs = ref([])

const totalCaseData = ref([{
    id: 0,
    title: "title",
    client: {
        logoText: "零售集团",
        name: "优品零售集团",
        industry: "零售行业",
        description: "一家拥有200+门店的全国性零售企业，致力于为消费者提供高品质的生活用品。"
    },
    cooperationTime: "2022年3月 - 2022年10月",
    projectType: "数字化转型解决方案",
    technologies: ["Vue3", "Node.js", "云计算", "大数据分析"],
    teamSize: "8人团队",
    details: {
        background: "随着电商冲击和消费者行为变化，传统零售企业面临巨大挑战。优品零售集团希望通过数字化转型提升运营效率，优化客户体验，实现线上线下融合发展。",
        challenges: "系统老旧、数据孤岛、线上线下业务割裂、客户体验不一致、缺乏数据驱动的决策支持。",
        solution: "我们为优品零售集团打造了一套完整的数字化解决方案，包括新零售中台系统、会员统一管理平台、智能数据分析系统等，实现了业务流程数字化、数据驱动决策和全渠道客户体验一致化。",
        results: "项目实施后，优品零售集团实现了运营效率提升40%，客户复购率增加25%，线上线下销售额分别增长18%和32%，成功实现了数字化转型目标。"
    }
}, {
    id: 1,
    title: "连锁餐饮全链路数字化升级案例",
    client: {
        logoText: "餐饮集团",
        name: "食味轩餐饮管理集团",
        industry: "餐饮行业",
        description: "一家拥有300+直营门店、50+加盟门店的连锁餐饮企业，覆盖火锅、快餐、茶饮多品类，业务遍及全国15个省市。"
    },
    cooperationTime: "2023年1月 - 2023年9月",
    projectType: "餐饮全链路数字化解决方案",
    technologies: ["React", "Java", "物联网IoT", "AI智能分析", "小程序开发"],
    teamSize: "12人团队",
    details: {
        background: "后疫情时代，食味轩面临门店运营成本高、点餐效率低、供应链管理混乱、会员体系分散等问题，亟需通过数字化手段降本增效，提升门店标准化运营能力和客户消费体验。",
        challenges: "各门店系统不互通、人工点餐占比超70%、供应链库存周转率低、会员数据分散无法精准营销、门店运营数据无实时监控体系。",
        solution: "为食味轩搭建了一体化餐饮数字化中台，包含智能点餐收银系统、供应链管理平台、会员营销系统、门店数据监控大屏四大核心模块；通过物联网设备打通后厨与前厅数据，AI分析消费行为实现精准推荐，小程序完成会员统一管理与线上点单。",
        results: "项目落地后，食味轩门店点餐效率提升65%，人工成本降低30%，供应链库存周转率提升50%，会员复购率增长35%，单店日均营业额提升28%，加盟门店标准化运营达标率从60%提升至95%。"
    }
}]);

const caseData = computed(() => {
    const id = Number(Id);
    return totalCaseData.value.find(item => item.id === id)
})

// 计算关键数据项
const keyDataItems = computed(() => {
    if (!caseData.value) return [];
    return [
        { label: '合作时间', value: caseData.value.cooperationTime },
        { label: '项目类型', value: caseData.value.projectType },
        { label: '使用技术', value: caseData.value.technologies.join(', ') },
        { label: '项目团队', value: caseData.value.teamSize }
    ];
});

const formatDetailTitle = (key) => {
    const map = {
        background: '项目背景',
        challenges: '面临的挑战',
        solution: '解决方案',
        results: '项目成果'
    };
    return map[key] || key;
};

const goBack = () => {
    if (pageContainer.value) {
        pageContainer.value.classList.add('page-exit');
        setTimeout(() => {
            router.back();
        }, 300);
    } else {
        router.back();
    }
};

// 检查元素是否在视口中
const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
    );
};

// 处理滚动动画
const handleScroll = () => {
    const elements = [
        { dom: headerDOM, delay: 0 },
        { dom: overviewDOM, delay: 100 },
        { dom: clientInfoDOM, delay: 200 },
        { dom: keyDataDOM, delay: 300 },
        { dom: detailsDOM, delay: 400 },
        { dom: failDOM, delay: 0 }
    ];
    
    elements.forEach(({ dom, delay }) => {
        if (dom.value && isElementInViewport(dom.value)) {
            setTimeout(() => {
                dom.value.classList.add('animate-in');
            }, delay);
        }
    });
    
    // 处理关键数据项的动画
    dataItemRefs.value.forEach((el, index) => {
        if (el && isElementInViewport(el)) {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 100);
        }
    });
    
    // 处理详情部分的动画
    detailSectionRefs.value.forEach((el, index) => {
        if (el && isElementInViewport(el)) {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 150);
        }
    });
};

// 页面进入动画
const startPageEnterAnimation = () => {
    if (pageContainer.value) {
        pageContainer.value.classList.add('page-enter');
        setTimeout(() => {
            if (pageContainer.value) {
                pageContainer.value.classList.remove('page-enter');
                pageContainer.value.classList.add('page-enter-active');
            }
        }, 10);
    }
    
    // 立即检查一次
    setTimeout(handleScroll, 100);
};

onMounted(() => {
    // 开始页面进入动画
    startPageEnterAnimation();
    
    // 添加滚动监听
    window.addEventListener('scroll', handleScroll);
    
    // 重置引用数组
    dataItemRefs.value = [];
    detailSectionRefs.value = [];
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 页面整体动画 */
.container {
    margin-top: 10vh;
    padding: 20px;
    background-color: #f8fafc;
    min-height: 100vh;
    height: fit-content;
    opacity: 0;
    transform: translateY(30px) scale(0.98);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.container.page-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.container.page-exit {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

/* 页面头部样式 - 缩放进入效果 */
.case-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.case-header.animate-in {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 8px 16px;
    color: #64748b;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s, all 0.3s ease;
}

.case-header.animate-in .back-btn {
    opacity: 1;
    transform: translateX(0);
}

.back-btn:hover {
    color: #3b82f6;
    border-color: #3b82f6;
    background-color: #f0f7ff;
    transform: translateX(-5px);
}

.case-title {
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s;
}

.case-header.animate-in .case-title {
    opacity: 1;
    transform: translateX(0);
}

/* 案例概览模块 - 缩放进入效果 */
.case-overview {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 30px;
    height: fit-content;
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
}

.case-overview.animate-in {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.section-title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
}

.case-overview.animate-in .section-title {
    opacity: 1;
    transform: translateX(0);
}

.section-title::before {
    content: "";
    display: block;
    width: 4px;
    height: 22px;
    background: #3b82f6;
    border-radius: 2px;
}

.overview-content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

/* 客户信息 - 左侧滑入 */
.client-info {
    flex: 1;
    min-width: 300px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
}

.case-overview.animate-in .client-info {
    opacity: 1;
    transform: translateX(0);
}

.client-name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
}

.client-info.animate-in .client-name {
    opacity: 1;
    transform: translateY(0);
}

.client-info p {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.client-info.animate-in p:nth-child(2) {
    transition-delay: 0.5s;
}

.client-info.animate-in p:nth-child(3) {
    transition-delay: 0.6s;
}

.client-info.animate-in p {
    opacity: 1;
    transform: translateY(0);
}

/* 关键数据 - 右侧滑入 */
.key-data {
    flex: 1;
    min-width: 300px;
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
}

.case-overview.animate-in .key-data {
    opacity: 1;
    transform: translateX(0);
}

.data-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #f1f5f9;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease;
}

.data-item:last-child {
    border-bottom: none;
}

.data-item.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.data-item:hover {
    border-color: #3b82f6;
}

.data-label {
    color: #64748b;
    transition: color 0.3s ease;
}

.data-item:hover .data-label {
    color: #3b82f6;
}

.data-value {
    font-weight: 600;
    color: #1e293b;
    transition: color 0.3s ease, transform 0.3s ease;
}

.data-item:hover .data-value {
    color: #3b82f6;
    transform: translateX(-5px);
}

/* 案例详情模块 - 缩放进入效果 */
.case-details {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 30px;
    height: fit-content;
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
}

.case-details.animate-in {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.case-details.animate-in .section-title {
    opacity: 1;
    transform: translateX(0);
}

/* 详情部分 - 逐项显示 */
.detail-section {
    padding: 20px;
    border-radius: 8px;
    background: #f8fafc;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 15px;
}

.detail-section:last-child {
    margin-bottom: 0;
}

.detail-section.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.detail-section:hover {
    background: #f0f7ff;
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.detail-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #1e293b;
    display: flex;
    align-items: center;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.detail-section.animate-in .detail-title {
    opacity: 1;
    transform: translateX(0);
}

.detail-title::before {
    content: "•";
    color: #3b82f6;
    margin-right: 8px;
    font-size: 20px;
    transition: transform 0.3s ease;
}

.detail-section:hover .detail-title::before {
    transform: scale(1.2);
}

.detail-content {
    color: #475569;
    line-height: 1.7;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;
}

.detail-section.animate-in .detail-content {
    opacity: 1;
    transform: translateY(0);
}

/* 未找到页面动画 */
.failecon {
    margin-top: 10vh;
    font-size: 30px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.failecon.animate-in {
    opacity: 1;
    transform: scale(1);
}

.failecon a {
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }

    .case-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .case-title {
        font-size: 20px;
    }

    .case-overview,
    .case-details {
        padding: 20px;
    }

    .overview-content {
        flex-direction: column;
        gap: 20px;
    }

    .client-info,
    .key-data {
        min-width: 100%;
    }
    
    .data-item {
        padding: 12px 0;
    }

    .detail-section {
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 20px;
    }

    .detail-title {
        font-size: 16px;
    }
    
    .failecon {
        font-size: 24px;
        height: 50vh;
    }
}
</style>