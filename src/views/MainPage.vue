<template>
  <MainBlock />
  <SpecialistsInfo />
  <ForWhoAppreciate />
  <WorkingSection />
  <WhichStackToUseSection />
  <ProcessBlock />
  <VacancySection />
  <MapSection />
  <RecommendFriend />
  <LifeOutsideOffice />
  <EducationSection />
  <DigitalLaboratorySection />
</template>

<script>
import MainBlock from "@/components/MainBlock.vue";
import SpecialistsInfo from "@/components/SpecialistsInfo.vue";
import WorkingSection from "@/components/WorkingSection.vue";
import VacancySection from "@/components/VacancySection.vue";
import ProcessBlock from "@/components/ProcessBlock.vue";
import LifeOutsideOffice from "@/components/LifeOutsideOffice.vue";
import EducationSection from "@/components/EducationSection.vue";
import MapSection from "@/components/MapSection.vue";
import WhichStackToUseSection from "@/components/WhichStackToUseSection.vue";
import RecommendFriend from "@/components/RecommendFriend.vue";
import DigitalLaboratorySection from "@/components/DigitalLaboratorySection.vue";
import ForWhoAppreciate from "@/components/ForWhoAppreciate.vue";

export default {
  name: "MainPage",
  components: {
    ForWhoAppreciate,
    MainBlock,
    SpecialistsInfo,
    WorkingSection,
    VacancySection,
    ProcessBlock,
    LifeOutsideOffice,
    WhichStackToUseSection,
    MapSection,
    EducationSection,
    RecommendFriend,
    DigitalLaboratorySection,
  },
};
</script>
