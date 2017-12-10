/*
 |--------------------------------------------------------------------------
 | Import user's model.
 |--------------------------------------------------------------------------
 */
import User from '../models/user.model';

class UserController {

    /**
     *  Show all users page.
     *
     * @param req
     * @param res
     */
    async index (req, res)
    {
        User.find()
            .then((users) => res.render('pages/list.pug', {users: users}))
            .catch((e) => res.status(400).json(e))
    }

    /**
     *  Show add new user page.
     *
     * @param req
     * @param res
     */
    async add (req, res) {
        res.render('pages/add.pug');
    }

    /**
     *  Show edit user page.
     *
     * @param req
     * @param res
     */
    async edit (req, res) {
        let { userId } = req.params;

        User.findOne({_id: userId})
            .then((user) => {
                res.render('pages/edit.pug', { user });
            })
            .catch((e) => res.status(400).send(e))

    }

    /**
     *  Store a new user.
     *
     * @param req
     * @param res
     */
     async store (req, res)
    {
        const { first_name, last_name, age} = req.body;

        if (!first_name || !last_name || !age) {

            return res.status(422).send(422);
        }

        new User({
            first_name, last_name, age
        })
        .save()
        .then(res.redirect('/'))
        .catch((e) => res.status(400).send(e))
    }

    /**
     *  Update user by id.
     *
     * @param req
     * @param res
     */
    async update (req, res)
    {
        const { userId } = req.params;
        const { first_name, last_name, age} = req.body;

        User.findOne({_id: userId})
            .update({ first_name, last_name, age})
            .then(res.redirect('/'))
            .catch((e) => res.status(400).send(e))
    }

    /**
     *  Delete user by id.
     *
     * @param req
     * @param res
     */
    async delete (req, res)
    {
        let { userId } = req.params;

        User.findOne({_id: userId})
            .remove()
            .then(res.json('success'))
            .catch((e) => res.status(400).send(e))
    }
}

module.exports = new UserController();