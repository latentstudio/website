---
title: "Thingscoop"
path: "/projects/Thingscoop"
date: 01-02-2018
thumbnail: 'homepage.jpg'
description: "Thingscoop is a tool to analyzing videos semantically that means searching, filtering, and describing videos based on objects and places that appear in them. Thingscoop is based on Caffe, an open-source deep learning framework."
mainImage: 'homepage.jpg'
---

Thingscoop is a tool for analyzing videos semantically - that means searching, filtering, and describing videos based on objects and places that appear in them. Thingscoop is based on Caffe, an open-source deep learning framework.

<div style="position:relative;height:0;padding-bottom:45.51%;margin: 3rem 0px 3rem 0px;"><iframe src="https://www.youtube.com/embed/EiInSD-u9iA?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="791" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

When you first run thingscoop on a video file, it uses a convolutional neural network to create an "index" of what's contained in the every second of the input video by repeatedly performing image classification on its frames. Once an index for a video file has been created, you can search (i.e. get the start and end times of the regions in the video matching the query) and filter (i.e. create a supercut of the matching regions) the input using arbitrary queries.

<div style="position:relative;height:0;padding-bottom:45.51%;margin: 3rem 0px 3rem 0px;"><iframe src="https://www.youtube.com/embed/qe9GjrUJipY?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="791" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> 

<div style="position:relative;height:0;padding-bottom:45.51%;margin: 3rem 0px 3rem 0px;"><iframe src="https://www.youtube.com/embed/o0VoyJgPgJE?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="791" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

Thingscoop uses a very basic query language that lets you to compose queries that test for the presence or absence of labels with the logical operators ! (not), || (or) and && (and). For example, to search a video for the presence of the sky and the absence of the ocean: thingscoop search 'sky && !ocean'.

<div style="position:relative;height:0;padding-bottom:45.51%;margin: 3rem 0px 3rem 0px;"><iframe src="https://www.youtube.com/embed/O1OUo1Dd4uQ?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="791" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>