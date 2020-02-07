export default {
   namespaced: true,
   state: {
      postsID: [],
      postsText: [],
      postsPhoto: []
   },
   getters: {
      postsText(state) {
         return state.postsText;
      },
      postsPhoto(state) {
         return state.postsPhoto;
      },
      itemsMap(state) {
         let itemsMap = {};

         for(let i = 0; i < state.postsID.length; i++) {
             let post = state.postsID[i];
             itemsMap[postsID[i]] = post;
         }

         return itemsMap;
     },
      post: (state, getters) => (id) => {
         return getters.itemsMap;
     }
   },
   mutations: {
      getPosts(state) {
         state.postsText.length = 0;
         VK.api("wall.get", {"domain": 'ovsyanochan','count': '10', "v":"5.103"}, function (data) {
            let items = [];
            items.push(data.response); 
            items.map((elem) => {
               state.postsID.push(elem.id);
               elem.items.map((item) => {
                  state.postsText.push(item.text);
                  item.attachments.map((photos)=> {
                     if('photo' in photos) {
                        state.postsPhoto.push(photos.photo.sizes[3].url);
                     }
                     else {
                        state.postsPhoto.push("")
                     }
                  });
               });
            });
            // items.map((elem)=> {
            //    elem.items.map((item)=> {
            //       item.attachments.map((photos)=> {
            //          console.log(photos.photo.sizes[3].url)
            //       })
            //    })
            // });
         });
      }
   },
   actions: {
      getPosts(store) {
         store.commit('getPosts');
      }
   }
}