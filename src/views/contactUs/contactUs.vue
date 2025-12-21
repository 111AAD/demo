<template>
  <div class="page-container">
    <div class="top-warp fade-in">
      <!-- 新增半透明遮罩，提升文字可读性 -->
      <div class="bg-mask slide-in"></div>
      <img src="@/assets/bg.jpg" alt="背景图片" class="zoom-in" />
      <h3 class="slide-up">能为您服务是我们的荣幸</h3>
    </div>

    <div class="contact-warp">
      <div class="section-title">
        <h2 class="fade-in-up">联系我们</h2>
        <div class="title-line scale-in"></div>
        <!-- 新增小标题，丰富层次 -->
        <p class="title-desc fade-in-delay">如有疑问或需求，欢迎随时与我们沟通</p>
      </div>

      <div class="contact-container">
        <!-- 每个联系项统一优化交互和色彩 -->
        <div class="contact-container-item fade-in-left" ref="contactItem1">
          <div class="item-icon">
            <img src="@/assets/电话.png" alt="电话图标" />
          </div>
          <div class="item-content">
            <h4>联系电话</h4>
            <p class="contact-info">123-456-789</p>
            <p class="contact-tip">工作时间: 9:00-18:00</p>
          </div>
        </div>

        <div class="contact-container-item fade-in-left" ref="contactItem2">
          <div class="item-icon">
            <img src="@/assets/邮箱.png" alt="邮箱图标" />
          </div>
          <div class="item-content">
            <h4>电子邮箱</h4>
            <p class="contact-info">3487707779@.com</p>
            <p class="contact-tip">我们将尽快回复您</p>
          </div>
        </div>

        <div class="contact-container-item fade-in-left" ref="contactItem3">
          <div class="item-icon">
            <img src="@/assets/服务地球.png" alt="地址图标" />
          </div>
          <div class="item-content">
            <h4>公司地址</h4>
            <p class="contact-info">上海</p>
            <p class="contact-tip">欢迎随时来访</p>
          </div>
        </div>

        <div class="contact-container-item fade-in-left" ref="contactItem4">
          <div class="item-icon">
            <img src="@/assets/微信.png" alt="微信图标" />
          </div>
          <div class="item-content">
            <h4>微信咨询</h4>
            <!-- 二维码增加圆角和阴影，提升精致度 -->
            <div class="qrcode-wrap">
              <img src="@/assets/微信二维码.png" alt="微信二维码" />
            </div>
            <p class="contact-tip">扫码添加微信沟通</p>
          </div>
        </div>
      </div>

      <div class="form-container fade-in-up" ref="formContainer">
        <el-form :model="form" label-width="auto" style="width: 1200px" label-position="top" size="large" class="contact-form">
          <div class="form-row">
            <el-form-item label="姓名" prop="name" class="form-item fade-in-right">
              <el-input v-model="form.name" placeholder="请输入您的姓名" class="form-input" />
            </el-form-item>

            <el-form-item label="电话/邮箱" prop="phone" class="form-item fade-in-right">
              <el-input v-model="form.phone" placeholder="请输入您的联系电话或邮箱" class="form-input" />
            </el-form-item>
          </div>

          <el-form-item label="反馈内容" prop="content" class="form-item fade-in-up">
            <el-input v-model="form.content" type="textarea" rows="5" placeholder="请输入您要反馈的内容" class="form-input" />
          </el-form-item>

          <el-form-item class="form-item fade-in-up">
            <!-- 按钮优化：增加圆角、hover效果 -->
            <el-button type="primary" class="submit-btn pulse">提交</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';

const form = reactive({
  name: '',
  phone: '',
  content: ''
});

// 创建引用
const contactItem1 = ref(null);
const contactItem2 = ref(null);
const contactItem3 = ref(null);
const contactItem4 = ref(null);
const formContainer = ref(null);

// 检测元素是否在视口中
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
    rect.bottom >= 0
  );
};

// 滚动动画处理
const handleScroll = () => {
  const elements = [
    contactItem1.value,
    contactItem2.value,
    contactItem3.value,
    contactItem4.value,
    formContainer.value
  ].filter(el => el != null);

  elements.forEach((el, index) => {
    if (isElementInViewport(el)) {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 150); // 交错动画
    }
  });
};

// 初始化动画
const initAnimations = () => {
  // 页面加载时先隐藏需要动画的元素
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-delay, .slide-up, .zoom-in, .scale-in');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  // 延迟执行初始动画
  setTimeout(() => {
    // 顶部区域动画
    document.querySelectorAll('.slide-up').forEach(el => {
      el.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    document.querySelectorAll('.zoom-in').forEach(el => {
      el.style.transition = 'transform 1.5s ease';
      el.style.transform = 'scale(1.05)';
    });

    document.querySelectorAll('.slide-in').forEach(el => {
      el.style.transition = 'background-color 1s ease 0.5s';
      el.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    });

    // 标题动画
    setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach((el, index) => {
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 200);
      });

      document.querySelectorAll('.scale-in').forEach(el => {
        el.style.transition = 'transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s';
        el.style.opacity = '1';
        el.style.transform = 'scaleX(1)';
      });

      document.querySelectorAll('.fade-in-delay').forEach(el => {
        el.style.transition = 'opacity 0.8s ease 0.6s';
        el.style.opacity = '1';
      });
    }, 800);
  }, 300);
};

