const sayWelcome = (req, res) => {
    res.send(`Welcome to Wild Series, ${req.query.name} !`);
};

module.exports = { sayWelcome };