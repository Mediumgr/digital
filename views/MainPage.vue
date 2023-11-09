<template>
  <!--   <MainBlock /> -->
  <SpecialistsInfo/>
  <!--   <WorkingSection />
    <FormVacancy /> -->
  <!--  <MapSection/>-->
  <WhichStackToUseSection/>
  <EducationSection/>
</template>

<script>
/* import MainBlock from '@/components/MainBlock.vue'; */
import SpecialistsInfo from '@/components/SpecialistsInfo.vue';
/* import WorkingSection from '@/components/WorkingSection.vue';
import FormVacancy from '@/components/FormVacancy.vue'; */
import EducationSection from "@/components/EducationSection.vue";
// import MapSection from "@/components/MapSection.vue";
import WhichStackToUseSection from "@/components/WhichStackToUseSection.vue";

export default {
  name: 'MainPage',
  components: {
    /*    MainBlock, */
    SpecialistsInfo,
    /*     WorkingSection,
        FormVacancy, */
    // MapSection,
    EducationSection,
    WhichStackToUseSection
  },
};
</script>
