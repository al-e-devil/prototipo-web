exports.routes = {
    category: 'main',
    path: '/song',
    parameter: ['q'],
    method: 'get',
    execution: async (req, res) => {
       const { q } = req.query

       res.json({json: "a"})
    },
    error: false
 }