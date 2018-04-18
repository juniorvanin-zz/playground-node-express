import igdb from 'igdb-api-node'

const client = igdb('590f8af72747b218f501351a2d3dae79')

const getAll = async () => {
  const response = await client.games(
    {
      filters: {
          'release_dates.date-lt': '2018-01-01'
      },
      fields: "*",
      limit: 30,
      offset: 0,
      order: 'release_dates.date:desc',
    }
  )

  return response
}

export {
  getAll
}
