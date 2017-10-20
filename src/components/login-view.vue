
<template>
  <v-form class="pa-4" ref="form" lazy-validation>

    <div style="color: red">{{ test }}</div>

    <!-- Email input -->
    <v-text-field class="grey--text" :label="$t('login.email')" v-model="user.email" required>
    </v-text-field>

    <v-text-field class="grey--text" :label="$t('login.password')" v-model="user.password" required>
    </v-text-field>

    <!-- Button -->
    <v-btn class="grey--text" @click="submit">
      {{ $t('login.login') }}
    </v-btn>
    <v-btn class="grey--text">
      {{ $t('login.clear') }}
    </v-btn>


  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },

  computed: {
    ...mapGetters({
      test: 'user',
    }),
  },

  methods: {
    ...mapActions({
      login: 'login',
    }),

    submit() {
      this.login(this.user);
    },
  },
};
</script>
