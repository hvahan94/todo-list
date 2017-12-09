/*
 |--------------------------------------------------------------------------
 | Export all routes.
 |--------------------------------------------------------------------------
 */
export default {
  "/": "UserController#index",
  "/add": "UserController#add",
  "/store": {"action":"UserController#store", "method":"post"},
  "/delete/:userId": {"action":"UserController#delete", "method":"delete"}

}