const tables = require("../../database/tables");

const browse = async (req, res) => {
    const programsFromDB = await tables.program.readAll();
    res.json(programsFromDB);
};

const read = (req, res) => {
    const parseId = parseInt(req.params.id, 10);

    const program = tables.program.find((p) => p.id === parseId);

    if (program != null) {
        res.json(program);
    } else {
        res.sendStatus(404);
    }
};

// Export it to import it somewhere else

module.exports = { browse, read };