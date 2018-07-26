# FirebaseWebTemplate

> This is a personal website template running on Vue, Bootstrap and Firebase, you can either easily deploy your website by following the guide below or you can modify the template any way you want

## Configuration

- Connect to your firebase
  - Go to main.js and look for `firebase.initializeApp` and enter your firebase credentials
- Now set up your database based on Database Setup section

## Database Setup

- Collection: contents
  - Document: owner
    - Fields:
      - header: string (Header for the website)
      - name: string (Your name)
      - bio: string (Basic information about you, shows up below your name)
      - contact: array (Ways to contact your)
        - object
          - link: string (for example: `mailto:john@mail.com`)
          - icon: string (vue-awesome icon id)
          - name: string (name of the contact method)
      - cv: array (Contains links to your cv)
        - object
          - link: string (link to download or view the cv)
          - icon: string (vue-awesome icon id)
          - name: string (name for the link)
      - image: string (link to your logo or your photo)
      - social: array (Your social media contacts)
        - object
          - link: string (link to your social media page)
          - icon: string (vue-awesome icon id)
          - name: string (name for the link i. e. `facebook`)
- Collection: projects (Contains your projects, each document acts as a project)
  - Example project setup:
    - name: string (Name of your project)
    - description: string (Some info about the project)
    - graphic: string (link to a cover graphic of the project, optional, prefferably 1920x1080)
    - stores: array (links to stores or websites so the visitors can go take a look at the project)
      - object
        - link: string (link to the store)
        - icon: string (vue-awesome icon id)
        - name: string (name of the store i. e. `Website` or `App Store`)

## Build Setup

Standard webpack setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Icons

If you need more info on how the icons work please visit the [vue-awesome](https://github.com/Justineo/vue-awesome) project.
