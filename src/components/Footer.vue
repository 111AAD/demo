<template>
    <div class="main">
        <div class="footer">
            <div class="top">
                <img src="@/assets/logo.png" />
                <a>1234567811</a>
            </div>
            <div class="navbar">
                <ul class="nav-links">
                    <!-- 网站首页 -->
                    <li class="nav-item">
                        <router-link to="/" class="main-link">网站首页</router-link>
                        <div class="sub-links">
                            <router-link to="/about" class="sub-link">公司简介</router-link>
                            <router-link to="/companyHistory" class="sub-link">发展历程</router-link>
                        </div>
                    </li>
                    
                    <!-- 关于我们 -->
                    <li class="nav-item">
                        <router-link to="/about" class="main-link">关于我们</router-link>
                        <div class="sub-links">
                            <router-link to="/about" class="sub-link">公司介绍</router-link>
                            <router-link to="/honor" class="sub-link">荣誉资质</router-link>
                        </div>
                    </li>
                    
                    <!-- 服务中心 -->
                    <li class="nav-item">
                        <router-link to="/services" class="main-link">服务中心</router-link>
                        <div class="sub-links">
                            <router-link to="/services" class="sub-link">技术支持</router-link>
                            <router-link to="/services" class="sub-link">咨询服务</router-link>
                            <router-link to="/services" class="sub-link">售后服务</router-link>
                            <router-link to="/services" class="sub-link">培训服务</router-link>
                        </div>
                    </li>
                    
                    <!-- 产品中心 -->
                    <li class="nav-item">
                        <router-link to="/product" class="main-link">产品中心</router-link>
                        <div class="sub-links">
                            <router-link to="/product" class="sub-link">产品一</router-link>
                            <router-link to="/product" class="sub-link">产品二</router-link>
                            <router-link to="/product" class="sub-link">产品三</router-link>
                        </div>
                    </li>
                    
                    <!-- 客户案例 -->
                    <li class="nav-item">
                        <router-link to="/customerCase" class="main-link">客户案例</router-link>
                        <div class="sub-links">
                            <router-link to="/customerCase" class="sub-link">金融行业</router-link>
                            <router-link to="/customerCase" class="sub-link">教育行业</router-link>
                            <router-link to="/customerCase" class="sub-link">政府机构</router-link>
                            <router-link to="/customerCase" class="sub-link">企业案例</router-link>
                        </div>
                    </li>
                    
                    <!-- 联系我们 -->
                    <li class="nav-item">
                        <router-link to="/contact" class="main-link">联系我们</router-link>
                    </li>
                </ul>
                <div class="right-section">
                    <div class="email">
                        <strong style="color:aliceblue;">E-mail</strong>
                        <p>3487707779@qq.com</p>
                    </div>
                    <img src="@/assets/微信二维码.png" />
                    <p>扫一扫，添加微信</p>
                </div>
            </div>
            <div class="buttom">
                <div class="copyright">
                    <p>公司名称</p>
                    <div class="links">
                        <router-link to="/privacy">隐私政策</router-link>
                        <span>|</span>
                        <router-link to="/sitemap">网站地图</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooter',
};
</script>

<style scoped>
.main {
    height: 75vh; /* 增加高度以容纳子标签 */
    background-color: rgb(5, 5, 105);
    max-width: 100%;
    display: flex;
}

