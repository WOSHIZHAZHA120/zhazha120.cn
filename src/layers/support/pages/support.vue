<script lang="ts" setup>
import support_alipay from '~/assets/support_alipay.webp'
import support_alipay_redpacket from '~/assets/support_alipay_redpacket.webp'
import support_qq from '~/assets/support_qq.webp'
import support_wechat from '~/assets/support_wechat.webp'

definePageMeta({
	name: '赞助'
})

const tab = computed({
	get: () => {
		return location.hash.slice(1) || 'afdian'
	},

	set(value) {
		location.hash = value
	}
})
</script>

<template>
	<shared-subpage>
		<Tabs v-model:value="tab">
			<TabList>
				<div class="w-full">
					<div class="flex justify-evenly font-sans">
						<Tab value="afdian">爱发电</Tab>
						<Tab value="qq">QQ</Tab>
						<Tab value="wechat">微信</Tab>
						<Tab value="alipay">支付宝</Tab>
					</div>
				</div>
			</TabList>

			<TabPanels>
				<TabPanel value="afdian">
					<div class="flex flex-col gap-2">
						<div class="flex justify-center">
							<Message severity="warn">需要注册账号, 介意的可以在上面切换成别的支付方式</Message>
						</div>

						<template v-for="link in ['https://afdian.com/a/WOSHIZHAZHA120']">
							<shared-overlay>
								<template #trigger>
									<iframe :src="link" class="w-full h-[50vh] border-none"/>
								</template>

								<div class="screen-center">
									<Button :href="link" as="a" label="点击跳转" severity="secondary" size="large" variant="link">
										<template #icon>
											<div class="i-ant-design:link-outlined"/>
										</template>
									</Button>
								</div>
							</shared-overlay>
						</template>
					</div>
				</TabPanel>

				<TabPanel value="qq">
					<div class="flex justify-center">
						<Image :src="support_qq" alt="QQ 支付" image-class="w-full sm:w-[20vw]" preview/>
					</div>
				</TabPanel>

				<TabPanel value="wechat">
					<div class="flex justify-center">
						<Image :src="support_wechat" alt="微信支付" image-class="w-full sm:w-[20vw]" preview/>
					</div>
				</TabPanel>

				<TabPanel value="alipay">
					<div class="flex flex-col sm:flex-row justify-center items-center gap-2">
						<Image :src="support_alipay" alt="支付宝支付" image-class="w-full sm:w-[20vw]" preview/>
						<Image :src="support_alipay_redpacket" alt="支付宝红包" image-class="w-full sm:w-[20vw]" preview/>
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	</shared-subpage>
</template>

<style lang="scss">
@use '~/styles/utils';
</style>