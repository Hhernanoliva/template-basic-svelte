import {readable} from 'svelte/store';

export let linksItems = readable([
    {name: "Galleries", url: '/galleries'},
    {name: "About me", url: '/about me'},
    {name: "Contact", url: '/contact'}
  ]);
