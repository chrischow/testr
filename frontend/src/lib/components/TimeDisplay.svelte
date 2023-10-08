<script lang="ts">
  import { onMount } from 'svelte'
  import { timer } from '../stores'
  import { dateFormatter, millisecondsFormatter, twoDigitFormatter } from '../utils/formatters'
  import { computeTimeDiff } from '../utils/timeDiff'

  let elapsedMinutes: number = 0
  let elapsedSeconds: number = 0
  let elapsedMilliseconds: number = 0
  let currentTime = new Date()

  $: isTimerSet = $timer !== null
  $: if ($timer) {
    const {
      elapsedMinutes: minutes,
      elapsedSeconds: seconds,
      elapsedMilliseconds: milliseconds,
    } = computeTimeDiff(currentTime, new Date($timer))

    elapsedMinutes = minutes
    elapsedSeconds = seconds
    elapsedMilliseconds = milliseconds
  }

  onMount(() => {
    const interval = setInterval(() => {
      currentTime = new Date()
    }, 50)

    return () => {
      clearInterval(interval)
    }
  })
</script>

<div class="flex justify-center mt-4">
  {#if isTimerSet && $timer}
    <div>
      <h2 class="text-2xl text-center">Test started at {dateFormatter.format($timer)}.</h2>
      <div class="mt-4 text-xl text-center">
        Elapsed:<br />
        <p class="mt-2 font-mono text-3xl text-secondary">
          {twoDigitFormatter.format(elapsedMinutes)}:{twoDigitFormatter.format(
            elapsedSeconds,
          )}:{millisecondsFormatter.format(elapsedMilliseconds)}
        </p>
      </div>
    </div>
  {/if}
</div>
