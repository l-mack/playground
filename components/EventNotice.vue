<template>
    <div class="event-container">
        <h2>EVENT NOTICE</h2>
        <h4>playground 1.1</h4>
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
            <li>
                <p>
                    See <NuxtLink to="/events">EVENTS</NuxtLink> page for more.
                </p>
            </li>
        </ul>
    </div>
</template>

<style lang="sass" scoped>
    .event-container
        border: 1px solid #EEEE
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        width: 50%
        margin: 50px 0
        @media (max-width: 975px)
            width: 100%
        p
            @media (max-width: 420px)
                font-size: 14px
</style>