<template>
    <div class="addorder">
		<HeaderShayna/>
        <FormEditOrder/>
		<FooterShayna/>
    </div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import FormEditOrder from '@/components/Order/FormEditOrder.vue';
    import FooterShayna from '@/components/FooterShayna.vue';

    export default {
        name: 'addorder',
        components: {
            HeaderShayna,
            FormEditOrder,
            FooterShayna
        }
    }
</script>