<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import router from './router'
</script>

<template>
  <main class="home" :class="{ 'show': page == 'home' }">
    <div class="yellow-line short top" :class="{ 'hover': hover }"></div>
    <div class="yellow-line long top" :class="{ 'hover': hover }"></div>

    <h1 class="yellow" :class="{ 'hover': hover }">We Create</h1>
    <div class="banners" @mouseenter="hover = true" @mouseleave="hover = false">
      <img alt="banner" class="baanner-img" :class="{ 'hover': hover }" src="@/assets/images/banner1.jpg"/>
    </div>
    <a to="about" class="btn-yellow" @mouseenter="hover = true" @mouseleave="hover = false" @click="setPage('about')">
      <h2 class="yellow" :class="{ 'hover': hover }">AWESOME THINGS</h2>
      <div class="arrow-yellow" :class="{ 'hover': hover }"><span class="long-arrow-right"></span></div>
    </a>
    <div class="yellow-line bottom long" :class="{ 'hover': hover }"></div>
    <div class="yellow-line bottom short" :class="{ 'hover': hover }"></div>
  </main>
  
  <main class="about" :class="{ 'show': page == 'about' }">
    <div class="left-side">
      <div class="top-nav">
        <a class="icon-back" @click="setPage('home')">
          <font-awesome-icon icon="fa-solid fa-arrow-left-long" class="icon-arrow-left"/>
          Back
        </a>
      </div>
      <div class="main-nav">
        <nav></nav>
      </div>
    </div>
    <div class="right-side">
      <div class="content">
        <h1>This is an about page</h1>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
  export default {
    data() {
      return {
        hover: false,
        page: 'home',
      };
    },
    methods: {
      setPage (currPage: string) {
        this.page = currPage;
      }
    }
  };
</script>

<style scoped>
.home {
  /* max-width: 1440px; */
  /* text-align: center; */
  position: relative;
  display: none;
  width: 100%;
  padding: 50px 70px;
  height: 100%;
  /* background-color: rgba(0,0,0,0.7); */
}
h1 {
  /* position: relative; */
  top: calc(((100% - (70% + 100px)) / 2) - 115px);
  font-family: 'Montserrat-Bold';
  font-size: 185px;
  /* height: 185px; */
  /* line-height: 225.52px; */
  position: absolute;
  z-index: 1;
  left: calc(((100% - 70%) /2) - 70px);
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
}
h1.yellow.hover {
  font-size: 195px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
}
.btn-yellow {
  cursor: pointer;
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 66.66%;
  height: 162px;
  padding: 45px;
  top: 15px;
  z-index: 9;
  left: calc(((100% - 70%) /2) - 120px);
  margin: unset;
  border-radius: 15px;
}

.btn-yellow:hover {
  background-color: #FFB800;
  border-radius: 15px;
}

.btn-yellow h2 {
  position: relative;
  /* bottom: -30px; */
  font-family: 'Montserrat-Bold';
  font-size: 72px;
  line-height: 72px;
  margin: unset;
  padding: unset;
  /* z-index: 1; */
  width: 100%;
  display: inline-block;
  left: -1100px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: left 1s ease-in-out;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}
.btn-yellow h2.hover {
  left: 0px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: left 1s ease-in-out;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}
.yellow {
  color: #FFB800;
}

.btn-yellow:hover h2.hover {
  left: 0px;
  color: #ffffff;
}
.btn-yellow .arrow-yellow {
  width: 126px;
  height: auto;
  position: absolute;
  /* bottom: -30px; */
  /* z-index: 1; */
  display: inline-block;
  right: -1100px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: right 1s ease-in-out; */
}
.btn-yellow:hover .arrow-yellow.hover {
  right: 0px;
}
.btn-yellow .arrow-yellow.hover {
  right: 0px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: right 1s ease-in-out;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}

.long-arrow-right {
  display: block;
  margin: 14px auto;
  width: 44px;
  height: 44px;
  border-top: 10px solid #FFB800;
  border-left: 10px solid #FFB800;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: rotate(135deg);
}

