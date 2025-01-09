const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `appartments/Mr. AJIJ/${id}`;

const unsplashPhotos = [
   { id: "Live (1).jpg", width: 1080, height: 608 },
   { id: "Live (2).jpg", width: 1080, height: 608 },
   { id: "Live (3).jpg", width: 1080, height: 608 },
   { id: "Live (4).jpg", width: 1080, height: 608 },
   { id: "Live (5).jpg", width: 1080, height: 608 },
   { id: "Live (6).jpg", width: 1080, height: 608 },
   { id: "Live (7).jpg", width: 1080, height: 608 },
   { id: "Live (8).jpg", width: 1080, height: 608 },
   { id: "Live (9).jpg", width: 1080, height: 608 },
   { id: "Live (10).jpg", width: 1080, height: 608 },
   { id: "Live (11).jpg", width: 1080, height: 608 },
   { id: "Live (12).jpg", width: 1080, height: 608 },
   { id: "Live (13).jpg", width: 1080, height: 608 },
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
