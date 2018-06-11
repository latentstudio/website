---
title: "Scenescoop"
path: "/projects/Scenescoop"
date: 01-03-2018
thumbnail: 'homepage.png'
description: 'Scenescoop is a tool to get similar semantic scenes from a pair of videos. Basically, you input a video and get a scene that has a similar meaning in another video.'
mainImage: 'homepage.png'
---

Scenescoop is a tool to get similar semantic scenes from a pair of videos. Basically, you input a video and get a scene that has a similar meaning in another video.

<div style="position:relative;height:0;padding-bottom:55.51%;margin: 3rem 0px 3rem 0px;"><iframe src="https://www.youtube.com/embed/ZF5W_tcnF4s" style="position:absolute;width:100%;height:100%;left:0" width="791" height="460" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

<div style="position:relative;height:0;padding-bottom:55.51%;margin: 3rem 0px 3rem 0px;"><iframe src="https://www.youtube.com/embed/aaYVMsMMEjc" style="position:absolute;width:100%;height:100%;left:0" width="791" height="460" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

Scenescoop uses the im2text tensorflow model to analyze videos on a frame to frames basis and get a description of the content of those images. Frames with the same description are grouped together to create a sequence or scene.

<div style='margin: 3rem 0px 3rem 0px;'>
  <img src='https://github.com/cvalenzuela/scenescoop/blob/master/static/imgs/demo.gif?raw=true' src='scenescoop demo'>
</div>

<div style='margin: 3rem 0px 3rem 0px;'>
  <img src='02.png' src='Uncanny demo'>
</div>