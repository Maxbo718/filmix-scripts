/*
 *
 *
脚本功能：filmix-ai影视库重命名整理刮削（Pro+ 版本）
软件版本：2.6
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > filmix-ai影视库重命名整理刮削（Pro+ 版本）
^https:\/\/appv3\.filmix\.com\.cn\/api\/v2\/user\/user\/info url script-response-body https://raw.githubusercontent.com/你的用户名/filmix-scripts/main/filmix-pro+.js

[mitm]
hostname = appv3.filmix.com.cn
*
*
*/



let obj = JSON.parse($response.body);

// 基础VIP设置（保持PRO等级）
obj.is_vip = true;
obj.vip_level = 1;

// 尝试Pro+标识字段
obj.vip_type = "pro_plus";
obj.membership_type = "pro_plus";
obj.svip_level = 1;
obj.is_pro_plus = true;
obj.pro_plus = true;
obj.subscription_type = "pro_plus";
obj.plan_type = "pro_plus";

// 用户对象同步
obj.user.vip_level = 1;
obj.user.vip_type = "pro_plus";
obj.user.membership_type = "pro_plus";
obj.user.svip_level = 1;
obj.user.is_pro_plus = true;
obj.user.pro_plus = true;
obj.user.subscription_type = "pro_plus";
obj.user.plan_type = "pro_plus";

// 时间设置
obj.vip_start_time = "2025-01-01T00:00:00.000Z";
obj.vip_end_time = "2099-12-31T23:59:59.999Z";
obj.first_vip_start_time = "2025-01-01T00:00:00.000Z";

$done({body: JSON.stringify(obj)});
