# task-Scheduling-project

- This Project is a Dispatcher/ Driver Task Scheduling App. The idea is that a single dispatcher should be able to manage the tasks of multiple drivers.

![Initial page](https://github.com/cfpcarla/task-Scheduling-project/blob/master/my-app/src/images/initial_page.jpg)

![Add New Task](https://github.com/cfpcarla/task-Scheduling-project/blob/master/my-app/src/images/add_task.jpg)

![Task](https://github.com/cfpcarla/task-Scheduling-project/blob/master/my-app/src/images/task.jpg)

## Technologies

Project is created with:

- React with materialUI and alasq.

### How to run the App

```
1. Inside folder my-app put in the terminal npm install.
2. If is necessary put in the terminal npm install @material-ui/core.
3. Run the server: npm start.
4. Visit `http://localhost:3000/`.
```

### Improvements

- There is some repetition of code in the project. For example, in the modal, there is some grouped select that are repeated.
- Add more validations such as for the Location field. The user can currently put any information in the location text field. Ideally, the location would be validated by using an integration with the google maps API, for example.

### Challenges

- I spent a lot of time trying to solve the part of making the task appear on the screen at the correct startTime and end time.

  The only conclusion that I was able to reach at that time was to treat the tasks as tasks of only 1 hour.

  I understand that what I did was not what was requested, with a little more time I can make it appear for all hours. I opted to have this done instead of having nothing working.

- As I spent a lot of time trying to make the task appear, I didn't have time to implement the delete and update button on the screen and also download the schedule. Also, the validations are still incomplete.

  I had a great learning experience with this project and I believe that with a little more time I would finish and I already appreciate the opportunity to be part of this project. Thank you!
