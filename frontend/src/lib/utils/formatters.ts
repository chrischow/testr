export const twoDigitFormatter = new Intl.NumberFormat('en-US', {
	minimumIntegerDigits: 2,
})

export const millisecondsFormatter = new Intl.NumberFormat('en-US', {
	minimumIntegerDigits: 3,
})

export const dateFormatter = new Intl.DateTimeFormat('en-GB', {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
})
