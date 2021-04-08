module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your Component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
