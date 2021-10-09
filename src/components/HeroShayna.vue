<template #slides>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <!-- <carousel class="hero-items" :items-to-show="1.5"> -->
            <!-- <template #slides>
                <slide v-for="slide in 4" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                </slide>
            </template> -->

            <div class="row">
                <div class="col-6">
                    <div class="single-hero-items set-bg" style="background-image: url('/img/hero-1.jpg')">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="single-hero-items set-bg" style="background-image: url('/img/hero-2.jpg')">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <template #addons="{ slidesCount }">
                <Navigation v-if="slidesCount > 1" />
                <Pagination />
            </template> -->
        <!-- </carousel> -->
    </section>
<!-- Hero Section End -->
</template>
<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name: "HeroShayna",
    components: {
		// Carousel,
        // Slide,
        // Pagination,
        // Navigation
    }
}
</script>