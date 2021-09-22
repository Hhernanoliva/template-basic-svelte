<script>
import { fly, scale } from 'svelte/transition';
import { quadOut } from 'svelte/easing';
import { get } from 'svelte/store';
import { linksItems } from '../../routes/store';

let links = get(linksItems)
export let open;
</script>

{#if open}
    <div class="screenSmoke"></div>
    <div class="flex-col md:flex text-2xl">
        
        {#each links as link, i}
            <a transition:fly={{ y: -205, delay: 50 * i }} href="{link.url}" class="text-2xl py-1">{link.name}</a> 
        {/each}
        <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
    </div>
{/if}

<style>
    div {
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: calc(100vh - 70px);
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding-top: 1em;
        color: #ffffff;
        z-index: 3;
    }
    a{
        font-weight: 300;
    }
    .screenSmoke{
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: calc(300px - 70px);
        filter: blur(10rem);
        transition: all 1.5s ease;
    }
    hr{
        margin-top: 20px;
        height: 1px;
        background-color: rgb(255, 255, 255);
        width: 100%;
    }
    /* p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
        padding: 10px;
    }
    p:hover {
        text-decoration: underline;
    } */
</style>