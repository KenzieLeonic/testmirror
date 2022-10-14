<template>
    <div class="m-8">
        <h1 class="text-3xl">Login</h1>
    </div>

    
    <div class="container-fluid">
        <div class="row no-gutter">

            <div class="col-md-6 d-none d-md-flex bg-image">
                <img src="https://pbs.twimg.com/media/DlE56NWV4AAhmAK?format=jpg&name=medium" class="m-1 p-3" width="550" height="550">
            </div>

            <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center py-5">

                    <div class="container">
                        <div class="row">

                            <div class="col-md-6 d-none d-md-flex bg-image">
                                <img src="https://pbs.twimg.com/media/FXSOQxdVUAELv2U?format=png&name=small" class="m-1 p-3" width="150" height="150">
                            </div>

                            <div class="col-lg-10 col-xl-7 mx-auto">
                                <form>
                                    <div class="form-group mb-3">
                                        <label>Username</label>
                                        <input id="inputUsername" class="form-control border-0 shadow-sm px-4">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Password</label>
                                        <input id="inputPassword" class="form-control border-0 shadow-sm px-4">
                                    </div>
                                    <div>
                                        <a href="#" class="font-italic text-muted"> 
                                            <u>Forget password</u>
                                        </a>
                                    </div>
                                    <button class="px-2 py-1 mx-4 border rounded-xl">Sign in</button>
                                </form>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
    </div>

</template>
<style>
</style>