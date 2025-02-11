const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `j to d/${id}`;

const unsplashPhotos = [
   { id: "jtod (1).jpg", width: 780, height: 1080 },
   { id: "jtod (12).jpg", width: 780, height: 1080},
   { id: "jtod (9).jpg", width: 1080, height: 780 },
   { id: "jtod (3).jpg", width: 780, height: 1080 },
   { id: "jtod (11).jpg", width: 480, height: 1080 },
  { id: "jtod (4).jpg", width: 780, height: 1080 },
  { id: "jtod (10).jpg", width: 780, height: 1080 },
  { id: "jtod (13).jpg", width: 1080, height: 780 },
  { id: "jtod (7).jpg", width: 1080, height: 780 },
  { id: "jtod (5).jpg", width: 1080, height: 780 },
  { id: "jtod (15).jpg", width: 1080, height: 780 },
  { id: "jtod (6).jpg", width: 1080, height: 780 },
  { id: "jtod (8).jpg", width: 1080, height: 780 },
];

const photos = unsplashPhotos.map((photo) => {
   const width = breakpoints[0];
   const height = (photo.height / photo.width) * width;

   return {
      src: unsplashLink(photo.id, width, height),
      width,
      height,
      images: breakpoints.map((breakpoint) => {
         const height = Math.round((photo.height / photo.width) * breakpoint);
         return {
            src: unsplashLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
         };
      }),
   };
});

export default photos;
