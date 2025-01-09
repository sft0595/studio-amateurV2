const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `restaurants/saadMoosa/${id}`;

const unsplashPhotos = [
   { id: "saadmoosa (1).png", width: 1080, height: 780 },
   { id: "saadmoosa (2).png", width: 1080, height: 780 },
   { id: "saadmoosa (3).png", width: 1080, height: 780 },
   { id: "saadmoosa (4).png", width: 1080, height: 780 },
   { id: "saadmoosa (5).png", width: 1080, height: 780 },
   { id: "saadmoosa (6).png", width: 1080, height: 780 },
   { id: "saadmoosa (7).png", width: 1080, height: 780 },
   { id: "saadmoosa (8).png", width: 1080, height: 780 },
   { id: "saadmoosa (9).png", width: 1080, height: 780 },
   { id: "saadmoosa (10).png", width: 1080, height: 780 },
   { id: "saadmoosa (11).png", width: 1080, height: 780 },
   { id: "saadmoosa (12).png", width: 1080, height: 780 },
   { id: "saadmoosa (13).png", width: 1080, height: 780 },
   { id: "saadmoosa (14).png", width: 1080, height: 780 },
   { id: "saadmoosa (15).png", width: 1080, height: 780 },
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
