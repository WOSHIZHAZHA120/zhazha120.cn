interface ProjectLink {
	readonly label: string
	readonly icon_class: string
	readonly href: string
}

interface Project {
	readonly name: string
	readonly preview_image: string
	readonly links: ProjectLink[]
}

export default Project