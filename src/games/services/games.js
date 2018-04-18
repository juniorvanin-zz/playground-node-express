import igdb from 'igdb-api-node'

const client = igdb('')

const getAll = () => {
  return client.games(
    {
      filters: {
          'release_dates.date-lt': '2018-01-01'
      },
      fields: "*",
      limit: 30,
      offset: 0,
      order: 'release_dates.date:desc',
    }
  ).then(
    response => response.body
  )
}

export {
  getAll
}
