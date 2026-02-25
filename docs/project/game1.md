

## 🎮 游戏项目

### 御灵天下

## 项目总体架构


- 多系统架构（背包 / 战斗 / 训练 / 存档）
- 数据驱动设计
- Builder + Domain 分层模型

## 系统架构图
![系统架构图](/picture/game/YuLin/systemExplain.jpg)

## 系统架构介绍

整体项目通用规则介绍

项目的起点在于GlobalSystem,这里会进行全局初始化
App层:
    使用单例，全局唯一实例，各系统App之间可以通过单例调用实现协作
    可以依赖GlobalService,从中获取数据库信息，获取某模板信息
    可以依赖DTO的数据传输规则，知道自己需要对外部传出什么字段信息
    可以被UI层被动注入，调用UI层的接口，传入数据，对UI层进行控制
    可以依赖Domain层，使用Domain的业务规则

    #App层级里面有一个DomainFactory文件夹，用来构建Domain领域模型,
    使用反转依赖对Domain进行能力拓展，使它成为真正的系统核心，然后其它系统可以引用DomainFactory获取Domain，使用Domain的能力
UI层:
    主动引用App层，并进行UI层的注入
    可以依赖DTO的数据传输规则，知道自己需要从外部接收什么字段信息
    可以主动调用App层的接口，让App层知道UI层发生了什么
    可以依赖GlobalSystem,使用GlobalSystem的全局组件
    所有对这一层级的调用都必须通过一级入口
DTO层:
    统一引用并导出各个层级的数据传输规则
    然后被各个层级引用，约束数据传递的规范性
Domain层:
    保持绝对纯净，不向外部引入任何东西
    自己内部定义业务规则，比如某个角色的行动规则
    某个角色的升级规则
    外部通过读取的Domain的状态，来知道当前业务世界的情况
    (通过反转依赖，获取领域构建所需数据)
Infrastructure层:
    这一层级需要提供的服务基本都统一在GlobalService
    GlobalService:提供存储，模板查询，全局工具函数等

## 游戏内运行图
<div style="display:flex; gap:10px;">
  <img src="/picture/game/YuLin/openWorld.jpg" width="200">

  <img src="/picture/game/YuLin/bag.jpg" width="200">

  <img src="/picture/game/YuLin/duiwu.jpg" width="200">
</div>

<div>
  <img src="/picture/game/YuLin/fight.jpg" width="200">

  <img src="/picture/game/YuLin/RoleBase.jpg" width="200">

  <img src="/picture/game/YuLin/RoleMore.jpg" width="200">
</div>


## 🎮 战斗演示

<video 
  src="/video/YLRunVideo.mp4" 
  controls 
  width="300">
</video>

---