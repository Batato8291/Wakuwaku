<template>
  <div class="toast-container" style="z-index: 1050">
    <!-- :msg="msg" 為向下傳遞訊息給ToastModal -->
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg"></Toast>
  </div>
</template>
<style lang="scss" scoped>
.toast-container {
  position: fixed;
}
</style>
<script>
import Toast from '@/components/ToastModel.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.$emitter.on('push-message', (message) => {
      const { style, title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
