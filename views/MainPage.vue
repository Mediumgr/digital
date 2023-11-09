<template>
    <MainBlock/>
    <SpecialistsInfo/>
    <WorkingSection/>
    <FormVacancy/>
    <ProcessBlock/>
    <LifeOutsideOffice/>
</template>

<script>
import MainBlock from '@/components/MainBlock.vue';
import SpecialistsInfo from '@/components/SpecialistsInfo.vue';
import WorkingSection from '@/components/WorkingSection.vue';
import FormVacancy from '@/components/FormVacancy.vue';
import ProcessBlock from '@/components/ProcessBlock.vue';
import LifeOutsideOffice from '@/components/LifeOutsideOffice.vue';

export default {
    name: 'MainPage',
    components: {
        MainBlock,
        SpecialistsInfo,
        WorkingSection,
        FormVacancy,
        ProcessBlock,
        LifeOutsideOffice
    },
};
</script>
