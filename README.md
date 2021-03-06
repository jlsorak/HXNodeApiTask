# Holiday Extras Web Development API Task

My implementation of a technical task Holiday Extras requires their new recruits to complete. The task involves creating an API to manage a user persistence layer.

[Read full description here](https://github.com/holidayextras/culture/blob/master/recruitment/developer-API-task.md).

## Setup
- Clone repository: `git clone git@github.com:jlsorak/HXNodeApiTask.git`
- Install correct version of node for the repository `nvm use`
- Install repository `npm i`
- Start server `npm start`

You will now be able to start sending requests to the api. 

## Sending requests
Send requests using a HTTP client, I used [Postman](https://www.getpostman.com/).

#### POST (Create)
- (Create record) `/users` <br/> Request body: `forename, surname, email`
#### GET (Read)
- (Read all records) `/users` <br/> Optional query string: (any of) `?forename=&surname=&email=`
- (Read record by `id`) `/users/:id` 
#### PUT (Update)
- (Update record by `id`) `/users/:id` <br/> Required params: `forename, surname, email`
#### DELETE (Delete)
- (Delete record by `id`) `/users/:id`
