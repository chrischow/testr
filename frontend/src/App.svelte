<script lang="ts">
  import { Route, Router } from 'svelte-routing'
  import './app.css'
  import Navbar from './lib/components/Navbar.svelte'
  import Home from './pages/Home.svelte'
  import Test from './pages/Test.svelte'
</script>

<Router>
  <Navbar />
  <div class="p-8">
    <Route path="/" component={Home} />
    <Route path="/test" component={Test} />
  </div>
</Router>
