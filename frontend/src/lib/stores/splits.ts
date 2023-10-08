import { writable } from 'svelte/store'

function createSplitsStore() {
  let existingData: string | null
  let initData: any[] = []

  existingData = localStorage.getItem('splits')
  initData = existingData ? JSON.parse(existingData) : []
  if (initData.length > 0) {
    initData = initData.map((item) => new Date(item))
  }
  const { subscribe, set, update } = writable<Date[]>(initData)

  return {
    subscribe,
    addSplit: (splitTime: Date) => {
      // Update store
      update((items) => {
        // Update store
        items.push(splitTime)

        // Update localStorage
        localStorage.setItem('splits', JSON.stringify(items))
        return items
      })
    },
    clearSplits: () => {
      // Clear store
      set([])
      // Clear localStorage
      localStorage.removeItem('splits')
    },
  }
}

export const splits = createSplitsStore()
