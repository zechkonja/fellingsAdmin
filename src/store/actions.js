import firebase from 'firebase';

export default {
  VERIFY_USER(context, user) {
    const leadsRef = firebase.database().ref();
    const timestamp = (new Date()).getTime();
    leadsRef.once('value', (snapshot) => {
      if (snapshot.child(`/users/${user.uid}`).exists()) {
        leadsRef.child(`/users/${user.uid}`).update({
          lastLogin: timestamp,
        });
      } else {
        firebase.database().ref(`users/${user.uid}`).set({
          email: user.email,
          emailVerified: user.emailVerified,
          fullName: user.displayName,
          isAdmin: 'false',
          isPsy: 'true',
          isSuper: 'false',
          lastLogin: timestamp,
          uid: user.uid,
          imageUrl: user.photoURL,
        });
      }
    });
    context.dispatch('GIVE_PERMISSION');
  },

  VERIFY_USER_EMAIL_PASS(context, user) {
    const leadsRef = firebase.database().ref();
    const timestamp = (new Date()).getTime();
    leadsRef.once('value', (snapshot) => {
      if (snapshot.child(`/users/${user.uid}`).exists()) {
        leadsRef.child(`/users/${user.uid}`).update({
          lastLogin: timestamp,
        });
      } else {
        firebase.database().ref(`users/${user.uid}`).set({
          email: user.email,
          emailVerified: user.emailVerified,
          fullName: user.displayName,
          isAdmin: 'false',
          isPsy: 'true',
          isSuper: 'false',
          lastLogin: timestamp,
          uid: user.uid,
          imageUrl: '',
        });
      }
    });
    context.dispatch('GIVE_PERMISSION');
  },

  GIVE_PERMISSION(context) {
    const leadsRef = firebase.database().ref(`users/${this.state.userId}`);
    leadsRef.on('value', (snapshot) => {
      const user = snapshot.val();
      context.commit('GET_PROFILE', user);
    });
  },

};
