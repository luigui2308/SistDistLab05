framux.route('profesores',
           {template:'partials/profesor-list.html',
            controller:'ProfesorList',
            selector:'#content'})
      .route('profesor/:profId',
           {template:'partials/profesor-detail.html',
           controller:'ProfesorDetail',
           selector:'#content'})
	  .route('profNew',
           {template:'partials/profesor-new.html',
		   controller:'ProfesorNew',
           selector:'#content'})
	  .route('profAdd',
           {controller:'ProfesorInsert',
           selector:'#content'})
	  .route('profUpdate/:profId',
           {controller:'ProfesorUpdate',
           selector:'#content'})
	  .route('profDelete/:profId',
		   {controller:'ProfesorDelete',
           selector:'#content'});
framux.go('profesores');