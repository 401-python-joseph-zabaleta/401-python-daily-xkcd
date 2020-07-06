// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
    [
      {id: 1, name: 'Batman', type: 'comic'},
      {id: 2, name: 'Flash', type: 'comic'},
      {id: 3, name: 'Superman', type: 'comic'},
      {id: 4, name: 'Green Arrow', type: 'comic'},
    ]
  )
}
