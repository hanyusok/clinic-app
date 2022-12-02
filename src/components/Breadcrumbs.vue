<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="designStore.isRTL ? '' : ' me-sm-6'"
    >
      <li class="text-sm breadcrumb-item" :class="textWhite">
        <a v-if="designStore.isRTL" :class="textWhite" class="opacity-5 ps-2" href="#"
          >외국어</a
        >
        <a v-else :class="textWhite" class="opacity-8" href="#">Pages</a>
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="textWhite ? 'text-white' : 'text-dark'"
        aria-current="page"
      >
        {{ currentPage }}
      </li>
    </ol>
    <h6 class="mb-0 font-weight-bolder" :class="textWhite ? 'text-white' : ''">
      {{ currentPage }}
    </h6>
  </nav>
</template>

<script>
import { useDesignStore } from '../stores/design'
export default {
  name: 'Breadcrumbs',
  setup() {
    const designStore = useDesignStore()
    return { designStore }
  },
  props: {
    currentPage: {
      type: String,
      default: undefined
    },
    textWhite: {
      type: String,
      default: ''
    }
  }
}
</script>
