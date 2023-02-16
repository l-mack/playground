<template>
    <Nav />
    <section>
      <div class="events-header">
        <h1>EVENTS</h1>
        <h3>playground 1.1</h3>
        <NuxtLink to="https://www.eventbrite.ca/e/playground-tickets-547878829327" class="title">GET TICKETS</NuxtLink>
      </div>

      <div class="events-container">
        <!-- <div class="event-img"> -->
        <img src="../assets/1.1 Playground.png" />
      <!-- </div> -->
      
      <ul>
            <li>
                <p>
                    DATE: APRIL 28, 2023
                </p>
            </li>
          <li>
              <p>
                  LOCATION: Wiggle Room Toronto
              </p>
              <p>
                  772 Dundas St W, Toronto, ON M6J 1V1
              </p>
          </li>
            <li>
                <p>
                    18+ FETISH DRESS CODE IN EFFECT
                </p>
            </li>
        </ul>

      </div>

      <div class="dj-flex">
        <h4>MUSIC LINEUP:</h4>
      
        <div class="dj-container">
        <div class="dj-text-box">
          <p class="dj-label">{{ djList[1].name }}</p>
          <button @click="jonah = !jonah">SEE MORE</button>
        </div>
        
        <div v-if="jonah" class="dj-card">
          <h3 class="dj-title">{{ djList[1].name }}</h3>

          <div class="dj-body">
            <img class="dj-img" src="../static/jonahK.jpeg" />
            
            <ul>
              <li>
                <p>LOCATION: {{ djList[1].location }}</p>
              </li>
              <li>
                <p>GENRE: {{ djList[1].genre }}</p>
              </li>
              <li>
                <NuxtLink :to="`${djList[1].site}`">WEBSITE LINK</NuxtLink>
              </li>
              <li>
                <div class="dj-body">
                  <p>{{ djList[1].body }}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
        </div>

        <div class="dj-container">
        <div class="dj-text-box">
          <p class="dj-label">{{ djList[0].name }}</p>
          <button @click="madison = !madison">SEE MORE</button>
        </div>
        
        <div v-if="madison" class="dj-card">
          <h3 class="dj-title">{{ djList[0].name }}</h3>
          
          <div class="dj-body">
            <img class="dj-img" src="../static/acidBurn.jpeg" />

          <ul>
            <li>
              <p>LOCATION: {{ djList[0].location }}</p>
            </li>
            <li>
              <p>GENRE: {{ djList[0].genre }}</p>
            </li>
            <li>
              <NuxtLink :to="`${djList[0].site}`">WEBSITE LINK</NuxtLink>
            </li>
            <li>
              <div class="dj-body">
                <p>BIO: {{ djList[0].body }}</p>
              </div>
            </li>
          </ul>
        </div>
        </div>
        </div>

      </div>
      

    </section>
</template>

<script>
export default {
  data () {
        return {
          jonah: null,
          madison: null,

          active: null,
          isModalVisible: false,
          showModal: false,
          djList: [{
            title: 'acidBurn',
            name: 'Acid Burn',
            body: 'Toronto based DJ specializing in bass house and techo.  Her mixes feature tracks that are dark, edgy and provocative.',
            img: "acidBurn.jpeg",
            location: 'Toronto',
            genre: 'deep, bass driven dance music',
            site: "https://dubplate.fm/",
            location: 'Toronto',
            genre: 'base house, techno',
            site: "https://www.mixcloud.com/_acid_burn_/"
          },
            {
              title: 'jonahK',
              name: 'Jonah K',
              body: 'Jonah K is a sonic artist and producer specializing in deep, bass-driven dance music. Complex rhythms, textured bass, and haunting atmospherics feature prominently in her work, which can be heard anywhere from dance floors to film scores. Jonah’s releases can be found on multiple international labels and, locally, she is a well-established contributor to Canada’s electronic music community. When not producing music, Jonah performs frequently, organizes raves, ran a monthly radio show on dubplate.fm, and is a resident artist with the Suma, Dark Rooms and Bass Witch collectives.',
              img: "jonahK.jpeg",
              location: 'Toronto',
              genre: 'deep, bass driven dance music',
              site: "https://dubplate.fm/"
            }]
        }
      },
      methods: {
        setActive (i) {
          this.active = i

        }
      }
}
</script>

<style lang="sass" scoped>
  .events-header
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  .events-container
    display: flex
    justify-content: center
    align-items: center
    margin: 50px 0
    @media (max-width: 650px)
      flex-direction: column

  .event-img
    width: 75%
  ul li p
    margin: 50px 0
  .title
    font-size: 25px
    margin-top: 15px
  .dj-flex
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  .dj-img
    width: 25%
  .dj-title
    font-size: 25px
    margin: 50px 0
  img
    width: 50%
  .dj-container
    display: flex
    flex-direction: column
    @media (max-width: 585px)

  .dj-label
    margin-right: 50px
      
  .dj-card
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    @media (max-width: 585px)
      margin-left: 20px
      width: 100%
  .dj-text-box
    display: flex
    justify-content: center
    align-items: center

  .dj-body
    display: flex
    justify-content: center
    align-items: center
    @media (max-width: 835px)
      flex-direction: column
  .dj-img
    @media (max-width: 835px)
      width: 50%

  img 
    @media (max-width: 650px)
      width: 75%


</style>