.footer {
    margin-top: 7px;
    background-color: #1b1b1b80;
    height: 99%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.top {
    margin: 0 auto;
    display: flex;
    height: 20%; /* 调整高度比例 */
    width: 95%;
    align-items: center;
    border-bottom: 1px solid #333;
}

.top a {
    font-size: 32px;
    color: #ffff;
    font-family: "Source Han Sans", sans-serif;
    font-weight: 700;
    margin-left: auto;
}

.top img {
    margin-left: 50px;
    object-fit: contain;
    height: 40%;
    width: auto;
}

.navbar {
    margin: 20px 20px; /* 增加上下边距 */
    height: 65%; /* 增加高度 */
    display: flex;
    width: calc(100% - 40px); 
}

.nav-links {
    list-style: none;
    display: flex;
    height: 100%;
    padding-left: 0;
    align-items: flex-start;
    flex: 1;
}

.nav-item {
    position: relative;
    padding: 15px 35px; /* 调整内边距 */
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.main-link {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 15px; /* 增加与子标签的间距 */
    padding: 8px 0;
    position: relative;
    transition: all 0.3s ease;
    display: inline-block;
    white-space: nowrap;
}

.main-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4cc2ff;
    transition: width 0.3s ease;
}

.main-link:hover::after {
    width: 100%;
}

.main-link:hover {
    color: #4cc2ff;
    transform: translateY(-2px);
}

/* 子标签始终显示 */
.sub-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; /* 增加间距 */
    opacity: 1;
    height: auto;
    width: 100%;
    margin-top: 5px;
}

.sub-link {
    font-size: 14px;
    color: #aaa;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    display: block;
}

.sub-link:hover {
    color: #4cc2ff;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
}

.right-section {
    width: 22%; /* 稍微增加宽度 */
    height: 100%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    justify-content: center; /* 垂直居中 */
}

.right-section p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffff;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}

.right-section img {
    height: 120px;
    width: 120px;
    object-fit: contain;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 5px;
    background-color: white;
    margin: 15px 0; /* 增加边距 */
    transition: all 0.3s ease;
}

.right-section img:hover {
    transform: scale(1.05);
    border-color: #4cc2ff;
    box-shadow: 0 0 15px rgba(76, 194, 255, 0.3);
}

.email {
    margin-bottom: 20px; /* 增加下边距 */
    text-align: center;
}

.email p {
    font-family: 'Courier New', Courier, monospace;
    color: #ffff;
    font-size: 14px;
    margin-top: 5px;
}

.email strong {
    font-size: 16px;
    color: #4cc2ff;
}

.buttom {
    margin-top: auto;
    padding: 20px 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 1px solid #333;
}

.copyright {
    text-align: center;
    color: #aaa;
    font-size: 14px;
}

.copyright p {
    margin-bottom: 10px;
}

.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.links a {
    color: #aaa;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.links a:hover {
    color: #4cc2ff;
}

.links span {
    color: #666;
}

/* 响应式设计 */
@media (max-width: 1400px) {
    .nav-item {
        padding: 15px 25px;
    }
}

@media (max-width: 1200px) {
    .main {
        height: auto;
        min-height: 70vh;
    }
    
    .nav-item {
        padding: 15px 20px;
    }
    
    .main-link {
        font-size: 18px;
    }
    
    .sub-link {
        font-size: 13px;
    }
}

@media (max-width: 992px) {
    .navbar {
        flex-direction: column;
        height: auto;
    }
    
    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 30px;
    }
    
    .nav-item {
        width: 50%; /* 每行显示2个 */
        padding: 15px;
        margin-bottom: 20px;
    }
    
    .right-section {
        width: 100%;
        margin-left: 0;
        order: -1;
        margin-bottom: 30px;
    }
}

@media (max-width: 768px) {
    .main {
        height: auto;
    }
    
    .nav-links {
        flex-direction: column;
        align-items: center;
    }
    
    .nav-item {
        width: 100%;
        padding: 15px 0;
    }
    
    .sub-links {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    
    .sub-link {
        width: auto;
        padding: 5px 15px;
    }
    
    .top a {
        font-size: 24px;
    }
    
    .main-link {
        font-size: 18px;
        margin-bottom: 10px;
    }
}

@media (max-width: 480px) {
    .top {
        flex-direction: column;
        text-align: center;
        padding: 20px 0;
    }
    
    .top img {
        margin-left: 0;
        margin-bottom: 15px;
        height: 50px;
    }
    
    .top a {
        margin-left: 0;
        font-size: 20px;
    }
    
    .sub-links {
        flex-direction: column;
    }
    
    .sub-link {
        width: 100%;
    }
}
</style>