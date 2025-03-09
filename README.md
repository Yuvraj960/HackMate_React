# HackMate React App

This is the frontend of the HackMate project. It is a React app that is used to display the HackMate project.

## How to run the project

### JSON Server Version

To run the project, follow the steps below:

1. After cloning the repository, navigate to the project directory.
2. Run the following command to install the dependencies:

```bash
npm install
```
(NOTE: This step is necessary to install the dependencies required to run the project, as while every commit the node_modules folder is deleted)

3. Run the following command to start the json server:

```bash
json-server src/data.json --port 3000
```
(NOTE: This step is necessary to start the json server, as the project uses the json server to fetch the data served online on port 3000. If it runs on a different port, you must change the port number in the home.jsx file)

4. Run the following command to start the project:

```bash
npm run dev
```
The project will start running on `http://localhost:5173` (by default). You can see your port number in the terminal after running the above command.

### Without JSON Server Version

To run the project, follow the steps below:

1. After cloning the repository, navigate to the project directory.
2. Run the following command to install the dependencies:

```bash
npm install
```
3. Run the following command to start the project:

```bash
npm run dev
```
