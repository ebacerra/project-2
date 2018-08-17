// Firebase & User Authentication Initialization
var database = firebase.database();

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
});

window.onGoogleYoloLoad = (googleyolo) => {
    // The 'googleyolo' object is ready for use.
};

ui.start('#firebaseui-auth-container', {
    signInOptions: [{
            // Google provider must be enabled in Firebase Console to support one-tap
            // sign-up.
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // Required to enable this provider in one-tap sign-up.
            authMethod: 'https://accounts.google.com',
            // Required to enable ID token credentials for this provider.
            // This can be obtained from the Credentials page of the Google APIs
            // console.
            clientId: 'xxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Required to enable one-tap sign-up credential helper.
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
});
// Auto sign-in for returning users is enabled by default except when prompt is
// not 'none' in the Google provider custom parameters. To manually disable:
ui.disableAutoSignIn();

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider);
// End Firebase Initialization