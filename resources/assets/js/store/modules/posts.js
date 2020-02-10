export default {
   namespaced: true,
   state: {
      posts: []
   },
   getters: {

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
               if(list[0][i].text && ('photo' in list[0][i].attachments[0])) {
                  state.posts.push(new Object({ text: list[0][i].text, photo: list[0][i].attachments[0].photo.sizes[3].url }));
               }

            }
         });
      }
   },
   actions: {
      getPosts(store) {
         store.commit('getPosts');
      }
   }
}