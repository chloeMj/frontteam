<template>
  <div>
    <navigator>
    </navigator>
    <div class="content">
      <homeComp id="home"></homeComp>
      <service id="service"></service>
      <contact id="contactus"></contact>
    </div>
  </div>
</template>

<script>
import navigator from '../components/layout/navigator'
import homeComp from '../components/homeComp'
import service from '../components/service'
import contact from '../components/contact'
export default {
  name: 'Layout',
  components: {
    navigator,
    homeComp,
    service,
    contact
  },
  data(){
    return{
    }
  },
  methods: {
    scrollEvnt(){
      const header = document.getElementsByClassName("header")[0];
      const servicePositionY = document.getElementById("service").offsetTop;

      //스크롤이 포인트 아래일 경우
      if(window.scrollY >= servicePositionY){
        header.classList.remove("isTop");
      }else{
        //스크롤이 포인트 위일 경우
        //헤더 상태를 변경하는 클래스 제거
        header.classList.add("isTop");
      }
    }
  },
  mounted() {
    /******** 디바이스 너비변화 감지 ********/
    window.addEventListener('resize', this.scrollEvnt);
    /******** 디바이스 스크롤 감지 ********/
    window.addEventListener("scroll", this.scrollEvnt);

    this.scrollEvnt();
  }
}
</script>
