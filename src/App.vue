<template>
  <div id="app">
    Root Foo: {{rootFoo}} <br>
    Robots Foo: {{rootFoo}} <br>
    Users Foo: {{rootFoo}} <br>
    <br>
    Root Getter Foo: {{rootGetterFoo}} <br>
    Robots Getter Foo: {{robotsGetterFoo}} <br>
    Users Getter Foo: {{usersGetterFoo}} <br>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
            <img src="./assets/build-a-bot-logo.png" class="logo">
            Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
            Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" :to="{name: 'Cart'}" exact>
            Cart
            </router-link>
            <div class="cart-items">
              {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
      <!-- <RobotBuilder/> -->
      <router-view/>
    </main>
    </div>
  </div>
</template>

<script>
// import HomePage from './Home/HomePage.vue';
// import RobotBuilder from './builder/RobotBuilder.vue';

export default {
  name: 'app',
  computed: {
    rootFoo() {
      return this.$store.state.foo;
    },
    robotsFoo() {
      return this.$store.state.foo;
    },
    usersFoo() {
      return this.$store.state.foo;
    },
    cart() {
      // return this.$store.state.cart;
      return this.$store.state.robots.cart;
    },
    rootGetterFoo() {
      return this.$store.getters.foo;
    },
    robotsGetterFoo() {
      return this.$store.getters['robots/foo'];
    },
    usersGetterFoo() {
      return this.$store.getters['users/foo'];
    },
  },
  // components: {
  //   // HomePage,
  //   RobotBuilder,
  // },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
main {
  /* margin: 0 auto; */
  padding: 30px;
  background-color: white;
  /* width: 1024px; */
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #999;
  /* width: 1084px; */
  width: 1184px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.nav-item .cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}


.cart-items {
  position: absolute;
  top: 10px;
  right: 1242px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
