export default {
   namespaced: true,
   state: {
      postsText: [],
      postsPhotos: []
   },
   getters: {
      postsText(state) {
         return state.postsText;
      },
      postsPhotos(state) {
         return state.postsPhotos;
      }
   },
   mutations: {
      getPosts(state) {
         state.postsText.lenght = 0;
         VK.api("wall.get", {"domain": 'ovsyanochan','count': '10', "v":"5.103"}, function (data) {
            let items = [];
            items.push(data.response); 
            items.map((elem) => {
               elem.items.map((item) => {
                  state.postsText.push(item.text);
                  item.attachments.map((photos)=> {
                     if(photos.photo.sizes[3]) {
                        state.postsPhotos.push(photos.photo.sizes[3].url);

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