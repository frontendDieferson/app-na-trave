import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from '@koa/cors'

import { router } from "./router.js";

export const app = new Koa();


app.use(cors())
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

//Aula 03: continuar assistindo apartir do 1:18:12[x]
//Continuar aula apartir do 1:57:00