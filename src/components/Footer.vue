<template>
    <div class="main">
        <div class="footer">
            <div class="top">
                <img src="@/assets/logo.png" />
                <a>1234567811</a>
            </div>
            <div class="navbar">
                <ul class="nav-links">
                    <li><router-link to="/">网站首页</router-link></li>
                    <li><router-link to="/about">关于我们</router-link></li>
                    <li><router-link to="/services">服务中心</router-link></li>
                    <li><router-link to="/product">产品中心</router-link></li>
                    <li><router-link to="/customerCase">客户案例</router-link></li>
                    <li><router-link to="/contact">联系我们</router-link></li>
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
    height: 60vh;
    background-color: rgb(5, 5, 105);
    max-width: 100%;
    display: flex;
}

.footer {
    margin-top: 7px;
    background-color: #1b1b1b80;
    height: 99%;
    width: 100%;
}

.top {
    margin: 0 auto;
    display: flex;
    height: 25%;
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
    margin: 10px 20px;
    height: 50%;
    display: flex;
   width: calc(100% - 40px); 
}

.nav-links {
    list-style: none;
    display: flex;
    height: 100%;
    padding-left: 0;
    margin-bottom: auto;
    align-items: flex-start;
}

.nav-links a {
    font-size: 20px;
    color: #ffff;
    text-decoration: none;
    padding: 10px 50px;

}

.right-section {
    width: 20%;
    height: 100%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right-section p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffff
}

.right-section img {
    height: 50%;
    width: 50%;
    object-fit: contain;
}

.email {
    margin-bottom: 5px;
}

.email p {
    font-family: 'Courier New', Courier, monospace;
    color: #ffff;
}
.buttom{

}
</style>