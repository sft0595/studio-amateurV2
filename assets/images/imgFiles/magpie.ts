const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `restaurants/magpie/${id}`;

const unsplashPhotos = [
   { id: "magpie (3).jpg", width: 640, height: 1080 },
   { id: "magpie (4).jpg", width: 480, height: 1080 },
   { id: "magpie (8).jpg", width: 640, height:  1080 },
   { id: "magpie (16).jpg", width: 640, height: 1080 },
   { id: "magpie (13).jpg", width: 780, height: 1080 },
   { id: "magpie (5).jpg", width: 1080, height: 780 },
   { id: "magpie (1).jpg", width: 480, height: 1080 },
   { id: "magpie (6).jpg", width: 640, height: 1080 },
   { id: "magpie (7).jpg", width: 640, height: 1080 },
   { id: "magpie (9).jpg", width: 1080, height: 480},
   { id: "magpie (2).jpg", width: 1080, height: 780 },
  { id: "magpie (10).jpg", width: 1080, height: 480 },
  { id: "magpie (11).jpg", width: 1080, height: 780 },
  { id: "magpie (12).jpg", width: 1080, height: 640 },
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
