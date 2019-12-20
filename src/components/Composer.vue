<template>
  <form class="flex flex-row flex-space-between" @submit.prevent="onSubmit">
    <input v-model="message.text" type="text" class="flex flex-1" />

    <button class="button-primary" type="submit">
      Send
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'MessageComposer',
  setup(props, context) {
    const { Message } = context.root.$FeathersVuex.api

    const message = ref(new Message({ text: '' }))

    function reset() {
      message.value = new Message({ text: '' })
    }
    function onSubmit() {
      if (!message.value.text) {
        return
      }
      message.value.save()
      reset()
    }

    return {
      message,
      reset,
      onSubmit
    }
  }
}
</script>
