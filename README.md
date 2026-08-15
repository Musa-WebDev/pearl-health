# Pearl Health Demo Website

This repository contains a client demo website for `Pearl's Primary Health Care Clinic`, built with Next.js App Router and Tailwind CSS.

The demo is based on:

- the website proposal for the clinic
- the company profile and service portfolio

## Included pages

- `Home`
- `About`
- `Services`
- `Patient Experience`
- `Team`
- `Contact`

## Demo notes

Some business details were not yet finalised in the supplied documents. The site therefore keeps these as clear placeholders so they can be updated later without changing the layout:

- practitioner details and registration information
- clinic address
- phone and WhatsApp numbers
- operating hours
- appointment instructions

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Deployment

This project is ready for Vercel deployment.

Recommended flow:

1. Push the repository to GitHub.
2. Import the GitHub repo into Vercel.
3. Keep the default Next.js build settings.
4. Add the final clinic domain later if needed.

## Content sources

The current site content is structured from the supplied proposal and company profile, including:

- clinic positioning
- mission, vision and values
- service categories
- patient experience flow
- maroon-and-silver visual direction

## Next updates

Before client launch, replace the placeholders with the final confirmed clinic details and add:

- final logo files
- practitioner profile and headshot
- working phone and WhatsApp links
- real map embed
- confirmed operating hours
