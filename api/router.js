import Router from '@koa/router'
export const router = new Router()
import { PrismaClient } from '@prisma/client'  

const prisma = new PrismaClient()



router.get('/', async ctx => {
    ctx.body = { ola:'Página Principal'}
})

router.get('/users', async ctx => {
    ctx.body = { ola:'Página de Users'}
})