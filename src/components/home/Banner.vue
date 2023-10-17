<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="banners">
    <h1 class="yellow">{{ title }}</h1>
    <img alt="banner" class="baanner-img" src="@/assets/images/banner1.jpg"/>
  </div>
</template>

<style scoped>
h1 {
  position: relative;
  top: -113px;
  font-family: 'Montserrat-Bold';
  font-size: 185px;
  line-height: 225.52px;
  position: absolute;
  z-index: 1;
  left: -120px;
}


h2 {
  position: relative;
  bottom: -30px;
  font-family: 'Montserrat-Bold';
  font-size: 72px;
  line-height: 87.77px;
  position: absolute;
  z-index: 1;
  left: -120px;
}

.yellow {
  color: #FFB800;
}


h3 {
  font-size: 1.2rem;
}

.banners {
  width: 66.66%;
  position: relative;
  display: inline-block;
}

.banners img {
  width: 100%;
  position: relative;
  display: inline-block;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}

.banners:hover img {
  width: 100%;
  position: relative;
  display: inline-block;
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
  transition: all 0.8s ease;
  -moz-transition: all 0.8s ease;
  -o-transition: all 0.8s ease;
  -webkit-transition: all 0.8s ease;
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
</style>
