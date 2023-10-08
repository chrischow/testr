<script lang="ts">
  import { splits, timer } from '../stores'
  import ConfirmationModal from './ConfirmationModal.svelte'

  let isStartModalOpen = false
  let isStopModalOpen = false

  const openStartModal = () => {
    isStartModalOpen = true
  }

  const closeStartModal = () => {
    isStartModalOpen = false
  }

  const startTimer = () => {
    timer.start()
    splits.clearSplits()
    closeStartModal()
  }

  const handleStartTimer = () => {
    if ($splits.length > 0) {
      openStartModal()
    } else {
      timer.start()
    }
  }

  const openStopModal = () => {
    isStopModalOpen = true
  }

  const closeStopModal = () => {
    isStopModalOpen = false
  }

  const stopTimer = () => {
    closeStopModal()
    timer.stop()
  }

  $: isTimerSet = $timer !== null
</script>

<div class="flex justify-center mt-8">
  <button class="btn btn-success normal-case" on:click={handleStartTimer} disabled={isTimerSet}>Start Test</button>
  <button class="btn btn-info normal-case ml-4" on:click={() => splits.addSplit(new Date())} disabled={!isTimerSet}
    >Split</button
  >
  <button class="btn btn-error normal-case ml-4" on:click={openStopModal} disabled={!isTimerSet}>End Test</button>
  <ConfirmationModal
    isModalOpen={isStartModalOpen}
    modalTitle="Are you sure you want to start the timer?"
    modalDescription="Starting the timer will erase any splits saved on your device. This action cannot be reversed."
    primaryAction={startTimer}
    primaryLabel="Yes, start the timer"
    secondaryAction={closeStartModal}
  />
  <ConfirmationModal
    isModalOpen={isStopModalOpen}
    modalTitle="Are you sure you want to end the test?"
    modalDescription="This action cannot be reversed."
    primaryAction={stopTimer}
    primaryLabel="Yes, end the test"
    secondaryAction={closeStopModal}
  />
</div>
