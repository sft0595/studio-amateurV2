const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `tkottta/${id}`;

const unsplashPhotos = [
   { id: "teracotta (1).jpg", width: 780, height: 1080 },
   { id: "teracotta (2).jpg", width: 780, height: 1080 },
   { id: "teracotta (5).jpg", width: 1080, height: 780 },
   { id: "teracotta (19).jpg", width: 780, height: 1080 },
   { id: "teracotta (21).jpg", width: 780, height: 1080 },
   { id: "teracotta (4).jpg", width: 1080, height: 780 },
   { id: "teracotta (15).jpg", width: 780, height: 1080 },
   { id: "teracotta (17).jpg", width: 780, height: 1080 },
   { id: "teracotta (6).jpg", width: 1080, height: 480 },
   { id: "teracotta (18).jpg", width: 780, height: 1080 },
   { id: "teracotta (7).jpg", width: 1080, height: 780 },
   { id: "teracotta (20).jpg", width: 780, height: 1080 },
   { id: "teracotta (3).jpg", width: 1080, height: 780 },
   { id: "teracotta (8).jpg", width: 1080, height: 780 },
   { id: "teracotta (22).jpg", width: 780, height: 1080 },
   { id: "teracotta (9).jpg", width: 1080, height: 780 },
   { id: "teracotta (10).jpg", width: 780, height: 1080 },
   { id: "teracotta (12).jpg", width: 1080, height: 780 },
   { id: "teracotta (13).jpg", width: 1080, height: 780 },
   { id: "teracotta (16).jpg", width: 1080, height: 780 },
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
