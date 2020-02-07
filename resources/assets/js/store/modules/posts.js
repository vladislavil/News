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
      post(state) {
         return state.postsID;
     }
   },
   mutations: {
      getPosts(state) {
         state.postsText.length = 0;
         VK.api("wall.get", {"domain": 'ovsyanochan','count': '10', "v":"5.103"}, function (data) {
            let items = [];
            items.push(data.response); 
            items.map((elem) => {
               console.log(elem)
               state.postsID.push(elem.count);
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