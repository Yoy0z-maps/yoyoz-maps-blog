export type AppInfo = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  accent: string;
  soft: string;
  icon: string;
  storeUrl: string | null;
  playStoreUrl?: string;
  screens: string[];
  screenLabels: string[];
  features: string[][];
  faqs: string[][];
  privacy: string | null;
};

export const apps: AppInfo[] = [
  {
    slug: "rovoca",
    name: "ROVOCA",
    eyebrow: "YOUR WORDS, YOUR WORLD",
    headline: "기억하고 싶은 단어,\n나만의 언어가 되도록.",
    description:
      "새로 만난 단어를 기록하고, 게임으로 다시 만나세요. 단어장부터 사전, 학습 달력까지. 나에게 필요한 어휘를 차곡차곡 쌓는 공간입니다.",
    accent: "#6256d9",
    soft: "#efedff",
    features: [
      [
        "나만의 단어장",
        "단어와 뜻, 설명을 함께 기록하고 주제별 단어장으로 정리하세요. 즐겨찾기로 중요한 어휘를 모아볼 수 있어요.",
      ],
      [
        "외우는 대신, 플레이",
        "행맨과 퀴즈 등 단어 게임으로 내가 저장한 어휘를 복습하세요. 뜻을 가리고 기억을 확인하는 연습도 함께할 수 있어요.",
      ],
      [
        "찾고, 듣고, 돌아보기",
        "사전에서 뜻과 예문, 발음을 확인하고 달력에서 날짜별로 기록한 단어를 다시 찾아보세요.",
      ],
    ],
    faqs: [
      [
        "단어는 어떻게 추가하나요?",
        "홈에서 단어장을 선택하고 단어와 뜻을 입력한 뒤 추가하세요. 설명은 필요할 때 함께 적을 수 있습니다.",
      ],
      [
        "게임이 시작되지 않아요.",
        "게임에 사용할 단어가 충분히 저장되어 있는지 확인해 주세요. 단어장에 단어와 뜻을 추가한 후 다시 시도하세요.",
      ],
      [
        "단어장이나 로그인이 정상적으로 표시되지 않아요.",
        "인터넷 연결을 확인하고 앱을 다시 실행해 주세요. 이전에 사용했던 로그인 계정인지 확인한 후, 문제가 계속되면 기기와 앱 버전, 오류 화면을 이메일로 보내주세요.",
      ],
      [
        "계정을 삭제하고 싶어요.",
        "앱의 프로필에서 회원탈퇴를 선택할 수 있습니다. 계정과 관련 데이터가 삭제되므로 필요한 내용을 먼저 확인해 주세요.",
      ],
    ],
    privacy: "/apps/rovoca/privacy",
    screenLabels: [
      "나만의 어휘 학습",
      "단어를 기록하는 공간",
      "기록한 단어 다시 보기",
      "게임으로 복습",
      "매일의 학습 기록",
    ],
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/de/90/d7/de90d7a5-ad58-b4d8-5d07-2732b956830c/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
    storeUrl: "https://apps.apple.com/kr/app/rovoca/id6748971202?uo=4",
    screens: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f3/23/ba/f323ba60-1b72-0373-78ee-77aec32dbcfe/6.7__U00281_U0029.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a6/aa/6d/a6aa6d2c-b6e4-7843-f848-247e2e4a5b91/6.7__U00282_U0029.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b9/3f/14/b93f1477-bd8e-a91d-7792-9ce6962368fb/6.7__U00283_U0029.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/25/b5/7f/25b57f36-0fbd-7a36-6880-f868d12a385c/6.7__U00284_U0029.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/95/12/f3/9512f386-953b-25ce-ae13-3c8d5a306fb8/6.7__U00285_U0029.png/320x480bb.jpg",
    ],
  },
  {
    slug: "daily-english-sentence",
    name: "오늘의 문장",
    eyebrow: "ONE SENTENCE, EVERY DAY",
    headline: "하루 한 문장,\n영어가 일상이 되는 시간.",
    description:
      "오늘의 영어 표현을 만나고, 좋아하는 문장을 저장하세요. 짧은 복습과 학습 기록, 홈 화면 위젯으로 매일의 작은 배움을 이어갑니다.",
    accent: "#245cce",
    soft: "#eaf1ff",
    features: [
      [
        "오늘의 표현 하나",
        "매일의 영어 표현을 자세히 살펴보고 학습을 완료하세요. 한 번에 많은 양보다 꾸준히 이어가는 습관에 집중합니다.",
      ],
      [
        "저장하고, 다시 기억하기",
        "다시 보고 싶은 문장을 보관하고 학습한 표현을 복습하세요. 틀린 표현을 먼저 돌아보며 기억을 다질 수 있어요.",
      ],
      [
        "일상에 놓인 영어",
        "연속 학습과 누적 기록으로 나의 흐름을 확인하세요. iOS 홈 화면과 잠금 화면 위젯에서 표현을 가까이 만나보세요.",
      ],
    ],
    faqs: [
      [
        "인터넷 없이도 사용할 수 있나요?",
        "오늘의 문장은 인터넷 연결이 필요합니다. 로그인한 계정을 기준으로 학습 완료, 저장 문장, 복습 결과를 관리하므로 연결 상태를 확인해 주세요.",
      ],
      [
        "연속 학습 기록은 어떻게 계산되나요?",
        "하루를 완전히 건너뛰면 현재 연속 학습 일수는 0으로 표시됩니다. 이전의 최장 연속 학습 기록은 유지됩니다.",
      ],
      [
        "복습에는 어떤 표현이 나오나요?",
        "학습을 완료한 표현 중 최대 5개가 제공되며, 아직 해결하지 못한 오답을 먼저 복습합니다. 같은 오답을 2회 연속 맞히면 학습을 마친 상태로 바뀝니다.",
      ],
      [
        "위젯은 어떻게 추가하나요?",
        "iPhone 홈 화면을 길게 누르고 위젯 추가에서 오늘의 문장을 찾아보세요. 잠금 화면은 사용자화에서 위젯을 추가할 수 있습니다. 내용이 갱신되지 않으면 인터넷 연결 후 앱을 다시 열어주세요.",
      ],
      [
        "계정을 삭제하고 싶어요.",
        "앱의 설정에서 회원탈퇴하기를 선택하세요. 삭제 전 필요한 학습 기록을 확인하고, 처리가 실패하면 연결 상태를 확인한 뒤 지원 이메일로 문의해 주세요.",
      ],
    ],
    privacy: "/apps/daily-english-sentence/privacy",
    screenLabels: [
      "오늘의 표현",
      "저장한 문장 라이브러리",
      "홈 화면과 잠금 화면 위젯",
    ],
    icon: "/assets/apps/daily-english-sentence/icon.png",
    storeUrl: "https://apps.apple.com/kr/app/id6809145944",
    screens: [
      "/assets/apps/daily-english-sentence/home.png",
      "/assets/apps/daily-english-sentence/saved.png",
      "/assets/apps/daily-english-sentence/widgets.png",
    ],
  },
  {
    slug: "fine-studio",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.yoy0zmaps.finestudio&hl=ko",
    name: "Fine Studio",
    eyebrow: "FIND YOUR TONE",
    headline: "좋은 연습의 시작,\n당신의 손끝에서.",
    description:
      "음을 맞추고, 박자를 익히고, 새로운 코드를 만나세요. 기타를 든 순간 필요한 도구를 하나에 담은 당신의 연습 파트너입니다.",
    accent: "#227762",
    soft: "#e5f3eb",
    features: [
      [
        "정확한 음정으로 시작",
        "스탠다드와 크로매틱 튜닝, 실시간 음정 게이지로 각 줄의 소리를 확인하세요. 지금 음이 높은지 낮은지 한눈에 볼 수 있어요.",
      ],
      [
        "나만의 템포를 찾기",
        "템포와 박자, 세분화와 악센트를 조절하세요. 탭 템포, 소리와 진동, 원형과 펜듈럼 화면으로 연습에 집중할 수 있어요.",
      ],
      [
        "코드를 알고, 연주하기",
        "코드를 검색하고 운지법을 살펴보세요. 즐겨찾기와 코드 맞추기·연주하기 게임으로 새로운 코드를 익힐 수 있어요.",
      ],
    ],
    faqs: [
      [
        "튜너가 소리를 인식하지 못해요.",
        "기기 설정에서 Fine Studio의 마이크 접근을 허용해 주세요. 주변 소음을 줄이고 한 번에 한 줄씩 연주하면 음정을 확인하기 좋습니다.",
      ],
      [
        "스탠다드와 크로매틱 모드는 무엇이 다른가요?",
        "스탠다드는 기타의 표준 튜닝을 줄별로 확인하는 모드입니다. 크로매틱은 반음 단위의 음을 확인할 수 있어 다른 튜닝을 맞출 때 사용할 수 있습니다.",
      ],
      [
        "메트로놈 소리가 들리지 않아요.",
        "메트로놈의 소리 옵션, 기기 음량, 연결된 이어폰이나 Bluetooth 오디오를 확인해 주세요. 진동과 악센트는 별도로 설정할 수 있습니다.",
      ],
      [
        "찾는 코드가 검색되지 않아요.",
        "Am7, Cdim7, G/B처럼 코드 이름을 입력해 보세요. 대소문자와 표기를 확인하고, 찾은 코드는 상세 화면의 별표를 눌러 즐겨찾기에 저장할 수 있습니다.",
      ],
    ],
    privacy: "/apps/fine-studio/privacy",
    screenLabels: [
      "기타 연습의 시작",
      "정밀 튜너",
      "스마트 메트로놈",
      "기타 코드 라이브러리",
      "코드 학습",
      "연습 도구",
      "나만의 설정",
      "앱 미리보기",
    ],
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4a/bb/91/4abb912b-06a0-00c3-90fb-aa7f869de013/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    storeUrl:
      "https://apps.apple.com/kr/app/fine-studio-%ED%8A%9C%EB%8B%9D%EA%B8%B0-%EB%A9%94%ED%8A%B8%EB%A1%9C%EB%86%88-%EC%BD%94%EB%93%9C%EC%82%AC%EC%A0%84/id6758371923?uo=4",
    screens: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8f/d1/0e/8fd10e49-051c-d561-89b7-dea06f1fed00/6.5_U00281_U0029-kr.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fb/1c/7b/fb1c7b8c-ffff-ce7a-349f-b3bdf37b1825/6.5__U00282_U0029-kr.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1d/45/48/1d454824-44bc-e627-8d91-43f2500d08fd/6.5_U00283_U0029-kr.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/07/02/03/070203b4-5ceb-b788-b832-e756515c4a39/6.5_U00284_U0029-kr.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f3/37/c6/f337c6f0-837c-946e-73c0-ffbf5b0838bf/6.5_U00285_U0029-kr.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0a/d7/41/0ad7411d-0bae-4683-cb1b-31ec5182ffa2/6.5_U00286_U0029-kr.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bc/15/36/bc153606-5ff1-22c3-0630-fdbc883fd150/6.5_U00287_U0029-kr.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e6/b9/97/e6b99732-c3a7-7b26-9c0e-26d278cd6d0b/6.5_U00288_U0029-kr.png/320x480bb.jpg",
    ],
  },
];
