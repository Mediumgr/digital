<template>
  <MainBlock/>
  <SpecialistsInfo/>
  <WhichStackToUseSection/>
  <WorkingSection/>
  <FormVacancy/>
  <MapSection/>
  <ProcessBlock/>
  <LifeOutsideOffice/>
  <EducationSection/>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue';
import SpecialistsInfo from '@/components/SpecialistsInfo.vue';
import WorkingSection from '@/components/WorkingSection.vue';
import FormVacancy from '@/components/FormVacancy.vue';
import ProcessBlock from '@/components/ProcessBlock.vue';
import LifeOutsideOffice from '@/components/LifeOutsideOffice.vue';
import EducationSection from "@/components/EducationSection.vue";
import MapSection from "@/components/MapSection.vue";
import WhichStackToUseSection from "@/components/WhichStackToUseSection.vue";

export default {
  name: 'MainPage',
  components: {
    MainBlock,
    SpecialistsInfo,
    WorkingSection,
    FormVacancy,
    ProcessBlock,
    LifeOutsideOffice,
    WhichStackToUseSection,
    MapSection,
    EducationSection
  },
};
</script>
