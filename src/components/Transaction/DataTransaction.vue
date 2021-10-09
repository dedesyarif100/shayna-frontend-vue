<template>
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="order-item" align="left">
                        <router-link to="/DataOrder/AddOrder">
                            <a @click="runOrder()" href="#" class="btn btn-primary">Add Data</a>
                        </router-link>
                        <div class="card" style="width: 170%; color: red;">
                            <div class="card-body">
                                <h4 class="box-title" align="left">Daftar Transaksi </h4>
                            </div>
                            <div class="card-body">
                                <div class="table-stats">
                                    <table class="table" style="width: 300px;">
                                        <thead align="left">
                                            <tr>
                                                <th class="serial">No</th>
                                                <th>Kode Transaksi</th>
                                                <th>Nama</th>
                                                <th>Email</th>
                                                <th>Nomor Telp</th>
                                                <th>Alamat</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th>Dibuat</th>
                                                <th>Diupdate</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="transaction.length > 0" align="left">
                                            <tr v-for="listTransaction in transaction" v-bind:key="listTransaction.id">
                                                <td><span>{{ listTransaction.id }}</span></td>
                                                <td><span class="name">{{ listTransaction.uuid }}</span></td>
                                                <td><span class="name">{{ listTransaction.name }}</span></td>
                                                <td><span class="name">{{ listTransaction.email }}</span></td>
                                                <td><span class="name">{{ listTransaction.number }}</span></td>
                                                <td><span class="name">{{ listTransaction.address }}</span></td>
                                                <td><span class="name">${{ listTransaction.transaction_total }}</span></td>
                                                <td>
                                                    <div class="status" v-if="listTransaction.transaction_status == 'PENDING'">
                                                        <span class="badge badge-secondary">{{ listTransaction.transaction_status }}</span>
                                                    </div>
                                                    <div class="status" v-if="listTransaction.transaction_status == 'SUCCESS'">
                                                        <span class="badge badge-success">{{ listTransaction.transaction_status }}</span>
                                                    </div>
                                                    <div class="status" v-if="listTransaction.transaction_status == 'FAILED'">
                                                        <span class="badge badge-danger">{{ listTransaction.transaction_status }}</span>
                                                    </div>
                                                </td>
                                                <td><span class="name">{{ listTransaction.created_at }}</span></td>
                                                <td><span class="name">{{ listTransaction.updated_at }}</span></td>

                                                <!-- <td>
                                                    <router-link v-bind:to="'/DataOrder/EditOrder/' + itemOrder.id">
                                                        <a href="" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                    </router-link >
                                                    <form action="" method="post" class="d-inline">
                                                        <button class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </form>
                                                </td> -->
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
    name: "DataTransaction",
    data() {
        return {
            transaction: []
        };
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/transaction")
            .then(res => (this.transaction = res.data.data))
            .catch(err => console.log(err));
    },
}
</script>