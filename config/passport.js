const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'password',
    database: 'mysql'
});


passport.use(new LocalStrategy(
    function(username, password, done) {
        // query your database to find the user
        connection.query('SELECT * FROM users WHERE username = ?', [username], function (err, results, fields) {
            if (err) { 
                done(err); 
            }
            if (results.length === 0) {
                done(null, false);
            }
            else {
                const user = results[0];
                if (password === user.password) {
                    done(null, user);
                }
                else {
                    done(null, false);
                }
            }
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    connection.query('SELECT * FROM users WHERE id = ?', [id], function (err, results, fields) {
        done(err, results[0]);
    });
});