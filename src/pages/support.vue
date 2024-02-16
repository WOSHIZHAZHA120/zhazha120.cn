<script lang="ts" setup>
import { LinkOutlined } from '@vicons/antd'
import AliPay from '~/assets/support_alipay.png'
import AliPayRedPacket from '~/assets/support_alipay_redpacket.png'
import QQPay from '~/assets/support_qqpay.png'
import WechatPay from '~/assets/support_wechatpay.png'
import { OWNER_NAME } from '~/core/shared'

definePageMeta({
	name: '赞助 & 支持'
})
</script>

<template>
	<subpage class="min-w-4/5">
		<n-card size="small">
			<n-tabs animated justify-content="center" type="line">
				<n-tab-pane name="爱发电 (推荐)">
					<n-space vertical>
						<div class="text-center">
							<n-text strong type="info">需要注册账号, 介意的可以在上面切换成别的支付方式</n-text>
						</div>

						<div class="relative">
							<iframe class="border-none w-full h-[50vh]" src="https://afdian.net/@WOSHIZHAZHA120"/>

							<div class="afdian-overlay">
								<n-button :href="(`https://afdian.net/a/${OWNER_NAME}`)" size="large" strong tag="a"
										  type="primary">
									<template #icon>
										<n-icon :component="LinkOutlined"/>
									</template>

									点击跳转
								</n-button>
							</div>
						</div>
					</n-space>
				</n-tab-pane>

				<n-tab-pane name="QQ">
					<n-space justify="center">
						<n-image :src="QQPay" :width="500"/>
					</n-space>
				</n-tab-pane>

				<n-tab-pane name="微信">
					<n-space justify="center">
						<n-image :src="WechatPay" :width="500"/>
					</n-space>
				</n-tab-pane>

				<n-tab-pane name="支付宝">
					<n-space justify="center">
						<n-image :src="AliPayRedPacket" :width="500"/>
						<n-image :src="AliPay" :width="500"/>
					</n-space>
				</n-tab-pane>
			</n-tabs>
		</n-card>
	</subpage>
</template>

<style scoped>
.afdian-overlay {
	@apply absolute top-0 left-0 w-full h-full;
	@apply flex items-center justify-center;
	@apply bg-(black opacity-80)
	@apply transition opacity-0 hover:opacity-100
}
</style>