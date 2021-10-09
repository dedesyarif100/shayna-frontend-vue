<template>
	<div class="chart">
		<HeaderShayna/>
        <ShopingChart/>
        <FooterShayna/>
	</div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import ShopingChart from '@/components/Product/ShopingChart.vue';
    import FooterShayna from '@/components/FooterShayna.vue';

    export default {
        name: 'chart',
        components: {
            HeaderShayna,
            ShopingChart,
            FooterShayna
        }
    }
</script>