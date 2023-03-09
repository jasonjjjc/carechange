# Team CareChange Presents

[![Logo-With-Text.png](https://i.postimg.cc/V6gZw7Cw/Logo-With-Text.png)](https://postimg.cc/FdfVgVpC)

<h3 align="center">CareNA - The building blocks of care</h3>


---

<p align="center"> 
CareNA is the fully comprehensive way to quickly and easily assess and communicate any person's mental health and social care needs. 
<br>
The interface is designed to be so simple that anyone from the age of 10 onwards could perform a comperehensive combined mental health and social care needs assessment. 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea](#idea)
- [Solution] (#solution)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Tech Stack](#tech_stack)
- [Lessons Learned](#lessons_learned)
- [Documentation](#documentation)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

In the industry this process takes approximately one hour to complete and is never 100% thorough or consistent because the professional has to use their heuristics (mental shortcuts) to decide what questions are appropriate. If you are old, you get more questions about mobility, if you are young you get more questions about sexual health, so neither approach is comprehensive. The reason for this is that it takes too long and is too tiring to ask every single possible question of every single patient. Worse still, if you did ask every question possible then writing a report about that interaction would take all day. So I set about seeing if there was a shortcut to get around this problem... 

CareChange is a personal project I have been thinking through and planning for years, but never had the skill to complete. Now that I have completed the bootcamp and have a few projects completed, I am able to concentrate on building it. I figured that the solution must somehow make it fast enough and easy enough that every question could be asked at the clinical interaction. Like what if the patient/carer could complete a pre-consultation survey that monitors how things are going then the clinician could scan through it at the encounter. Most of the responses will be right most of the time, but some of the responses will be wrong most of the time; the clinician only needs to focus on the errors and not panic about covering themselves by asking all of the other questions. Two other issues arise in this: capacity and accountability. 

Capacity

Most clinical assesment tools are complex and are designed to be completed by trained professionals. They were designed in a world without widespread access to tech skills that make it possible to customise an assessment according to the needs of the patient; instead it was reliant upon the exprerience and competence of the clinician to complete the forms accurately and throgoughly enough to mitigate risks to the patient and avoid the potential for litigation due to neglect. With a full stack javascript app it is possible to create questions that appear and disappear with a click of a button, customising the assessment according to what the patients wants there and then and there is zero training required to decide which buttons to press. Social media, for example, has made it possible for teenagers to run entire businesses from their phone and all the thinking is done by the app. In the same way, technology could be leveraged to make it possible for people with limited knowledge, limited capacity, or accessibility issues to be competent and confident caregivers.

Accountability

Accountability issues abound when technology is designed for use in healthcare. This is usually because usually the technology aims to substitute clinician decision-making. Even with machine learning making technological solutions that are proven to be vastly superior to human operators (ie. self-driving cars vs human drivers ) people are anxious to hand over responsibility or accountability to computers. If a nurse or doctor fails in their duty, they are liable for harm they cause to a patient and are insured for that purpose. Likewise, the trust they work for is immunised against litigation by having taken reasonable measures to ensure their staff member's qualifications, ongoing professional development and support. If technology fails, the argument goes, who is to blame? The technology company won't accept responsibility because they will deny that the software was at fault. The healthcare company won't accept responsibility for a technology that they do not understand. So the technology does not get implemented and people are still using 20th century tech 23 years into the 21st century. 

The only way a software can avoid this issue is by being a "decision assistant tool" entirely transparent in a manner that a healthcare professional has full understanding of what is happening in the software they are using and can monitor the outputs of the technology to ensure that any errors are caught before harm is done. In other words, there needs to be a direct connection between the inputs given by a user and the outputs generated by the technology in such a way that it would be instantly obvious to the user that something has gone wrong with the technology. 


## 💡 Idea <a name = "idea"></a>

The idea came from, of all things, cookie notices!

Why Cookie Notices?

Cookie notices are required by law to inform the public about how cookie data is collected and handled by a website. People click yes or no to cookies policy notices every day of their lives. This small piece of code is on nearly every single website most of us will ever encounter. It is part of the common language among anyone who has ever been on the internet. While people debate whether a hamburger menu icon is commonly understood, the same debate cannot be had regarding cookie policy notices because much of the time they prevent the actual use of a website until the user has confirmed their permissions for cookie use. People must know how to interact with a cookie notice to use the internet. Put simply, no response to a cookie notice, no internet.

How is that useful to healthcare?

Tax returns, NHS 111 online and even the settings page on a smartphone are like quizzes; they have a series of multiple choice questions and toggles the user can select. They are all, in essence, variations on a quiz with conditions built in to their algorithms to ensure that follow-up questions are relevant to the user based on previous responses. The user does not need to know which question to answer next, because the quiz only shows them questions relevant to the user. Users don't need to type anything so they don't need to think about what to type. Professionals working with the users' responses do not need to transcribe the responses because responses are written in the same format for each person. All the professional/hardware needs to know is the conclusion- what do they need to do. And for management, data and performance analysis becomes a lot easier. 

So you want to make a quiz app for healthcare?

Well, yes!! Imagine if there was an app that used conditional logic to show ALL the relevant but very simple multiple choice questions that could possibly be asked in a clinical encounter and then output a simple description of what the clinician really cares about - "How can I help?" It would take a fraction of the time to complete the assessment, and reports and summaries would be instantaneous.

Even more excitingly, it would produce a dataset for each patient that would be completely uniform between healthcare professionals. This dataset would be the foundation of a common language with which departments could communicate between one another in a way that huge, complex and bloated software packages with many varieties of data type never could. This would reduce, if not eliminate entirely, the need for multiple teams duplicating data in a format that works for them, because they could copy the entire dataset in all inter-departmental communications using a single button. Likewise, the recipient could, if they wanted, run a custom filter on the entire dataset that only gave them the data they wanted. In one button they could query the dataset to say: "What do I need to do for this person? <button>Tell me</button>"

Additionally, a large loss of time and resources in the NHS is staff turnover. Whenever a staff member moves between teams and Trusts, they need to onboard to a new complex software package. Using a simple quiz design, whatever team a professional joined, they would be instantly at home using the data and the quiz because it would be the same across the NHS, and all they would need to do is click a single button to select the filter to display the data they need. 

Finally, there are two self-imposed constraints that I have placed on the project:

1. No confidential information handled

It is a safe assumption to make that no NHS team will touch software made by me, unless I make it abundantly clear from the outset that absolutely no personally identifiable information will be handled or storeed by the app. Patient confidentiality is a huge point of sensitivity for senior executives in the NHS and it is for this reason that entire training courses are devoted to the safeguarding of patient data. In order to bypass these concerns from the outset, the brand of the app will be devoted to the message that NO identity information will be handled by the app. And neither will it be necessary. As with any company providing clinical assessment templates, (or to use a tech reference, UI components) the user gets the value from the efficiency gains provided by the software. Names, relationships, dates and contact details are only added later once the template has been copied into their existing medical record systems where strong security measures have been implemented to prevent data leaks.


2. No login or authentication required. 

Another assumption that is safe to make is that NHS staff already have a lot of passwords and usernames to deal with. As someone who is a huge fan of minimal UI, when I perform a search online I will always prefer the website that does not require me to log in to access the value within the site. MDN, YouTube, Wikipedia and IMDb are good examples of implementations of this principle where the majority of users can get all the value they need without ever signing up or paying. For these sites, login is not justified in the vast majority of cases. Whenever a site is esssentially a repository that provides small components of information like data, images or templates they do not require a user to login because the time to login takes as long as getting the information required. Figma, Notion, Trello and LeetCode, for example, all require login. They require authentication to match users with work they have completed. The value comes from being able to spend hours building projects while progress is auto-saved to prevent data loss if the internet connection drops or the work was not completed within a single session. If I can make the UI simple enough that an average visit to the site takes as much time as an average visit to YouTube then I will have accomplished the goal and be justified in omitting login functionality. If a site visit is quick, easy and successful, the user will be more likely to come back and one day pay for the premium features. Additionally, I do not have the means to maintain a customer service department to handle account enquiries or issues with login details and resets. I need it to just work.


## 💡 Solution <a name = "solution"></a>

Number of pages


Static/Dynamic

This will be a static site. Nothing about the page will change depending on the user viewing it. 

Front-End

UX

The prospective users for this app will be front-line clinical staff, patients and carers. I imagined this app to be something that loads so fast that all these users would feel like the software came downloaded on their phones. To that end, I considered making it a PWA with 100% SSR to bring loads times as close to zero as possible for great UX. I also wanted limited graphics. If this is a work tool then users (especially clinicians) will be accessing the site multiple times per shift/ many times a day, so the key metric will be the least number of clicks/presses possible and fastest load times possible, including internet-limited places like remote residences with poor internet. Images would simply create more clicks and scrolls for users when they just want to get home at the end of the working day.

A search online for the best SSR framework revealed that NextJS has excellent SSR intelligence to ensure that as little work as possible is left for CSR. There is also a huge trend towards Next since 2020 - which a solid community for support if I need to expand the app in the future. Finally, as for Server, I have been tempted into trying Azure by people working in healthcare who say it works great, has substantial software packages for every use-case I could have in the future (ie. analytics) and plenty of jobs are available for it. Being a static site offsets any concerns about latency benefits I might get from AWS having more data centres across the globe. They both have CDN for getting fast access to content, enhanced security for eliminating unwanted DDoS attacks. Limitations of Azure are that it lacks Geography-based routing, letting you restrict content to specific geographic locations, Latency-based routing, the ability to direct traffic according to latency levels measured by the DNS services, and DNSSEC signing, providing validation that a DNS response came from Amazon Route 53 and hasn’t been tampered with. None of these features should be a blocker to the app for the foreseeable future. At large scale, they both offer load balancing to automatically distribute traffic across multiple VM instances to improve the performance, fault tolerance, and availability of the application. Storage is not a factor in the decision because even long into the future I do not anticipate any large file types such as images or video being used on the app. Encryption is not a factor right now because no personal information will be collected, however in the future if this were required to offer a full package of software then this is available with Azure and again there is already established precedent of Azure being used for healthcare services in the UK, attesting to its quality over alternatives. Finally, regarding cost, across general purpose and memory-optimized instance types, AWS is 20% cheaper than Azure. The price gap widens for compute-optimized instance types, with AWS being 35% cheaper than its Azure equivalent. Overall though, both compute and storage loads will forever be extremely low for this app so cost was not a significant consideration. 


UI

Whenever you search for a broadband speed test, Ookla (https://www.speedtest.net/) always comes near the top of the search list. I like Ookla. Every time I visit I know instantly what I am doing - clicking the giant <button>OK</button> button to test my internet. One click and done. It's simple, beautiful and a joy to use. Others work, but Ookla is the one I always use. I aim to create the same joy and simplicity in this app. 



If possible, it would be great to make this a one page app, with the entire page rendered server-side by Next. reduce page load times if internet speed is not very fast.



What about the back-end? 


## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- We are using a free tier of Firebase for authentication and storage, this means that we are limited to 1GB of storage and 1000 users which may result in the app being slow to load and/or not being able to store all of the users data.
- As the app isn't mandatory for landlords and tenants to use, we are limited to the number of users we can get to sign up.
  As both parties need to use the app together in order to reap the benefits we will have to push the app to both parties with strong marketing and advertising.
- We will be holding users key documentation and user data so GDPR compliance must be adhered to. This will require keeping on top of any law chances and updating our app accordingly.
- Authorisation and security is paramount. We will also be using Firebase's email verification to ensure that only verified users can access the app.
- We are using a free tier of Netlify for hosting, this means that we are limited to 100GB of bandwidth per month and 300 build minutes per month. This may result in the app being slow to load and/or not being able to store all of the users data.
  To combat this we'll be expanding our hosting to a paid tier once we have more users.

## 🚀 Future Scope <a name = "future_scope"></a>

We didn't have time to implement secure document storage, as a result we scaled back our mvp to focus on the job board, ticket generation with a custom chat interface for said tickets, whilst having our user roles set we are in the process of finalising our database so that specific landlords can connect with specific tenants via linked IDs .

In the future we are confident that we can implement the above document storage as well as a host of other features ie: payment monitor, a tools and guides page to help tenants maintain the property themselves, the option to download transcripts and templates for things like inventories, checkout and tenancy agreements.

## 🏁 Visit Our Website <a name = "vist_our_website"></a>

You can sign up to our app by visiting <a href="www.letchat.co.uk">LetChat</a>

## 🎈 Usage <a name="usage"></a>

When you first visit the site you can sign up with an email address this must be valid as you will receive a conformation email.

For security reasons we designed the app to be protected until verification is complete.
Once verified you will be able to login with email and password.

You will them be redirected to our job board where you interact with the app.
Once again for security reasons, if your forget to logout your account will be logged out on page close.

## ⛏️ Tech Stack <a name = "tech_stack"></a>

- [PostgreSQL](https://www.postgresql.org) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NextJs](https://nextjs.org/) - Web Framework
- [Typescript](https://www.typescriptlang.org) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Taliwind](https://tailwindcss.com) - CSS
- [Sass](https://sass-lang.com/) - CSS
- [Firebase](https://firebase.google.com/) - Auth
- [Jest](https://jestjs.io) - Testing
- [Cypress](https://www.cypress.io) - Testing

You can view the frontend and backend repo here:

- https://github.com/SchoolOfCode/bc13_final-project_front-end-git-gud

- https://github.com/SchoolOfCode/bc13_final-project_back-end-git-gud

## 🏫 Lessons Learned <a name = "lessons_learned"></a>

- We learned Next.js and how much more we like it than vanilla React. Used Next's built-in router as well as the Context API.
- TailwindCSS and daisyUI for fast prototyping and further visual styling.
- Using Firebase for auth and role-based user permissions. Adding security with email link validation.
- Using mock data until as late as possible so the data-model has time to develop and therefore there's less time needs to be spent coding the backend.
- Good planning in general goes a long way and then the code basically writes itself.
- After a couple of weeks we realised our team structure in the way we were working together and that splitting into pairs made us much more productive.
- Colour blindness and other general accessibility concerns.
- The importance of market research.
- More on Postgres data types.
- Understating about the architecture of a full-stack app starting with a the visual aspect.
- We learned to compromise on UI for the sake of UX for a better user workflow.
- Different approaches in designing a component tree.
- If in doubt - 'npm i'
- Restart your server after adding .env
- Deploying a custom domain on Netlify.
- Unit testing with Next.
- How to use images in Next.
- Cross-page rendering.
- How to work with unfamiliar coding practices.
- Dynamic routing in Next.
- Different pairs work better together in different situations.
- Awaiting promises properly in TypeScript and lots more TS in general.
- How to pass Regex patterns in Next.

## 📃 Documentation <a name = "documentation"></a>

- [Our Team Manifesto](./letchat/Documentation/TEAMMANIFESTO.md)
- [Code Style Guide](./letchat/Documentation/CODESTYLEGUIDE.md)
- [Branching Strategy](./letchat/Documentation/BRANCHING.md)
- [Making Pull Requests](./letchat/Documentation/PULLREQUESTS.md)
- [Colour Pallet](./letchat/Documentation/COLOURPALLET.md)

## ✍️ Authors <a name = "authors"></a>

- https://github.com/Lakorthus - Julio Velezmoro
- https://github.com/Bazelden - Jack Waller
- https://github.com/emiliawil - Emilia Williamson
- https://github.com/cowtipping - Adie Nunn
- https://github.com/jasonjjjc - Jason Chalangary
- https://github.com/ashdashlee - Ash-Lee McKenna

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

We would like to thank the school of code for making this all possible!

- https://www.schoolofcode.co.uk - https://github.com/SchoolOfCode
