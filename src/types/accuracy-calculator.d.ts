export interface AccuracyCalculatorDatabaseItem {
	readonly name: string

	readonly data: {
		readonly name: {
			readonly english: string
			readonly original: string | null
		}

		readonly notes: number
	}[]

	readonly passRequirePercentage: number
}