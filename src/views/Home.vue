<template>
	<div class="home">
		<HeaderShayna/>
        <HeroShayna/>
        <WomenShayna/>
        <InstagramShayna/>
        <LogoShayna/>
        <FooterShayna/>
	</div>
</template>
<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import HeroShayna from '@/components/HeroShayna.vue';
    import WomenShayna from '@/components/WomenShayna.vue';
    import InstagramShayna from '@/components/InstagramShayna.vue';
    import LogoShayna from '@/components/LogoShayna.vue';
    import FooterShayna from '@/components/FooterShayna.vue';

    export default {
        name: 'Home',
        components: {
            HeaderShayna,
            HeroShayna,
            WomenShayna,
            InstagramShayna,
            LogoShayna,
            FooterShayna
        }
    }
</script>