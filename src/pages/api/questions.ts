// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Question = {
  id: number;
  text: string;
  options: {answer: string; sentence: string}[];
  next: { value: string; nextId: number }[];
  sentence1?: string;
  sentence2?: string;
  sentence3?: string;
  sentence4?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>
) {
  res.status(200).json([
    {
      id: 1,
      text: "How were you feeling today?",
      options: [
        {answer: "OK", sentence: "Mental Health - Overall, Pati had a good morning/afternoon/night.", }, 
        {answer: "Not OK", sentence: "Mental Health - Overall, Pati did not have a good morning/afternoon/night.", },
      ],
      next: [
        { value: "OK", nextId: 3 },
        { value: "Not OK", nextId: 2 },
      ],
    },
    {
      id: 2,
      text: "Why was it not ok?",
      options: [
        { answer: "Not feeling well", sentence: "Pati was not feeling well.", },
        { answer: "Another patient upset me", sentence: "Another patient upset Pati.", },
        { answer: "A member of staff upset me", sentence: "A member of staff upset Pati.", },
        { answer: "A friend/member of family upset me", sentence: "Because of friends/family.", },    
      ],
      next: [
        { value: "Not feeling well", nextId: 3 },
        { value: "Another patient upset me", nextId: 3 },
        { value: "A member of staff upset me", nextId: 3},
        { value: "Someone in my family upset me", nextId: 3},
      ],
    },
    {
      id: 3,
      text: "Did you participate in a group activity?",
      options: [
        {answer: "Yes", sentence: "Pati participated in", },
        {answer: "No", sentence: "Pati did not participate in group activities because", },
        {answer: "There were no group activities", sentence: "There were no group activities.", },
      ],
      next: [
        { value: "Yes", nextId: 4 },
        { value: "No", nextId: 5 },
        { value: "There were no group activities", nextId: 6 },
      ],
    },
    {
      id: 4,
      text: "What activity did you participate in?",
      options: [
        { answer: "Art", sentence: "art group.", },
        { answer: "Newspapers", sentence: "newspaper group.", },
        { answer: "Gardening", sentence: "gardening.", },
        { answer: "Bingo", sentence: "bingo.", },
      ],
      next: [
        { value: "Art", nextId: 6 },
        { value: "Newspapers", nextId: 6 },
        { value: "Gardening", nextId: 6 },
        { value: "Bingo", nextId: 6 },
      ],
    },
    {
      id: 5,
      text: "Why did you not participate in group activities?",
      options: [
        { answer: "Busy with family", sentence: "they had visitors.", },
        { answer: "Too tired", sentence: "they were too tired.", },
        { answer: "Not interested", sentence: "they were not interested.", },
      ],
      next: [
        { value: "Busy with family", nextId: 6 },
        { value: "Too tired", nextId: 6 },
        { value: "Not interested", nextId: 6 },
      ],
    },
    {
      id: 6,
      text: "Did you have any visitors?",
      options: [
        { answer: "Yes", sentence: "They were visited by", }, 
        { answer: "No", sentence: "They did not have visitors.", },
      ],
      next: [
        { value: "Yes", nextId: 7 },
        { value: "No", nextId: 8 },
      ],
    },
    {
      id: 7,
      text: "Who visited you?",
      options: [
        { answer: "Family", sentence: "family.", },
        { answer: "Friends", sentence: "friends.", },
        { answer: "Both", sentence: "friends and family.", },
      ],
      next: [
        { value: "Family", nextId: 11 },
        { value: "Friends", nextId: 11 },
        { value: "Both", nextId: 11 },
      ],
    },
    {
      id: 8,
      text: "Would you like to see someone?",
      options: [
        { answer: "Family/Friend", sentence: "They would like a family member or friend to visit,", },
        { answer: "Social worker", sentence: "They would like the social worker to visit,", },
        { answer: "Doctor", sentence: "They would like a doctor to see them,", },
        { answer: "No", sentence: "They don't want a visit.", },
      ],
      next: [
        { value: "Family/Friend", nextId: 9 },
        { value: "Social worker", nextId: 9 },
        { value: "Doctor", nextId: 9 },
        { value: "No", nextId: 11 },
      ],
    },
    {
      id: 9,
      text: "Who is the best person to arrange the visit?",
      options: [
        { answer: "Staff", sentence: "and asked staff to facilitate this.", },
        { answer: "You", sentence: "and said they would arrange it themselves.", },
      ],
      next: [
        { value: "Staff", nextId: 10 },
        { value: "You", nextId: 10 },
      ],
    },
    {
      id: 10,
      text: "Has this now been arranged?",
      options: [
        { answer: "Yes", sentence: "Arranged for ...................... .", }, 
        { answer: "No", sentence: "Not yet arranged.", },
      ],
      next: [
        { value: "Yes", nextId: 11 },
        { value: "No", nextId: 11 },
      ],
    },
    {
      id: 11,
      text: "Were you due to take medication?",
      options: [
        { answer: "Yes", sentence: "Pati was due to take medication,", }, 
        { answer: "No", sentence: "Pati was not due any medication.", },
      ],
      next: [
        { value: "Yes", nextId: 12 },
        { value: "No", nextId: 14 },
      ],
    },
    {
      id: 12,
      text: "Did you take your medication?",
      options: [
        { answer: "Yes", sentence: "and had all of it.",  },
        { answer: "Some of it", sentence: "but only had some of it because", },
        { answer: "No", sentence: "but had none of it because", },
      ],
      next: [
        { value: "Yes", nextId: 14 },
        { value: "Some of it", nextId: 13 },
        { value: "No", nextId: 13 },
      ],
    },
    {
      id: 13,
      text: "Why didn't you take all of your medication?",
      options: [
        { answer: "Asleep", sentence: "they were asleep.", },
        { answer: "Not feeling well", sentence: "they were not feeling well.", },
        { answer: "Didn't want a particular medication", sentence: "they didn't want to take ................... .", },
      ],
      next: [
        { value: "Asleep", nextId: 14 },
        { value: "Not feeling well", nextId: 14 },
        { value: "Didn't want a particular medication", nextId: 14 },
      ],
    },
    {
      id: 14,
      text: "Would you like to change anything about your medication?",
      options: [
        { answer: "Yes", sentence:  "They would like to review the medication ................... .", },
        { answer: "No", sentence: "Reported no concerns with medication.", },
      ],
      next: [
        { value: "Yes", nextId: 15 },
        { value: "No", nextId: 15 },
      ],
    },
    {
      id: 15,
      text: "Did you eat ok?",
      options: [
        { answer: "Yes", sentence : "Physical Health - Pati ate ok.", },
        { answer: "No", sentence: "Physical Health - Pati did not eat ok as they", },
      ],
      next: [
        { value: "Yes", nextId: 17 },
        { value: "No", nextId: 16 },
      ],
    },
    {
      id: 16,
      text: "Why did you not eat ok?",
      options: [
        { answer: "Not hungry", sentence: "weren't hungry.", },
        { answer: "Not feeling well", sentence: "weren't feeling up to it.", },
        { answer: "Didn't like the food", sentence: "didn't like the food.", },
      ],
      next: [
        { value: "Not hungry", nextId: 17 },
        { value: "Not feeling well", nextId: 17 },
        { value: "Didn't like the food", nextId: 17 },
      ],
    },
    {
      id: 17,
      text: "Did you sleep ok?",
      options: [
        { answer: "Yes", sentence: "Pati slept ok.", },
        { answer: "No", sentence: "Pati did not sleep ok due to", },
        { answer: "Not applicable", sentence: "", },
      ],
      next: [
        { value: "Yes", nextId: 20 },
        { value: "No", nextId: 18 },
        { value: "Not applicable", nextId: 20},
      ],
    },
    {
      id: 18,
      text : "Why not?",
      options: [
        { answer: "Not feeling well", sentence: "not feeling well.", },
        { answer: "Not tired", sentence: "not being tired.", },
        { answer: "Other", sentence: "............................... .", },
      ],
      next: [
        { value: "Not feeling well", nextId: 20 },
        { value: "Not tired", nextId: 20 },
        { value: "Other", nextId: 20 },
      ],
    },
    {
      id: 20,
      text: "Do you have any pain?",
      options: [
        { answer: "Yes", sentence: "Pati reported", },
        { answer: "No", sentence: "Pati denied any pain.", },
      ],
      next: [
        { value: "Yes", nextId: 21 },
        { value: "No", nextId: 24 },
      ],
    },
    {
      id: 21,
      text: "Is it a new pain?" ,
      options: [
        { answer: "Yes", sentence: "a new", },
        { answer: "No", sentence: "an ongoing", },
      ],
      next: [
        { value: "Yes", nextId: 22 },
        { value: "No", nextId: 22 },
      ],
    },
    {
      id: 22,
      text: "Where is the pain?",
      options: [
        { answer: "Head", sentence: "headache;", },
        { answer: "Stomach", sentence: "stomach ache;", },
        { answer: "Back", sentence: "back pain;", },
        { answer: "Other", sentence: "pain in ....................;", },
      ], 
      next: [
        { value: "Head", nextId: 23 },
        { value: "Stomach", nextId: 23 },
        { value: "Back", nextId: 23 },
        { value: "Other", nextId: 23 },
      ],
    },
    {
      id: 23,
      text: "Did you ask for pain relief?",
      options: [
        { answer: "Yes, it helped", sentence: "pain relief helped.", },
        { answer: "Yes, it didn't help", sentence: "pain relief didn't help.", },
        { answer: "No", sentence: "didn't ask for pain relief.", },
      ],
      next: [
        { value: "Yes, it helped", nextId: 24},
        { value: "Yes, it didn't help", nextId: 24},
        { value: "No", nextId: 24},
      ],
    },
    {
      id: 24,
      text: "What significant risks are in your care plan?",
      options: [
        { answer: "Self-neglect", sentence: "Management - Pati is at significant risk of self-neglect.", },
        { answer: "Suicide", sentence: "Management - Pati is at significant risk of suicide.", },
        { answer: "Falls", sentence: "Management - Pati is at significant risk of falls.", },
        { answer: "Harm to others", sentence: "Management - Pati is at significant risk of harm to others.", },
        { answer: "Other", sentence: "Management - Pati is at significant risk of ...................................... .", },
      ],
      next: [
        { value: "Self-neglect", nextId: 25 },
        { value: "Suicide", nextId: 25 },
        { value: "Falls", nextId: 25 },
        { value: "Harm to others", nextId: 25 },
        { value: "Other", nextId: 25 },
      ],
    },
    {
      id: 25,
      text: "What observation level are you on?",
      options: [
        { answer: "Hourly", sentence: "Once hourly observations.", },
        { answer: "Four times an hour", sentence: "Four times an hour observations.", },
        { answer: "Six times an hour", sentence: "Six times an hour observations.", },
        { answer: "Eyesight", sentence: "Eyesight observations. Leave inappropriate at present due to elevated risks.", },
        { answer: "Arms-length", sentence: "Arms-length observations. Leave inappropriate at present due to elevated risks.", },
        { answer: "Other", sentence: "............................... observations. Leave inappropriate at present due to elevated risks.", },
      ],
      next: [
        { value: "Hourly", nextId: 26 },
        { value: "Four times an hour", nextId: 26 },
        { value: "Six times an hour", nextId: 26 },
        { value: "Eyesight", nextId: 0 },
        { value: "Arms-length", nextId: 0 },
        { value: "Other", nextId: 0 },
      ],
    },
    { 
      id: 26,
      text: "Are you an informal or detained patient?",
      options: [
        { answer: "Informal", sentence:  "Currently an informal patient.", },
        { answer: "Section 2", sentence: "Currently under Section 2 MHA.", },
        { answer: "Section 3", sentence: "Currently under Section 3 MHA.", },
        { answer: "DOLS", sentence: "Currently under DOLS order.", },
      ],
      next: [
        { value: "Informal", nextId: 29 },
        { value: "Section 2", nextId: 27 },
        { value: "Section 3", nextId: 27 },
        { value: "DOLS", nextId: 0 },
      ],
    },
    {
      id: 27,
      text: "Do you have section 17 leave prescribed?",
      options: [
        { answer: "Yes", sentence: "Has ......................... section 17 leave prescribed.", },
        { answer: "No", sentence: "No section 17 leave prescribed.", },
      ],
      next: [
        { value: "Yes, section 17 leave prescribed", nextId: 29 },
        { value: "No", nextId: 28 },
      ],
    },
    {
      id: 28,
      text: "Would you like some leave?",
      options: [
        { answer: "Yes", sentence: "Would like some leave.", }, 
        { answer: "No", sentence: "Declined to have leave prescribed.", },
      ],
      next: [
        { value: "Yes", nextId: 0 },
        { value: "No", nextId: 0 },
      ],
    },
    {
      id: 29, 
      text: "Did you go out on leave?",
      options: [
        { answer: "Yes", sentence: "Went out on leave.", },
        { answer: "No",  sentence: "Did not go out on leave.", },
      ],
      next: [
        { value: "Yes", nextId: 30},
        { value: "No", nextId: 0},
      ],
    },
    {
      id: 30,
      text: "Did you return from leave as planned?",
      options: [
        { answer: "Yes", sentence: "Returned to the ward as planned.", }, 
        { answer: "No", sentence: "Pati is not back from leave. Staff on the next shift, please ........................ .", },
      ],
      next: [
        { value: "Yes", nextId: 31 },
        { value: "No", nextId: 0 },
      ],
    },
    {
      id: 31,
      text: "Did leave go well?",
      options: [
        { answer: "Yes", sentence: "Leave went well.", },
        { answer: "No", sentence: "Leave did not go well because they", },
      ],
      next: [
        { value: "Yes", nextId: 0 },
        { value: "No", nextId: 32 },
      ],
    },
    {
      id: 32,
      text: "What happened?",
      options: [
        { answer: "Felt low", sentence: "felt low.", },
        { answer: "Felt anxious", sentence: "felt anxious.", },
        { answer: "Felt agitated", sentence: "felt agitated.", },
        { answer: "Felt depressed", sentence: "felt depressed.", },
        { answer: "Other", sentence: "Pati felt ........................................ .", },
      ],
      next: [
        { value: "Felt low", nextId: 0 },
        { value: "Felt anxious", nextId: 0 },
        { value: "Felt agitated", nextId: 0 },
        { value: "Felt depressed", nextId: 0 },
        { value: "Other", nextId: 0 },
      ],
    },
  ])
}
