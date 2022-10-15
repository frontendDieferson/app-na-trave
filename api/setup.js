import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import { router } from './router.js'

export const app = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())


//Aula 03: continuar assistindo apartir do 1:18:12