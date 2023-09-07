<?php
include 'template/cabecalho.php';
include 'template/header.php';
?>
<div class="container mt-5">
    <div class="row d-flex justify-content-center px-5">
        <div class="col-md-9">
            <div class="card px-5 py-5" id="form1">
                <div class="form-data" v-if="!submitted">
                    <div class="forms-inputs mb-4"> <span>Email or username</span> <input autocomplete="off" type="text" v-model="email" v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" v-on:blur="emailBlured = true">
                        <div class="invalid-feedback">A valid email is required!</div>
                    </div>
                    <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password" v-model="password" v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" v-on:blur="passwordBlured = true">
                        <div class="invalid-feedback">Password must be 8 character!</div>
                    </div>
                    <div class="mb-5"> <input name="SendLogin" type="submit" class="btn btn-primary btn-block" value="Acessar"> </div>
                </div>
                <div class="success-data" v-else>
                    <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">You have been logged in <br> Successfully</span> </div>
                </div>

            </div>
            <p class="text-center"><a href="https://prancheta.desenvolvesoftware.com.br/prancheta.php">Cadastrar</a></p>
        </div>
    </div>
</div>
<?php
include 'template/rodape.php';
?>