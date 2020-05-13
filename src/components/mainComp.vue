<template>
  <div class="main">
    <div class="navi-block">
      <div class="nav">
        <a href="#home" class="scrollactive-item">FrontTeam</a>
        <a href="#service" class="scrollactive-item">Service</a>
        <a href="#contactus" class="scrollactive-item">Contact Us</a>
      </div>
    </div>
    <div class="section">
      <homeComp id="home"></homeComp>
      <service id="service"></service>
      <contact id="contactus"></contact>
    </div>
  </div>
</template>

<script>

import homeComp from './homeComp'
import service from './service'
import contact from './contact'

export default {
  name: 'mainComp',
  components: {
    homeComp, service, contact
  }
}
</script>
