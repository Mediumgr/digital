<template>
  <MainBlock />
  <SpecialistsInfo></SpecialistsInfo>>
  <WorkingSection>></WorkingSection>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue';
import SpecialistsInfo from '@/components/SpecialistsInfo.vue';
import WorkingSection from '@/components/WorkingSection.vue';

export default {
  name: 'MainPage',
  components: {
    MainBlock,
    SpecialistsInfo,
    WorkingSection,
  },
};
</script>
