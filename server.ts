import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 8000 });
console.log("HTTP webserver running. Access it at: http://localhost:8000/");

for await (const request of server) {
  request.respond({ body: await Deno.readTextFile("index.html") });
}
