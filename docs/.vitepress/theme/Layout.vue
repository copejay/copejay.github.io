<template>
  <Layout>
    <template #footer>
      <div style="text-align:center;font-size:12px;color:#999;">
        本站访问量：
        <span id="busuanzi_value_site_pv"></span>
        次 |
        访客数：
        <span id="busuanzi_value_site_uv"></span>
        人
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>
