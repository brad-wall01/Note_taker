const router = require(`express`).Router();
const notes = requirer(`/notes`);

router.use(`/notes`, notes);

module.exports = router;