[![Shepherd](https://img.shields.io/badge/Shepherd-JS-EFF2F3?labelColor=16202D&style=for-the-badge&link=https://shepherdjs.dev/)](https://shepherdjs.dev/)
[![Quine.sh](https://img.shields.io/badge/Quine.sh-131633?style=for-the-badge&link=https://quine.sh/)](https://quine.sh/)

# [CodeMonkey.js](https://codemonkey-js.vercel.app) 🐒 
![GitHub repo size](https://img.shields.io/github/repo-size/RohittCodes/codemonkeyserver.js?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/RohittCodes/codemonkeyserver.js?style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/RohittCodes/codemonkeyserver.js?style=for-the-badge)

CodeMonkey.js is a place to learn and practice coding with AI integrated code editor featuring [Shepherd.js](https://shepherdjs.dev/) for guided tours. The platform is designed to help users learn coding in a fun and interactive way.

The repository uses the [CodeMonkey Backend](https://github.com/RohittCodes/codemonkeyserver.js) for the backend server. The frontend is built using Next.js and the code editor is powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/) with the help of [@Monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react) package.

It uses [Google's Gemini](https://gemini.google.com/app) for the AI integration in the code editor.

## Table of Contents 📑

- [CodeMonkey.js 🐒](#codemonkeyjs-)
  - [Table of Contents 📑](#table-of-contents-)
  - [Demo 🚀](#demo-)
  - [Features 🎉](#features-)
  - [Tech Stack 🛠️](#tech-stack-️)
  - [Installation and Setup Instructions 📚](#installation-and-setup-instructions-)
  - [Contributing 🤝](#contributing-)
  - [Collaborators 🤖](#collaborators-)

## Demo 🚀

https://github.com/RohittCodes/codemonkey.js/assets/104308198/1d6ee484-dff2-4e9e-9274-6ed6bce4035d

**Note**: The platform is still under development and some features are not yet implemented, as you can see in the demo. The hosted version may not be available at all times due to the limitations of the free backend hosting service, so you can follow the installation instructions to run the platform locally.

## Features 🎉

- **AI Integrated Code Editor**: The code editor is integrated with Google's Gemini AI to provide code suggestions and help users learn coding. **Editor tools** include:
  - **Code Optimization**: The AI helps users optimize their code by providing suggestions to improve the code.
  - **Code Debugging**: The AI helps users debug their code by providing suggestions to fix errors.
  - **Code Help**: The AI provides help to users by suggesting how the problem can be solved. But it does not provide the solution directly.
- **Guided Tours**: The platform uses Shepherd.js to provide guided tours to help users learn coding in an interactive way.
- **Problem Sets**: Users can solve problem sets to practice coding and improve their skills.
- **CodeChimp**: CodeChimp is an AI assistant that helps users solve problems and provides hints and solutions.
- **StudyPlanner**: Work in progress 🚧
- **Roadmap**: Work in progress 🚧
- **InterviewPrep**: Work in progress 🚧

## Tech Stack 🛠️

- **Frontend**: React.js, Next.js, JavaScript, Tailwind CSS, @Monaco-editor/react, Shepherd.js, Shadcn-ui.
- **Authentication**: Clerk.dev.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Google's Gemini.

## Installation and Setup Instructions 📚

1. Clone the repository:

```bash
git clone https://github.com/RohittCodes/codemonkey.js.git
```

2. Change the directory:

```bash
cd codemonkey.js
```

3. Install the dependencies:

```bash
yarn
```

4. Create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={CLERK_PUBLISHABLE_KEY}
CLERK_SECRET_KEY={CLERK_SECRET_KEY}
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NODE_ENV="development"
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Note**: Don't forget to clone the [CodeMonkeyBackend](https://github.com/RohittCodes/codemonkeyserver.js) repository and follow the instructions to set up the backend server provided in the README of the repository.

5. Start the development server:

```bash
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing 🤝

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any ideas or suggestions. You can also reach out to me on [Twitter](https://twitter.com/RohittCodes) if you have any questions or feedback.

## Collaborators 🤖

- [RohittCodes](https://github.com/rohittcodes)