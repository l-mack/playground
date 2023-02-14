<template>
    <Nav />
    <section>
      <h1>PLAYGROUND</h1>
    <h3>A CONSENT CONSCIOUS KINK PARTY</h3>
    <Intro />
    <Pages />
    </section>
  </template>

<style lang="sass">
  body
    background: #000000
  section
    margin: 0 100px
    @media (max-width: 585px)
      margin: 0 50px

  a
    text-decoration: none
    color: #e02142
    border-bottom: 2px solid #000000
    transition: 1s border-bottom ease
    font-family: 'Arimo', sans-serif
  a:hover
    border-bottom: 2px solid #e02142
  h1
    font-family: 'Bebas Neue', cursive
    color: #EEEE
    font-size: 100px
    @media (max-width: 585px)
      font-size: 65px
  h2, h3, h4
    font-family: 'Comfortaa', cursive
    color: #EEEE
  p
    font-family: 'Arimo', sans-serif
    color: #EEEE
  button
    border: none
    background: #fbda14
    padding: 10px 25px
    font-family: 'Arimo', sans-serif
    transition: background 1s ease, color 1s ease, border 1s ease
  button:hover
    color: #fbda14
    background: #000000
    border: 1px solid #fbda14
</style>