<template>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="products.length > 0">
                    <!-- <carousel class="product-slider" :items-to-show="1.5"> -->
                    <!-- <template #slides>
                        <slide v-for="slide in 4" :key="slide">
                            <div class="carousel__item">{{ slide }}</div>
                        </slide>
                    </template> -->
                    <div class="row row-cols-4">
                        <div class="product-item" v-for="itemProduct in products" v-bind:key="itemProduct.id">
                            <div class="col-12">
                                <div class="pi-pic">
                                    <img v-bind:src="itemProduct.galleries[0].photo" style="width: 40%;" />
                                    <ul>
                                        <li class="w-icon active" style="height: 70px;">
                                            <router-link to="/chart">
                                                <a @click="saveKeranjang(itemProduct.id, itemProduct.name, itemProduct.price, itemProduct.galleries[0].photo)"><i class="icon_bag_alt"></i></a>
                                            </router-link>
                                        </li>
                                        <li class="quick-view">
                                            <router-link v-bind:to="'/product/'+itemProduct.id">+ Quick View</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">{{ itemProduct.type }}</div>
                                    <router-link to="/product">
                                        <a href="#">
                                            <h5>{{ itemProduct.name }}</h5>
                                        </a>    
                                    </router-link>
                                    <div class="product-price">
                                        ${{ itemProduct.price }}
                                        <span>$35.00</span>
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
                </div>
                <div class="col-lg-12" v-else>
                    <p>Produk terbaru belum tersedia untuk saat ini</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
</template>
<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import axios from "axios";

export default {
    name: "WomenShayna",
    components: {
        // Carousel,
        // Slide,
        // Pagination,
        // Navigation
    },
    data() {
        return {
            products: [],
            keranjangUser: []
        };
    },
    methods: {
        // Fungsi untuk menambahkan data pada localStorage
        saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {
            var productStored = {
                "id" : idProduct,
                "name" : nameProduct,
                "price" : priceProduct,
                "photo" : photoProduct
            }

            this.keranjangUser.push(productStored);
            const parsed = JSON.stringify(this.keranjangUser);
            localStorage.setItem('keranjangUser', parsed);
        }
    },
    mounted() {
        // Fungsi untuk menambahkan data pada localStorage
        if (localStorage.getItem('keranjangUser')) {
            try {
                this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
            } catch(e) {
                localStorage.removeItem('keranjangUser');
            }
        }
        // Fungsi untuk mengambil data melalui API Product
        axios
            .get("http://127.0.0.1:8000/api/products")
            .then(res => (this.products = res.data.data.data))
            .catch(err => console.log(err));
    }
}
</script>