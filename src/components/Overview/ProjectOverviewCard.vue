<template>
  <div class="card card-blog card-plain">
    <div class="position-relative">
      <a class="shadow-xl d-block border-radius-xl">
        <!-- <img :src="img" alt="img-blur-shadow" class="shadow img-fluid border-radius-xl" /> -->
      </a>
    </div>
    <div class="px-1 pb-0 card-body">
      <p class="mb-2 text-sm text-gradient text-dark">Date {2022-12-3} #{{ number }}</p>
      <a href="javascript:;">
        <h5>{홍길동}{{ title }}</h5>
      </a>
      <p class="mb-4 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsCard',
  props: {
    number: { type: Number, required: true },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
  }
}
</script>
