<template>
    <div class="cna-box">
        <div class="title">Create New Account</div>
        <div class="inputs">
            <div class="inputs-username">
                <div>Username</div>
                <input type="text" id="" placeholder="" />
            </div>
            <div class="inputs-password">
                <div>Password</div>
                <input type="password" id="" placeholder="" />
            </div>
            <div class="inputs-email">
                <div>Email</div>
                <input type="text" id="" placeholder="" />
            </div>
        </div>
        <button class="inputs-confirm-button">Confirm</button>

        <div class="signin_prompt">
            <span>Already have an account?</span>
            <router-link to="/" class="create-new-account">
                Sign in
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped src="@/assets/scss/signin_signup/cna.scss"></style>