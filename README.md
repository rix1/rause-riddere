# Rause Riddere w/votes

This is a site that let you read and vote on different principles from the "manifest" of
"Rause Riddere", an ethos jokingly created by [Erlend & Steinar](https://radio.nrk.no/podkast/baade_erlend_og_steinar_/l_edf54d11-d100-4c12-b54d-11d100fc12f9) (a
Norwegian podcast on NRK).


![CleanShot 2024-05-05 at 19 07 53@2x](https://github.com/rix1/rause-riddere/assets/2470775/96a03409-3363-4ba1-bdf2-8830b75a0c47)



### Developing

This was made with Deno Fresh and Deno KV.

To run locally, make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

#### Seeding the database

Start Deno in your shell from the root directory by running `deno`, and paste the following:

```
import * as DB from './models/db.ts'
await DB.seed()
```

This will seed your database and reset all votes.

### Similar projects

- The main idea is inspired by https://www.rauseriddere.no/. I was missing the
  ability to vote on the different statements, which is why I made this.
