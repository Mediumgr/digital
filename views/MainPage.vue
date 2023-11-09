<template>
<<<<<<< HEAD
  <MainBlock />
  <SpecialistsInfo />
  <WorkingSection />
  <FormVacancy />
||||||| c9fdff5
<!--   <MainBlock /> -->
  <SpecialistsInfo />
<!--   <WorkingSection />
  <FormVacancy /> -->
=======
  <MainBlock/>
  <SpecialistsInfo/>
  <WhichStackToUseSection/>
  <WorkingSection/>
  <FormVacancy/>
  <MapSection/>
  <ProcessBlock/>
  <LifeOutsideOffice/>
  <EducationSection/>
>>>>>>> preprod
</template>

<script>
import MainBlock from '@/components/MainBlock.vue';
import SpecialistsInfo from '@/components/SpecialistsInfo.vue';
<<<<<<< HEAD
import WorkingSection from '@/components/WorkingSection.vue';
import FormVacancy from '@/components/FormVacancy.vue';
||||||| c9fdff5
/* import WorkingSection from '@/components/WorkingSection.vue';
import FormVacancy from '@/components/FormVacancy.vue'; */
=======
import WorkingSection from '@/components/WorkingSection.vue';
import FormVacancy from '@/components/FormVacancy.vue';
import ProcessBlock from '@/components/ProcessBlock.vue';
import LifeOutsideOffice from '@/components/LifeOutsideOffice.vue';
import EducationSection from "@/components/EducationSection.vue";
import MapSection from "@/components/MapSection.vue";
import WhichStackToUseSection from "@/components/WhichStackToUseSection.vue";
>>>>>>> preprod

export default {
  name: 'MainPage',
  components: {
    MainBlock,
    SpecialistsInfo,
<<<<<<< HEAD
    WorkingSection,
    FormVacancy,
||||||| c9fdff5
/*     WorkingSection,
    FormVacancy, */
=======
    WorkingSection,
    FormVacancy,
    ProcessBlock,
    LifeOutsideOffice,
    WhichStackToUseSection,
    MapSection,
    EducationSection
>>>>>>> preprod
  },
};
</script>
