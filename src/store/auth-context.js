import React from 'react';
import AppConstants from 'src/constants/app-constants';

const AuthContext = React.createContext({
  goToFaceBook,
  goToGithub,
  goToLinkedIn,
  goToAndroid,
  goToAndroidApp,
  goToContactForm,
  goToJ2EEProject,
  goToExpensifyApp,
  goToNodeChatApp,
  goToNodeToDoAPI,
  goToRecipeIngredient,
  goToTwitter,
  goToSparkStreaming,
  goToLyricsApp,
  goToTableau,
  facebookLink: AppConstants.get("FACEBOOK_LINK"),
  githubLink: AppConstants.get("GITHUB_LINK"),
  // githubLink: AppConstants.get("GITHUB_LINK")
  linkeinLink: AppConstants.get("LINKEDIN_LINK"),
  twitterLink: AppConstants.get("TWITTER_LINK")
});

function goToGithub() {
  window.open("https://github.com/SalmanMujtaba", "_blank");
}

function goToTwitter() {
  window.open("https://twitter.com/salman17931", "_blank");
}

function goToLinkedIn() {
  window.open("https://www.linkedin.com/in/salman-mujtaba/", "_blank");
}

function goToFaceBook() {
  window.open("https://www.facebook.com/salman.mujtaba.98", "_blank");
}

function goToExpensifyApp() {
  window.open(
    "https://github.com/SalmanMujtaba/React-Expensify-App",
    "_blank"
  );
}

function goToAndroid() {
  window.open("https://github.com/SalmanMujtaba/Android", "_blank");
}

function goToJ2EEProject() {
  window.open("https://github.com/SalmanMujtaba/J2EE-project", "_blank");
}

function goToNodeChatApp() {
  window.open("https://github.com/SalmanMujtaba/Node-Chat-App", "_blank");
}

function goToNodeToDoAPI() {
  window.open("https://github.com/SalmanMujtaba/Node-Todo-API", "_blank");
}

function goToSparkStreaming() {
  window.open(
    "https://github.com/nitin2407/SparkStreaming-JobTweetsAnalysis",
    "_blank"
  );
}

function goToLyricsApp() {
  window.open("https://github.com/SalmanMujtaba/React-Lyrics-App", "_blank");
}

function goToAndroidApp() {
  window.open(
    "https://github.com/SalmanMujtaba/Android/tree/master/FinalTerm",
    "_blank"
  );
}

function goToRecipeIngredient() {
  window.open(
    "https://github.com/SalmanMujtaba/Recipe-Single-Page-App",
    "_blank"
  );
}

function goToContactForm() {
  window.open("https://github.com/SalmanMujtaba/Angular-Email-App", "_blank");
}

function goToTableau() {
  window.open("https://github.com/SalmanMujtaba/Tableau-Dashboard", "_blank");
}

export const AuthContextProvider = () => {
  return (
    <AuthContext.Provider
      value={{
        goToFaceBook,
        goToGithub,
        goToLinkedIn,
        goToAndroid,
        goToAndroidApp,
        goToContactForm,
        goToJ2EEProject,
        goToExpensifyApp,
        goToNodeChatApp,
        goToNodeToDoAPI,
        goToRecipeIngredient,
        goToTwitter,
        goToSparkStreaming,
        goToLyricsApp,
        goToTableau,
        facebookLink: AppConstants.get("FACEBOOK_LINK"),
        githubLink: AppConstants.get("GITHUB_LINK"),
        linkeinLink: AppConstants.get("LINKEDIN_LINK"),
        twitterLink: AppConstants.get("TWITTER_LINK")
      }}
    >
    </AuthContext.Provider>
  );
};

export default AuthContext;