<template>
  <div class="container service">
    <div class="strong-points">
        <div class="point active">
            <font-awesome-icon :icon="faPencilAlt" class="icon" />
            <p>Web Standard</p>
            We always consider web standard rules and web accessibilities using W3C Web validator.
        </div>
        <div class="point">
            <font-awesome-icon :icon="faCog" class="icon" />
            <p>development</p>
            Using Javascript, jQuery, Ajax, React, Vue and so on. we make web pages to dynamic and convenient.
        </div>
        <div class="point">
            <font-awesome-icon :icon="faLayerGroup" class="icon" />
            <p>Crossbrowsing</p>
            We check our results with recent or popular browsers like Internet explorer, Opera, FireFox and Chrome.
        </div>
        <div class="point">
            <font-awesome-icon :icon="faFolderOpen" class="icon" />
            <p>Responsive</p>
            We make not only desktop design but also mobile and tablet design in one page.
        </div>
    </div>
    <div class="hire">
        <h3>We also can hook up web developers</h3>
        <br/>
        We have a lot of experiences with other back-end developers. They might develop sites with JSP,<br/> PHP and so on. We can introduce them. Trust un and do not regaret.
    </div>
    <div class="languages">
    </div>
    <div class="github">
        <div class="github-block">
            <div class="contents">
                <h3>This is made with Vue &amp; Webpack</h3>
                if you want to view our source, push the button
            </div>
            <div>
                <a href="https://github.com/chloeMj/frontteam" >GITHUB</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'service',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      itemcount : 0,
      faPencilAlt,
      faCog,
      faLayerGroup,
      faFolderOpen
    }
  },
}
</script>
