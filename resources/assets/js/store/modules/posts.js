export default {
   namespaced: true,
   state: {
      posts: [],
      isLoad: false
   },
   getters: {
      isLoad(state) {
         return state.isLoad;
      },
      posts(state) {
         return state.posts;
      }
   },
   mutations: {
      getPosts(state) {
         state.posts.length = 0;
         VK.api("wall.get", {"domain": 'ovsyanochan','count': '50', "v":"5.103"}, function (data) {
            let list = [];
            list.push(data.response.items); 
            for( let i = 0; i < list[0].length; i++) {
               if(list[0][i].text && (list[0][i].attachments) && ('photo' in list[0][i].attachments[0])) {
                  state.posts.push(new Object({ text: list[0][i].text, photo: list[0][i].attachments[0].photo.sizes[list[0][i].attachments[0].photo.sizes.length-1].url }));
               }
            }
         });
      },
      windowLoad(state) {
         state.isLoad = true;
      }
   },
   actions: {
      getPosts(store) {
         store.commit('getPosts');
      }
   }
}