# SportParadis - Sport club management platform

## Description of the functionalities

This repo is designed to hold a full stack web application for management of sport clubs. The application will start in Belgrade, Serbia, but is intended to expand to rest of Serbia and possibly to another countries as well.

The application is going to be designed to support sports facilities of various sports (football baloons, basketball, padel, tennis, etc), and management of appointments there.

A user of the application can search for upcoming appointments of the sports they want to play. A user can sign in with google ONLY but will not be granted access to their profile unless verified with a phone number. Good overview of the functionalities can be understood by the currently built frontend by the vendor we hired.

 A user can see a nice front page of upcoming tournaments or appointments with missing players and sign up. A user can have a track record with ratings of usage of the platform (e.g. is the user trusted? did the user miss any appointments they scheduled?). Payment is not done on this platform.
 
 A user can also be an owner of one or more sports facilities (which we (owners of the app who have access to the DB) can grant in the DB), where the user will be in charge of EVERYTHING - it can see the phone number and the schedule, it can decline or reschedule appointments, it can manage recurring appointments, etc.
 
 A format of the appointment can be very much of a free form (idk, karting can be 20 minutes, but padel can be 2h, it all varies). Working hours can also be free form per day of the week with some overrides which the admin can set. Admin should probably receive some notifications (perhaps on the phone) when a reservation happens.

 ## Prioritization of the functionalities + backlog

 Currently, there's pretty much no functionalities here, but we have to start somewhere! :)

- [ ] I want the AI to write another readme on dev usage, which commands to run to run everything locally.
- [ ] Migrate frontend to TS
- [ ] Implement different UI languages (we have english, we should also have Serbian as main and Russian)
- [ ] This is a very big task and it requires lots of iteration but I need a database design
- [ ] After all the above is handled, I want to have a very simple everything running on Hetzner. This is also a big task, but I want the user to log in and see its data. I want the whole experience when deployed to work.
- [ ] After this is done, I want the pipelines and security to be rock solid so CI is covered.


 ## Bare metal

 The application is a react JS app bundled with vite (we have a backlog goal to convert it to TS). The backend is a node js web app. We also have a single postgresql db. All of that is managed through nginx. The repo is hosted on github.

 We want to setup the github pipelines so they deploy to Hetzner, currently we just ssh and copy paste stuff there automatically. This is a low priority task but should be done eventually. We have asingle hetzner VM where we can run the backend, and also we have the (however its called) external volume where we want to host the DB. We dont have a solution for telemetry, traffic tracking, etc. Security is paramount, otherwise we wouldn't have a DB. The backend should handle everything about who can write where. The backend is currently empty.

 We implemented docker and init-dev and init-prod SQL scripts, but they're pretty empty because we havent designed the database yet. That's probably the task number one really. Any suggestion you have for any of the configurations and decisions, please do ask. 

 ## Agreements with the AI

 Please don't make lots of code changes at once, let's go very basically step by step. The app is very early so I have lots to catch up with. 