import friends_link__1 from '~/assets/friends_link_-1.webp'
import friends_link_1 from '~/assets/friends_link_1.webp'
import friends_link_2 from '~/assets/friends_link_2.webp'
import friends_link_3 from '~/assets/friends_link_3.webp'
import friends_link_4 from '~/assets/friends_link_4.webp'
import friends_link_5 from '~/assets/friends_link_5.webp'
import type FriendsLink from '~/types/friends_link'

export default [
	{
		name: 'Abnormal Cat',
		description: '',
		icon: friends_link__1,
		href: 'https://abnormalcat.cn'
	},
	{
		name: '迷失的小K',
		description: '感受编程乐趣，畅游代码海洋',
		icon: friends_link_1,
		href: 'https://blog.kclub.tech'
	},
	{
		name: '应龙笔记',
		description: '应龙笔记是一个专注于知识分享的网站',
		icon: friends_link_2,
		href: 'https://www.silverdragon.cn?link=' + location.host
	},
	{
		name: '锐龙的小窝',
		description: '锐冰的个人博客',
		icon: friends_link_3,
		href: 'https://blog.sharpice.top'
	},
	{
		name: 'LangYa466',
		description: '',
		icon: friends_link_4,
		href: 'https://furry.ren'
	},
	{
		name: 'F_Qilin',
		description: '',
		icon: friends_link_5,
		href: 'https://blog.fqilin.top'
	}
] satisfies FriendsLink[]