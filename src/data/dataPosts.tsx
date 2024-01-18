import { IPost } from "@/types/Post.interface";

export const dataPosts: IPost[] = [
  {
    id: 26,
    videoSrc: "/img/test/video/video_46.mp4",
    orientation: "h",
    statistic: {
      likes: 428,
      comments: 185,
      repost: 358,
    },
    title: (game, nickname, price) => {
      return `${nickname} conquered ${game} with this save! Try it for only ${price}$ and prove your Mastery!`;
    },

    account: {
      username: "zara",
      avatarPath: "/img/dev/brands/b-4.jpg",
    },
    look: [
      {
        imgPath: "/img/dev/clothes/c-1.jpg",
        name: "Striped faux fur sweater",
        price: 18.99,
        sizes: [
          {
            size: "S",
            available: true,
          },
          {
            size: "M",
            available: true,
          },
          {
            size: "L",
            available: false,
          },
          {
            size: "XL",
            available: true,
          },
          {
            size: "ML",
            available: true,
          },
          {
            size: "SL",
            available: true,
          },
        ],
      },
      {
        imgPath: "/img/dev/clothes/c-2.jpg",
        name: "Loose fit jeans",
        price: 20.99,
        sizes: [
          {
            size: "34",
            available: true,
          },
          {
            size: "36",
            available: true,
          },
          {
            size: "38",
            available: true,
          },
          {
            size: "40",
            available: true,
          },
          {
            size: "42",
            available: false,
          },
          {
            size: "44",
            available: true,
          },
        ],
      },
    ],
  },
  {
    id: 44,
    videoSrc: "/img/test/video/video_47.mp4",
    orientation: "h",
    statistic: {
      likes: 428,
      comments: 185,
      repost: 358,
    },
    title: (game: string, nickname: string, price: number) => {
      return `Unlock ${nickname}'s winning Moment: experience it for just ${price}$ and show your skills!`;
    },

    account: {
      username: "nike",
      avatarPath: "/img/dev/brands/b-4.jpg",
    },
    look: [
      {
        imgPath: "/img/dev/clothes/c-2.jpg",
        name: "Nike Sneakers",
        price: 129.99,
        sizes: [
          { size: "US 7", available: true },
          { size: "US 8", available: false },
          { size: "US 9", available: true },
          { size: "US 10", available: true },
          { size: "US 11", available: false },
        ],
      },
      {
        imgPath: "/img/dev/clothes/c-2.jpg",
        name: "Nike T-Shirt",
        price: 29.99,
        sizes: [
          { size: "S", available: true },
          { size: "M", available: false },
          { size: "L", available: true },
          { size: "XL", available: true },
        ],
      },
    ],
  },
  {
    id: 39,
    videoSrc: "/img/test/video/video_48.mp4",
    orientation: "h",
    statistic: {
      likes: 428,
      comments: 185,
      repost: 358,
    },
    title: (game: string, nickname: string, price: number) => {
      return `Challenge accepted: ${nickname}'s moment available for only ${price}$! Can you outdo ${nickname}?`;
    },
    account: {
      username: "champion",
      avatarPath: "/img/dev/brands/b-4.jpg",
    },
    look: [
      {
        imgPath: "",
        name: "Champion Hoodie",
        price: 35.99,
        sizes: [
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: false },
          { size: "XL", available: true },
        ],
      },
      {
        imgPath: "",
        name: "Champion Sweatpants",
        price: 25.99,
        sizes: [
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: false },
          { size: "XL", available: true },
        ],
      },
    ],
  },
  {
    id: 41,
    videoSrc: "/img/test/video/video_49.mp4",
    orientation: "h",
    statistic: {
      likes: 428,
      comments: 185,
      repost: 358,
    },
    title: (game: string, nickname: string, price: number) => {
      return `Experience fastest victory: ${nickname}'s game save available now for only ${price}$! Can you beat that time?`;
    },
    account: {
      username: "stillyoung",
      avatarPath: "/img/dev/brands/b-4.jpg",
    },
    look: [
      {
        imgPath: "",
        name: "Still Young Jacket",
        price: 45.99,
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: false },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: false },
        ],
      },
      {
        imgPath: "",
        name: "Still Young Jeans",
        price: 32.99,
        sizes: [
          { size: "28", available: true },
          { size: "30", available: false },
          { size: "32", available: true },
          { size: "34", available: true },
          { size: "36", available: false },
        ],
      },
    ],
  },
  {
    id: 42,
    videoSrc: "/img/test/video/video_50.mp4",
    orientation: "h",
    statistic: {
      likes: 428,
      comments: 185,
      repost: 358,
    },
    title: (game: string, nickname: string, price: number) => {
      return `Master the ${game}: ${nickname}'s save available for ${price}$! See if you can do better.`;
    },
    account: {
      username: "puma",
      avatarPath: "/img/dev/brands/b-4.jpg",
    },
    look: [
      {
        imgPath: "",
        name: "Puma Sneakers",
        price: 79.99,
        sizes: [
          { size: "US 6", available: true },
          { size: "US 7", available: true },
          { size: "US 8", available: false },
          { size: "US 9", available: true },
          { size: "US 10", available: true },
        ],
      },
      {
        imgPath: "",
        name: "Puma Cap",
        price: 19.99,
        sizes: [{ size: "One Size", available: true }],
      },
    ],
  },
  {
    id: 27,
    videoSrc: "/img/test/video/video_51.mp4",
    orientation: "h",
    statistic: {
      likes: 428,
      comments: 185,
      repost: 358,
    },
    // gameTag: "Tenet Of The Spark",
    title: (game: string, nickname: string, price: number) => {
      return `${nickname}'s triumph is yours for only ${price}$! Can you top it?`;
    },
    account: {
      username: "adidas",
      avatarPath: "/img/dev/brands/b-4.jpg",
    },
    look: [
      {
        imgPath: "",
        name: "Adidas Tracksuit",
        price: 59.99,
        sizes: [
          { size: "S", available: true },
          { size: "M", available: false },
          { size: "L", available: true },
          { size: "XL", available: true },
        ],
      },
      {
        imgPath: "",
        name: "Adidas Sneakers",
        price: 69.99,
        sizes: [
          { size: "US 8", available: true },
          { size: "US 9", available: false },
          { size: "US 10", available: true },
        ],
      },
    ],
  },
  // {
  //   id: 45,
  //   videoSrc: "/img/test/video/video_52.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 46,
  //   videoSrc: "/img/test/video/video_46.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 47,
  //   videoSrc: "/img/test/video/video_47.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 48,
  //   videoSrc: "/img/test/video/video_48.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 49,
  //   videoSrc: "/img/test/video/video_49.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 50,
  //   videoSrc: "/img/test/video/video_50.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 51,
  //   videoSrc: "/img/test/video/video_51.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 52,
  //   videoSrc: "/img/test/video/video_52.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 53,
  //   videoSrc: "/img/test/video/video_53.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 54,
  //   videoSrc: "/img/test/video/video_54.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 55,
  //   videoSrc: "/img/test/video/video_55.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 56,
  //   videoSrc: "/img/test/video/video_56.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 57,
  //   videoSrc: "/img/test/video/video_57.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 58,
  //   videoSrc: "/img/test/video/video_58.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 59,
  //   videoSrc: "/img/test/video/video_59.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 60,
  //   videoSrc: "/img/test/video/video_60.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 61,
  //   videoSrc: "/img/test/video/video_61.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 62,
  //   videoSrc: "/img/test/video/video_62.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 63,
  //   videoSrc: "/img/test/video/video_63.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 64,
  //   videoSrc: "/img/test/video/video_64.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 65,
  //   videoSrc: "/img/test/video/video_65.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 66,
  //   videoSrc: "/img/test/video/video_66.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
  // {
  //   id: 67,
  //   videoSrc: "/img/test/video/video_67.mp4",
  //   orientation: "v",
  //   statistic: {
  //     likes: 428,
  //     comments: 185,
  //     repost: 358,
  //   },
  // },
];
