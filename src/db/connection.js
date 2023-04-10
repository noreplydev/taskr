import Postgres from 'pg'

export const connect = async () => {
  // Intialize Postgres instance
  const PostgresInstance = new Postgres.Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    connectionString: process.env.DATABASE_URL
  })

  await PostgresInstance.connect()
    .then(() => {
      process.stdout.write('\n ✓ Connected to Postgres\n')
    })
    .catch((err) => {
      console.log('Error connecting to Postgres')
      console.log(err)
      process.exit(1)
    })

  return PostgresInstance
}
