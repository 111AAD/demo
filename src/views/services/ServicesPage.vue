<template>
    <div class="services-page">
        <section class="solar-services">
            <div class="services-header container">
                <h2 class="section-subtitle">Our Services</h2>
                <h1 class="section-title">专业技术服务<br>——助力企业数字化转型</h1>
                <p class="section-desc">
                    我们提供全方位的技术解决方案，从咨询到落地，为您的业务增长保驾护航
                </p>
            </div>

            <div class="services-grid container">
                <div class="service-item" v-for="(service, index) in serviceList" :key="index">
                    <div class="service-icon">
                        <img :src="service.icon" :alt="service.title" />
                    </div>
                    <h3 class="service-title">{{ service.title }}</h3>
                    <p class="service-desc">{{ service.desc }}</p>
                    <div class="read-more" @click="toServiceDetail(service.id)">
                        <span>Read More</span>
                        <span class="arrow">→</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <h3 class="main-title">核心服务能力</h3>
                <p class="intro-text">
                    基于多年行业经验，我们打造了一系列标准化与定制化结合的服务体系，
                    满足不同规模企业的多样化需求
                </p>

                <div class="content-cards">
                    <div class="content-card" @click="toServiceDetail(card.id)" v-for="(card, index) in items"
                        :key="index">
                        <div class="card-image-wrap">
                            <img :src="card.imageUrl" :alt="card.title" class="card-image" />
                            <div class="image-overlay"></div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">{{ card.title }}</h3>
                            <p class="card-text">{{ card.description }}</p>
                            <div class="card-indicator"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 服务优势强调区域 -->
        <section class="service-advantages">
            <div class="container">
                <div class="advantage-item">
                    <div class="advantage-icon">✓</div>
                    <div class="advantage-text">
                        <h4>专业团队</h4>
                        <p>5年以上行业经验工程师团队，确保服务质量</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">✓</div>
                    <div class="advantage-text">
                        <h4>快速响应</h4>
                        <p>24小时在线支持，紧急问题4小时内响应</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">✓</div>
                    <div class="advantage-text">
                        <h4>定制方案</h4>
                        <p>根据企业实际需求，提供个性化解决方案</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>


const serviceList = [
    {
        id: 1,
        icon: require('@/assets/科技1.png'),
        title: '技术咨询服务',
        desc: '提供专业的技术架构咨询，帮助企业规划数字化转型路线，降低技术选型风险'
    },
    {
        id: 2,
        icon: require('@/assets/科技2.png'),
        title: '系统开发定制',
        desc: '根据业务需求定制开发各类管理系统、业务系统，确保系统与业务深度匹配'
    },
    {
        id: 3,
        icon: require('@/assets/科技3.png'),
        title: '数据安全保障',
        desc: '提供数据加密、备份恢复、安全审计等服务，保障企业核心数据资产安全'
    },
    {
        id: 4,
        icon: require('@/assets/科技4.png'),
        title: '运维支持服务',
        desc: '提供7×24小时系统运维服务，确保系统稳定运行，及时解决各类故障问题'
    }
]

const items = [
    {
        id: 5,
        imageUrl: require('@/assets/bg.jpg'),
        alt: '企业数字化转型',
        title: '企业数字化转型',
        description: '帮助传统企业实现数字化转型，从业务流程梳理到系统落地，提升企业运营效率'
    },
    {
        id: 6,
        imageUrl: require('@/assets/bg.jpg'),
        alt: '云服务解决方案',
        title: '云服务解决方案',
        description: '提供云服务器部署、云存储、云安全等一站式云服务解决方案，降低企业IT成本'
    },
    {
        id: 7,
        imageUrl: require('@/assets/bg.jpg'),
        alt: '大数据分析服务',
        title: '大数据分析服务',
        description: '通过大数据技术挖掘企业数据价值，提供精准的业务分析报告，辅助决策'
    }
]
const toServiceDetail = (serviceId) => {
    this.router.push({
        path: '/servicesDetail',
        query: { serviceId: serviceId }
    });
}


</script>

<style scoped>
.services-page {
    font-family: 'Inter', system-ui, sans-serif;
    color: #333;
    background-color: #f9fafb;
    overflow-x: hidden;
    margin-top:10vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 服务头部区域样式 */
.solar-services {
    padding: 80px 0 60px;
    background: linear-gradient(180deg, #fff 0%, #f9fafb 100%);
    position: relative;
}

.solar-services::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%);
}

.services-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-subtitle {
    font-size: 18px;
    color: #0066cc;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
}

.section-title {
    font-size: 42px;
    color: #111827;
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 700;
}

.section-desc {
    font-size: 16px;
    color: #6b7280;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
}

/* 服务卡片网格布局 */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.service-item {
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
    border: 1px solid #f3f4f6;
}

.service-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
    border-color: #e5e7eb;
}

.service-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #f0f7ff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    transition: all 0.3s ease;
}

.service-item:hover .service-icon {
    background-color: #e1f0ff;
    transform: scale(1.05);
}

.service-icon img {
    width: 40%;
    height: auto;
    object-fit: contain;
}

.service-title {
    font-size: 20px;
    color: #111827;
    margin-bottom: 12px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.service-item:hover .service-title {
    color: #0066cc;
}

.service-desc {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 24px;
    line-height: 1.6;
}

.read-more {
    display: inline-flex;
    align-items: center;
    color: #0066cc;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.read-more:hover {
    color: #004a99;
}

.arrow {
    margin-left: 6px;
    transition: transform 0.3s ease;
}

.read-more:hover .arrow {
    transform: translateX(6px);
}

/* 核心服务展示区域 */
.content-section {
    padding: 80px 0;
    background-color: #fff;
}

.main-title {
    font-size: 32px;
    color: #111827;
    margin-bottom: 16px;
    font-weight: 700;
    text-align: center;
}

.intro-text {
    font-size: 16px;
    text-align: center;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.content-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.content-card {
    cursor: pointer;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    border: 1px solid #f3f4f6;
}

.content-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.08);
    border-color: #e5e7eb;
}

/* 图片容器与遮罩 */
.card-image-wrap {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.content-card:hover .card-image {
    transform: scale(1.1);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
    z-index: 1;
}

.card-content {
    padding: 24px;
    position: relative;
}

.card-title {
    font-size: 20px;
    color: #111827;
    margin-bottom: 12px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.content-card:hover .card-title {
    color: #0066cc;
}

.card-text {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 16px;
}


.card-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #0066cc 0%, #00aaff 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.content-card:hover .card-indicator {
    transform: scaleX(1);
}

/* 服务优势区域 */
.service-advantages {
    padding: 60px 0;
    background-color: #f9fafb;
    border-top: 1px solid #f3f4f6;
}

.service-advantages .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.advantage-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease;
}

.advantage-item:hover {
    transform: translateY(-5px);
}

.advantage-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #e1f0ff;
    color: #0066cc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    flex-shrink: 0;
}

.advantage-text h4 {
    font-size: 18px;
    color: #111827;
    margin-bottom: 8px;
    font-weight: 600;
}

.advantage-text p {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
}

/* 响应式适配 */
@media (max-width: 768px) {
    .section-title {
        font-size: 32px;
    }

    .main-title {
        font-size: 28px;
    }

    .solar-services {
        padding: 60px 0 40px;
    }

    .content-section {
        padding: 60px 0;
    }

    .service-advantages {
        padding: 40px 0;
    }

    .card-image-wrap {
        height: 160px;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 28px;
    }

    .main-title {
        font-size: 24px;
    }

    .service-item {
        padding: 24px;
    }

    .card-content {
        padding: 20px;
    }
}
</style>