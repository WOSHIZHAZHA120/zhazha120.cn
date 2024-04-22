<script lang="ts" setup>
import { LinkOutlined } from '@vicons/antd'
import AliPay from '~/assets/support_alipay.png'
import AliPayRedPacket from '~/assets/support_alipay_redpacket.png'
import QQPay from '~/assets/support_qqpay.png'
import WechatPay from '~/assets/support_wechatpay.png'

definePageMeta({
	name: '赞助 & 支持'
})

const imageWidth = 500
</script>

<template>
	<subpage>
		<n-card size="small">
			<n-tabs justify-content="center" type="line">
				<n-tab-pane name="爱发电 (推荐)">
					<n-flex vertical>
						<div class="text-center">
							<n-text strong type="info">
								需要注册账号, 介意的可以在上面切换成别的支付方式
							</n-text>
						</div>

						<div class="relative">
							<iframe class="w-full h-[50vh] border-none" src="https://afdian.net/@WOSHIZHAZHA120"/>

							<div class="absolute top-0 left-0 w-full h-full">
								<div class="w-full h-full transition-opacity opacity-0 hover:opacity-100">
									<div class="w-full h-full bg-(black opacity-80)">
										<n-flex justify="center" align="center" class="h-full">
											<n-button href="https://afdian.net/a/WOSHIZHAZHA120" class="fw-bold"
													  size="large" tag="a" type="primary">
												<template #icon>
													<n-icon :component="LinkOutlined"/>
												</template>

												点击跳转
											</n-button>
										</n-flex>
									</div>
								</div>
							</div>
						</div>
					</n-flex>
				</n-tab-pane>

				<n-tab-pane name="QQ">
					<div class="text-center">
						<n-image class="rounded" :src="QQPay" :width="imageWidth"/>
					</div>
				</n-tab-pane>

				<n-tab-pane name="微信">
					<div class="text-center">
						<n-image class="rounded" :src="WechatPay" :width="imageWidth"/>
					</div>
				</n-tab-pane>

				<n-tab-pane name="支付宝">
					<n-flex justify="center" align="top">
						<n-image class="rounded-10" :src="AliPayRedPacket" :width="imageWidth"/>
						<n-image class="rounded" :src="AliPay" :width="imageWidth"/>
					</n-flex>
				</n-tab-pane>
			</n-tabs>
		</n-card>
	</subpage>
</template>