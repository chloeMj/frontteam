<template>
  <div class="header isTop">
    <div class="nav">
      <a href="#home" class="scrollactive-item logo">FrontTeam</a>
      <a v-for="(menu, idx) in menuItems" :key="idx" :href="'#'+menu.name" class="scrollactive-item navItem">{{menu.title}}</a>
      <div class="nav-hamburger" @click="showHamMenu">
        <div class="hamburgerBtn">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="hamMenuBg" v-show="isShowHamMenu"  @click.self="showHamMenu">
      </div>
      <div class="hamMenu">
        <font-awesome-icon :icon="faTimes" class="icon closeBtn" @click="showHamMenu"/>
        <ul>
          <li v-for="(menu, idx) in menuItems" :key="idx">
            <a :href="'#'+menu.name" class="scrollactive-item hamMenuItem" @click="showHamMenu">{{menu.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'navigator',
  components: {
    FontAwesomeIcon
  },
  data(){
    return{
      faTimes,
      menuItems: [{
        name: 'service',
        title: 'Service'
      },{
        name: 'contactus',
        title: 'Contact Us'
      }],
      isShowHamMenu: false
    }
  },
  methods: {
    showHamMenu() {
      this.isShowHamMenu = !this.isShowHamMenu;
      document.getElementsByClassName("hamMenu")[0].classList.remove("show");
      if(this.isShowHamMenu == true){
        document.getElementsByClassName("hamMenu")[0].classList.add("show");
      }
    }
  }
}
</script>