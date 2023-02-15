<template>
    <div class="event-container">
        <NuxtLink to="https://www.eventbrite.ca/e/playground-tickets-547878829327" class="title">GET TICKETS</NuxtLink>
        <h4>playground 1.1</h4>
        <p>
            More info, see <NuxtLink to="/events">EVENTS</NuxtLink>
    </p>
    </div>
</template>

<style lang="sass" scoped>
    .title
        font-size: 25px
        margin-top: 15px
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