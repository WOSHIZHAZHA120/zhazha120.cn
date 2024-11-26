interface RacingTimeline {
	readonly milestone: string
	readonly date: string
}

interface SprintTimeline extends RacingTimeline {

}

interface BlitzTimeline extends RacingTimeline {

}

interface RankTimeline {
	readonly name: string
	readonly date: string
}

interface Season1RankTimeline extends RankTimeline {

}

interface Season2RankTimeline extends RankTimeline {

}

export interface TetrioTimeLines {
	readonly sprint: SprintTimeline[]
	readonly blitz: BlitzTimeline[]
	readonly s1_rank: Season1RankTimeline[]
	readonly s2_rank: Season2RankTimeline[]
}

export interface RankColors {
	'x+': string
	x: string
	u: string
	ss: string
	's+': string
	s: string
	's-': string
	'a+': string
	a: string
	'a-': string
	'b+': string
	b: string
	'b-': string
	'c+': string
	c: string
	'c-': string
	'd+': string
	d: string
	z: string
}