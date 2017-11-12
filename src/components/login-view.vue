
<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <!-- Logo -->
        <img src="../assets/logo.png" alt="2021 Art Reports">
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <!-- Login form -->
        <v-form class="pa-4" ref="form" lazy-validation>
          <!-- Email input -->
          <v-text-field class="grey--text"
                        :label="$t('login.email')"
                        v-model="user.email"
                        required>
          </v-text-field>

          <!-- Password -->
          <v-text-field class="grey--text"
                        :label="$t('login.password')"
                        v-model="user.password"
                        required>
          </v-text-field>

          <!-- Buttons -->
          <v-btn class="grey--text"
                 @click="submit">
            {{ $t('login.login') }}
          </v-btn>
          <v-btn class="grey--text"
                @click="clearForm">
            {{ $t('login.clear') }}
          </v-btn>

        </v-form>
      </v-flex>
    </v-layout>
  </v-container>

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

    clearForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
