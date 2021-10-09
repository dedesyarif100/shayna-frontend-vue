<template>
    <div class="dataorder">
		<HeaderShayna/>
        <DataOrder/>
		<FooterShayna/>
    </div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import DataOrder from '@/components/Order/DataOrder.vue';
    import FooterShayna from '@/components/FooterShayna.vue';

    export default {
        name: 'dataorder',
        components: {
            HeaderShayna,
            DataOrder,
            FooterShayna
        }
    }
</script>