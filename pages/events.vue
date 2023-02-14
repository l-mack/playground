<template>
    <Nav />
    <section>
      <h1>EVENTS</h1>
      <h3>playground 1.1</h3>
      <ul>
            <li>
                <p>
                    DATE: APRIL 21, 2023
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
      <h4>MUSIC LINEUP:</h4>
      <div class="dj-container">
        
        <div class="dj-img">
          <img src="../static/jonahK.jpeg" />
        </div>
        <div class="dj-text-box">
          <p>{{ djList[1].name }}</p>
          <button @click="setActive(1)">See More</button>
        </div>
        
        <div v-if="active === 1" class="dj-card">
          <div class="dj-header">
            <h3>{{ djList[1].name }}</h3>
          </div>
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

      <div class="dj-container">
        <div class="dj-img">
          <img src="../static/acidBurn.jpeg" />
        </div>
        <div class="dj-text-box">
          <p>{{ djList[0].name }}</p>
          <button @click="setActive(0)">see more</button>
        </div>
        
        <div v-if="active === 0" class="dj-card">
          <div class="dj-header">
            <h3>{{ djList[0].name }}</h3>
          </div>
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
    </section>
</template>

<script>
export default {
  data () {
        return {
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
  .dj-img
    width: 400px
  img
    width: 50%
  .dj-container
    display: flex
    @media (max-width: 585px)
      flex-direction: column
  .dj-card
    width: 50%
    margin-left: 120px
    @media (max-width: 585px)
      margin-left: 20px
      width: 100%


</style>