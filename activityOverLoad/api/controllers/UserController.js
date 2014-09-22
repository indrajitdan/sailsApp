/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    'new' : function(req, res){
        res.view();
    },

    create: function(req, res, next) {

        User.create(req.params.all(), function userCreated(err, user) {

            // // If there's an error
            // if (err) return next(err);

            if (err) {
                return next(err);
                }

            res.json(user);

        });
    }
};

