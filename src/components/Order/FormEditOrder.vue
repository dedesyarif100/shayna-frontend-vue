<template>
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8" align="left">
                    <router-link to="/DataOrder/DataOrder">
                        <a @click="runOrder()" href="#" class="btn btn-primary">Back</a>
                    </router-link>
                    <div class="row text-left">
                        <div class="col-lg-8">
                            <h4 class="mb-4">
                                Informasi Pembeli:
                            </h4>
                            <div class="user-checkout text-left">
                                <form>
                                    <div class="form-group">
                                        <label for="namaLengkap">Nama Pelanggan</label>
                                        <input type="text" 
                                            class="form-control" 
                                            id="namapelanggan" 
                                            aria-describedby="namaHelp" 
                                            placeholder="Masukan Nama"
                                            v-model="orderDetail.nama_pelanggan"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">Kode Pelanggan</label>
                                        <input type="email" 
                                            class="form-control" 
                                            id="kodepelanggan" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Masukan Email"
                                            v-model="orderDetail.kode_pelanggan"
                                            required
                                        />
                                    </div>
                                    <router-link to="/success">
                                        <a @click="runOrder()" href="#" class="btn btn-primary">Send Data</a>
                                    </router-link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";

export default {
    name: 'FormEditOrder',
    data() {
        return {
            orderDetail: {
                nama_pelanggan: '',
                kode_pelanggan: ''
            }
        }
    },
    
    methods: {
        runOrder() {
            let orderData = {
                nama_pelanggan: this.orderDetail.nama_pelanggan,
                kode_pelanggan: this.orderDetail.kode_pelanggan,
            };
            axios
            .put('http://127.0.0.1:8000/api/order/' + this.$route.params.id, orderData)
            .then(() => this.$router.push('Success'))
            .catch(err => console.log(err));
        }
    }
}
</script>