.long-arrow-right::after{
  content: "";
  display: block;
  width: 10px;
  height: 126px;
  background-color: #FFB800;
  transform: rotate(-45deg) translate(41px, 10px);
  left: 0;
  top: 0;
}
.btn-yellow:hover .arrow-yellow .long-arrow-right {
  border-top: 10px solid #ffffff;
  border-left: 10px solid #ffffff;
}
.btn-yellow:hover .arrow-yellow .long-arrow-right::after {
  background-color: #ffffff;
}
h3 {
  font-size: 1.2rem;
}

.banners {
  width: 70%;
  height: auto;
  position: relative;
  display: inline-block;
  left: calc((100% - 70%) /2);
  top: calc((100% - (70% + 100px)) / 2);
  overflow: hidden;
}

.banners .baanner-img {
  width: 100%;
  position: relative;
  display: inline-block;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  -moz-transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  -o-transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  -webkit-transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
}

.banners:hover .baanner-img {
  width: 100%;
  position: relative;
  display: inline-block;
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  -moz-transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  -o-transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  -webkit-transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  transform: scale(1.2);
}
.banners h1,
.banners h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .banners h1,
  .banners h3 {
    text-align: left;
  }
}

.yellow-line {
  background-color: #FFB800;
  width: 0px;
  height: 18px;
  position: absolute;
  transition: width 0.8s;
}


.yellow-line.short.top {
  right: 230px;
  top: 50px;
  width: 0;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}

.yellow-line.long.top {
  right: 70px;
  top: 50px;
  width: 0;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}

.yellow-line.short.bottom {
  left: 230px;
  bottom: 50px;
  width: 0;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}
.yellow-line.long.bottom {
  left: 70px;
  bottom: 50px;
  width: 0;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}

.yellow-line.short.top.hover {
  right: 230px;
  top: 50px;
  width: 67px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}

.yellow-line.long.top.hover {
  right: 70px;
  top: 50px;
  width: 140px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}

.yellow-line.short.bottom.hover {
  left: 230px;
  bottom: 50px;
  width: 67px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}
.yellow-line.long.bottom.hover {
  left: 70px;
  bottom: 50px;
  width: 140px;
  transition: all 0.8s cubic-bezier(1, -0.01, 0.09, 1);
  /* transition: width 0.8s;
  transition-timing-function: cubic-bezier(1, -0.01, 0.09, 1); */
}

.yellow-line.top.short, .yellow-line.top.long {
  transform: rotateY(180deg);
}



.about {
  position: absolute !important;
  width: 100%;
  height: 100vh;
  z-index: 10;
  display: none;
  left: 0;
  top: 0;
  /* transform: translate(0%, 100%), scale(0.0); */
}

.about.show .right-side {
  animation-name: zoom-in-animate;
  transition: transform 2s, opacity 0.8s;
  /* transform: translate(-50%, -50%); */
  /* transform: translate(0%, 0%), scale(1.0); */
}

@keyframes zoom-in-animate {
  0% {
    transition: transform 2s, opacity 0.8s;
    animation-delay: 2s;
    transform: translate(0%, 100%), scale(0.0);
  }
  100% {
    transition: transform 2s, opacity 0.8s;
    animation-delay: 2s;
    transform: translate(0%, 0%), scale(1.0);
  }
}

.left-side {
  min-height: 100vh;
  position: relative !important;
  width: calc(100% - 67.22%) !important;
  height: 100vh !important;
  display: block !important;
  float: left;
}

.right-side {
  min-height: 100vh;
  position: relative !important;
  width: 67.22% !important;
  height: 100vh !important;
  display: block !important;
  float: left;
  background-image: url('@/assets/images/bg-about.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  padding: 46px 50px;
}
.top-nav {
  /* background-color: #FFB800; */
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 46px 50px;
}
.main-nav {
  /* background-color: #FFB800; */
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 46px 50px;
}

.icon-back {
  color: #2D2D2D;
  font-family: 'Montserrat-Medium';
  font-size: 20px;
  cursor: pointer;
} 

.icon-arrow-left {
  margin-right: 5px;
  color: #2D2D2D;
}
.show {
  display: inline-block !important;
}
.hide {
  display: none !important;
}
</style>