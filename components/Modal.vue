<template>
    <div class="modal-backdrop" v-show="show">
        <div 
            class="modal" 
            v-for="dj in djList" 
            v-if="modalActiveContent($index)"
            >
            <button v-if="modalActiveContent($index)"
                type="button"
                class="btn-close"
                @click="close"
                >x
            </button>

            <section class="modal-header">
                
                <h4>{{ dj.name }}</h4>
            </section>
            
            <section class="modal-body">
                <div class="dj-img">
                    <img :src="`/images/${dj.img}`" />
                </div>
                <p>{{ dj.body }}</p>
                <!-- <slot class="dj-body" name="body"></slot> -->
                
            </section>
            
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
        img: String,
        active: 'active',
        isActive: 'isActive',
        djList: 'djList',
        show: {
            type: Boolean,
            required: true,
            twoWay: true
        }
    },
    methods: {
      close() {
        // this.$emit('close');
        this.show = false
      },
      modalActiveContent: function(i) {
        return this.active === i
      }
    },
  };
</script>

<style lang="sass" scoped>
    .modal-backdrop
        position: fixed
        top: 25%
        bottom: 24%
        left: 25%
        right: 25%
        background: #dbdbdb
        display: flex
        justify-content: center
        align-items: center

    .modal
        background: #7c7c7c
        box-shadow: 2px 2px 20px 1px
        overflow-x: auto
        display: flex
        flex-direction: column
    .modal-header
        padding: 15px
        display: flex
        font-family: 'Comfortaa', cursive
        font-size: 40px
    .modal-body
        display: flex
        position: relative
        padding: 20px 10px
        font-family: 'Arimo', sans-serif
    .dj-img
        width: 50%
    img
        width: 50%
    .btn-close
        position: absolute
        top: 0
        right: 0
        border: none
        font-size: 20px
        padding: 10px
        cursor: pointer
        font-weight: bold
        color: #000000
        background: transparent
</style>