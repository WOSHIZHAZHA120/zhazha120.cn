type DataName = {
	readonly english: string
	readonly original: string | null
}

type DataNotes = number

export interface AccuracyCalculatorDatabaseItem {
	readonly name: string

	readonly data: {
		readonly name: DataName
		readonly notes: DataNotes
	}[]

	readonly passRequirePercentage: number
}

export interface AccuracyData {
	readonly name: DataName
	readonly notes: DataNotes
	readonly accuracy: number
}