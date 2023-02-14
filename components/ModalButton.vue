<template>
    <VButton @click="open">
    </VButton>
    <ModalsContainer />
</template>

<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalPlainCss from './ModalPlainCss.vue'
// export default {
//   props: {
//         img: String,
//         active: 'active',
//         isActive: 'isActive',
//         djList: 'djList',
//         show: {
//             type: Boolean,
//             required: true,
//             twoWay: true
//         }
//     },
// }
const { open, close } = useModal({
  component: ModalPlainCss,
  attrs: {
    title: dj,
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p></p>',
  },
})
</script>