import {readable} from 'svelte/store';

export let linksItems = readable([
    {name: "Micro Webs", url: ''},
    {name: "Blog", url: ''},
    {name: "Servicios", url: ''},
    {name: "Quienes somos?", url: ''},
    {name: "Contacto", url: ''}
  ]);
