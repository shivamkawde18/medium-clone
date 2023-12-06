
  /** @type {import('next').NextConfig} */
  const { withGluestackUI } = require('@gluestack/ui-next-adapter');
  
  const nextConfig = {
    reactStrictMode: true,
    // module: {
    //   rules: [
    //     {
    //       test: /\.tsx?$/,
    //       use: 'ts-loader',
    //       exclude: /node_modules/,
    //     },
    //   ],
    // },
    // resolve: {
    //   extensions: ['.tsx', '.ts', '.js', '.jsx'],
    // },
    
  
  };
  
  module.exports = withGluestackUI(nextConfig);
  