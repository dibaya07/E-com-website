import { createClient } from "redis";

export const redis = createClient({
    username: 'default',
    password: '46wHGVEXWDxbWpjvNI7NUYnFcQGzfJke',
    socket: {
        host: 'retroclean-library-jadeite-57254.db.redis.io',
        port: 19637
    }
    });
// export const redis = createClient({
//   url: process.env.REDIS_URL,
// });

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