exports.routes = {
   category: 'main',
   path: '/',
   method: 'get',
   execution: async (req, res) => {
      res.status(200).render('welcome')
   },
   error: false
}