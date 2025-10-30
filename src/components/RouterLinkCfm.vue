<script>
import * as vueRouterFile from 'vue-router'

export default {
   name: 'RouterLinkCfm',
   components: { RouterLink: vueRouterFile.RouterLink },
}
</script>

<!-- eslint-disable vue/no-restricted-html-elements -->
<template>
   <RouterLink
      class="router-link-cfm"
      :custom="true"
   />
</template>
<!-- eslint-enable vue/no-restricted-html-elements -->