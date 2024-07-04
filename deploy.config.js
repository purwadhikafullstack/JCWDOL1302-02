module.exports = {
    apps: [
      {
        name: 'jcwdol130202-web',
        script: 'npm',
        args: 'run serve',
        env: {
          PORT: 2706,
          NODE_ENV: 'production',
        },
        cwd: '/var/www/html/jcwdol130202.purwadhikabootcamp.com/apps/web',
      },
      {
        name: 'jcwdol130202-api',
        script: 'npm',
        args: 'run serve',
        env: {
          PORT: 2806,
          NODE_ENV: 'production',
        },
        cwd: '/var/www/html/jcwdol130202.purwadhikabootcamp.com/apps/api',
      },
    ],
}
