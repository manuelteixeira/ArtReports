/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign:
   ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import firebase from '@/service/firebase';

const state = {
  user: {
    uid: '',
    email: '',
  },
};

// getters
const getters = {
  user: state => state.user,
};

// actions
const actions = {
  login({ commit }, payload) {
    firebase.auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => commit('setUser', user),
      );
  },
};

// mutations
const mutations = {
  setUser(state, payload) {
    state.user.uid = payload.uid;
    state.user.email = payload.email;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
