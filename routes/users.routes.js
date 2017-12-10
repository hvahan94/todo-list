/*
 |--------------------------------------------------------------------------
 | Export all routes.
 |--------------------------------------------------------------------------
 */
export default {

    "/": {
        action: "UserController#index",
        method: "get"
    },

    "/add": {
        action: "UserController#add",
        method: "get"
    },

    "/edit/:userId": {
        action: "UserController#edit",
        method: "get"
    },

    "/store": {
        action: "UserController#store",
        method: "post"
    },

    "/update/:userId": {
        action: "UserController#update",
        method: "post"
    },

    "/delete/:userId": {
        action: "UserController#delete",
        method: "delete"
    },

}