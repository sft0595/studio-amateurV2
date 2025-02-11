const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `appartments/Mr. Nijamuddin/${id}`;

const unsplashPhotos = [
   { id: "1.png", width: 1080, height: 1080 },
   { id: "2.png", width: 1080, height: 1080 },
   { id: "3.png", width: 1080, height: 1080 },
   { id: "4.png", width: 1080, height: 1080 },
   { id: "5.png", width: 1080, height: 1080 },
   { id: "6.png", width: 1080, height: 1080 },
   { id: "7.png", width: 1080, height: 1080 },
   { id: "8.png", width: 1080, height: 1080 },
   { id: "9.png", width: 1080, height: 1080 },
   { id: "10.png", width: 1080, height: 1080 },
   { id: "11.png", width: 1080, height: 1080 },
   { id: "12.png", width: 1080, height: 1080 },
   { id: "13.png", width: 1080, height: 1080 },
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
