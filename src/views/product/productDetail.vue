<template>
    <div v-if="product" class="product-container">
        <div class="product-header">
            <h1 class="product-title">{{ product.name }}</h1>
            <p class="product-subtitle">{{ product.description }}</p>
            <span class="product-version">版本 {{ product.version }}</span>
        </div>
        <div class="product-content">
            <div class="product-image">
                <img :src="product.image" :alt="product.name">
            </div>
            <div class="product-details">
                <h2 class="section-title">产品特性</h2>
                <ul class="features-list">
                    <li v-for="feature in product.features" :key="feature">
                        <i class="fas fa-check-circle"></i> {{ feature }}
                    </li>
                </ul>

                <h2 class="section-title">技术规格</h2>
                <table class="specs-table">
                    <tr v-for="spec in product.specifications" :key="spec.name">
                        <td>{{ spec.name }}</td>
                        <td>{{ spec.value }}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="download-section">
            <h2 class="download-title">立即下载</h2>
            <div class="download-options">
                <button v-for="download in product.downloads" :key="download.platform"
                    :class="['download-btn', download.platform]" @click="downloadFile(download)">
                    <i :class="download.icon"></i>
                    {{ download.platform.toUpperCase() }} 版本 ({{ download.size }})
                </button>
            </div>
            <p class="additional-info">
                系统要求: {{ product.systemRequirements }} |
                最新更新: {{ product.lastUpdated }}
            </p>
        </div>
    </div>
    <div v-else class="product-container">
        <p>正在加载产品信息...</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
    id: {
        type: [Number, String],
        required: true
    }
})

const productDatabase = ref([
  {
    id: 0,
    name: "Vue Master Pro",
    description: "一款专为 Vue 开发者设计的全能 IDE",
    version: "2.5.0",
    image: require('@/assets/bg.jpg'),
    features: ['智能代码提示', '内置调试工具'],
    specifications: [{ name: "内存", value: "8GB" }],
    downloads: [{ platform: "windows", icon: "fab fa-windows", size: "125 MB", url: "#" }],
    systemRequirements: "Windows 10+",
    lastUpdated: "2024-05-20"
  },
  {
    id: 1,
    name: "React Power Toolkit",
    description: "提升 React 开发效率的必备工具集",
    version: "1.8.3",
    image: require('@/assets/bg.jpg'),
    features: ['性能分析', 'Hooks代码生成'],
    specifications: [{ name: "内存", value: "16GB" }],
    downloads: [{ platform: "mac", icon: "fab fa-apple", size: "145 MB", url: "#" }],
    systemRequirements: "macOS 10.15+",
    lastUpdated: "2024-06-01"
  }
]);
const product = computed(()=>{
    const id = Number(props.id);
    return productDatabase.value.find(p=>p.id==id);
})
</script>

<style scoped>
.product-container {
    margin-top: 10vh;
    width: 100%;
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.product-header {
    background: linear-gradient(120deg, #3498db, #8e44ad);
    color: white;
    padding: 40px;
    text-align: center;
}

.product-title {
    font-size: 2.8rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.product-subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 20px;
}

.product-version {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
}

.product-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
}

.product-image {
    flex: 1;
    min-width: 300px;
    background: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
}

.product-image img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-details {
    flex: 1;
    min-width: 300px;
    padding: 40px;
}

.section-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.features-list {
    list-style: none;
    margin-bottom: 30px;
}

.features-list li {
    padding: 10px 0;
    display: flex;
    align-items: center;
}

.features-list i {
    color: #3498db;
    margin-right: 10px;
    font-size: 1.2rem;
}

.specs-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
}

.specs-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
}

.specs-table td:first-child {
    font-weight: 600;
    color: #2c3e50;
    width: 40%;
}

.download-section {
    background: #f8f9fa;
    padding: 30px 40px;
    border-top: 1px solid #eee;
}

.download-title {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #2c3e50;
}

.download-options {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.download-btn {
    flex: 1;
    min-width: 200px;
    background: linear-gradient(120deg, #3498db, #2980b9);
    color: white;
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.download-btn i {
    margin-right: 10px;
    font-size: 1.2rem;
}

.download-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 15px rgba(52, 152, 219, 0.3);
}

.download-btn.mac {
    background: linear-gradient(120deg, #e74c3c, #c0392b);
}

.download-btn.linux {
    background: linear-gradient(120deg, #f39c12, #d35400);
}

.additional-info {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #7f8c8d;
    text-align: center;
}

@media (max-width: 768px) {
    .product-content {
        flex-direction: column;
    }

    .product-header {
        padding: 30px 20px;
    }

    .product-title {
        font-size: 2.2rem;
    }
}
</style>