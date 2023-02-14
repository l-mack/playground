<template>
  <Nav />
  <section>
    <h1>CONTACT US</h1>
    <p>
      PLAYGROUND is not a cult of personality and is run by a board of directors model.  Our goal is to strive for inclusion and diversity on our panel and we and constantly open to partners in this goal. 
    </p>
    <p>
      If you would like to contact us please fill out the information below and we will be happy to strike up a conversation. 
    </p>

    <form action="https://formspree.io/f/mwkjlrqy" method="POST">
      <div class="form-field">
        <label for="name">Full Name</label>
       <input type="text" name="name">
      </div>
      
      <div class="form-field">
        <label for="email">Email</label>
       <input type="email" name="email">
      </div>
       
      <div class="text-area form-field">
        <label for="message">Let us know what you want to talk about…</label>
       <textarea id="message" name="message" rows="10" cols="50"></textarea>
      </div>
       
       <button type="submit">Submit</button>
    </form>

  </section>
</template>

<style lang="sass" scoped>
  form
    margin: 0 75px
    @media (max-width: 585px)
      margin: 0
  label
    margin-right: 15px
    font-family: 'Arimo', sans-serif
    color: #EEEE
  .form-field
    margin: 25px 0
  .text-area
    display: flex
    flex-direction: column
  text-area
    width: 50%
  button
    margin-top: 25px
</style>