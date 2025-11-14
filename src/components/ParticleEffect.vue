<template>
  <!-- 粒子画布容器，固定在页面底部 -->
  <div class="particle-container">
    <canvas ref="particleCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const particleCanvas = ref(null);
let canvas, ctx;
let animationId = null;
let particles = [];
let mouse = { x: null, y: null, max: 20000 };

// 粒子配置
const config = {
  zIndex: -10,       // 置于底层，不影响其他内容
  opacity: 0.6,     // 透明度
  count: 400,       // 粒子数量
  fixedColors: [    // 粒子颜色列表
    "rgba(255, 0, 0, 1.0)",   // 红色
    "rgba(0, 255, 0, 1.0)",   // 绿色
    "rgba(0, 0, 255, 1.0)",   // 蓝色
    "rgba(255, 255, 0, 1.0)", // 黄色
    "rgba(0, 255, 255, 0.8)", // 青色
    "rgba(255, 0, 255, 0.8)", // 紫色
    "rgba(255, 165, 0, 0.8)", // 橙色
    "rgba(127, 255, 212, 1.0)",
    "rgba(0, 255, 127, 1.0)"
  ]
};

// 初始化画布尺寸
function resizeCanvas() {
  if (!canvas) return;
  
  // 设置画布尺寸为窗口大小
  canvas.width = window.innerWidth || 
                document.documentElement.clientWidth || 
                document.body.clientWidth;
                
  canvas.height = window.innerHeight || 
                 document.documentElement.clientHeight || 
                 document.body.clientHeight;
}

// 创建粒子
function createParticles() {
  particles = [];
  for (let i = 0; i < config.count; i++) {
    const color = config.fixedColors[Math.floor(Math.random() * config.fixedColors.length)];
    
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      xa: 2 * Math.random() - 1,  // x方向速度
      ya: 2 * Math.random() - 1,  // y方向速度
      max: 6000,                  // 连线最大距离
      color: color                // 粒子颜色
    });
  }
}

// 绘制粒子和连线
function draw() {
  if (!ctx) return;
  
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 合并粒子和鼠标点，用于检测连线
  const points = [...particles, mouse];
  
  // 绘制每个粒子
  particles.forEach((particle, index) => {
    // 更新粒子位置
    particle.x += particle.xa;
    particle.y += particle.ya;
    
    // 边界检测，碰到边界反弹
    particle.xa *= particle.x > canvas.width || particle.x < 0? -1 : 1;
    particle.ya *= particle.y > canvas.height || particle.y < 0? -1 : 1;
    
    // 绘制粒子
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x - 0.5, particle.y - 0.5, 1, 1);
    
    // 绘制与其他粒子的连线
    for (let j = index + 1; j < points.length; j++) {
      const other = points[j];
      
      if (other.x!== null && other.y!== null) {
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = dx * dx + dy * dy;
        
        // 如果距离小于最大允许距离，则绘制连线
        if (distance < other.max) {
          // 鼠标附近的粒子会被吸引
          if (other === mouse && distance >= other.max / 2) {
            particle.x -= 0.03 * dx;
            particle.y -= 0.03 * dy;
          }
          
          // 连线透明度随距离变化
          const opacity = (other.max - distance) / other.max;
          ctx.beginPath();
          ctx.lineWidth = opacity / 2;
          ctx.strokeStyle = particle.color;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    }
  });
  

  animationId = requestAnimationFrame(draw);
}

function handleMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

function handleMouseOut() {
  mouse.x = null;
  mouse.y = null;
}


onMounted(async () => {
  await nextTick();
  
  if (particleCanvas.value) {
    canvas = particleCanvas.value;
    ctx = canvas.getContext('2d');
    
 
   Object.assign(canvas.style, {
  position: 'fixed',
  top: '0',  // 从顶部开始，覆盖全屏
  left: '0',
  width: '100vw',  // 全屏宽度
  height: '100vh', // 全屏高度
  zIndex: config.zIndex,
  opacity: config.opacity,
  pointerEvents: 'none'
});
    
    // 初始化
    resizeCanvas();
    createParticles();
    draw();
    
    // 事件监听
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
  }
});

// 清理
onUnmounted(() => {
  // 移除事件监听
  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseout', handleMouseOut);
  
  // 停止动画
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>

<style scoped>
/* 确保容器不影响页面布局 */
.particle-container {
  position: relative;
  height: 0;
}
</style>
