<template>
    <div class="main">
        <AboutBar/>
        <div class="about-wrapper">
            <div class="about-us-container-text">
                <div class="about-header">
                    <h2 class="main-title">关于我们</h2>
                    <p class="sub-title">About Us</p>
                </div>
                <div class="about-intro">
                    <p>我们是一家专注于科技服务的公司，成立于。一直以来，我们秉持着
                        <strong>“某某某”</strong> 的核心价值观，致力于为客户提供具体服务或产品 。
                    </p>
                    <p>
                        在发展过程中，我们不断积累经验、拓展业务版图，组建了一支专业且富有激情的团队。我们相信通过持续的创新和真诚的合作，能够为行业带来积极的改变，助力更多合作伙伴实现价值提升。
                    </p>
                    <button class="action-btn" style="background-color: #0066cc;">了解更多</button>
                </div>
            </div>

            <div class="about-image-container">
                <img class="about-image" src="@/assets/bg.jpg" />
            </div>
        </div>

        <div class="bottom-container">
            <div class="parallel-item">
                <img src="@/assets/握手.png" />
                <div class="parallel-text">
                    <p>123</p>
                </div>
            </div>
            <div class="parallel-item">
                <img src="@/assets/people.png" />
                <div class="parallel-text">
                    <p>123</p>
                </div>
            </div>
            <div class="parallel-item">
                <img src="@/assets/科技项目.png" />
                <div class="parallel-text">
                    <p>123</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AboutBar from '@/components/AboutBar.vue';
export default {
    name: 'AboutPage',
    methods: {
        toCompanyHistory() {
            this.$router.push('/companyHistory')
        }
    },
    components: {
        AboutBar,
    }
}
</script>

<style scoped>
.main{
    width:100%;
    height:fit-content;
}
.bottom-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
}

/* 单个项目容器 */
.parallel-item {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
}

/* 文字样式 */
.parallel-text {
    flex: 1;
    text-align: left;
}

.parallel-text p {
    margin: 0;
    font-size: 40px;
    color: #1b0303;
    line-height: 1.6;
    font-weight: bold;
}

.bottom-container img {
    max-height: 85px;
    width: auto;
    object-fit: contain;
    padding-left: 100px;
}

.action-btn {
    width: 9.625rem;
    height: 2.525rem;
    border: 1px solid #000000;
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
    background-color: #fdfeff;
    transition: all 0.3s ease;
    z-index: -1;
}

.action-btn:hover::before {
    left: 0;
}

.action-btn:hover {
    border-color: #000000;
    color: #000;
}


.about-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 0;
    align-items: stretch;
    height: 70vh
}

.about-image-container {
    flex:1;
    height: 70h;
    box-sizing: border-box;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 图片样式 */
.about-image {
    width: 100%;
    height: 60%;
    object-fit: contain;
}

.about-us-container-text {
    width: 40%;
    margin-right: auto;
    padding-left: 100px;
    height: 100vh;
    box-sizing: border-box;
    background-color: transparent;
}

.about-intro {
    line-height: 2;
    font-size: 20px;
    text-align: left;
    color: #444;
    text-indent: 2em;
    margin: 0 0 20px 0;
}

.about-header {
    text-align: left;
    margin-bottom: 20px;
}

.main-title {
    font-size: 36px;
    font-weight: bold;
    color: #0066cc;
    margin: 0 0 10px 0;
}

.sub-title {
    font-size: 20px;
    color: #666;
    margin: 0 0 30px 0;
}
</style>
