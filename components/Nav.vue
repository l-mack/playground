<template>
    <nav class="navbar nav-menu">
            <div class="nav-item">
                <NuxtLink to="/" class="nav-link">HOME</NuxtLink>
            </div>
            <div class="nav-item">
                <NuxtLink to="/events" class="nav-link">EVENTS</NuxtLink>
            </div>
            <div class="nav-item">
                <NuxtLink to="/protocol" class="nav-link">PROTOCOL</NuxtLink>
            </div>
            <div class="nav-item">
                <NuxtLink to="/playbook" class="nav-link">PLAYBOOK</NuxtLink>
            </div>

            <div class="nav-item">
                <NuxtLink to="/contact">CONTACT</NuxtLink>
            </div>
    </nav>
        <div class="hamburger" @click="mobileMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

</template>

<style lang="sass" scoped>
    nav
        display: flex
        justify-content: space-around
        @media only screen and (max-width: 768px)
            position: fixed
            left: -100%
            top: 5rem
            flex-direction: column
            width: 100%
            border-radius: 10px
            text-align: center
            transition: 0.3s
            background: #000000
            opacity: .87
        
    .nav-menu.active
        @media only screen and (max-width: 768px)
            left: 0
        
    .nav-item
        @media only screen and (max-width: 768px)
            padding: 2.5rem 0
    .nav-item:hover a, .nav-item:active a
        @media only screen and (max-width: 768px)
            background: #e02142
            color: #000000
    .nav-item:hover, .nav-item:active
         @media only screen and (max-width: 768px)
            background: #e02142
    a
        @media only screen and (max-width: 768px)
            border-bottom: none

    .hamburger
        display: none
        @media only screen and (max-width: 768px)
            display: block
            cursor: pointer
    
    .hamburger.active .bar:nth-child(2)
        @media only screen and (max-width: 768px)
            opacity: 0
    
    .hamburger.active .bar:nth-child(1)
        @media only screen and (max-width: 768px)
            transform: translateY(8px) rotate(45deg)

    .hamburger.active .bar:nth-child(3)
        @media only screen and (max-width: 768px)
        transform: translateY(-8px) rotate(-45deg)

    .bar
        @media only screen and (max-width: 768px)
            display: block
            width: 25px
            height: 3px
            margin: 5px auto
            -webkit-transition: all 0.3s ease-in-out
            transition: all 0.3s ease-in-out
            background: #EEEE
</style>
<script>
    export default {
        methods: {
            mobileMenu () {
                const hamburger = document.querySelector(".hamburger")
                const navMenu = document.querySelector(".nav-menu")
                
                hamburger.classList.toggle('active')
                navMenu.classList.toggle('active')
            }
            

        }
    }
</script>