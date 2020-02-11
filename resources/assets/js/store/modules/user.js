export default {
    namespaced: true,
    state: {
        authorize: '',
        user: '',
        photo: '',
        tocken: ''
    },
    actions: {
        loginUser({commit}) {
            commit('SET_LOGIN_USER')
        },
        logoutUser({commit}) {
            commit('SET_LOGOUT_USER')
        },
        checkStatus({commit}) {
            commit('SET_CHECK_USER')
        },
    },
    mutations: {
        SET_LOGIN_USER(state) {
            VK.Auth.login((response) => {
                state.authorize = response.status
                if (response.status === 'connected') {
                    state.user = response.session.user.first_name + ' ' + response.session.user.last_name;
                    state.tocken = response.session.sid;
                    VK.api("users.get", {"user_ids": response.session.user.id ,'fields': 'photo_100', "v":"5.103"}, function (data) {
                        data.response.map((elem) => {
                            state.photo = elem.photo_100;
                        });
                    });
                }
			});
        },
        SET_LOGOUT_USER(state) {
            VK.Auth.logout((response) => {
                state.authorize = response.status;
            })
        },
        SET_CHECK_USER(state) {
            VK.Observer.subscribe('auth.statusChange', (response) => {
                state.authorize = response.status;
            })
        }
    },
    getters: {
        getAuthorize(state) {
            return state.authorize;
        },
        getUser(state) {
            return state.user;
        },
        photo(state) {
            return state.photo;
        },
        getTocken(state) {
            return state.tocken;
        }
    }
};