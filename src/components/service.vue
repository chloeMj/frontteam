<template>
  <div class="container service">
    <div class="section points">
        <div class="point" @mouseover="activePoint(0);">
            <font-awesome-icon :icon="faPencilAlt" class="icon" />
            <p>Web Standard</p>
            We always consider web standard rules and web accessibilities using W3C Web validator.
        </div>
        <div class="point" @mouseover="activePoint(1);">
            <font-awesome-icon :icon="faCog" class="icon" />
            <p>development</p>
            Using Javascript, jQuery, Ajax, React, Vue and so on. we make web pages to dynamic and convenient.
        </div>
        <div class="point" @mouseover="activePoint(2);">
            <font-awesome-icon :icon="faLayerGroup" class="icon" />
            <p>Crossbrowsing</p>
            We check our results with recent or popular browsers like Internet explorer, Opera, FireFox and Chrome.
        </div>
        <div class="point" @mouseover="activePoint(3);">
            <font-awesome-icon :icon="faFolderOpen" class="icon" />
            <p>Responsive</p>
            We make not only desktop design but also mobile and tablet design in one page.
        </div>
    </div>
    <div class="section hire">
        <h3>We also can hook up web developers</h3>
        <br/>
        We have a lot of experiences with other back-end developers. They might develop sites with JSP,<br/> PHP and so on. We can introduce them. Trust un and do not regaret.
    </div>
    <div class="section languages">
    </div>
    <div class="section github">
        <div class="github-block">
            <div class="contents">
                <h3>This is made with Vue &amp; Webpack</h3>
                if you want to view our source, push the button
            </div>
            <div>
                <a class="btn" href="https://github.com/chloeMj/frontteam" >GITHUB</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencilAlt, faLayerGroup, faFolderOpen, faCog } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'service',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      faPencilAlt,
      faCog,
      faLayerGroup,
      faFolderOpen
    }
  },
  methods: {
      activePoint(idx) {
          if(document.getElementsByClassName('point active').length > 0) {
              document.getElementsByClassName('point active')[0].classList.remove('active')
          }
          document.getElementsByClassName('point')[idx].classList.add('active')
      }
  }
}
</script>
