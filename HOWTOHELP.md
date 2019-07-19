# 功能须知
#### 为什么识别不出材料/材料识别错误?
~~1. 性能考虑<br>
  由于需要在浏览器上运行，就必须放弃精度更高的大型模型而转用性能更好的小型模型。这个功能使用的模型是`Yolov3-tiny`，算是兼顾了准度和性能。如果将来有更好的模型面世可能会替换~~
~~2. 缺少数据<br>
  俗话说得好，有多少人工就有多少智能。这个功能只是我一时兴起做的实验，从一开始就有着开发失败（事实上也几次接近绝望）的心理准备
  。因此，在收集数据的阶段我只收集了18张仓库图来训练，效果自然不会太好。~~<br><br>
  感谢各位的数据，现在模型已经重新训练(v3)并且更换为后端模型，效果应该会有较大提高
#### 如何帮助这个功能变得更好？
1. 提交仓库原图<br>
  ~~只要提交图片，就已经能帮到我了<br>
  luke_lujunxian@qq.com 标题注明【数据提交】~~<br>
  暂时不需要新的数据，但如果遇到识别效果低下的情况还是欢迎把原图和结果提交给我
2. 提交标记好的图片<br>
  如果能做到这一点，那将是非常大的帮助<br>
  使用工具`labelImg`，将图片和`.xml`标记一起提交给我<br>
  标签和对应的材料可以在这里找到:https://github.com/graueneko/aktools/tree/master/src/assets/img/material<be>
  标签列表放入`labelImg`目录下的`/data/predefined_classes.txt`中可快速添加标签<br>
  标签列表https://github.com/Luke-lujunxian/aktools/blob/auto-fillin/predefined_classes.txt<br>
  `labelImg`使用教程Bilibili: https://www.bilibili.com/video/av58221619
