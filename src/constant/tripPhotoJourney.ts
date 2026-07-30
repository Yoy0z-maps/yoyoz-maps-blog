export type JourneyPhoto = {
  caption: string;
  src: string;
  time: string;
};

export type JourneyMoment = {
  date: string;
  photos: JourneyPhoto[];
  title: string;
};

export const TRIP_JOURNEY_MOMENTS: JourneyMoment[] = [
  {
    date: "2023.03.18",
    title: "첫 번째 도착",
    photos: [
      {
        caption: "여행지에서 처음 마주한 풍경",
        src: "/assets/images/test/49e9a5eadafaf0b1c2ac4a4b07471ffcc74b35cadb5066f9eeba42eb1de25ff8.webp",
        time: "08:40",
      },
      {
        caption: "낯선 골목을 천천히 걷던 오전",
        src: "/assets/images/liquid-glass-bg.jpg",
        time: "11:20",
      },
      {
        caption: "하루를 마무리한 저녁의 색",
        src: "/assets/images/project/test5.jpeg",
        time: "19:10",
      },
    ],
  },
  {
    date: "2023.09.02",
    title: "늦여름의 산책",
    photos: [
      {
        caption: "바람이 좋았던 오후",
        src: "/assets/images/test/X-g_0AeDF8JemoX-4ALKitt2I4AY2hdKoFK00K_Zl9M4ceNjgUh_qb3CfMEDF2gnJ474_XMMdi0tIuQgFPT36w.webp",
        time: "13:15",
      },
      {
        caption: "잠시 멈춰 남긴 장면",
        src: "/assets/images/about.jpg",
        time: "16:50",
      },
      {
        caption: "도시의 불빛이 켜진 시간",
        src: "/assets/images/project/test6.png",
        time: "20:35",
      },
    ],
  },
  {
    date: "2024.04.27",
    title: "봄날의 기록",
    photos: [
      {
        caption: "가벼운 마음으로 시작한 아침",
        src: "/assets/images/test/c17d30c797ef18b59534bf4e88b3e2e90f2e2b25bbf2a05d00fa231fa07b11b2.webp",
        time: "09:05",
      },
      {
        caption: "오후의 작은 발견",
        src: "/assets/images/project/project-1.jpg",
        time: "14:25",
      },
      {
        caption: "기억하고 싶은 봄의 온도",
        src: "/assets/images/project/project-2.jpg",
        time: "17:40",
      },
    ],
  },
  {
    date: "2024.11.09",
    title: "가을의 끝",
    photos: [
      {
        caption: "조용한 거리에서 맞이한 아침",
        src: "/assets/images/test/channels4_profile.jpg",
        time: "07:55",
      },
      {
        caption: "짙어진 계절의 색",
        src: "/assets/images/project/project-3.jpg",
        time: "15:10",
      },
      {
        caption: "다시 돌아오고 싶은 밤",
        src: "/assets/images/project/project-4.jpg",
        time: "21:30",
      },
    ],
  },
  {
    date: "2025.08.17",
    title: "가장 최근의 여름",
    photos: [
      {
        caption: "설레는 마음으로 떠난 순간",
        src: "/assets/images/project/test1.png",
        time: "10:20",
      },
      {
        caption: "여행 중 우연히 만난 풍경",
        src: "/assets/images/project/test2.png",
        time: "13:45",
      },
      {
        caption: "오래 남겨두고 싶은 마지막 장면",
        src: "/assets/images/project/test4.png",
        time: "18:30",
      },
    ],
  },
];
