exports.routes = {
   category: 'main',
   path: '/api',
   method: 'get',
   execution: async (req, res) => {
      res.json({ json: "api is online", owner: "alexito", powered: "Nazi" })
   },
   error: false
}
