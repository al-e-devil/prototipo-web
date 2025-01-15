exports.routes = {
   category: 'main',
   path: '/api',
   method: 'get',
   execution: async (req, res) => {
      res.json({ json: "api is running", owner: "alexito" })
   },
   error: false
}
