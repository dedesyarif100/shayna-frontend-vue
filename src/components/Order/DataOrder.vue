<template>
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="order-item" align="left">
                        <router-link to="/DataOrder/AddOrder">
                            <a href="#" class="btn btn-primary">Add Data</a>
                        </router-link>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="box-title" align="left">Daftar Order </h4>
                            </div>
                            <div class="card-body--">
                                <div class="table-stats order-table ov-h">
                                    <table class="table">
                                        <thead align="left">
                                            <tr>
                                                <th class="serial">No</th>
                                                <th>Name</th>
                                                <th>Kode</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="order.length > 0" align="left">
                                            <tr v-for="itemOrder in order" v-bind:key="itemOrder.id">
                                                <td><span>{{ itemOrder.id }}</span></td>
                                                <router-link v-bind:to="'/DataOrder/DetailOrder/' + itemOrder.id">
                                                    <td><span class="name">{{ itemOrder.nama_pelanggan }}</span></td>
                                                </router-link>
                                                <td><span class="name">{{ itemOrder.kode_pelanggan }}</span></td>
                                                <td>
                                                    <router-link v-bind:to="'/DataOrder/EditOrder/' + itemOrder.id">
                                                        <a href="#" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                    </router-link >
                                                    <router-link v-bind:to="'/DataOrder/DataOrder/' + itemOrder.id">
                                                        <a @click="runDeleteOrder(this.$route.params.id)" href="#" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </router-link>
                                                    <!-- <form action="" method="post" class="d-inline">
                                                        <button class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </form> -->
                                                </td>
                                            </tr>
                                        </tbody>
                                        <div class="col-lg-12" v-else>
                                            <p>Produk terbaru belum tersedia untuk saat ini</p>
                                        </div>
                                    </table>
                                </div> <!-- /.table-stats -->
                            </div>
                        </div> <!-- /.card -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";

export default {
    name: "DataOrder",
    data() {
        return {
            order: [],
            orderDetail: {
                id: '',
                nama_pelanggan: '',
                kode_pelanggan: ''
            }
        };
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/order")
            .then(res => (this.order = res.data.data))
            .catch(err => console.log(err));
    },
    methods: {
        runOrder() {
            let orderData = {
                nama_pelanggan: this.orderDetail.nama_pelanggan,
                kode_pelanggan: this.orderDetail.kode_pelanggan,
            };
            axios
            .post('http://127.0.0.1:8000/api/order/', orderData)
            .then(() => this.$router.push('Success'))
            .catch(err => console.log(err));
        },
        runDeleteOrder() {
            let orderData = {
                id: this.orderDetail.id,
                nama_pelanggan: this.orderDetail.nama_pelanggan,
                kode_pelanggan: this.orderDetail.kode_pelanggan,
            };
            axios
            .delete('http://127.0.0.1:8000/api/order-delete/' + this.$route.params.id, orderData)
            .then(() => this.$router.push('Success'))
            .catch(err => console.log(err));
        }
    }
}
</script>