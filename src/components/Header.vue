<template>
  <div class="header-container">
    <h1 class="header">Movie Net</h1>
    <div class="icon-container">
      <img class="account-icon" src="../assets/account.png" alt="account" />
      <RouterLink to="/Login" custom v-slot="{ navigate }">
        <button class="button" @click="navigate" role="link">Login</button>
        <a class="login-text" @click="navigate" role="link">Login</a>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.header {
  color: rgb(243, 181, 38);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5cm;
  font-weight: 100;
  padding: 10px;
  margin-top: -20px;
  padding-left: 10px;
}

.button,
.account-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: -105px;
  margin-left: 1200px;
}

button {
  opacity: 0%;
}

.login-text {
  color: white;
  font-size: 18px;
  margin-left: 1200px;
  margin-top: -66px;
  position: absolute;
}

.icon-container:hover .account-icon {
  border: solid rgb(243, 181, 38) 0.9px;
  margin-left: 1199px;
  margin-top: -106px;
}

a:hover {
  color: rgb(243, 181, 38);
}
</style>