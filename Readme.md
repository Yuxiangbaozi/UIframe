# 轮子 --- 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/Yuxiangbaozi/UIframe.svg?branch=master)](https://travis-ci.org/Yuxiangbaozi/UIframe)<br>
作者：包子

## 介绍
这是我学习Vue过程中做的一个UI框架，希望能帮到你
## 开始使用
####1. 添加CSS样式<br>
使用本框架前请在CSS开启使用border-box<br>
(IE8及以上浏览器支持该样式)
```angular1
*{box-sizing: border-box;}
*::before{box-sizing: border-box;}
*::after{box-sizing: border-box;}
```
你还需要设置默认样式变量（后续改进）<br>
(IE15及以上浏览器支持该样式)
```angular2
html{
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 5px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #222;
}
```
####2. 安装UI框架<br>
```angular3
npm i -S UIframe
```
####3. 引入UI框架
```angular4
import {Button,ButtonGroup,Icon} for 'UIframe'
import 'UIframe/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-icon': Icon
    }
}
```
## 文档

## 提问

## 更新历史

## 联系方式

## 代码贡献