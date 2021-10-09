<template>
    <div class="detailorder">
		<HeaderShayna/>
        <DetailOrder/>
		<FooterShayna/>
    </div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import DetailOrder from '@/components/Order/DetailOrder.vue';
    import FooterShayna from '@/components/FooterShayna.vue';

    export default {
        name: 'addorder',
        components: {
            HeaderShayna,
            DetailOrder,
            FooterShayna
        }
    }
</script>