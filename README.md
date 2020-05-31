[![Netlify Status](https://api.netlify.com/api/v1/badges/b1d75549-8cf3-411b-9f7c-8db5f97f0aed/deploy-status)](https://app.netlify.com/sites/brave-kirch-3db040/deploys)
# [TecConnect](https://tecconnect.tech/)
Submission code for RookieHacks

TecConnect is a unique PWA that allows for schools to easily connect to each other and transfer devices from the ones who have them to ones who don’t. Due to the COVID crisis, low-income students don't have access to devices, and as a result, are falling behind in their education. However, there are many schools with surpluses of devices, and currently, they are being wasted. 

Thus, we developed TecConnect to allow schools to request devices from schools who have excess devices. We developed an application specifically for schools and the state government. We plan to implement our software as part of a statewide plan to promote device sharing in all schools. 

Our software consists of two key algorithms and a APIs. We developed a pairing algorithm that uses data stored in the MongoDB Atlas database, such as device count, type, and school locations, to optimally pair schools for device sharing. This algorithm incorporates Radar.io to do distance calculations and pair schools. Once this is complete, the second algorithm uses similar data stored in MongoDB to generate a recommended plan of actions for the schools. 


