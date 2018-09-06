import Koa from 'koa'
import {normal} from './tpl/index'

const app = new Koa()

app.use(async (ctx) => {
  ctx.type = 'text/html;charset=utf-8'
  ctx.body = normal
})

app.listen(9527)
