[![Netlify Status](https://api.netlify.com/api/v1/badges/b1d75549-8cf3-411b-9f7c-8db5f97f0aed/deploy-status)](https://app.netlify.com/sites/brave-kirch-3db040/deploys)
# [TecConnect](https://tecconnect.tech/)

**1st Place Grand Prize Winner @ AI4ALL CreAItivity Challenge 2020**

**Sponser Prize Winner @ RookieHacks2020**

Demo: https://youtu.be/eep9ySXg_vA

Executive Summary: https://drive.google.com/open?id=1YfTJ62Jyqvhz7gQOhnRn55-TWZL59RQJpBskmdQ0BCw

Proposal: https://drive.google.com/open?id=1Ee47YBi950PiapqS32xQgjRajwDxdv41Z-_5aRPkN6Y

Devpost: https://devpost.com/software/tecconnect

[CreAItivity Winner Page](https://teamcreaitivity.wixsite.com/creaitivity/2020-covid-19-challenge-results)

TecConnect is a unique PWA that allows impoverished and wealthy schools to easily connect and transfer devices from those who have them to ones who don’t. Due to the COVID crisis, low-income students don't have access to devices, and as a result, are falling behind in their education. However, there are many schools with surpluses of devices, and currently, they are being wasted. 

Thus, we developed TecConnect to allow schools to request devices from schools who have excess devices. We developed an application specifically for schools and the state government. We plan to implement our software as part of a statewide plan to promote device sharing in all schools. 

After navigating to the website, schools are prompted to fill out a quick survey that records their basic information on how many devies they can donate or how many they need and forwards it to our database. After filling out this report, through the use of Google Maps, supported by Google Cloud, the school is put on a map which shows other schools also using the service. 

Our software consists of two key algorithms and a APIs. We developed a pairing algorithm that uses data stored in the MongoDB Atlas database, such as device count, type, and school locations, to optimally pair schools for device sharing. This algorithm incorporates Radar.io to do distance calculations and pair schools. Once this is complete, the second algorithm uses similar data stored in MongoDB to generate a recommended plan of actions for the schools. 

![](https://github.com/ayaanzhaque/TecConnect/blob/master/assets/img/creAItivityPhoto.jpg?raw=true)
