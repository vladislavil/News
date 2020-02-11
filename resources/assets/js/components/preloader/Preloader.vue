<template lang="pug">

transition(name="fade")
   .preloader
      .preloader__wrapper
         //- .ball-zig-zag
         //-    div
         //-    div
         .spinner
            .circle
               span.line
               span.line
               span.line
               span.line
      
</template>

<script>
   export default {
      
   }
</script>

<style lang="sass" scoped>

.fade-enter
   opacity: 0

.fade-enter-active
   transition: opacity 0.5s

.fade-enter-to

.fade-live

.fade-live-active
   opacity: 0
   transition: opacity 0.5s
   

.fade-live-to

.preloader
   position: relative

.preloader__wrapper
   position: fixed
   top: 0
   left: 0
   z-index: 9999
   background: linear-gradient(45deg, #009245, #fcee21)
   width: 100vw
   min-height: 100vh
   display: flex
   justify-content: center
   align-items: center

.spinner
   -webkit-perspective: 1000px
   perspective: 1000px

   .circle,
   .line
      width: 260px
      height: 260px
      border: 5px solid #ffffff
      border-radius: 50%

   .circle
      position: relative
      -webkit-transform-style: preserve-3d
      transform-style: preserve-3d
      animation: spinn 3s infinite linear

   .line 
      display: block
      position: absolute
      top: -5px
      right: 0
      bottom: 0
      left: -5px

      &:nth-child(1)
         transform: rotateY(36deg)
      &:nth-child(2)
         transform: rotateY(72deg)
      &:nth-child(3)
         transform: rotateY(108deg)
      &:nth-child(4)  
         transform: rotateY(144deg)

@keyframes spinn 
   100% 
      -webkit-transform: rotateY(360deg) rotateZ(360deg)
      transform: rotateY(360deg) rotateZ(360deg)

         

// .preloader
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    position: absolute
//    top: 0
//    left: 0
//    z-index: 9999
//    width: 100%
//    height: 100%
//    overflow: hidden
//    background-color: #000

// .ball-zig-zag
//    position: relative
//    transform: translate(-15px, -15px)

// .ball-zig-zag>div
//    background-color: #4ac963
//    width: 15px
//    height: 15px
//    border-radius: 100%
//    margin: 2px
//    animation-fill-mode: both
//    position: absolute
//    margin-left: 15px
//    top: 4px
//    left: -7px

//    &:first-child
//       animation: ball-zig .7s linear 0s infinite

//    &:last-child
//       animation: ball-zag .7s linear 0s infinite

// @keyframes ball-zig
//   33%
//     transform: translate(-15px, -30px)

//   66%
//     transform: translate(15px, -30px)

//   to
//     transform: translate(0)

// @keyframes ball-zag
//   33%
//     transform: translate(15px, 30px)

//   66%
//     transform: translate(-15px, 30px)

//   to
//     transform: translate(0)
</style>