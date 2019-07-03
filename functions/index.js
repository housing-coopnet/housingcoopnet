const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key 

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY)

exports.firestoreEmail = functions.firestore
     .document('userData/{userId}')
     .onCreate(event => {

          const userId = event.id;

          const db = admin.firestore()

          return db.collection('userData').doc(userId)
               .get()
               .then(doc => {
               
                    const user = doc.data()
                    
                    console.log("Sending email to " + user.first_name + " at " + user.email)

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
          
               .then(() => console.log('email sent!'))
               .catch(err => console.log(err))
          
     });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
