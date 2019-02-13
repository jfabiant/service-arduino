module.exports = function (req, res, handlers) {
	var method = (req.method || '').toLowerCase(); // [2]
	if (!(method in handlers)) {
		res.set('Allow', Object.keys(handlers).join(', ').toUpperCase());
		res.send(405);
	} else {
		handlers[method](req, res);
	}
};
