import { writable } from 'svelte/store'

/// Create store
function createTimerStore() {
  let existingData: string | null
  let isTestOngoing = localStorage.getItem('test_ongoing') === 'true'
  let initTimer: Date | null = null
  existingData = localStorage.getItem('timer')

  if (existingData && isTestOngoing) {
    initTimer = new Date(existingData)
  }

  const { subscribe, set } = writable<Date | null>(initTimer)

  return {
    subscribe,
    start: () => {
      const startTime = new Date()
      set(startTime)
      localStorage.setItem('timer', startTime.toISOString())
      localStorage.setItem('test_ongoing', 'true')
    },
    get: () => localStorage.getItem('timer'),
    stop: () => {
      set(null)
      localStorage.setItem('test_ongoing', 'false')
    },
  }
}

export const timer = createTimerStore()
