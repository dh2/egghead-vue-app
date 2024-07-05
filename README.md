#Egghead.io Create Vue3 app with MongoDB and GraphQL
This seemed like the next step based on the other tutorials I have done. Hoping to get a good tutorial on linking GraphQL to MongoDB.

This stack is something I'm considering for an actual project (thought I'm not married to Vue yet) so I'm looking forward to seeing all the pieces align.

# Videos 1-4 Setup
Getting the different tech stacks set up for the frontend and backend for the application.

- **Video 1 MongoDB** 
  - I had to install MongoDB locally to begin with since it wasn't on my local machine.  Worked out well because I'd been meaning to resolve that dependency for future projects/learning.
- **Video 2 Vue3 and Vite** 
  - First time using Vite to build a project.  I like the flexibility out of the box to do several types of development.  
  - Getting the app up and running was quick and easy
- **Video 3 Setting up Apollo Client with Vue3** 
  - stumbled a bit here as the tutorial had the import from `apollo/client` but quick google search on the error said to import from `apollo/client/core` instead and I was in business
- **Video 4 comparing component composition options** 
  - Setup Script vs OptionsAPI
  - Much prefer the Setup Script, very clean code

# Video 5-6: Composables
- **Video 5 Creation** 
  - Vue3 encapsulated logic with composables
  - Made very understandable by relating to React hooks
- **Video 6 GraphQL Composable** 
  - implementing the community graphql composable and making it available to the entire app
  - provide == React.Context

# Video 7-8: Building a Data-driven component
- **Video 7** 
  - Using GraphQL and connected mongoDB to display a list of data for available crafts.  Did a bit of styling to clean it up as well
- **Video 8 **
  - Breaking out the line item into its own comonent and doing some styling

 ## Screen Shots

 ### Craft Page
![image](https://github.com/dh2/egghead-vue-app/assets/25743/572f4564-6f6e-49a1-aa06-43a20fb336a4)

# Video 9-12 Vue Routing
- **Video 9**
  - Creating simple routes
- **Video 10**
  -Dynamic route and getting the id off the route
- **Video 11**
  - Doing more with the template literal to display what was passed in
- **Video 12**
  - Running a graphQL query using the id passed in via the router
  - I was able to get about 90% of the way to the end of this without having to watch the tutorial
    - Did not figure out the `useRouter` part made an assumption about `$router` that was incorrect
    - Didn't set up the GraphQL query correctly to receive the param (forgot that from the building GraphQL queries tutorial from earlier this week)
  - Built my own inital table to display data.  Looks like I'll need to update it before doing video 13.  Practiced with `v-if` to show owner data if available, otherwise showed purchasing information
 
  ## Screen Shots
  ### Craft w/o Owner
  ![image](https://github.com/dh2/egghead-vue-app/assets/25743/85ce90d7-4d6c-421e-8b81-82e74234a6f6)

  ### Craft w/ Owner
  ![image](https://github.com/dh2/egghead-vue-app/assets/25743/c2b2520b-8b8b-4983-8c5b-1cd8ea2517a1)



# Video 13-15 Creating Modal Form for updates
- **Video 13**
  - Creating barebones form component
- **Video 14**
  - Creating actual form, also adding in some buttons and defining/passing actions close action back up to the CraftView
- **Video 15**
  - Updating the form to use `v-modal` instead of hard coding it
