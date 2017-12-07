/*
 |--------------------------------------------------------------------------
 | Require all todos
 |--------------------------------------------------------------------------
 */

const appRootPath = require('app-root-path');

let todoList = appRootPath.require('models/todo.js');

module.exports = {
    /**
     *  Show todo list.
     *
     * @param req
     * @param res
     * @return
     */
    index: (req, res) => {
        res.render('pages/list.pug', {todoList: todoList});
    },
};