<script>
import Hamburger from 'svelte-hamburgers';
import Menu from './BurgerMenu.svelte';
import { get } from 'svelte/store'
import { linksItems } from '../../routes/store'
import MediaQuery from "../../tools/MediaQuery.svelte";
import Logo from "./Logo.svelte"
import LogoStatic from "./LogoStatic.svelte"
import { gsap } from "gsap";
import { onMount } from "svelte";

onMount(() => {
        var tl = gsap.timeline({delay: 4.5});
            tl.to("#viewscreen", {duration: 2.2, ease: "Power3.easeIn", height: "0"});
            tl.to("#viewscreen", {duration: 2, opacity: 0}, "-=0.4");
            tl.to("#viewscreen", {display: "none"});
    })


let open;
let links = get(linksItems) 

</script>

<svelte:head>
	<!-- Import Burguer Menu -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css" />
</svelte:head>

  <!-- LOGO -->
  <div class="viewscreen absolute" id="viewscreen">
  </div>
  <div class="logo absolute overflow-visible">
    <Logo />
  </div> 

<div class="navbar shadow-lg bg-pink text-neutral-content md:flex flex justify-center" id="conteinerLogo">
  <div class=" justify-center">
    <LogoStatic />
  </div>
  
  <!-- LINKS -->
  <div class="flex-none hidden px-2 mx-2">
    
    <!-- <div class="flex items-stretch">
      {#each links as item}
      <a href="{item.url}" class="btn btn-ghost btn-sm rounded-btn">{item.name}</a> 
      {/each}

    </div> -->
  </div> 

 
  <!-- HAMBURGUESA --> 
  <MediaQuery query="(max-width: 768px)" let:matches>
    {#if matches}
    <div class="containerBurger absolute">
      <Hamburger
      bind:open
      --color="white"
      --layer-width="20px"
      --layer-height="1.5px" />
    </div>
      <Menu bind:open />
    {/if} 
  </MediaQuery>

   
 

</div>

<style lang="scss">
.viewscreen{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f498c1;
    z-index: 1;
  }
  .logo{
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    z-index: 2;
    }

  .containerBurger{
    margin: 0 15px 0 0;
    right: 0;
    
  }
  .bg-pink{
  background-color: #f498c1;
}

</style>


