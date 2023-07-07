This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[![Netlify Status](https://api.netlify.com/api/v1/badges/8419e468-1bb4-4e03-9e1d-b066e4f0a895/deploy-status)](https://app.netlify.com/sites/shofeur-home-assessment-demo/deploys)

# Thank you for your consideration.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


------------------------


## Overview

This app uses below.
## `Next.js` + `Typescript` + `TailwindCSS`

 - [Next.js](https://nextjs.org)
 - [Typescript](https://www.typescriptlang.org)
 - [Tailwind CSS](https://tailwindcss.com)

Created a `create-next-app` with `typescript`.

Integrated `TailwindCSS`.

Used [Google places api](https://developers.google.com/maps/documentation/places/web-service/overview) service to enhance the user experience by providing accurate and relevant location data in location search bar.

It's debounced for 0.7s for every typing detection.

Implemented lazy loading for images and card components that could cause the delay to be fully loaded in the page.

After once the user put a location and goes into the location page, the page detects router parameter which has information of what location the user chose.

The location page uses the [Unplash Image Api](https://unsplash.com/documentation) service to land the corresponding image for arbitrarily chosen location.

I couldn't utilize any data from sufficient resource as I can't access Shofeur's database. So I created static data structure limited in the `config.ts` file inside `src` directory.

For any location page, the marketing product list is static and the information about each buses, cars are stick.

On this location page, an user can go into any item detail by clicking on the card and then the detail page would come out.

On the detail page, the parameter - `id` of the marketing product will be detected and the page is managed by the CMS principle with static layout and component, only with different content.

## Note

Customized components such as `Card`, `CardSkeleton`, `FilterItemWrapper`, `Header`, `ImageSkeleton` have been created and used to avoid code dulication and increase the productivity.

Also used `axios` NPM module for api requests and `@material-tailwind/react` for built-in tailwind-react components open-sourced.

This codebase is using Eslint for Typescript and all code lines are linted as more comprehensible as the rules are defined inside `.eslintrc.json` to try following the best code standard of practices and coding conventions.

## Demo

[Live Demo Here](https://64a4256299f6670edaebe357--shofeur-home-assessment-demo.netlify.app)
