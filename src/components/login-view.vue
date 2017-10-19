
<template>
  <v-form class="pa-4" v-model="valid" ref="form" lazy-validation>

    <!-- Email input -->
    <v-text-field class="grey--text" :label="$t('login.email')" v-model="email" :rules="emailRules" required>
    </v-text-field>

    <v-text-field class="grey--text" :label="$t('login.password')" v-model="password" :rules="passwordRules" required>
    </v-text-field>

    <!-- Button -->
    <v-btn class="grey--text" @click="submit" :disabled="!valid">
      {{ $t('login.login') }}
    </v-btn>
    <v-btn class="grey--text" click="clear">
      {{ $t('login.clear') }}
    </v-btn>


  </v-form>
</template>
