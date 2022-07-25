# Internal Documentation

This activity required a workaround found [here](https://docs.next.tech/creator/how-tos/environment-set-up/create-a-content-with-files-over-100mb).

Using react with NPM goes over the 100mb limit of NextTech.

Key points:

- Add `node_modules` to the file save exclusion.
- From the startup script, download and extract `node_modules` from cloud storage then `npm start`

For the `node_modules` I made a blank NPM project on my machine and `npm install` all the deps then zip'd.
