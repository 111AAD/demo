<template>
    <div class="container">
        <!-- 页面头部 -->
        <div class="case-header">
            <button class="back-btn" @click="goBack">
                <span>←</span> 返回案例列表
            </button>
            <h1 class="case-title">{{ caseData.title }}</h1>
        </div>

        <!-- 案例概览模块 -->
        <section class="case-overview">
            <h2 class="section-title">案例概览</h2>
            <div class="overview-content">
                <div class="client-info">
                    <h3 class="client-name">{{ caseData.client.name }}</h3>
                    <p>{{ caseData.client.industry }}</p>
                    <p>{{ caseData.client.description }}</p>
                </div>

                <div class="key-data">
                    <div class="data-item">
                        <span class="data-label">合作时间</span>
                        <span class="data-value">{{ caseData.cooperationTime }}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label">项目类型</span>
                        <span class="data-value">{{ caseData.projectType }}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label">使用技术</span>
                        <span class="data-value">{{ caseData.technologies.join(', ') }}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label">项目团队</span>
                        <span class="data-value">{{ caseData.teamSize }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 案例详情模块 -->
        <section class="case-details">
            <h2 class="section-title">案例详情</h2>

            <div class="detail-section" v-for="(content, key) in caseData.details" :key="key">
                <h3 class="detail-title">{{ formatDetailTitle(key) }}</h3>
                <p class="detail-content">{{ content }}</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CaseDetail'
}
</script>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const caseData = ref({
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
    router.back();
};
</script>

<style scoped>
.container {
    margin-top:10vh;
    padding: 20px;
    background-color: #f8fafc;
    min-height: 100vh;
    height:fit-content;
}

/* 页面头部样式 */
.case-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
}

.back-btn:hover {
    color: #3b82f6;
    border-color: #3b82f6;
    background-color: #f0f7ff;
}

.case-title {
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
}

.case-overview,
.case-details {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 30px;
    height:fit-content;
}

.section-title {    
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 10px;
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

.client-info {
    flex: 1;
    min-width: 300px;
    color: rgb(0, 0, 0);  
    font-weight:400px;
}

.client-name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.stats {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

.stat-item {
    flex: 1;
    min-width: 150px;
    text-align: center;
    padding: 15px;
    border-radius: 8px;
    transition: transform 0.2s ease;
}


.stat-value {
    font-size: 24px;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 14px;
    color: #64748b;
}

.key-data {
    flex: 1;
    min-width: 300px;
}

.data-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #f1f5f9;
}

.data-item:last-child {
    border-bottom: none;
}

.data-label {
    color: #64748b;
}

.data-value {
    font-weight: 600;
    color: #1e293b;
}

.detail-section {
    padding: 20px;
    border-radius: 8px;
    background: #f8fafc;
    transition: background-color 0.3s ease;
}

.detail-section:hover {
    background: #f0f7ff;
}

.detail-section:last-child {
    margin-bottom: 0;
}

.detail-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #1e293b;
    display: flex;
    align-items: center;
}

.detail-title::before {
    content: "•";
    color: #3b82f6;
    margin-right: 8px;
    font-size: 20px;
}

.detail-content {
    color: #475569;
    line-height: 1.7;
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
    
    .stats {
        gap: 10px;
    }
    
    .stat-item {
        min-width: calc(33.333% - 10px);
    }
    
    .detail-section {
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .stat-item {
        min-width: 100%;
    }
    
    .section-title {
        font-size: 20px;
    }
    
    .detail-title {
        font-size: 16px;
    }
}
</style>