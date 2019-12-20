<template>
  <aside class="sidebar col col-3 flex flex-column flex-space-between">
    <header class="flex flex-row flex-center">
      <h4 class="font-300 text-center">
        <span v-cloak class="font-600 online-count">{{ users.length }}</span>
        {{ userOrUsers }}
      </h4>
    </header>

    <ul class="flex flex-column flex-1 list-unstyled user-list">
      <li v-for="user in users" :key="user._id">
        <a class="block relative" href="javascript://">
          <img :src="user.avatar || dummyUser.avatar" alt="" class="avatar" />
          <span class="absolute username">{{
            user.email || dummyUser.email
          }}</span>
        </a>
      </li>
    </ul>

    <footer class="flex flex-row flex-center">
      <a
        href="javascript://"
        class="logout button button-primary"
        @click="$emit('logout')"
        >Sign Out</a
      >
    </footer>
  </aside>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const dummyUser = [
      {
        email: 'noemail',
        avatar:
          'https://s.gravatar.com/avatar/7eb0f9eac6df7e6be3971144999a2152?s=200'
      }
    ]
    const userOrUsers = computed(() =>
      props.users.length === 1 ? 'user' : 'users'
    )

    return {
      dummyUser,
      userOrUsers
    }
  }
}
</script>

<style>
aside.sidebar {
  background: #f8f8f8;
  max-width: 340px;
  padding: 15px;
  border-right: 1px solid #f1f1f1;
}

aside.sidebar .online-count {
  color: #31d8a0;
  margin-right: 5px;
}

aside.sidebar h4 {
  margin: 0 0 20px 0;
  color: #c3c3c3;
}

aside.sidebar .user-list {
  overflow-y: scroll;
}

aside.sidebar li {
  margin: 15px 0;
}

aside.sidebar li > a {
  color: #555555;
}

aside.sidebar li > a:hover > span,
aside.sidebar li > a:focus > span {
  color: #31d8a0;
}

aside.sidebar img.avatar {
  border-radius: 100%;
  height: 45px;
  width: 45px;
  margin-right: 10px;
}

aside.sidebar .username {
  position: absolute;
  line-height: 45px;
}
</style>
