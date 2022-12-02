<template>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <div class="py-4 container-fluid">      
      <div class="mt-4 row">
        <div class="col-sm-6">
          <transactions-card />
        </div>
        <div class="mt-4 col-sm-6 mt-sm-0">
          <revenue-card />
        </div>
      </div>
      <app-footer />
    </div>
  </main>
</template>

<script>
import VisitorsCard from "@/components/VisitorsCard.vue";
import IncomeCard from "@/components/IncomeCard.vue";
import NewTabCard from "@/components/NewTabCard.vue";
import WealthCreationCard from "@/components/WealthCreationCard.vue";
import CategoriesCard from "@/components/CategoriesCard.vue";
import BirthdayMessageCard from "@/components/BirthdayMessageCard.vue";
import TransactionsCard from "@/components/TransactionsCard.vue";
import RevenueCard from "@/components/RevenueCard.vue";
// import Calendar from "@/examples/Calendar.vue";
import AppFooter from "@/components/Footer.vue";
import { useDesignStore } from "@/stores/design";

export default {
  name: "Crm",
  setup(){
    const designStore = useDesignStore()
    return { designStore }
  },
  components: {
    VisitorsCard,
    IncomeCard,
    NewTabCard,
    WealthCreationCard,
    CategoriesCard,
    BirthdayMessageCard,
    // Calendar,
    TransactionsCard,
    RevenueCard,
    AppFooter,
  },
  beforeMount() {
    this.designStore.showFooter = false;
  },
  beforeUnmount() {
    this.designStore.showFooter = true;
  },
};
</script>
