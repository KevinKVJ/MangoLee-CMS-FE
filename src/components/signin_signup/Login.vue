<template>
    <div id="login-box">
        <div class="title">MangoLee User Login</div>

        <div class="inputs">
            <div class="inputs-username">
                <div>Username</div>
                <input type="text" id="" placeholder="" />
            </div>
            <div class="inputs-password">
                <div>Password</div>
                <input type="password" id="" placeholder="" />
                <a class="inputs-forgot_password">Forgot password?</a>
            </div>
        </div>

        <button class="inputs-login-button">Log In</button>

        <!-- <a href="#" class="create-new-account">Create New Account</a> -->
        <div class="signup_prompt">
            <span>Don't have an Account?</span>
            <router-link to="/cna" class="create-new-account">
                Sign up
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped src="@/assets/scss/signin_signup/login.scss"></style>