<template>
  <!-- <navbar btn-background="bg-gradient-dark" :dark-mode="true" /> -->
  <main class="main-content mt-0 ps">
    <section class="my-10">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 my-auto">
            <h1 class="display-1 text-bolder text-gradient text-danger">
              Error 404
            </h1>
            <h2>Erm. Page not found</h2>
            <p class="lead">
              We suggest you to go to the homepage while we solve this issue.
            </p>
            <vsud-button color="dark" variant="gradient" class="mt-4"
              >Go to Homepage</vsud-button
            >
          </div>
          <div class="col-lg-6 my-auto position-relative">
            <img
              class="w-100 position-relative"
              src="@/assets/img/illustrations/error-404.png"
              alt="404-error"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/Footer.vue";
import VsudButton from "@/components/VsudButton.vue";
import { useDesignStore } from "@/stores/design";

export default {
  name: "Error404",
  components: {
    Navbar,
    AppFooter,
    VsudButton,
  },
  setup(){
    const designStore = useDesignStore()
    return { designStore }
  },
  created() {
    this.designStore.hideConfigButton = true;
    this.designStore.showNavbar = false;
    this.designStore.showSidenav = false;
    this.designStore.showFooter = false;
  },
  beforeUnmount() {
    this.designStore.hideConfigButton = false;
    this.designStore.showNavbar = true;
    this.designStore.showSidenav = true;
    this.designStore.showFooter = true;
  },
};
</script>
