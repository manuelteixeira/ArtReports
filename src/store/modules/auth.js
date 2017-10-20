import firebase from '@/service/firebase';

const state = {
  user: {},
};

// getters
const getters = {
  // eslint-disable-next-line no-shadow
  user: state => state.user,
};

// actions
const actions = {
  login({ commit }, payload) {
    console.log(payload.email);
    firebase.auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => commit('setUser', user.uid),
      );
    // shop.buyProducts(
    //   products,
    //   () => commit(types.CHECKOUT_SUCCESS),
    //   () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    // )
  },
};

// mutations
const mutations = {
  // eslint-disable-next-line no-shadow
  setUser(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.user = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
