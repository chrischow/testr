<script lang="ts">
  import { timer, splits } from '../stores'
  import { dateFormatter, millisecondsFormatter, twoDigitFormatter } from '../utils/formatters'
  import { computeTimeDiff } from '../utils/timeDiff'
  import ConfirmationModal from './ConfirmationModal.svelte'

  type Split = {
    time: string
    timing: string
  }
  let splitData: Split[] = []
  let isModalOpen = false

  $: if (timer.get() && $splits) {
    splitData = $splits.map((item) => {
      const currentDate = new Date(item)
      const { elapsedMinutes, elapsedSeconds, elapsedMilliseconds } = computeTimeDiff(
        currentDate,
        new Date(timer.get() as string),
      )
      return {
        time: dateFormatter.format(currentDate),
        timing: `${twoDigitFormatter.format(elapsedMinutes)}:${twoDigitFormatter.format(
          elapsedSeconds,
        )}:${millisecondsFormatter.format(elapsedMilliseconds)}`,
      }
    })
  }

  const openModal = () => (isModalOpen = true)
  const closeModal = () => (isModalOpen = false)
  const clearSplits = () => splits.clearSplits()
  const handleClearSplits = () => {
    clearSplits()
    closeModal()
  }
</script>

{#if $splits.length > 0}
  <div class="flex flex-col justify-center mt-8">
    <h2 class="text-2xl text-center">Splits</h2>
    <div class="w-full md:w-3/4 mt-8 self-center">
      <div class="overflow-x-auto">
        <table class="table table-auto">
          <!-- head -->
          <thead>
            <tr class="border-slate-700">
              <th />
              <th>Date/time</th>
              <th>Timing</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            {#each splitData as split, index}
              <tr class="border-slate-700">
                <th>{index + 1}</th>
                <td>{split.time}</td>
                <td>
                  <div class="tooltip" data-tip={split.time}>
                    {split.timing}
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex mt-8 justify-center">
      <button class="btn btn-error" on:click={openModal}>Clear Splits</button>
    </div>
  </div>
{/if}

<ConfirmationModal
  {isModalOpen}
  modalTitle="Are you sure you want to clear all splits?"
  modalDescription="This action cannot be reversed."
  primaryAction={handleClearSplits}
  primaryLabel="Yes, clear all splits"
  secondaryAction={closeModal}
/>
