<template>
	<div class="product">
		<HeaderShayna/>
        <ProductShayna/>
        <FooterShayna/>
	</div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import FooterShayna from '@/components/FooterShayna.vue';
    import ProductShayna from '@/components/Product/ProductShayna.vue';

    export default {
        name: 'product',
        components: {
            HeaderShayna,
            FooterShayna,
            ProductShayna
        }
    }
</script>