export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615b33329b235b158efa9fef',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-as1xj9ad',
                  apiId: '9cc1256d-90fe-46f6-90b9-635b454e2316'
                },
                {
                  buildHookId: '615b333385a4980fdf10bb0e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-rdrjeohj',
                  apiId: 'bf5a252e-48ec-432c-b60e-dc60c81086a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geralt-sanity/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-rdrjeohj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
