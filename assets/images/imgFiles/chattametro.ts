const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
`restaurants/chattaMetro/${id}`;

const unsplashPhotos = [
   { id: "chatta_metro (1).jpg", width: 960, height: 720 },
   { id: "chatta_metro (15).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (16).jpg", width: 1080, height: 780 },
  { id: "chatta_metro (4).jpg", width: 1080, height: 780 },
  { id: "chatta_metro (5).jpg", width: 1080, height: 780 },
  { id: "chatta_metro (6).jpg", width: 1080, height: 780 },
  { id: "chatta_metro (11).jpg", width: 780, height: 1080 },
  { id: "chatta_metro (10).jpg", width: 780, height: 1080 },
   { id: "chatta_metro (7).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (8).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (21).jpg", width: 1080, height: 780},
   { id: "chatta_metro (9).jpg", width: 780, height: 1080 },
   { id: "chatta_metro (12).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (13).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (14).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (17).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (18).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (19).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (31).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (25).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (26).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (20).jpg", width: 1080, height: 780 },
   { id: "chatta_metro (32).jpg", width: 1080, height: 780 },
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
