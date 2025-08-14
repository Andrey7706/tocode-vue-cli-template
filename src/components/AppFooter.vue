<template>
  <footer class="footer">
    <div class="container">
      <div class="navbar-content">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
          </li>
        </ul>
        <!-- link to course -->
        <ul class="navbar-list" style="margin-top: 14px;">
          <li class="navbar-item" style="opacity: 0.6; font-size: 14px;">
            <router-link to="https://tocode.ru" class="navbar-link" target="_blank">Сделано на курсе "Vue.js 3"</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  import {links} from '@/_config';
  export default {
    data() {
      return {
        links: links,
      };
    }
  };
</script>