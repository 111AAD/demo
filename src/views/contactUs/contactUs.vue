<template>
  <div class="page-container">
    <div class="top-warp">
      <!-- 新增半透明遮罩，提升文字可读性 -->
      <div class="bg-mask"></div>
      <img src="@/assets/bg.jpg" alt="背景图片" />
      <h3>能为您服务是我们的荣幸</h3>
    </div>

    <div class="contact-warp">
      <div class="section-title">
        <h2>联系我们</h2>
        <div class="title-line"></div>
        <!-- 新增小标题，丰富层次 -->
        <p class="title-desc">如有疑问或需求，欢迎随时与我们沟通</p>
      </div>

      <div class="contact-container">
        <!-- 每个联系项统一优化交互和色彩 -->
        <div class="contact-container-item">
          <div class="item-icon">
            <img src="@/assets/电话.png" alt="电话图标" />
          </div>
          <div class="item-content">
            <h4>联系电话</h4>
            <p class="contact-info">123-456-789</p>
            <p class="contact-tip">工作时间: 9:00-18:00</p>
          </div>
        </div>

        <div class="contact-container-item">
          <div class="item-icon">
            <img src="@/assets/邮箱.png" alt="邮箱图标" />
          </div>
          <div class="item-content">
            <h4>电子邮箱</h4>
            <p class="contact-info">3487707779@.com</p>
            <p class="contact-tip">我们将尽快回复您</p>
          </div>
        </div>

        <div class="contact-container-item">
          <div class="item-icon">
            <img src="@/assets/服务地球.png" alt="地址图标" />
          </div>
          <div class="item-content">
            <h4>公司地址</h4>
            <p class="contact-info">上海</p>
            <p class="contact-tip">欢迎随时来访</p>
          </div>
        </div>

        <div class="contact-container-item">
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

      <div class="form-container">
        <el-form :model="form" label-width="auto" style="width: 1200px" label-position="top" size="large" class="contact-form">
          <el-form-item label="姓名" prop="name" class="form-item">
            <el-input v-model="form.name" placeholder="请输入您的姓名" class="form-input" />
          </el-form-item>

          <el-form-item label="电话/邮箱" prop="phone" class="form-item">
            <el-input v-model="form.phone" placeholder="请输入您的联系电话或邮箱" class="form-input" />
          </el-form-item>

          <el-form-item label="反馈内容" prop="content" class="form-item">
            <el-input v-model="form.content" type="textarea" rows="5" placeholder="请输入您要反馈的内容" class="form-input" />
          </el-form-item>

          <el-form-item class="form-item">
            <!-- 按钮优化：增加圆角、hover效果 -->
            <el-button type="primary" class="submit-btn">提交</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const form = reactive({
  name: '',
  phone: '',
  content: ''
});

</script>

<style scoped>
.page-container {
  margin-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  background: rgba(0, 0, 0, 0.3); /* 半透明遮罩，不影响背景质感 */
  z-index: 0;
}
.top-warp img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* 调整层级，确保遮罩生效 */
  filter: brightness(0.9); /* 轻微压暗背景，突出文字 */
}
.top-warp h3 {
  color: white;
  z-index: 1;
  font-size: 2.5rem;
  text-align: center;
  padding: 0 20px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6); /* 增强文字阴影，提升立体感 */
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
  color: #2d3748; /* 更深的文字色，提升对比度 */
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
  background-color: #165dff; /* 更柔和的主色，替代原#007bff */
  margin: 0 auto;
  border-radius: 3px; /* 线条圆角，更精致 */
}

/* 联系项容器优化：响应式适配 */
.contact-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 70px;
  flex-wrap: wrap; /* 小屏幕自动换行 */
}

/* 联系项样式优化：色彩和交互增强 */
.contact-container-item {
  background-color: white;
  border-radius: 12px; /* 增大圆角，更现代 */
  padding: 35px 25px;
  width: 280px;
  flex: 1;
  min-width: 240px; /* 小屏幕最小宽度，避免变形 */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06); /* 增强阴影，提升层次感 */
  transition: all 0.3s ease; /* 统一过渡效果 */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: 3px solid #165dff; /* 顶部边框，增加识别度 */
}
.contact-container-item:hover {
  transform: translateY(-8px); /* 增大悬浮上移距离 */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); /* 悬浮时增强阴影 */
}

/* 图标容器优化：色彩更柔和 */
.item-icon {
  width: 80px;
  height: 80px; /* 缩小图标容器，更协调 */
  margin-bottom: 22px;
  border-radius: 50%;
  background-color: rgba(22, 93, 255, 0.1); /* 主色淡色背景，替代原深色 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.3s ease;
}
.contact-container-item:hover .item-icon {
  background-color: #165dff; /* 悬浮时图标背景变主色 */
}
.item-icon img {
  width: 40px;
  height: 40px; /* 调整图标大小，更协调 */
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(23%) sepia(89%) saturate(2943%) hue-rotate(214deg) brightness(96%) contrast(101%); /* 图标统一主色 */
  transition: filter 0.3s ease;
}
.contact-container-item:hover .item-icon img {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%); /* 悬浮时图标变白 */
}

/* 联系项文字优化：层次分明 */
.item-content h4 {
  font-size: 1.15rem;
  color: #2d3748;
  margin-bottom: 12px;
  font-weight: 600;
}
.contact-info {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.6;
  font-weight: 500;
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
}
.qrcode-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  width: 100% !important; /* 适配父容器宽度 */
  max-width: 800px; /* 限制表单最大宽度，避免过大 */
}
.form-item {
  margin-bottom: 25px;
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
  transition: all 0.3s ease !important;
}
.form-input:focus {
  border-color: #165dff !important;
  box-shadow: 0 0 0 3px rgba(22, 93, 255, 0.1) !important;
}

/* 提交按钮优化 */
.submit-btn {
  background-color: #165dff !important;
  border-color: #165dff !important;
  border-radius: 8px !important;
  padding: 10px 30px !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
}
.submit-btn:hover {
  background-color: #0d47a1 !important;
  border-color: #0d47a1 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(22, 93, 255, 0.2);
}

/* 响应式适配：小屏幕优化 */
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
}
</style>