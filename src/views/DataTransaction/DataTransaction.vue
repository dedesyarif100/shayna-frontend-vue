<template>
    <div class="datatransaksi">
		<HeaderShayna/>
        <DataTransaction/>
		<FooterShayna/>
    </div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import DataTransaction from '@/components/Transaction/DataTransaction.vue';
    import FooterShayna from '@/components/FooterShayna.vue';

    export default {
        name: 'datatransaksi',
        components: {
            HeaderShayna,
            DataTransaction,
            FooterShayna
        }
    }
</script>