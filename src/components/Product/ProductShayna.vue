<template>
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src=gambardefault alt="" />
                            </div>
                            <div class="product-thumbs">
                                <!-- v-if="productDetails.galleries.length > 0" -->
                                <div class="product-thumbs-track">
                                    <div class="row row-cols-3">
                                        <div v-for="ss in productDetails.galleries" :key="ss.id" class="pt active" @click="changeImage(ss.photo)" :class="ss.photo == gambardefault ? 'active' : '' ">
                                            <div class="col-12">
                                                <img :src="ss.photo" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>{{ productDetails.type }}</span>
                                    <h3>{{ productDetails.name }}</h3>
                                </div>
                                <div class="pd-desc text-justify">
                                    <p v-html="productDetails.description"></p>
                                    <h4>${{ productDetails.price }}</h4>
                                </div>
                                <div class="quantity">
                                    <router-link to="/chart">
                                        <a @click="saveKeranjang(productDetails.id, productDetails.name, productDetails.price, productDetails.galleries[0].photo)" href="#" class="primary-btn pd-cart">Add To Cart</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
    <RelatedProduct/>
</template>
<script>
    import RelatedProduct from '@/components/Product/RelatedProduct.vue';
    import axios from "axios";
 
    export default {
        name: "ProductShayna",
        components: {
            RelatedProduct
        },
        data() {
            return {
                gambardefault: "",
                // thumbs: [
                //     "img/mickey1.jpg",
                //     "img/mickey2.jpg",
                //     "img/mickey3.jpg",
                //     "img/mickey4.jpg",
                // ],
                // id: this.$route.params.id
                productDetails: [],
                keranjangUser: []
            }
        },
        methods: {
            changeImage(urlImage) {
                this.gambardefault = urlImage;
                // eslint-disable-next-line no-console
                // console.log(this.idProduct);
            },
            setDataPicture(data) {
                // replace object productDetails dengan data dari API
                this.productDetails = data;
                // replace value gambar default dengan data dari API (galleries)
                this.gambardefault = data.galleries[0].photo;
            },
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
            if (localStorage.getItem('keranjangUser')) {
                try {
                    this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
                } catch(e) {
                    localStorage.removeItem('keranjangUser');
                }
            }
            axios
                .get("http://127.0.0.1:8000/api/products", {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(res => (this.setDataPicture(res.data.data)))
                .catch(err => console.log(err));
        }
    };
</script>