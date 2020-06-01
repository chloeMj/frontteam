/* eslint-disable no-debugger */
<template>
  <div class="container contact">
    <div>
      <h3>contact us</h3>
      <br/>
      When you finish filling the form, please push the submit button.<br/>If we get your mail, we will send answer for your inquiry rapidly.
      <form ref="mailForm" @submit.prevent="sendMail">
        <input type="text" name="from_email" placeholder="your email" ref="from_email"/>
        <input type="text" name="from_name" placeholder="your name" ref="from_name" />
        <textarea name="message" ref="message" />
        <button class="btn" type="submit">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'contact',
  methods: {
    sendMail() {
      const data = {
        from_email: this.$refs.from_email.value,
        from_name: this.$refs.from_name.value,
        message: this.$refs.message.value
      }
      emailjs.send('mjsong', 'emailtemp1', data, 'user_R4rk3lxpKEdxeRuRDwQBl').then(function(response) {
        console.log(response)
        alert('Successed to send the mail.')
        this.$refs.mailForm.reset()
      }.bind(this), function(error) {
        alert('Failed to send the mail. Try it again later.')
        console.log('FAILED...', error)
      })
    }
  }
}
</script>

/* eslint-enable no-alert, no-console */
