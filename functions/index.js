const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key 

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY)

exports.sendWelcomeEmail = functions.auth
     .user()
     .onCreate(user => {
                    console.log("Sending email to " + user.displayName + " at " + user.email)

                    const msg = {
                         to: user.email,
                         from: 'Jinsu@housingcoop.net',
             
                         // custom templates
                         templateId: 'd-4dad557f3d7040e7934161b3de1681df',
                         substitutionWrappers: ['{{', '}}'],

                         //TODO: Need to find a way to pass user's name into mail template
                         
                         // substitutions: {
                         //   name: toString(user.first_name)
                         //   // and other custom properties here
                         // }
                     };

                    return sgMail.send(msg)

               })
