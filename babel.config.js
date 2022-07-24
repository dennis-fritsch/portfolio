module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // With this line we do not have to import React in each component - https://stackoverflow.com/a/69834932
      },
    ],
  ],
}
