<template lang="html">
<div id="mc_embed_signup subscription-form" class="subscription-form" :style="formStyle">
  <form action="//strive4.us8.list-manage.com/subscribe/post?u=a41f4e7f4068c1dd9d29b464e&amp;id=5c0c50f445"
  method="post" id="mc-embedded-subscribe-form"
  name="mc-embedded-subscribe-form"  class="validate"
  target="_blank" novalidate>

  <div id="mc_embed_signup_scroll">
    <h2> Join My Newsletter  </h2>
    <p> Sign up to receive weekly updates. </p>

    <a class="close-form" id="close-form">x</a>

    <div class="mc-field-group">
      <label for="mce-EMAIL">Email</label>
      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
    </div>
    <div class="mc-field-group">
      <label for="mce-FNAME">Name </label>
      <input type="text" value="" name="NAME" class="" id="mce-FNAME">
    </div>

      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </div>
      <!-- real people should not fill this in and expect good things -
      do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a41f4e7f4068c1dd9d29b464e_5c0c50f445" tabindex="-1" value=""></div>

        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
  </form>
</div>
</template>

<script>
export default{
  data: () => ({
    showForm: false
  }),
  computed: {
    formStyle () {
      return { 'display': 'none' }
    }
  }
}
</script>
