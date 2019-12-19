<template>
  <form
    id="send-message"
    class="flex flex-row flex-space-between"
    @submit.prevent
  >
    <input v-model="newMessage" type="text" name="text" class="flex flex-1" />
    <button class="button-primary" type="submit" @click="addMessage">
      Send
    </button>
  </form>
</template>

<script>
export default {
  name: 'MessageComposer',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    createMessage: Function
  },
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    addMessage() {
      // Create a new message and then clear the input field
      this.createMessage({ text: this.newMessage }).then(this.clearMessage)
    },
    clearMessage() {
      this.newMessage = ''
    }
  }
}
</script>
