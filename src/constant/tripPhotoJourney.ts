export type JourneyPhoto = {
  path?: string;
  caption: string;
  src: string;
  time: string;
};

export type JourneyMoment = {
  date: string;
  photos: JourneyPhoto[];
  title: string;
};
