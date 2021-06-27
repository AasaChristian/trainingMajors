import calling from './img/phone.jpg'
import emailing from './img/mail.jpg'
import IGing from './img/insta.jpg'


export const data = {
  articles: [
    {
      title: "Your Personal Plan",
      body: "Everyone's fitness journey is different. Training Majors creates a plan for you, based on your own specific goals. ",
    },
    {
      title: "Your Personal Time",
      body: "Starting your fitness journey can be daunting. Training Majors will take the time to help you build a solid foundation first, then encrease the intensity in a safe and productive manner. ",
    },
    {
      title: "Your Personal Trainer",
      body: "Personal Training is more than just grinding reps in the gym. Training Majors offer guidence on your diet, recovery and general wellness.",
    },
  ],

  contacts: [
    {
      title: "InstaGram",
      ref: `https://instagram.com/training_majors_city?utm_medium=copy_link`,
      body: "training_majors_city",
      imgIcon: IGing
    },
    {
      title: "Email",
      ref: "mailto:tm89citypersonaltraining@yahoo.com",
      body: "tm89citypersonaltraining@yahoo.com",
      imgIcon: emailing
    },

    {
      title: "Phone",
      ref: "tel:+1-804-664-0306",
      body: "804-664-0306",
      imgIcon: calling
    },
  ]
};
