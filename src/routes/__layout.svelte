<script>
import "../app.postcss";
import Navbar from '../components/navbar/Navbar.svelte'
</script>

<Navbar/>
<slot></slot>

<style lang="scss">
    body{
        background-color: #f498c1;
    }
</style>