export const workData = [
  {
    id: 1,
    URL: "/videos/fc_loaders.mp4",
    title: "FC Loaders",
    oneLineDescription: "Animated Loaders package purely built on Flutter",
    fullDescription:
      "An Open Source Flutter package containing a variety of animated loaders purely implemented in Dart. These Loaders are customizable to a certain extent. This flutter package was built in order to explore how animations in flutter works.",
    techStack: ["Flutter", "Dart"],
    source: "https://github.com/Four-Cups/FC-Loaders",
    slug: "fc-loaders",
  },
  {
    id: 2,
    URL: "/images/project_hades.png",
    title: "Project HADES",
    oneLineDescription:
      "An AI powered monitoring solution for defence surveillance",
    fullDescription:
      "HADES (Hospitality Analysis for Defence using Empherical Surveillance) is an AI powered solution to replace/aid surveillance near terrorist hotspot areas. This algorithm was built using MaskRCNN architecture to segment the image with masks to provide extra analysis of frames. This solution can easily be scaled to drones and other IoT devices.",
    techStack: ["Python", "PyTorch", "MaskRCNN", "OpenCV"],
    source: "https://github.com/Hemanthhari2000/Project-HADES",
    slug: "project-hades",
  },
  {
    id: 3,
    URL: "https://raw.githubusercontent.com/Hemanthhari2000/chatbot/main/resources/bot.png",
    title: "Chatbot",
    oneLineDescription: "An NLP based Chatbot built using Flask",
    fullDescription:
      "Chatbot based on NLP built from scratch using Python and Flask. This project uses NLP to understand the users input and segregates into intents. Based on this the model is trained and later the trained model predicts the intent of the users text. A response is then generated based on the predicted intent and it is sent back to the user as a resonse from the bot.",
    techStack: ["Python", "HTML", "CSS", "JavaScript", "Dockerfile"],
    source: "https://github.com/Hemanthhari2000/chatbot",
    slug: "chatbot",
  },
  {
    id: 4,
    URL: "/images/music_right.png",
    title: "Music Right",
    oneLineDescription: "A Blockchain based Music Copyright Management System.",
    fullDescription:
      "A Music Copyright Management System that keeps track of every song in the blockchain to avoid copyright claims. This project was built using Django in order to understand the core concepts of Blockchain. The design of the application is simple and explains the concepts of blockchain visually.",
    techStack: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    source: "https://github.com/Hemanthhari2000/music_right_blockchain",
    slug: "music-right",
  },
  {
    id: 5,
    URL: "/images/anime_gan.png",
    title: "Anime GAN",
    oneLineDescription:
      "Deep Convolutional Generative Adversarial Networks using Anime Dataset",
    fullDescription:
      "This project deals with generation of images especially anime faces using DCGANs. The project mainly focuses on understanding DCGANs from the original paper. This project is built using PyTorch for faster and better performance. Images are trained on two different models,  Generator and Discriminator respectively and the losses are reduced in order to produce quality images.",
    techStack: ["Python", "PyTorch", "Jupyter Notebook"],
    source:
      "https://github.com/Hemanthhari2000/pytorch_basics/tree/main/Anime_GANs_PyTorch",
    slug: "anime-gan",
  },
  {
    id: 6,
    URL: "/images/extractfg.png",
    title: "ExtractFG",
    oneLineDescription:
      "A web based application that uses AI to extract foreground from background",
    fullDescription:
      "ExtractFG is a clone project attempt of remove.bg. This project uses custom model to detect/segment the foreground from the background and then extracting only the foreground. This application is built on Flask and uses Deep Lab V3 ResNet101 model for inference. The algorithm segments the foreground from the background and masks the foreground. This foreground is then extracted as the final image.",
    techStack: ["Python", "HTML", "CSS", "OpenCV"],
    source: "https://github.com/Hemanthhari2000/extractfg",
    slug: "extractfg",
  },
  {
    id: 7,
    URL: "/images/replace_video_bg.png",
    title: "Replace Video BG",
    oneLineDescription: "Replaces your video background in live camera feed",
    fullDescription:
      "Replace Video BG is a project similar to ExtractFG but it replaces live video/camera feed background with custom video. This algorithm uses Semantic Segmentation of images with PixelLib using Pascalvoc model. As in this usecase we do not need any instances of the detected images hence we do not prefer instance segmentation, semantic segmentation is sufficient for this task. It segments the foreground and then adds it to the video background thus, replacing the video background in real-time.",
    techStack: ["Python", "OpenCV"],
    source:
      "https://github.com/Hemanthhari2000/replace_video_background_opencv",
    slug: "replace-video-bg",
  },
  {
    id: 8,
    URL: "/images/sorting_viz.png",
    title: "Sorting Viz",
    oneLineDescription:
      "Flutter application that visualizes different sorting algorithms",
    fullDescription:
      "It is a Flutter application that is used to visualize sorting algorithms. This project uses a bunch of sorting algorithms and leverages the flutter's animation capabilities to perfrom sorting. The app allows us to control the speed of the sorting algorithm and allow programmers to visually look at how these algorithms work in real life. This project was an attempt to understand sorting algorithms better.",
    techStack: ["Flutter", "Dart"],
    source: "https://github.com/Hemanthhari2000/Sorting_Visualizer_Flutter",
    slug: "sorting-viz",
  },
  {
    id: 9,
    URL: "/images/steganography_app.png",
    title: "Steganography App",
    oneLineDescription:
      "This app allows you to hide your messages in an image and later decode it",
    fullDescription:
      "This project allows users to encrypt informations as an image and later decode the information from the image. It uses steganography where we encode data in images such that the images do not loose the quality but still holds the content given. This image can be sent and it looks like a normal image being sent out. Later we can decode the same. This project was built using Flask",
    techStack: ["Python", "HTML", "Flask"],

    source: "https://github.com/Hemanthhari2000/image_steganography_app",
    slug: "steganography-app",
  },
  {
    id: 10,
    URL: "/images/contrib-3d.png",
    title: "Contrib 3D",
    oneLineDescription:
      "This app allows you to view your Github contributions as a 3D model.",
    fullDescription:
      "This application allows developers to view their Github contributions graph as a 3d model. It uses Three.js for the 3d model generation and it is built using Next.js. Since, this app deals with the contribution data of developers from github, it is exclusive for developers. The generated 3d model/graph can also be downloaded as a .glb file, which is supported by most of the 3D softwares available.",
    techStack: ["Three.js", "Next.js"],

    source: "https://github.com/Hemanthhari2000/contrib-3d",
    slug: "contrib-3d",
  },
];
