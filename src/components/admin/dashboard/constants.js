export const skillA = [
  {
    "id": 1,
    "name": "Other"
  },
  {
    "id": 2,
    "name": "UI/UX Design"
  },
  {
    "id": 3,
    "name": "Front end development"
  },
  {
    "id": 4,
    "name": "Back end development"
  },
  {
    "id": 5,
    "name": "QA testing"
  },
  {
    "id": 6,
    "name": "Data Science"
  },
  {
    "id": 7,
    "name": "DevOps"
  },
  {
    "id": 8,
    "name": "Mobile application development"
  },
  {
    "id": 9,
    "name": "Technical Product Management - SCRUM MASTER"
  }
]

export const knowledgeA = [
  {
    "id": 1,
    "name": "Yes"
  },
  {
    "id": 2,
    "name": "No"
  },
  {
    "id": 3,
    "name": "Still learning"
  }
]

export const educationA = [ "SSCE", "OND", "HND", "BSC", "MSC"]

export const genderA = [
  {
    "id": 1,
    "name": "Male"
  },
  {
    "id": 2,
    "name": "Female"
  },
  {
    "id": 3,
    "name": "Other"
  },
  {
    "id": 4,
    "name": "Trans"
  }
]


export const stateData = ["Lagos", "Abuja", "Rivers", "Oyo", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Plateau", "Sokoto", "Taraba", "Yobe", "Zamfara"]

export const educationData = ["SSCE", "OND", "HND", "BSC", "MSC"]

export const skillData = [["Frontend", "Front end development"], ["UI/UX", "UI/UX"], ["Backend", "Back end development"], ["DevOps", "DevOps"], ["QA Testing", "QA testing"], ["Data Science", "Data Science"], ["Mobile Development", "Mobile application development"], ["Product Manager", "Technical Product Management - SCRUM MASTER"], ["Others", "Others"]]

export const skillEdit = ["Frontend Development" , "UI/UX", "Backend Development", "DevOps", "QA Testing", "Data Science", "Mobile Application Development", "Technical Product Manager SCRUM Master", "Others"]


export const learningEdit = ['Yes', 'No', 'Still Learning']

export const getText = (val, arr) => arr[+val - 1]?.name;