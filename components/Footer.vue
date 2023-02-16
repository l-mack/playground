<template>
    <footer>
        <div class="footer-links">
            <div class="footer-menu">
                <div class="footer-textbox textbox-top">
                    <NuxtLink to="/">HOME</NuxtLink>
                    <NuxtLink to="/events">EVENTS</NuxtLink>
                    <NuxtLink to="/protocol">CALL FOR ARTISTS</NuxtLink>
                </div>
            
                <div class="footer-textbox">
                    <NuxtLink to="/protocol">PROTOCOL</NuxtLink>
                    <NuxtLink to="/playbook">PLAYBOOK</NuxtLink>
                    <NuxtLink to="/contact">CONTACT</NuxtLink>

                </div>
            
            </div>

            <div class="social">
                <NuxtLink to="https://www.instagram.com/playground_kink/">INSTAGRAM</NuxtLink>
                <NuxtLink to="/conact">CONTACT PAGE</NuxtLink>
            </div>

        </div>
        

        <div>
            <p>
                © 2022 Hanging God Productions Inc.
            </p>
        </div>

    </footer>
    
    
</template>

<style lang="sass" scoped>
    footer
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        margin: 75px 0 
    footer p
        margin: 0
    footer a
        padding: 0 20px
        transition: all .2s ease-in-out
        border-bottom: none
    a:hover
        border-bottom: none
        transform: scale(1.1)
    .footer-links
        margin-bottom: 50px
        display: flex
        justify-content: space-between
        @media (max-width: 750px)
            flex-direction: column
    .social
        display: flex
        @media (max-width: 750px)
            margin-top: 50px
            justify-content: center
            align-items: center
    .footer-menu
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: center
        margin-right: 500px
        @media (max-width: 1250px)
            margin-right: 300px
        @media (max-width: 950px)
            margin-right: 150px
        @media (max-width: 850px)
            margin-right: 50px
        @media (max-width: 750px)
            margin-right: 0
    .footer-textbox
        @media (max-width: 450px)
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
    .footer-textbox a
        @media (max-width: 450px)
            padding: 5px
    .textbox-top
        margin-bottom: 25px
        @media (max-width: 450px)
        margin-bottom: 0
        
</style>