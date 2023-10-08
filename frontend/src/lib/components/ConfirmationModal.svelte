<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  export let isModalOpen = false
  export let modalTitle = 'Are you sure you want to continue?'
  export let modalDescription = ''
  export let primaryAction: MouseEventHandler<HTMLElement>
  export let primaryLabel = 'Yes'
  export let secondaryAction: MouseEventHandler<HTMLElement>
  export let secondaryLabel = 'No, go back'
</script>

<div class="modal" class:modal-open={isModalOpen}>
  <div class="modal-box">
    <h3 class="text-lg">{modalTitle}</h3>
    <p class="py-4">{modalDescription}</p>
    <div class="modal-action flex justify-center">
      <button class="btn btn-neutral normal-case" on:click={secondaryAction}>{secondaryLabel}</button>
      <button class="btn btn-error normal-case" on:click={primaryAction}>{primaryLabel}</button>
    </div>
  </div>
</div>
