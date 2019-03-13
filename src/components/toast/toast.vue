<template>
  <div class="toast_position" v-show="isVisible">
    <transition name="fade">
        <div class="toast" v-if="isVisible">
            {{text}}
        </div>
    </transition>
  </div>
    
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      isVisible: false,
      text: ""
    };
  },
  methods: {
      tipText(tit) {
          this.text = tit;
      },
      toast(time) {
          this.isVisible = true;
          setTimeout(() =>{
            this.isVisible = false;
          },time)
      },
      hide() {
          this.isVisible = false
      }

  },
};
</script>

<style lang="less" scoped>
.toast_position{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: 999;
}
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -15vw;
  padding: 1vw 2vw;
  width: 30vw;
  font-size: 1.5vw;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2vw;
  z-index: 999;
  word-wrap:break-word;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>