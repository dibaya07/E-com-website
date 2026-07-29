import { createClient } from "redis";

// export const redis = createClient({
//     username: process.env.REDIS_USERNAME,
//     password: process.env.REDIS_PASSWORD,
//     socket: {
//         host: process.env.REDIS_HOST,
//         port:Number(process.env.REDIS_PORT)
//     }
//     });
export const redis = createClient({
  url: process.env.REDIS_URL,
});

redis.on("error", (err) => console.log("Redis Error:", err));

await redis.connect();

// const client = createClient({
//     username: 'default',
//     password: '*******',
//     socket: {
//         host: 'retroclean-library-jadeite-57254.db.redis.io',
//         port: 19637
//     }
// });