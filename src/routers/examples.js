exports.routes = {
   category: 'main',
    path: '/song',
    method: 'get',
    execution: async (req, res) => {
       res.json({json: "a"})
    },
    error: false
 }