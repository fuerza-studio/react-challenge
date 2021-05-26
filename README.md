<p>
<img width="300" alt="Fuerza Studio" src="https://user-images.githubusercontent.com/52936031/117340242-11ecb980-ae77-11eb-86f6-e41d26aa3fbc.png">
</p>

## Overview

To complete this assessment, you will need to write a simple [React](https://facebook.github.io/react/) web app, using the code from this repo as starter.

The purpose of this assessment is to assess your **skills and approach to composing a simple web app** given an API feed. We will also assess the **generated HTML, CSS, and JS** output.

This assessment is expected to take about 3-5 hours.

## What to do?

Your goal is to implement a simple React application, where users will be able to create journals.

Although its a very basic exercise, we will be looking for simple, well-designed, well-commented and clear code in the submission.

## How should the application work?

The user of this react application should be able to create an account, login and create a journal and on the journal create notes.

1. Create an account
2. Login.
3. Create Journal.
4. Create notes.
5. List Journals.
6. Click on a Journal.
7. List notes.
8. List the note content.


## Layout
[Figma Link](https://www.figma.com/file/xFIfu4rDvvxZUpwZUIh2EM/Teste?node-id=0%3A1)

## API Usage

API can be launched using npm start. You will need to run npm install once you starting working on the project to install dependencies.

| Endpoint             | Result                      |
| -------------------- | --------------------------- |
| /auth/login          | Login                       |
| /auth/signup         | Sign up                     |
| /journals/entries/:id | List all journals from user |

---

## API

- post => '/auth/login', user.login'
- post => '/auth/signup', user.signup'

- get => '/journals/entries/:id', journal.getEntries'
- get => '/journals/:id', journal.getJournal'

- post => '/journals/', journal.create' _title : String_
- post => '/journals/entry/:id', journal.addEntry' _{content,title} : Object_

- put => '/journals/entry/:id', journal.updateEntry' _{content,title} : Object_
- put => '/journals/:id', journal.updateJournal' _title : String_
