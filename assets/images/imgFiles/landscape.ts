const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `landscape/${id}`;

const unsplashPhotos = [
   { id: "landscape (1).png", width: 1080, height: 780},
   { id: "landscape (2).png", width: 1080, height: 780},
   { id: "landscape (3).png", width: 1080, height: 780},
   { id: "landscape (4).png", width: 1080, height: 780},
   { id: "landscape (5).png", width: 1080, height: 780},
   { id: "landscape (6).png", width: 1080, height: 780},
   { id: "landscape (7).png", width: 1080, height: 780},
   { id: "landscape (8).png", width: 1080, height: 780},
   { id: "landscape (9).png", width: 1080, height: 780},
   { id: "landscape (10).png", width: 1080, height: 780 },
   { id: "landscape (11).png", width: 1080, height: 780 },
   { id: "landscape (12).png", width: 1080, height: 780 },
   { id: "landscape (13).png", width: 1080, height: 780 },
   { id: "landscape (14).png", width: 1080, height: 780 },
   { id: "landscape (15).png", width: 1080, height: 780 },
   { id: "landscape (16).png", width: 1080, height: 780 },
   { id: "landscape (17).png", width: 1080, height: 780 },
   { id: "landscape (18).png", width: 1080, height: 780 },
   { id: "landscape (19).png", width: 1080, height: 780 },
   { id: "landscape (20).png", width: 1080, height: 780 },
   { id: "landscape (21).png", width: 1080, height: 780 },
   { id: "landscape (22).png", width: 1080, height: 780 },
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
