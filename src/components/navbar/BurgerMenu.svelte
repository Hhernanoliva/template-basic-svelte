<script>
import { fly, scale } from 'svelte/transition';
import { quadOut } from 'svelte/easing';
import { get } from 'svelte/store';
import { linksItems } from '../../routes/store';

let links = get(linksItems)
export let open;
</script>

{#if open}
    <div class="flex-col md:flex">
        {#each links as link, i}
                <a transition:fly={{ y: -205, delay: 50 * i }} href="{link.url}" class="btn btn-ghost btn-sm rounded-btn">{link.name}</a> 
        {/each}
        <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
    </div>
{/if}

<style>
    div {
        position: absolute;
        background-color: #3d4451;
        left: 0;
        top: 68px;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #eef;
    }
    hr{
        margin-top: 20px;
        height: 1px;
        background-color: aliceblue;
        width: 100%;
    }
    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        text-decoration: underline;
    }
</style>