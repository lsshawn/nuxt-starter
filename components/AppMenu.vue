<template>
  <div>
    <!-- Desktop Top Menu -->
    <v-toolbar id="top-nav" flat dense color="grey lighten-5">
        <v-spacer></v-spacer>
      <v-toolbar-items v-for="link in links" :key="link.text">
        <v-btn flat :value="link.value"
         nuxt   :to="link.route" class="menu-text">
         {{ link.text }}
        </v-btn>
      </v-toolbar-items>
        <v-spacer></v-spacer>
    </v-toolbar>

    <!-- Mobile bottom menu -->
    <v-bottom-nav id="btm-nav" fixed :value="true" :active.sync="activeTab" color="white">
      <v-btn flat value="home" nuxt to="/" exact >
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat value="now" nuxt to="/now" exact >
        <span>Now</span>
        <v-icon>dashboard</v-icon>
      </v-btn>
      <v-btn flat value="about" nuxt to="/about" exact >
        <span>About</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'home',
      links: [
        { text: 'Home', value: 'home', icon: 'home', route: '/' },
        { text: 'Now', value: 'now', icon: 'favorite', route: '/now' },
        { text: 'About', value: 'about', icon: 'person', route: '/about' }
      ]
    }
  }
}
</script>

<style>
.bottom-nav .btn--active {
  color: #F57F17;
}

.menu-text {
  font-weight: 800;
  color: #333;
}

@media screen and (max-width: 565px) {
  #top-nav {
    display: none;
  }
}

@media screen and (min-width: 566px) {
  #btm-nav { 
    display: none;
  }
  #top-nav {
    display: block;
    transition: opacity 1s ease-out;
  }
}
</style>
