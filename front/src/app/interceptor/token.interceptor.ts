import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token = JSON.parse(localStorage.getItem('user') as string)

  const peticion = req.clone({
    headers: req.headers.set('x-token',token.token).set('d','dd')
  })
  console.log('prueba ahora')

  return next(peticion);
};

