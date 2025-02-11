const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
   `appartments/Engnr. Mr Oli Ahmed/${id}`;

const unsplashPhotos = [
   { id: "EngnOliAhmed (1).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (2).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (5).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (19).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (21).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (4).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (15).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (17).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (6).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (18).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (7).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (20).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (3).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (8).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (22).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (9).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (10).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (12).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (13).png", width: 1080, height: 1080 },
   { id: "EngnOliAhmed (16).png", width: 1080, height: 1080 },
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
