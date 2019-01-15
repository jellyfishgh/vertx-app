import { Router } from '@vertx/web'

const app = Router.router(vertx)

app.route('/').handler(function(ctx) {
  ctx.response().end('Hello from Vert.x Web!')
})

vertx
  .createHttpServer()
  .requestHandler(app)
  .listen(8080)
