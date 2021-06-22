import faunadb, { query as q } from 'faunadb';

require('dotenv').config();

const client = new faunadb.Client({ secret: 'fnAEMDb0cDACBN5PrpQlErjDqEjPEuuszteP3FY2' });

export { client, q };
