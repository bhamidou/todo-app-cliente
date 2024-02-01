import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {


  const token = JSON.parse(localStorage.getItem('user') as string)

  if(token != null && token != undefined){
    
    const peticion = req.clone({
      headers: req.headers.set('x-token',token.token)
    })
    return next(peticion);
  }  else{
    return next(req);

  }
};

