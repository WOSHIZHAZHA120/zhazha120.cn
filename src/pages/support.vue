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
					<n-flex vertical>
						<div class="text-center">
							<n-text class="fw-bold" type="info">
								需要注册账号, 介意的可以在上面切换成别的支付方式
							</n-text>
						</div>

						<div class="relative">
							<iframe class="border-none w-full h-[50vh]" src="https://afdian.net/@WOSHIZHAZHA120"/>

							<div
								class="absolute top-0 left-0 w-full h-full bg-(black opacity-80) opacity-0 hover:opacity-100 transition">
								<n-button :href="(`https://afdian.net/a/${OWNER_NAME}`)" class="fw-bold" size="large"
										  tag="a" type="primary">
									<template #icon>
										<n-icon :component="LinkOutlined"/>
									</template>

									点击跳转
								</n-button>
							</div>
						</div>
					</n-flex>
				</n-tab-pane>

				<n-tab-pane name="QQ">
					<n-flex justify="center">
						<n-image :src="QQPay" :width="500"/>
					</n-flex>
				</n-tab-pane>

				<n-tab-pane name="微信">
					<n-flex justify="center">
						<n-image :src="WechatPay" :width="500"/>
					</n-flex>
				</n-tab-pane>

				<n-tab-pane name="支付宝">
					<n-flex justify="center">
						<n-image :src="AliPayRedPacket" :width="500"/>
						<n-image :src="AliPay" :width="500"/>
					</n-flex>
				</n-tab-pane>
			</n-tabs>
		</n-card>
	</subpage>
</template>