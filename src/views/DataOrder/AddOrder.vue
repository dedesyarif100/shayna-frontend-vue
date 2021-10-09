<template>
    <div class="addorder">
		<HeaderShayna/>
        <FormAddOrder/>
		<FooterShayna/>
    </div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import FormAddOrder from '@/components/Order/FormAddOrder.vue';
    import FooterShayna from '@/components/FooterShayna.vue';

    export default {
        name: 'addorder',
        components: {
            HeaderShayna,
            FormAddOrder,
            FooterShayna
        }
    }
</script>