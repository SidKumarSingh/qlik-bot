module.exports = (app) => {
	app.post('/query', (req, res) => {
	 	if(req.body.queryResult.action === 'get_data') {
			var kpi = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.kpi ? req.body.queryResult.parameters.kpi : 'Unknown';
		} else {
			var kpi = 'Unknown';
		};
	 	if(kpi==='Unknown') {
			return res.json({
				"fulfillmentText": "KPI not found",
				'source': 'Qlik Sense'
			});
		} else {
			return res.json({
				'fulfillmentText': "We found KPI revenue for you",
				'source': 'Qlik Sense'
			});
		};
	}); 
};