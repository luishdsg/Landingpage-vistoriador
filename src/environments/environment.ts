// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  payloadKey: '57b0e476-142c-4762-8547-140b65cb1e9c',
  apis: {
    imoveistock: 'https://api.imoveistock.com.br/',    
  },
  redirect: {
    link: 'https://imoveistock-kjeth28zd-tgt.vercel.app/',
    linkComplement: '/auth/login-or-register',
    vitrine: `https://www.imoveistock.com.br/`
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
