<script>
  import { Link } from 'svelte-routing'

  const navLinks = [
    { label: 'Dashboard', href: '#' },
    { label: 'Test', href: '/test' },
    { label: 'Logout', href: '#' },
  ]
</script>

<div class="navbar bg-slate-950">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case font-medium text-2xl hover:bg-transparent" href="/">Testr</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      {#each navLinks as navLink}
        <Link to={navLink.href} class="block py-2 px-3 text-lg">
          {navLink.label}
        </Link>
      {/each}
    </ul>
  </div>
</div>
