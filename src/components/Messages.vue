<template>
  <div class="flex flex-column col col-9">
    <main ref="chatPane" class="chat flex flex-column flex-1 clear">
      <SingleMessage
        v-for="message in messages"
        :key="message._id"
        :message="message"
      />
    </main>

    <ComposeMessage />
  </div>
</template>

<script>
import { ref, watch, onMounted } from '@vue/composition-api'
import ComposeMessage from './Composer.vue'
import SingleMessage from './Message.vue'

export default {
  name: 'MessageList',
  components: {
    ComposeMessage,
    SingleMessage
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  setup(props, context) {
    const placeholder = ref('PLACEHOLDER')

    // Chat Pane
    const chatPane = ref(null)
    function scrollToBottom() {
      context.root.$nextTick(() => {
        chatPane.value.scrollTop = chatPane.value.scrollHeight
      })
    }
    onMounted(() => {
      watch(
        () => props.messages.length,
        () => scrollToBottom()
      )
    })

    return {
      placeholder,
      chatPane
    }
  }
}
</script>

<style>
main.chat {
  padding: 10px;
  overflow-y: scroll;
}

main.chat img.avatar {
  border-radius: 100%;
  height: 45px;
  width: 45px;
  flex: none;
}

main.chat .message {
  flex: 0 0 auto;
}

main.chat .message img.avatar {
  margin-right: 10px;
}

main.chat .message p.message-header {
  margin: 0;
  font-size: 0.9em;
}

main.chat .message p.message-header span.sent-date {
  color: #969696;
}
</style>
