export default interface SkillsTR {
   title: string;
   keywords: string;
   skills: {
      sectionTitle: string;
      subtitle1: string;
      subtitle2: string;
      paragraph1: string;
      paragraph2: string;
      keywords1: string;
      keywords2: string;
      skillsPagination: {
         mainSkills: {
            name: string;
            description: string;
         };
         secondarySkills: {
            name: string;
            description: string;
         };
         inProgressSkills: {
            name: string;
            description: string;
         };
      };
   };
   strengths: {
      sectionTitle: string;
      subtitle1: string;
      paragraph1: string;
      keywords1: string;
      subtitle2: string;
      paragraph2: string;
      keywords2: string;
      strengthScreens: {
         cpu: {
            title: string;
            text: string;
         };
         learningSpeed: {
            title: string;
            text: string;
         };
         eyes: {
            title: string;
            text: string;
         };
         clock: {
            title: string;
            text: string;
         };
         wandReveal: {
            title: string;
            text: string;
         };
         portalCube: {
            title1: string;
            text1: string;
            message1: string;
            title2: string;
            text2: string;
            message2: string;
         };
      };
   };
}
