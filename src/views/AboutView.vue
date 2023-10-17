<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from '../router';
</script>
<template>
  <transition>
    <main class="about">
      <div class="left-side">
        <div class="top-nav">
          <a class="icon-back" @click="router.go(-1)">
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
  </transition>
</template>

<style>

.about {
  position: absolute !important;
  width: 100% !important;
  height: 100vh !important;
  z-index: 10;
  display: inline-block !important;
  left: 0;
  top: 0;
}

.v-enter-active {
  transition: height 0.8s cubic-bezier(1, -0.01, 0.09, 1);
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

@media (min-width: 1024px) {
}
</style>
