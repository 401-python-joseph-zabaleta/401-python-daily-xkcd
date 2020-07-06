export default (req, res) => {
    res.statusCode = 200

    const comics = [
        {id: 1, name: 'Batman', type: 'comic'},
        {id: 2, name: 'Flash', type: 'comic'},
        {id: 3, name: 'Superman', type: 'comic'},
        {id: 4, name: 'Green Arrow', type: 'comic'},
      ]

    const comic = comics[parseInt(req.query.id)-1];

    res.json(comic);

}