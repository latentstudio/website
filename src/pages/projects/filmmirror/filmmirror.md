---
title: "Film Mirror"
path: "/projects/Film-Mirror"
date: 2018-09-01
thumbnail: 'homepage.jpg'
description: 'Film Mirror is an interactive installation that allows participants to perform as iconic film characters.'
mainImage: 'homepage.jpg'
links:
    - url: https://ars.electronica.art/error/en/collaborations
      name: Ars Electronica page
---
Film Mirror is an interactive installation that allows participants to perform as iconic film characters. Using recent AI research in neural network-based pose detection and image synthesis, the installation maps the bodies of the participants into the bodies of film characters in real time, enabling anyone to creatively re-enact and re-interpret classic film moments. Film Mirror elevates films from static artifacts, finalized at the moment of their release, into dynamic source material that can be used to generate an infinite number of new works.

<div style="padding:62.5% 0 0 0;position:relative;margin:3rem 0px 3rem 0px;"><iframe src="https://player.vimeo.com/video/288813154?color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

Behind the scenes, the installation uses two open-source deep neural network models to perform the scene transfer:

* [DensePose](https://github.com/facebookresearch/DensePose), based on [a research paper by Güler et al.](https://arxiv.org/abs/1802.00434), is used to recognize the body pose maps of the film characters (during training) and participants (during inference).

* [pix2pixHD](https://github.com/NVIDIA/pix2pixHD), based on [a research paper by Wang et al.](https://arxiv.org/pdf/1711.11585.pdf), is used to synthesize high-resolution images in the style of a film scene given an input body pose.

<div style="padding:62.5% 0 0 0;position:relative;margin:3rem 0px 3rem 0px;"><iframe src="https://player.vimeo.com/video/288813062?color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>


Film Mirror premiered at [Ars Electronica Festival 2018](https://ars.electronica.art/error/en/collaborations/) in Linz, Austria. 