onMounted(() => {
  // 初始化动画
  initAnimations();
  
  // 初始检查一次滚动
  setTimeout(handleScroll, 1000);
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 动画基础类 */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-delay {
  opacity: 0;
  transition: opacity 0.8s ease 0.6s;
}

.slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}

.zoom-in {
  transform: scale(1);
  transition: transform 1.5s ease;
}

.scale-in {
  opacity: 0;
  transform: scaleX(0);
  transform-origin: center;
}

.animate-in {
  opacity: 1 !important;
  transform: translate(0) !important;
}

/* 脉冲动画 */
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(22, 93, 255, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(22, 93, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(22, 93, 255, 0);
  }
}

.pulse {
  animation: pulse 2s infinite;
}

/* 淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 悬浮动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.page-container {
  margin-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* 顶部Banner优化：增加遮罩提升文字对比 */
.top-warp {
  height: 40vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.bg-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 0;
}

.top-warp img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(0.9);
}

.top-warp h3 {
  color: white;
  z-index: 1;
  font-size: 2.5rem;
  text-align: center;
  padding: 0 20px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.5px;
}

/* 联系区域样式优化 */
.contact-warp {
  padding: 60px 20px;
  background-color: #f9f9f9;
  flex: 1;
}

/* 标题区域优化：增加小标题 */
.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.2rem;
  color: #2d3748;
  margin-bottom: 15px;
  font-weight: 600;
}

.title-desc {
  color: #64748b;
  font-size: 1rem;
  margin-top: 0;
}

.title-line {
  width: 80px;
  height: 3px;
  background-color: #165dff;
  margin: 0 auto;
  border-radius: 3px;
}

/* 联系项容器优化：响应式适配 */
.contact-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 70px;
  flex-wrap: wrap;
}

/* 联系项样式优化：色彩和交互增强 */
.contact-container-item {
  background-color: white;
  border-radius: 12px;
  padding: 35px 25px;
  width: 280px;
  flex: 1;
  min-width: 240px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: 3px solid #165dff;
  position: relative;
  overflow: hidden;
}

.contact-container-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(22, 93, 255, 0.1), transparent);
  transition: left 0.7s ease;
}

.contact-container-item:hover::before {
  left: 100%;
}

.contact-container-item:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* 图标容器优化 */
.item-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 22px;
  border-radius: 50%;
  background-color: rgba(22, 93, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: float 3s ease-in-out infinite;
}

.contact-container-item:hover .item-icon {
  background-color: #165dff;
  transform: scale(1.1) rotate(10deg);
}

.item-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(23%) sepia(89%) saturate(2943%) hue-rotate(214deg) brightness(96%) contrast(101%);
  transition: all 0.4s ease;
}

.contact-container-item:hover .item-icon img {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
  transform: scale(1.1);
}

/* 联系项文字优化 */
.item-content h4 {
  font-size: 1.15rem;
  color: #2d3748;
  margin-bottom: 12px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-container-item:hover .item-content h4 {
  color: #165dff;
}

.contact-info {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.6;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-container-item:hover .contact-info {
  color: #0d47a1;
}

.contact-tip {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 0;
  line-height: 1.6;
}

/* 二维码容器优化 */
.qrcode-wrap {
  width: 100px;
  height: 100px;
  margin: 0 auto 12px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: white;
  padding: 5px;
  transition: all 0.4s ease;
}

.contact-container-item:hover .qrcode-wrap {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.qrcode-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.qrcode-wrap:hover img {
  transform: scale(1.05);
}

/* 表单区域优化 */
.form-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  width: 100% !important;
  max-width: 800px;
  transition: all 0.5s ease;
}

.contact-form:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}

.form-item {
  margin-bottom: 25px;
  flex: 1;
}

.el-form-item__label {
  color: #2d3748 !important;
  font-size: 1.05rem !important;
  font-weight: 500 !important;
  margin-bottom: 10px !important;
}

.form-input {
  border-radius: 8px !important;
  border-color: #e2e8f0 !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.form-input:hover {
  border-color: #94a3b8 !important;
  transform: translateY(-2px);
}

.form-input:focus {
  border-color: #165dff !important;
  box-shadow: 0 0 0 3px rgba(22, 93, 255, 0.15) !important;
  transform: translateY(-4px);
}

/* 输入框占位符动画 */
.form-input ::v-deep(.el-input__inner)::placeholder,
.form-input ::v-deep(.el-textarea__inner)::placeholder {
  transition: opacity 0.3s ease;
  opacity: 0.6;
}

.form-input:focus ::v-deep(.el-input__inner)::placeholder,
.form-input:focus ::v-deep(.el-textarea__inner)::placeholder {
  opacity: 0.3;
}

/* 提交按钮优化 */
.submit-btn {
  background-color: #165dff !important;
  border-color: #165dff !important;
  border-radius: 8px !important;
  padding: 10px 30px !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.submit-btn:hover::before {
  width: 300px;
  height: 300px;
}

.submit-btn:hover {
  background-color: #0d47a1 !important;
  border-color: #0d47a1 !important;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 24px rgba(22, 93, 255, 0.3);
}

/* 响应式适配 */
@media (max-width: 768px) {
  .top-warp h3 {
    font-size: 2rem;
  }
  
  .section-title h2 {
    font-size: 1.8rem;
  }
  
  .contact-container {
    gap: 20px;
    padding: 0 15px;
  }
  
  .contact-warp {
    padding: 40px 15px;
  }
  
  .contact-form {
    padding: 25px 15px;
  }
  
  .contact-container-item {
    min-width: 100%;
  }
}

/* 页面滚动时的渐进显示 */
@media (prefers-reduced-motion: no-preference) {
  .contact-container-item,
  .form-container {
    will-change: transform, opacity;
  }
}
</style>