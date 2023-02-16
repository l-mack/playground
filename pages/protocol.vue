<template>
  <Nav />
  <section>
    <h1>PROTOCOL</h1>
    <p>
      Understand that PLAYGROUND is a fetish party and with that comes a few expectations.  Here we lay out in plain language a few of the basics. If you are new to a kink party, we understand things can be a little intimidating.  Don’t worry, we’re here to provide an empathic space that goes at your pace.  Just heed these points and you'll be fine.
    </p>

    <div class="container">
        <button @click="showInclusive = !showInclusive">
        STATEMENT OF INCLUSIVENESS
      </button>
      <div v-if="showInclusive">
        <p>
          To be very blunt, we are an all inclusive queer friendly party. 
        </p>
        <p>
          Racists, bigots, homophobes, transphobes, misogynists, misandrists, fascists and persons without a healthy concept of empathy, compassion, historical perspective and reasonable social justice can fuck right off.
        </p>
        <p>
          You are not welcome at our party.  
        </p>
        <p>
          Freaks, pervs, kinksters, eccentrics, intellectuals, philosophers, activists, artists, witches, sluts, queers, weirdos, feminists, allies and intersectional humanists, of any and all genders, spiritual beliefs or walks of life…..step right in!
        </p>
        <p>
          Note that our party does not condone predatory or prejudiced bullshit and we reserve the right to remove anyone who manifests toxic behavior.
        </p>
        <p>
          We are a place that recognizes the concept of progressive consent conscious BDSM, which roughly translates into a  philosophical attunement of safe, sane, ethical and responsible kink play, thoroughly monitored by our trained harm reduction team staff.
        </p>
        <p>
          We are a place that recognizes that sex is magical, kinksters are part of a scene family and that human intimacy with this scene is one of the keys to the sound mental and physical health of us weirdos at large.  This is why we created this party!
        </p>
        <p>
          We are a place that does not shame people for sexual or kink tastes nor do we condone individuals pushing their personal ideology unto other dynamics unless stated and agreed upon.  We have developed a comprehensive <NuxtLink to="/playbook">PLAYBOOK</NuxtLink> that lays it all out.  This is required reading for anyone who wants to play!
        </p>
      </div>
    </div>

    
    <div class="container">
      <button @click="showDress = !showDress">DRESS CODE</button>
      <div v-if="showDress">
        <p>
          Of course, we recognize that “fetish” dress codes are very subjective but let it be known that we take this seriously.  We are not a black jeans and t-shirt kind of party.  We’re also not letting in “walk-ons” who strip down to their boxers for shits and giggles.  
        </p>
        <p>
          Partygoers will be vetted by the effort they put in.   We’re not going to be explicit on what is and isn’t “fetish dress code”.  We all kind of know right? As we say, that’s all very subjective, but we will be actively weeding out creeps to the best of our ability.   
        </p>
        <p>
          We are a party that wants to push the bar on the kink scene.  Full exposure is allowed here and as a result we will only be letting people in who are clear scene participants and not coming to gawk at the pretty people. We strongly encourage people to put some effort into their kit. 
        </p>
        <p>
          If you have questions or are unsure, best to <nuxtlink to="/contact">ask us</nuxtlink> before you attend.
        </p>
      </div>
    </div>

    

    <div class="container">
      <button @click="showConsent = !showConsent">CONSENT CONSCIOUSNESS</button>
      <div v-if="showConsent">
        <p>
          We have a full <NuxtLink to="/playbook">PLAYBOOK</NuxtLink> that lays out our rules but the FIRST RULE that governs our party is consent.  An entire section of the playbook is dedicated to making very clear what consent means and how it’s a cornerstone of play and interaction at PLAYGROUND.  
        </p>
        <p>
          The Playbook is our rules for attendance at our party and there is an expectation that everyone absorbs them.  
        </p>
        <p>
          Once again, PLAYGROUND reserves the right to remove anyone from the event who exhibits behaviour that is not inline with our values or the protocol of our event. 
        </p>
      </div>
    </div>



    <div class="container">
      <button @click="showHarm = !showHarm">HARM REDUCTION</button>
      <div v-if="showHarm">
        <p>
          Every staff member at Playground is trained in harm reduction and is at your service.  This includes monitoring of kink play as outlined in our <NuxtLink to="/playbook">PLAYBOOK</NuxtLink>.  Staff can be identified by blue glowing bracelets and are there to facilitate  everyone’s good time.  
        </p>
        <h3>STAFF HARM REDUCTION</h3>
        <p>
          PLAYGROUND is a consent conscious party.  The very first chapter of our playbook goes into deep and comprehensive detail on the concept of consent at our parties.  ALL participants are required to respect this foremost of all our rules.
        </p>
      </div>
    </div>

  </section>
  <Footer />
</template>

<script>
export default {
  data() {
  	return {
	    showInclusive: false,
      showDress: false,
      showConsent: false,
      showHarm: false,
  	}
	}
}
</script>

<style lang="sass" scoped>
  .container
    margin: 35px 0
</style>