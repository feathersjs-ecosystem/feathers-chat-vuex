<template>
  <div class="message flex flex-row">
    <img
      :src="message.user.avatar || placeholder"
      :alt="message.user.email"
      class="avatar"
    />
    <div class="message-wrapper">
      <p class="message-header">
        <span class="username font-600">{{ message.user.email }}</span>
        <span class="sent-date font-300 pl-2">{{ message.formattedDate }}</span>
      </p>
      <p class="message-content font-300">{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.pl-2 {
  padding-left: 8px;
}
</style>
