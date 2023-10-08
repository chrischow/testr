<script lang="ts">
  import TimerControls from '../lib/components/TimerControls.svelte'
  import TimeDisplay from '../lib/components/TimeDisplay.svelte'
  import SplitTable from '../lib/components/SplitTable.svelte'
</script>

<h1 class="text-3xl">Start a Test</h1>
<!-- Display time -->
<TimeDisplay />

<!-- Control module -->
<TimerControls />

<!-- Splits -->
<SplitTable />
