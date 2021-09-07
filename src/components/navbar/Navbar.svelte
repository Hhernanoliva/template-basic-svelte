<script>
import Hamburger from 'svelte-hamburgers';
import Menu from './BurgerMenu.svelte';
import { get } from 'svelte/store'
import { linksItems } from '../../routes/store'
import MediaQuery from "../../tools/MediaQuery.svelte";


let open;
let links = get(linksItems)

</script>

<svelte:head>
	<!-- Import Burguer Menu -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css" />
</svelte:head>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">

  <!-- LOGO -->
  <div class="flex-1 px-2 mx-2">
    <span class="text-lg font-bold">
            Web Card
          </span>
  </div> 

  <!-- LINKS -->
  <div class="flex-none hidden px-2 mx-2 md:flex">
    <div class="flex items-stretch">
      {#each links as item}
      <a href="{item.url}" class="btn btn-ghost btn-sm rounded-btn">{item.name}</a> 
      {/each}

    </div>
  </div> 

 
  <!-- HAMBURGUESA -->
  <MediaQuery query="(max-width: 768px)" let:matches>
    {#if matches}
      <Hamburger
      bind:open
      --color="white"
      --layer-width="20px"
      --layer-height="1.5px" />
    
      <Menu bind:open />
    {/if}
  </MediaQuery>

   
 

</div>

<style>


</style>


