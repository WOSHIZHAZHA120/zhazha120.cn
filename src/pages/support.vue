<script lang="ts" setup>
import '~/styles/utils.scss'

import support_alipay from '~/assets/support_alipay.webp'
import support_alipay_redpacket from '~/assets/support_alipay_redpacket.webp'
import support_qq from '~/assets/support_qq.webp'
import support_wechat from '~/assets/support_wechat.webp'

definePageMeta({
	name: '赞助'
})
</script>

<template>
	<shared-subpage>
		<Tabs value="afdian">
			<TabList>
				<div class="w-full flex justify-evenly">
					<Tab value="afdian">爱发电</Tab>
					<Tab value="qq">QQ</Tab>
					<Tab value="wechat">微信</Tab>
					<Tab value="alipay">支付宝</Tab>
				</div>
			</TabList>

			<TabPanels>
				<TabPanel value="afdian">
					<div class="text-center my-5">
						<span class="text-6">需要注册账号, 介意的可以在上面切换成别的支付方式</span>
					</div>

					<shared-overlay>
						<template #trigger>
							<iframe class="w-full h-[50vh] border-none" src="https://afdian.com/@WOSHIZHAZHA120"/>
						</template>

						<div class="screen-center">
							<Button as="a" class="no-underline" href="https://afdian.com/a/WOSHIZHAZHA120" label="点击跳转" severity="secondary">
								<template #icon>
									<div class="i-ant-design:link-outlined"/>
								</template>
							</Button>
						</div>
					</shared-overlay>
				</TabPanel>

				<TabPanel value="qq">
					<div class="flex justify-center">
						<Image :src="support_qq" alt="QQ 支付" image-class="h-120" preview/>
					</div>
				</TabPanel>

				<TabPanel value="wechat">
					<div class="flex justify-center">
						<Image :src="support_wechat" alt="微信支付" image-class="h-120" preview/>
					</div>
				</TabPanel>

				<TabPanel value="alipay">
					<div class="flex justify-center gap-2">
						<Image :src="support_alipay" alt="支付宝支付" image-class="h-120" preview/>
						<Image :src="support_alipay_redpacket" alt="支付宝红包" image-class="h-120" preview/>
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	</shared-subpage>
</template>