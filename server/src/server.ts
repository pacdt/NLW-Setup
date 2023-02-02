import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./lib/routes";

const app = Fastify();


app.register(cors)
app.register(appRoutes)

app.listen(process.env.PORT || 3333).then(() => {
    console.log("HTTP Server Running!\nOn http://localhost:3333")
})
